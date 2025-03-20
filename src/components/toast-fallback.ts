// Define a specific interface for toast options
interface ToastOptions {
  duration?: number;
  position?: string;
  id?: string;
  // Add other potential options here
}

// Simple fallback for toast notifications if sonner isn't working
export const toast = {
  success: (message: string, options?: ToastOptions) => {
    console.log('Success:', message);
    // Only show alert in browser, not during SSR
    if (typeof window !== 'undefined') {
      alert('Success: ' + message);
    }
  },
  error: (message: string, options?: ToastOptions) => {
    console.error('Error:', message);
    // Only show alert in browser, not during SSR
    if (typeof window !== 'undefined') {
      alert('Error: ' + message);
    }
  },
  info: (message: string, options?: ToastOptions) => {
    console.info('Info:', message);
    // Only show alert in browser, not during SSR
    if (typeof window !== 'undefined') {
      alert('Info: ' + message);
    }
  }
}; 