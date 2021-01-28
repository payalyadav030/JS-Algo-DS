// Pure recursion:
// last eg: lecture 48 with pure recursion, no helper method:

function odd(arr){
    var result = []
    if(arr.length == 0){
        return result;
    }
    if(arr[0] %2 != 0){
        result.push(arr[0])
    }

    console.log(odd(arr.slice(1)))
    result = result.concat(odd(arr.slice(1)));
    return result;

}
console.log(odd([1,2,3,4,5,6]))