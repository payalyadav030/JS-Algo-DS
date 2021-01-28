// accepts arrays of arrays and return them in one array
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

// without recursion:
function flatten(arr){
        console.log(arr);
        var resultedArray = [];
        //console.log(Array.isArray(resultedArray));
        // console.log(Array.isArray(arr[3]))
        if(arr.length == 1){
            return arr;
        }
        for(var i=0; i<arr.length; i++){
            // console.log(arr[i])
            if(!Array.isArray(arr[i])){
                resultedArray.push(arr[i])
            }
            if(Array.isArray(arr[i])){
                // console.log("ok")
            //  console.log(arr[i])
            for(var j=0; j< arr[i].length; j++){
                //console.log(arr[i][j]);
                resultedArray.push(arr[i][j])
            }
            }
        }
        return resultedArray;



}
 console.log(flatten([1, 2, 3, [4, 5] ]));





/////////////////////with recursion:
function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
          if(Array.isArray(oldArr[i])){
            //  console.log(newArr.concat(flatten(oldArr[i])))
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
                newArr.push(oldArr[i])
          }
    } 
    return newArr;
  }
  console.log(flatten([1, [2, [3, 4], [[5]]]]))















