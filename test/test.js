const assert = require("assert");
const request = require('request');
const login_url = 'https://' + process.env.LOGIN_GitH + ':' + process.env.TOKEN + '@api.github.com/user';
describe('#indexOf()', () => {
  before('Login to Github', (done) => {
    const options = {
      url: login_url,
      headers: {'User-Agent': 'request'}
    }
    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        let respBody = JSON.parse(body);
        console.log(respBody.login);
        done();
      }
    }
    request(options, callback);
  })



  //
  // it('should return -1 when the value is not present', function () {
  //   assert.equal(-1, [1, 2, 3].indexOf(5));
  //   assert.equal(-1, [1, 2, 3].indexOf(0));
  // });
  //
  // it('request the first test', (done) => {
  //   console.log('error:');
  //   request('http://www.google.com', function (error, response, body) {
  //     done();
  //     console.log('error123');
  //     console.log('error:', error); // Print the error if one occurred
  //     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //     //  console.log('body:', body); // Print the HTML for the Google homepage.
  //   });
  // });
  //
  // it('Environment var testing', () => {
  //   assert.equal(2, process.env.PETYA);
  // })


})
