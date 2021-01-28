// Helper method recursion:
// collect odd value from an array:

function odd(arr){
    console.log(arr);

    var result =[];
    function checkOdd(helperArr){
       // var i=0;
        if(helperArr.length == 0){
            return;
        }
    //     for(var i=0; i< helperArr.length; i++){
    //         if(helperArr[i] % 2 != 0){
    //             result.push(helperArr[i])
    //         }
    //     }
        
        if(helperArr[0] % 2 != 0){
            result.push(helperArr[0]);   
        }
        console.log(helperArr.slice(1))
        checkOdd(helperArr.slice(1))

     }
     checkOdd(arr)
     return result;

}
console.log(odd([2,3,5,6,8,9]));