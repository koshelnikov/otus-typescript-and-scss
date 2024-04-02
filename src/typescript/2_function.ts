type FunctionCustomType = (a: string, b: number) => void;

// error
// const f: FunctionCustomType = (a: number, b: string) => console.log(a, b)
// const f: FunctionCustomType = (a, b) => console.log(a, b)


// Опциональные параметры
// type FuncData = (a: string, b?: number) => void;
// const f: FuncData = (a, b) => console.log(a, b)
// f("1")
