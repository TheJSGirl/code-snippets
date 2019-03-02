const emitter = {
    events:{},
    on: function(type, fn) {
        if(this.events[type] === undefined) {
            this.events[type] = [];
        }
        this.events[type].push(fn);
    },
    emit: function(type) {
        if(this.events[type] === undefined) {
            return;
        }
        this.events[type].forEach(function(el) {
            if (typeof el === 'function') {
                el();
            }
        });
    }
};

const fn = () => 2;

emitter.on('add', fn);
emitter.on('add', () => 3);
emitter.on('add', 4);
emitter.on('add', { name: 'test'});


emitter.emit('add');



/**
 * 
console.log(emitter.events);
console.log(fn);

const obj = {
    name: "pri",
    age: 20
};

console.log(obj.name);
console.log(obj['name']);

// create a new key in obj dynamically
const x = 'street';
obj[x] = 'noida';

// create a new key in obj dynamically and give dynamic value
const v = 'abc';
obj[y] = v; // ?

console.log(obj);

var y = 'country';
console.log(obj[y]); // ? // trying to read a dynamic key
 */