export const FOO = 'FOO';

export function myObject() {
    return {
        something() {

        }
    };
    // return {
    //     something: function something() {
    //
    //     }
    // };
}

export function foo(values = {}) {
    // var miau = values.miau,
    //     bar = vlues.bar;
    let { miau } = values;

    return [ miau ];
}

export function addBefore(arr = [], value = {}) {
    return [
        value,
        ...arr
    ];
}


export function insertOnIndex(arr = [], value = {}, index = 0) {
    return [
        ...arr.slice(0, index),
        value,
        ...arr.slice(index)
    ];
}

export class Something {
    static foo() {
        return 'Hey Im cool!';
    }
}
