/**
 * Get an array loop through it
 */

Array.prototype.each = function (callback) {
    let sum=0;
    for(let i = 0; i<this.length; i++) {
        callback(this[i]);

    }
}

function print(ele) {
    console.log(ele)

}


const array = [1, 3, 4];

array.each((ele) => {
    console.log(ele)
} );

