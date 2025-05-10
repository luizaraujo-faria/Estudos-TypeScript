"use strict";
//Type
const user = {
    firstName: 'Shaolin',
    age: 16,
    email: 'shaolin@matador',
    password: 'shaoshaos',
    order: [{ productId: '1', price: 200 }],
    register() {
        return 'Hello World';
    }
};
const optionalProp = (message) => { };
console.log(optionalProp(user.password));
const author = {
    firstName: 'Matador',
    age: 18,
    email: 'matador@@',
    order: [],
    books: []
};
;
const emailUser = {
    firstName: 'Shaolin',
    email: 'shaolin@'
};
;
const userAuthor = {
    firstName: 'Matador',
    email: 'matador@',
    books: ['A Volta de quem não foi']
};
