/**
 * Create custom map method 
 * 
 */


Array.prototype.myMap = function (callback) {
    let result = [];
    for(let i=0; i<this.length; i++) {
       result.push(callback(this[i], i, this))
    }
    return result;
}



const array = [1, 2, 3];

const response = array.myMap((e, i, arr) => {
    return ( e*e);

})

console.log(response)
