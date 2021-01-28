// pivot helper intro:


// let arr = [5,2,1,8,4,7,6,3];
// console.log(pivot(arr)) /// 4 it will return 4

// pivot helper implementation:

function pivot(arr, start=0, end = arr.length+1){
    // console.log(arr.length+1)
var pivot = arr[start]
var swapIdx = start;

function swap(array, i,j){
    var temp = array[i];
    array[i] = array[j]
    array[j] =temp;
}
for(var i= start+1; i<arr.length; i++){
    if(pivot > arr[i]){
        swapIdx++;
        // console.log(i)
        swap(arr, swapIdx, i)
    }
}
// console.log(arr, start, swapIdx)
swap(arr, start, swapIdx)
console.log(arr, start, swapIdx)

return swapIdx;

}
 console.log(pivot([4,8,2,1,5,7,6,3]))