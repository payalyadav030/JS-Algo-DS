// Product of an array:

// with recursion:
function product(arr){
    //var result;
    if(arr.length == 0){
        return 1;
    }
    // for(var i=0; i<arr.length; i++){
    //     result = result * arr[i]
    // }
    return arr[0] * product(arr.slice(1))
    

}
console.log(product([1,2,3]));