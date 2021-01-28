// function that check in  two arrays that, in which second array corresponds to first array with sqr values.Order doesnt matter
// eg: arr1[1,2,3] = arr2[4,9,1]  - true
//     arr1[1,2,3] = arr2[4,4,1]- false

function Same(arr1, arr2){
    console.log(arr1, arr2)
    if(arr1.length != arr2.length){
        return false;
    }
    for(var i=0; i< arr1.length; i++){
        for(var j=0; j<arr2.length; j++){
            if(arr2[j] == arr1[i] *2){
                return true;
            }
           
        }
    }
    
}
//console.log(Same([1,2,3],[4,1,1])); 


// alt way- done in lecture: but this is not efficient:
    // function same(a1, a2){
    //     if(a1.length != a2.length){
    //         return false;
    //     }
    //     for(var i=0; i<a1.length; i++){
    //         var correctIndex = a2.indexOf(a1[i]**2);
    //         if(correctIndex == -1){
    //             return false;
    //         }
    //         a2.splice(correctIndex, 1)
    //     }
    //     return true;
    // }
    // //console.log(same([1,2,3], [4,9,9]));

// better way of doing above:
function sameArray(array1, array2){
    if(array1.length != array2.length){
        return false;
    }
    var counter1 ={};
    var counter2 = {};
    for(var val of array1){
        counter1[val] =(counter1[val] || 0) + 1;

    }
    for(var val of array2){
        counter2[val] = (counter2[val] || 0) + 1;
    }
    for(var key in counter1){
        if(!(key  ** 2 in counter2)){
            return false;
        }
        if(counter2[key ** 2] !== counter1[key]){
            return false;
        }
    }
    return true;
}
console.log(sameArray([3,4,5], [9,25,16]))