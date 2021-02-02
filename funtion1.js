
/*

Link - https://github.com/expressjs/cookie-session/blob/master/index.js
*/


// decode functions takes a string as input
// It is encoding the base64 content into utf8
// then it is converting that in javascript object and return it
function decode (string) {

  var body = Buffer.from(string, 'base64').toString('utf8')
  return JSON.parse(body)
}