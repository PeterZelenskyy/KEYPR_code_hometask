var assert = require("assert");
var request = require('request');
describe('#indexOf()', () => {
  it('should return -1 when the value is not present', function () {
    assert.equal(-1, [1, 2, 3].indexOf(5));
    assert.equal(-1, [1, 2, 3].indexOf(0));
  });

  it.only('request the first test', (done) => {
    console.log('error:');
    request('http://www.google.com', function (error, response, body) {
      done();
      console.log('error123');
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    });
  });
});