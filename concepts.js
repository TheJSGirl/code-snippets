/**
 * @Object emiiter - it has three object events, on and emit.
 * events is an empty object, on & emit is function
 */

const emitter = {
    events:{},
    /**
     * This function will check if type is prensent in events. 
     * If not then push that type to as events key
     * @param {Object} type - type is key of events 
     * @param {Function} fn - its a function
     */
    on: function(type, fn) {
        if(this.events[type] === undefined) {
            this.events[type] = [];
        }
        this.events[type].push(fn);

    },
    /**
     * 
     * This function will check if event type is equal to undefined then return it.
     * otherwise call each element of this.events[type]
     * @param {Object} type - type is a key of event with some value
     *  
     */
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


// accessing emitter events
emitter.events;
