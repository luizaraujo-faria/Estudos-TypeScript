//Type

type Order = {
    productId: string;
    price: number;
};

type User = {
    firstName: string;
    age: number;
    email: string;
    password?: string; //Propriedade opicional
    order: Order[];
    register(): string;
};

const user: User = {
    firstName: 'Shaolin',
    age: 16,
    email: 'shaolin@matador',
    password: 'shaoshaos',
    order: [{productId: '1', price: 200}],
    register() {
        return 'Hello World';
    }
};

const optionalProp = (message?: string) => {};
console.log(optionalProp(user.password));

//Unions

type Author = {
    books: string[];
};

const author: Author & User = {
    firstName: 'Matador',
    age: 18,
    email: 'matador@@',
    order: [],
    books: []
};

//Interfaces

interface userInterface {
    firstName: string;
    readonly email: string; //READONLY torna propriedade apenas para leitura
};

const emailUser: userInterface = {
    firstName: 'Shaolin',
    email: 'shaolin@'
};

interface authorInterface{
    books: string[],
};

const userAuthor: userInterface & authorInterface = {
    firstName: 'Matador',
    email: 'matador@',
    books: ['A Volta de quem não foi']
};