/**
 * Create a function which will add all the element in an array
 */

 function sumofelement(arr, callback) {
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        sum+= arr[i];

    }
    callback(sum);
 }

 function print(para) {
    console.log(para);
 }


 sumofelement([1, 2, 3], print);