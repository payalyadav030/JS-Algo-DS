// implementation of quick sort:


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
// console.log(arr, start, swapIdx)

return swapIdx;

}
function quickSort(arr, left =0, right = arr.length-1){
    // console.log(arr.length-1)
    if(left < right){
        var pivotIndex = pivot(arr, left, right);
    
    // left part quick sort:
    // console.log(arr)
    quickSort(arr, left, pivotIndex-1);
    // right oart sort:
    quickSort(arr, pivotIndex+1, right);
    }
    return arr;
}
console.log(quickSort([4,8,2,1,5,7,6,3]))