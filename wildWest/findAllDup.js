// find all duplicates:

function duplicates(arr){
   // console.log(arr)
    var result=[]
    for(var i=0; i< arr.length; i++){
        for(j=i+1; j< arr.length; j++){
            if(arr[i]== arr[j]){
                result.push(arr[i])
            }
        }
    }
    return result;

}
console.log(duplicates([4,4,5,6]))