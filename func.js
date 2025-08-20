const fdk=require('@fnproject/fdk');
const request = require('request');
fdk.handle(function(input, ctx){
	console.log("Call REST");
	request('https://jsonplaceholder.typicode.com/todos/1', function (error, response, body) {
	});
	return {"body": "hello world"};
})
