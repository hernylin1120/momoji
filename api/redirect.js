export default function handler(request) {
  console.log('Redirect function called');
  
  return new Response(null, {
    status: 302,
    headers: {
      'Location': 'https://www.google.com'
    }
  });
}
