interface MathFunc{
    (x: number, y: number): number;
}

const sum: MathFunc = (x: number, y: number): number => {
    return x + y;
};

const value = sum(5, 4);
console.log(value);

const log = (message: string): void => {
    console.log(message);
};

console.log(log('Hello world'))