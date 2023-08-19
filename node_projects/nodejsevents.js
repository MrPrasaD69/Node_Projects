const EventEmitter  = require('events');
class MyEmitter extends EventEmitter{}
const myEmitter = new MyEmitter();
myEmitter.on('PetrolFull',()=>{
    console.log('Turn off motor');
    setTimeout(()=>{
        console.log("Reminder for Petrol");
    }, 1000);
});
myEmitter.emit('PetrolFull');
console.log("Code is running"); //this will execute before timeout because setTimeout is non blocking