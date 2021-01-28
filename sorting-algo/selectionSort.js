// selection sort:
function selection(arr){
   
    for(var i=0; i<arr.length; i++){
           var minElem = i;
            for(var j=i+1; j<arr.length; j++){
                // console.log(i,j)
                if(arr[j]< arr[minElem]){
                    minElem = j;
                }
            }
            if(i !== minElem){
                var temp = arr[i];
                arr[i] = arr[minElem];
                arr[minElem]= temp;  
            }     
        }
    return arr;
}
console.log(selection([4,8,2,9,1]));