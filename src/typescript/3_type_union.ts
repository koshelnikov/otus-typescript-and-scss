// Псевдонимы
// type ElementId = string;

// Пересечения / Intersection
type User = { id:number, name: string }
type Profile = User & { email: string};
const user: User = { id: 1, name: 'user'}
//const user: User = { id: 1, name: 'user', email: 'test@test.com'}
//const profile1: Profile = {...user}
//const profile2: Profile = {name: user.name, id: user.id}

// Объединения / Union
//type Roles = 'admin' | 'support' | 'customer';
//let role: Roles = 'admin';
//role = 'support'
//role = 'customer'


export {}