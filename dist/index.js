"use strict";
//Tipos Básicos//
let age = 5;
const nome = "shaolin";
const isBool = true;
let idk = 7;
const array = [1, 2, 3, 4, 5];
//Tipo Tupla//
const person = [1, ''];
//Lista de Tuplas//
const people = [
    [1, ''],
    [2, '']
];
//Intersections
const productsId = '1';
//Enums
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
})(Direction || (Direction = {}));
const direction = Direction.up;
console.log(direction);
//Type Assertions
const productName = 'Anél';
let itemId = productName;
