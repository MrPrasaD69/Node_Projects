// var fs = require("fs");
// var data = fs.readFileSync('document.txt');

// console.log(data.toString());
// console.log("Program Ended"); //Blocking Program, waits for file reading.

// fs.readFile('document.txt', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
//  });
 
//  console.log("Program Ended"); //Non Blocking program, doesn't wait for file reading.

//----------------------------------------------------------------------------------------
// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
  
   // Fire the data_received event 
   eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
 
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {
   console.log('data received succesfully.');
});

// Fire the connection event 
eventEmitter.emit('connection');

console.log("Program Ended.");