//var express = require('express');
import {
    foo,
    FOO,
    addBefore,
    insertOnIndex,
    Something
} from './classes';

var miau = 'miau',
    guau = 'guau';

    // {
    //     miau: miau,
    //     guau: guau
    // }

console.log(
    FOO,
    foo({ miau, guau })
);

console.log(
    addBefore( [{foo: 'bar'}], {miau: ':3'} )
);

console.log('--------');

console.log(
    insertOnIndex([{foo: 'bar'}], {miau: ':3'}, 0)
);

console.log(
    insertOnIndex([{foo: 'bar'}], {miau: ':3'}, 1)
);

console.log(
    insertOnIndex([{foo: 'bar'}], {miau: ':3'}, 2)
);

console.log('-------------');
console.log(Something.foo());
