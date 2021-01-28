// lecture 62

function binarySearch(arr, val){

   var left = 0; 
   var right = arr.length-1;
   var middle = Math.floor((left + right)/2);

    while (arr[middle] != val && left <=right){
        if(val < arr[middle]){
            right = middle - 1;
        }
        else{
            left = middle + 1;
        }
        middle = Math.floor((left + right)/2)
        }
        console.log(left, right, middle);
        if(arr[middle] == val){
            return middle;
        }
        else{
            return -1;
     }
    
 
}
console.log(binarySearch([2,5,6,9,13,15,28,30], 15))