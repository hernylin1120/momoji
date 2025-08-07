export default function handler(request) {
  try {
    const userAgent = request.headers.get('user-agent') || '';
    const url = new URL(request.url);
    
    console.log('User-Agent:', userAgent);
    console.log('Request URL:', url.toString());
    
    // Detect iOS devices
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      console.log('Redirecting iOS device to App Store');
      return new Response(null, {
        status: 302,
        headers: {
          'Location': 'https://apps.apple.com/us/app/candy-crush-saga/id553834731',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });
    }
    
    // Detect Android devices
    if (/Android/.test(userAgent)) {
      console.log('Redirecting Android device to Play Store');
      return new Response(null, {
        status: 302,
        headers: {
          'Location': 'https://play.google.com/store/apps/details?id=com.king.candycrushsaga',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });
    }
    
    // Default to web version for desktop/other devices
    console.log('Redirecting desktop/other device to web version');
    return new Response(null, {
      status: 302,
      headers: {
        'Location': 'https://editor.talecrafter.ai/',
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
        'Location': 'https://editor.talecrafter.ai/',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  }
}
