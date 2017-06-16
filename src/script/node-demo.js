// nodejs 练习

const EventEmitter = require('events');

console.log('---------- node ----------');

let myEvent = new EventEmitter();
myEvent.on('one', () => {
	console.log('emitter...');
});
myEvent.on('one', () => {
	console.log('hello...');
});
myEvent.emit('one');

console.log('---------- node ----------');































