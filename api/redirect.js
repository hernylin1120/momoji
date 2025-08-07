export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';
  
  // Detect iOS devices
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return res.redirect(302, 'https://apps.apple.com/us/app/candy-crush-saga/id553834731');
  }
  
  // Detect Android devices
  if (/Android/.test(userAgent)) {
    return res.redirect(302, 'https://play.google.com/store/apps/details?id=com.king.candycrushsaga');
  }
  
  // Default to web version for desktop/other devices
  return res.redirect(302, 'https://editor.talecrafter.ai/');
}
