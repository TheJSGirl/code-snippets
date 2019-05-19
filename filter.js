/**
 * Create custom filter function
 */

 const arr = [1, 2];
const r = arr.filter(e => e);

Array.prototype.myFilterFunc = function (callback) {
    let arr = [];
    for(let i =0; i < array.length; i++){
      let res = callback(this[i], i)
      if(res) {
          arr.push(this[i]);
      }
    }

    return arr;

}

const array = [1, 2, 3];

const filtered = array.myFilterFunc((ele, index) => {
    return ele !==2;
} )

console.log(filtered)

