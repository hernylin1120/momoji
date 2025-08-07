export default function handler(request) {
  try {
    const userAgent = request.headers.get('user-agent') || '';
    
    // Detect iOS devices
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      return new Response(null, {
        status: 302,
        headers: {
          'Location': 'https://apps.apple.com/us/app/candy-crush-saga/id553834731'
        }
      });
    }
    
    // Detect Android devices
    if (/Android/.test(userAgent)) {
      return new Response(null, {
        status: 302,
        headers: {
          'Location': 'https://play.google.com/store/apps/details?id=com.king.candycrushsaga'
        }
      });
    }
    
    // Default to web version for desktop/other devices
    return new Response(null, {
      status: 302,
      headers: {
        'Location': 'https://editor.talecrafter.ai/'
      }
    });
  } catch (error) {
    // Fallback redirect in case of any errors
    return new Response(null, {
      status: 302,
      headers: {
        'Location': 'https://editor.talecrafter.ai/'
      }
    });
  }
}
