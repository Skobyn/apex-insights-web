// Simple fallback for toast notifications if sonner isn't working
export const toast = {
  success: (message: string, options?: any) => {
    console.log('Success:', message);
    // Only show alert in browser, not during SSR
    if (typeof window !== 'undefined') {
      alert('Success: ' + message);
    }
  },
  error: (message: string, options?: any) => {
    console.error('Error:', message);
    // Only show alert in browser, not during SSR
    if (typeof window !== 'undefined') {
      alert('Error: ' + message);
    }
  },
  info: (message: string, options?: any) => {
    console.info('Info:', message);
    // Only show alert in browser, not during SSR
    if (typeof window !== 'undefined') {
      alert('Info: ' + message);
    }
  }
}; 