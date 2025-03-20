const { createClient } = require('@supabase/supabase-js');
const fetch = require('node-fetch');

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Get IP address from different possible headers
function getClientIp(headers) {
  return headers['client-ip'] || 
    headers['x-forwarded-for'] || 
    headers['x-real-ip'] ||
    headers['true-client-ip'] ||
    'unknown';
}

// Get geolocation from IP
async function getLocationFromIp(ip) {
  if (!ip || ip === 'unknown' || ip.includes('127.0.0.1') || ip.includes('localhost')) {
    return null;
  }
  
  try {
    // Use free IP geolocation API
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await response.json();
    
    // If we got an error response, return null
    if (data.error) {
      console.log('IP geolocation error:', data.reason);
      return null;
    }
    
    return {
      country: data.country_name,
      country_code: data.country_code,
      region: data.region,
      city: data.city,
      latitude: data.latitude,
      longitude: data.longitude
    };
  } catch (error) {
    console.error('Error getting location from IP:', error.message);
    return null;
  }
}

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

    // Get IP address
    const ipAddress = getClientIp(event.headers);
    
    // Get location data from IP
    const locationData = await getLocationFromIp(ipAddress);

    // Create form submission record
    const formData = {
      name,
      email,
      phone: phone || null,
      website: website || null,
      company: company || null,
      form_type: formType || 'generic',
      industry: industry || null,
      country_code: countryCode || (locationData ? locationData.country_code : null),
      created_at: submittedAt || new Date().toISOString(),
      form_data: otherFields, // Store all other fields as JSON
      ip_address: ipAddress,
      location_data: locationData, // Store the full location data
      user_agent: event.headers['user-agent'] || null
    };

    console.log('Submitting form data to Supabase:', formData);

    // Insert data into Supabase
    const { data: result, error } = await supabase
      .from('form_submissions')
      .insert([formData]);
    
    if (error) {
      console.error('Supabase insert error:', error);
      throw error;
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully',
        location: locationData
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