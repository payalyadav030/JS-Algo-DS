// 

function rotatedIndex(arr, num){
//  console.log(arr, num)
var count= false;
for(var i=0; i< arr.length; i++){
    if(arr[i]== num){
        var index= arr.indexOf(arr[i])
        count = true;
    }
}
if(count == false){
    return -1;
}
return index;



}
console.log(rotatedIndex([6,7,8,9,1,2,3,4], 11))