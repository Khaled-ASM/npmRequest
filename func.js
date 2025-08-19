const fdk=require('@fnproject/fdk');
const request = require('request');
fdk.handle(function(input, ctx){
  request('https://jsonplaceholder.typicode.com/todos/1', function (error, response, body) {
	  console.error('error:', error); // Print the error if one occurred
	  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	  console.log('body:', body);
	  return {"Auth": body};
});
})
