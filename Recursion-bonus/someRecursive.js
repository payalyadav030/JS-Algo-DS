// array and callback

function someRec(arr, val){
    
    // cb = val => val %2 != 0;
    if(arr.length == 0){
        return false;
    }
    if(arr[0]== val){
        return true;
    }
    return someRec(arr.slice(1), val);

    // console.log(cb)


    
    
}
console.log(someRec([1,2,3,4],7));



///////////////////////////

// function someRecursive(array, callback) {
//     if (array.length === 0) return false;
//     if (callback(array[0])) return true;
//     return someRecursive(array.slice(1),callback);
// }
// console.log(someRecursive([2,3,4,5], 3));

/////////////////////////////////////////
// const someRecursive = (arr, callback) => {
//     if (callback(arr[0])) return true;
//     if (arr.length == 1) return callback(arr[0]);
//     return someRecursive(arr.slice(1), callback);
//   };
//   console.log(someRecursive([2,3,4,6]))


