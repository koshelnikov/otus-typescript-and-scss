const reverse = <T>(array: T[]): T[] => array.reverse();
// const data = reverse([1, 2, 3])
// const data = reverse([1, 2, '3'])
// const data = reverse<number>([1, 2, '3'])
// const data: number[] = reverse([1, 2, '3'])


interface User<T> {
    getId(): T;
}

class UserImpl<T> implements User<T> {
    constructor(private _id: T) {
    }
    getId(): T {
        return this._id;
    }
}

const userWithNumberId = new UserImpl(1)
const id:number = userWithNumberId.getId();

const userWithStringId = new UserImpl('uuid')
const uuid: string = userWithStringId.getId();

const userWithObjectId = new UserImpl({id: 1, key: 'value'})
const objectId: {id: number, key: string} = userWithObjectId.getId();




export {}