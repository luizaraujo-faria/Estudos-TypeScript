//Tipos Básicos//
let age: number = 5;
const nome: string = "shaolin";
const isBool: boolean = true;
let idk: any = 7;
const array: number[] = [1, 2, 3, 4, 5];

//Tipo Tupla//
const person: [number, string] = [1, '']

//Lista de Tuplas//
const people: [number, string][] = [
    [1, ''],
    [2, '']
]

//Intersections
const productsId: string | number = '1'

//Enums
enum Direction{
    up = 1,
    down = 2
}

const direction = Direction.up

console.log(direction)

//Type Assertions
const productName: any = 'Anél';
let itemId = productName as string;