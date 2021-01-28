// bubble sort implementation:

function bubbleSort(arr){
    var temp;
    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr.length; j++){
            console.log(arr, arr[j], arr[j+1])
            if(arr[j]> arr[j+1]){
                temp = arr[j]
                arr[j]= arr[j+1];
                arr[j+1]= temp;
            }
        }
    }
    return arr;
}
// console.log(bubbleSort([37,45,29, 8]));  // but this code is not optimized


//optimized way:
function bubble(array){
    // console.log(array);
    for(var i=array.length; i>0; i--){
         //console.log(array[i])
        for(var j=0; j<i-1; j++){
            console.log(array, array[j], array[j+1])
            if(array[j]> array[j+1]){
                temp = array[j]
                array[j]= array[j+1];
                array[j+1]= temp;
            }
        }
    }
    return array;
}
// console.log(bubble([37,45,29,8]));

// when the size of array is long and the array is nearly sorted but still it takes lot of unnessary steps :
//// more optimized with the use of noSwap:
function bubble(newArr){
    var noSwap;
    var temp;
    for(var i = newArr.length; i>0; i--){
        noSwap = true;
        for(j=0; j<i-1; j++){
            if(newArr[j]> newArr[j+1]){
                temp = newArr[j];
                newArr[j] = newArr[j+1];
                newArr[j+1]= temp;
                noSwap = false;
            }
        }
        if(noSwap){
            break;
        }
    }
    return newArr;
}
console.log(bubble([8,1,2,3,4,5,6,7]))