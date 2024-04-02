type Account = {
    id: number
    login: string
    password: string
    name: string
    email: string
}
type Profile = Omit<Account, 'login' | 'password'>;

const account: Account = {
    id: 1,
    login: 'login',
    password: 'password',
    name: 'name',
    email: 'test@test.com'
}

const profile: Profile = {
    id: 1,
    name: 'name',
    email: 'test@test'
}

type UserInfo = Pick<Account, 'name' | 'email'>

const userInfo: UserInfo = {
    name: 'name',
    email: 'test@test.com'
}

type Shape =
    | { kind: "circle"; radius: number }
    | { kind: "square"; x: number, y: number, width: number, height: number }
    | { kind: "triangle"; x: number; y: number };

type CircleShape = Extract<Shape, { kind: "circle" }>

const circle: CircleShape = {
    kind: 'circle',
    radius: 1,
    // x: 2
}

export {}