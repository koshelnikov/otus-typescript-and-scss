namespace A {
    export interface Test {
        a: string
    }
}

class AClass implements A.Test {
    a: string = '1'
}