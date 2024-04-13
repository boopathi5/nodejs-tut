const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('message', (name, id) => {
    console.log(`data recieved user ${name} with id ${id}`);
    
});
customEmitter.on('message', () => {
    console.log(`data recieved`);

});

customEmitter.emit('message', 'john', 34);