'use strict'

var Emitter = require('events');
var util = require('util');
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function () {
    console.log("Somewhere someone said hello");
});

emtr.on(eventConfig.GREET, function () {
    console.log("A greeting occured");
});


console.log('Hello');
emtr.emit('greet');

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    greet() {
        return this.firstName + " " + this.lastName;
    }
}

var mark = new Person("Mark", "Doucette");

console.log(mark.greet());

function Human(pAge, pRace) {
    var age = pAge;
    var race = pRace;
    this.getDetails = function () {
        return '' + age + ' year old ' + race;
    }
}

var asian = Object.create(new Human(33, "Asian"));

console.log(asian.getDetails());

function Greetr() {
    this.greeting = "Hi there world!!!";
}

util.inherits(Greetr, Emitter);
Greetr.prototype.greet = function (data) {
    console.log(this.greeting + " : " + data);
    this.emit(eventConfig.GREET, data);
}

var grtr1 = new Greetr();
grtr1.on(eventConfig.GREET, function (data) {
    console.log('Someone greeted via inheritance! It was..' + data);
})
grtr1.greet("Mark");

var sayHelloES6 = `Hello there ${mark.firstName}`;

console.log(sayHelloES6);
