interface User {
    id: number
    name: string
}

class UserImpl implements User {
    id: number;
    name: string;

    constructor() {
        this.id = 1;
        this.name = '2';
    }
}

class UserImplConstructor implements User {
    constructor(public id: number, public name: string) {}
}

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

