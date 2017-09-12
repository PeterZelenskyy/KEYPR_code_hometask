const assert = require("assert");
const request = require('request');
const should = require('chai').should();
const baseUrl = 'https://' + process.env.LOGIN_GitH + ':' + process.env.TOKEN + '@api.github.com';
describe('#indexOf()', () => {
  it('Login to Github', (done) => {
    const options = {
      url: `${baseUrl}/user`, //template literal, just trying to use it the first time =)
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

  it('update pull request and check that title has changed properly', (done) => {
    const options = {
      url: `${baseUrl}/repos/${process.env.LOGIN_GitH}/KEYPR_code_hometask/pulls/1`,
      headers: {'User-Agent': 'request'},
      method: 'PATCH',
      json: true,
      body: {"title": "new title3"}
    }
    function callback(error, response, respBody) {
      if (!error && response.statusCode == 200) {
     //  let respBody = JSON.parse(body);
     //   console.log(respBody);
        respBody.title.should.equal('new title3');
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
