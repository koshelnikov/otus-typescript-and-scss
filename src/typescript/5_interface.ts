type UUID_ID = string

interface User {
    id: UUID_ID
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

const user: User = { id: '92323KDfDKFJDSF321321', name: 'user'}
const profile: Profile = {...user, email: 'test@email', age: 38}


//
// Произвольное кол-во свойств
interface Style {
    [key: string]: string | number
}
const style: Style = {
    grid: 'display',
    'some-key': 1
}

style.grid = '1'
style['some-key'] = 1;
style.no = '2'


const style2: Record<string, string | number> = {
    grid: 'display',
    'some-key': 1
}
style2.no = 1