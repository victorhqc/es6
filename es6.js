class Collection {

    constructor(values = {}) {

        Object.keys(values).forEach((key) => {
            this.add(key, values[key]);
        });

    }

    add(key = '', value = '') {
        this[key] = value;
    }

    remove(key) {
        delete this[key];
    }

    get(key) {
        return this[key];
    }

    // this.prototype.forEach = function forEach() {}

    forEach(next) {
        Object.keys(this).forEach(key =>
            next.call(this, key, this[key])
        );

        // function(key) {
        //     return next.call(this, key, this[key]);
        // }.bind(this);
    }
}


var myCollection = new Collection();
myCollection.add('foo', 'bar');

myCollection.forEach(function(key, value) {
    this.remove(key, value);
});

console.log(
    myCollection.foo
);
