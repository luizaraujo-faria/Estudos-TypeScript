//Classes 

class Person{
    readonly id: number;
    protected name: string;
    private age: number;

    constructor(id: number, name: string, age: number){
        this.id = id;
        this.name = name;
        this.age = age;
    };

    sayMyName(): string {
        return this.name;
    };
};

class Employ extends Person{
    constructor(id: number, name: string, age: number){
        super(id, name, age);
    };

    whiAmI(){
        return this.name;
    };
};

const person1 = new Person(1, 'Shaolin', 16);