// function that accepts array and a value and check that value exist in the array or not

function checkValue(arr, val){
    // console.log(arr, val)

    for(var i=0; i<arr.length; i++){
    //    console.log(arr[i])
       if(arr[i] == val){
           return i;
       }
      
    }
    return -1;
}
console.log(checkValue([2,4,7,8,6,9,5], 3))