// Primitive
let a = 1;
// a = 2;
// a = 3;
// a = '4'

// const a = 1;
// const b: typeof a = 1;
// const a: number = 1;
// const b: typeof a = 2;

// b: (string | number) []
// const b = ["1", 1]
// const boolVar = false;
// boolVar = 'true'

// Array
// const arr = [1, 2, 3];
// arr.push('1')

// Tuple
// error: [string, number] != (string | number) []
// const c: [string, number] = b;

// error: [string, number] != [number, string]
// const c: [string, number] = [1, "1"];

// success [string, number] == [string, number]
// const c: [string, number] = ["1", 1];

// any
// let some: any = 1
// some = 'hello';
// some = undefined;
// some = { name: 'value' }