enum NumberEnum {
    first,
    second,
    third
}

//NumberEnum.first === 0;
//NumberEnum.second === 1;
//NumberEnum.third === 2;
//const a: number = 2;
//if (NumberEnum.first === a) {}


enum StringEnum {
    first = 'first',
    second = 'second',
    third = 'third'
}

//StringEnum.first === 'first'
//StringEnum.second === 'second'
// StringEnum.third === 'third'
// StringEnum.first === 'third'


type StringType = {
    [key in StringEnum]: string
}
const validation: StringType = {
    [StringEnum.first]: 'first value',
    [StringEnum.second]: 'second value',
    [StringEnum.third]: 'third value',
    //name: '1'
}
