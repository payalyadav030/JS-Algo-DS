// count unique values:

function unique(arr){
    var arr = arr;
    if(arr.length == 0){
        return 0;
    }
    var i=0;
    for(var j=1; j< arr.length; j++){
        if(arr[i]!= arr[j]){
            i = i + 1;
            arr[i]= arr[j]
        }
    }
    return i + 1;


}
console.log(unique([1,1,1,1,1,2]))