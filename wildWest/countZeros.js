function count(arr){
    // console.log(arr);
    var count =0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]==0){
            count++;
        }
    }
    return count;

}
console.log(count([1,0,1,0,0,0,0,0]))