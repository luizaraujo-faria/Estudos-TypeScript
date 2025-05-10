"use strict";
//Classes 
class Person {
    id;
    name;
    age;
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    ;
    sayMyName() {
        return this.name;
    }
    ;
}
;
class Employ extends Person {
    constructor(id, name, age) {
        super(id, name, age);
    }
    ;
    whiAmI() {
        return this.name;
    }
    ;
}
;
const person1 = new Person(1, 'Shaolin', 16);
