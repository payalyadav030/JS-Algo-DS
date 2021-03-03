// selection sort:

function selection(arr){
    console.log(arr)
    // var minimum;
    for(var i=0; i< arr.length; i++){
        var minimum = i
        for(var j= i+1; j< arr.length;j++){
            if(arr[j]< arr[minimum]){
                minimum = j;
            }
        }
        if( i != minimum){
            var temp= arr[i];
            arr[i]=arr[minimum];
            arr[minimum]= temp;
        }
    }
    return arr;

}

console.log(selection([5,3,4,1,2]))