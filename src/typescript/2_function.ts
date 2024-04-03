type FunctionCustomType = (a: string, b: number) => void;

// error
//const f1: FunctionCustomType = (a: number, b: string) => console.log(a, b)
// const f2: FunctionCustomType = (a, b) => console.log(a, b)
// f2('1', 2)
// f2(1, '2')


// Опциональные параметры
// type FuncData = (a: string, b?: number) => void;
//const f: FuncData = (a, b) => console.log(a, b)
//f("1")

// function f2 (a: string, b?: number) {}
// f2('1')