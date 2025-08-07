export default function handler(request) {
  try {
    const userAgent = request.headers.get('user-agent') || '';
    
    // Detect iOS devices
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      return Response.redirect('https://apps.apple.com/us/app/candy-crush-saga/id553834731', 302);
    }
    
    // Detect Android devices
    if (/Android/.test(userAgent)) {
      return Response.redirect('https://play.google.com/store/apps/details?id=com.king.candycrushsaga', 302);
    }
    
    // Default to web version for desktop/other devices
    return Response.redirect('https://editor.talecrafter.ai/', 302);
  } catch (error) {
    // Fallback redirect in case of any errors
    return Response.redirect('https://editor.talecrafter.ai/', 302);
  }
}
