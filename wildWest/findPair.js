//

function findPair(arr, num){
     
     var count = false;
    if(arr.length==0){
        return false;
    }
    for(var i=0; i< arr.length; i++){
        for(var j=i+1; j< arr.length; j++){
            if(arr[i]- arr[j]== num || arr[j]-arr[i]==num){
                count = true;
                return true;
            }
            
        }
    }
    if(count == false){
        return false;
    }

}

console.log(findPair([0,1,3,4,6], -2))