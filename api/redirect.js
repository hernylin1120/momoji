export default function handler(request) {
  try {
    const userAgent = request.headers.get('user-agent') || '';
    const url = new URL(request.url);
    
    console.log('=== Redirect Debug Info ===');
    console.log('User-Agent:', userAgent);
    console.log('Request URL:', url.toString());
    console.log('Request method:', request.method);
    
    // Simple redirect for testing - always redirect to a working URL
    const targetUrl = 'https://www.google.com';
    
    console.log('Redirecting to:', targetUrl);
    
    return new Response(null, {
      status: 302,
      headers: {
        'Location': targetUrl,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
    
  } catch (error) {
    console.error('Error in redirect handler:', error);
    // Fallback redirect in case of any errors
    return new Response(null, {
      status: 302,
      headers: {
        'Location': 'https://www.google.com',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  }
}
