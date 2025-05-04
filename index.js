//Tipos Básicos//
var age = 5;
var nome = "shaos";
var isBool = true;
var idk = 7;
var array = [1, 2, 3, 4, 5];
//Tipo Tupla//
var person = [1, ''];
//Lista de Tuplas//
var people = [
    [1, ''],
    [2, '']
];
//Intersections
var productsId = '1';
//Enums
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
})(Direction || (Direction = {}));
var direction = Direction.up;
console.log(direction);
