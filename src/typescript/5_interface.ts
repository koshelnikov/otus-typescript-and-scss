interface User {
    id: number
    name: string
}

// Extend
interface Profile extends User {
    email: string
}

// Add age to Profile interface
interface Profile {
    age: number
}

// const user: User = { id: 1, name: 'user'}
// const profile: Profile = {...user, email: 'test@email'}


//
// Произвольное кол-во свойств
// interface Style {
//     [key: string]: string | number
// }


// const style: Style = {
//     grid: 'display',
//     'some-key': 1
// }


// style.grid = '1'
// style.no = '2'


// const style: Record<string, string | number> = {
//     grid: 'display',
//     'some-key': 1
// }


// style.no = 1


// const person: {id: number, name: string, [key: string]: string | number} = {
//     id: 1,
//     name: '2',
//     email: 'email.com'
// }


// Утилитарные типы / Utility Types


// Omit
// Pick
// Partial


// keyof
interface Person {
    id: number
    name: string
}

type personMembers = keyof Person;


const data: { [key in personMembers]: number | string } = {
    id: 1,
    name: '1',
}
