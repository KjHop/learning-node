const events = require('events');
const util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

let james = new Person("James");
let mery = new Person("Mery");
let ryu = new Person("Ryu");
let people = [james, mery, ryu];

people.forEach(person =>{
    person.on('speak', msg =>{
        console.log(person.name + " said: " + msg);
    });
});

james.emit('speak', 'hey dudes');