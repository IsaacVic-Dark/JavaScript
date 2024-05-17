// 12.
// Write a JavaScript function to parse an URL.

function parseURL(urlString) {
    try {
      var url = new URL(urlString); 
      var parsedURL = {
        protocol: url.protocol,
        host: url.host,
        hostname: url.hostname,
        port: url.port,
        pathname: url.pathname,
        search: url.search,
        hash: url.hash,
        origin: url.origin
      };
      
      return parsedURL;
    } catch (error) {
      console.error('Invalid URL:', error.message);
      return null;
    }
  }
  
  // Test the function with a URL string
  var urlString = 'https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-12.php';
  var parsedURL = parseURL(urlString);
  console.log(parsedURL);
  