const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // Parse the incoming request body
    const data = JSON.parse(event.body);
    
    // Validate required fields
    const requiredFields = ['name', 'email'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: `Missing required field: ${field}` })
        };
      }
    }

    // Extract common fields
    const {
      name,
      email,
      phone,
      website,
      company,
      industry,
      formType,
      countryCode,
      submittedAt,
      ...otherFields
    } = data;

    // Create form submission record
    const formData = {
      name,
      email,
      phone: phone || null,
      website: website || null,
      company: company || null,
      form_type: formType || 'generic',
      industry: industry || null,
      country_code: countryCode || null,
      created_at: submittedAt || new Date().toISOString(),
      form_data: otherFields, // Store all other fields as JSON
      ip_address: event.headers['client-ip'] || null,
      user_agent: event.headers['user-agent'] || null
    };

    // Insert data into Supabase
    const { data: result, error } = await supabase
      .from('form_submissions')
      .insert([formData]);
    
    if (error) throw error;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully'
      })
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Error submitting form', 
        message: error.message 
      })
    };
  }
}; 