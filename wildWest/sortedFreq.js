// sorted Frequency:

function sortedFrequency(arr, val){
   
    var count =0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]== val){
            count++;
        }
    }
    if(count){
        return count;
    } else{return -1}
}

console.log(sortedFrequency([2,3,3,4,5,5,3], 6))