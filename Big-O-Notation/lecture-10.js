//Space complexity:
//Eg:
    function Sum(arr){
        let total = 0;
        for(let i=0; i< arr.length; i++){
            total = total + arr[i]
        }
        return total;
    }
    console.log(Sum([2,4,6])) // Big-O -  O(1)