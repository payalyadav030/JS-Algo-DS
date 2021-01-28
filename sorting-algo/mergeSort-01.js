// lecture 87
// merging of two soted arrays:

// function merge(arr1, arr2){
//     console.log(arr1, arr2);

//     var i=0; 
//     var j=0;
//     var results = []
//     while(i < arr1.length && j < arr2.length){
//        if(arr2[j] > arr1[i]){
//         results.push(arr1[i]);
//         i++;
//        }else{
//            results.push(arr2[j]);
//            j++;
//        }
//     }
//     while(i < arr1.length){
//         results.push(arr1[i]);
//         i++;
//     }
//     while(j < arr2.length){
//         results.push(arr2[j]);
//         j++;
//     }


//     return results;

// }
// console.log(merge([10,13,17],[3,6,11,14]));


// actual merge sort - implementation:
function merge(arr1, arr2){
        console.log(arr1, arr2);

        var i=0; 
        var j=0;
        var results = []
        while(i < arr1.length && j < arr2.length){
            if(arr2[j] > arr1[i]){
                results.push(arr1[i]);
                i++;
            }else{
                results.push(arr2[j]);
                j++;
            }
     }
       
        while(i < arr1.length){
            results.push(arr1[i]);
            i++;
        }
        while(j < arr2.length){
            results.push(arr2[j]);
            j++;
        }


        return results;

}
    function mergeSort(arr){
        if(arr.length <=1){
            return arr;
        }
        var mid = Math.floor(arr.length/2);
        //console.log(mid)
        var leftArr = mergeSort(arr.slice(0, mid))
        // console.log(arr.slice(mid))
        //console.log(leftArr)
        var rightArr = mergeSort(arr.slice(mid))
        // console.log(rightArr)
        return merge(leftArr, rightArr)
    
    }
console.log(mergeSort([10,3,15,4,2]))


// var arri = [10,3]
// console.log(Math.floor(arri.length/2))
