interface User {
    id: number
    name: string
}

class UserImpl implements User {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

class UserImplConstructor implements User {
    name: string
    constructor(public id: number, private _name: string) {
        this.name = _name;
    }

    get privateName() {
        return this._name;
    }
}

const user = new UserImpl(1, 'name')
console.log(user.name);
const userConstructor = new UserImplConstructor(1, 'name')
console.log(userConstructor.name);
console.log(userConstructor.privateName);


abstract class AbstractUser implements User {
    constructor(public id: number, public name: string) {}

    getId() {
        return this.id;
    }
    abstract getName(): string
}

class UserImplAbstract extends AbstractUser {
    getName(): string {
        return this.name
    }
}

export {}

