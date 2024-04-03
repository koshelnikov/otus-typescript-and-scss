// const a: string = null;
const a: string | null = null;
const data = [{id: 1}, {id: 2}]

const item = data.find(item => item.id === 3);
console.log(item?.id)
// tsconfig.json => compilerOptions => "strictNullChecks": true,

const func = (a: string | number): string | void => {
    //return null;
}

class A {
    name: string | null = null;
}

export {}