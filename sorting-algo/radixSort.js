// radix sort helper :
// before implementing the radix sort we need some helper methods:

function getDigit(num, i){
    // console.log(num, i);
    // console.log(Math.abs(num))
    // console.log(Math.pow(10,i))
    // console.log(Math.abs(num)/ Math.pow(10,i)%10)
    // console.log(Math.floor(Math.abs(num)/ Math.pow(10,i)%10))
   return Math.floor(Math.abs(num)/ Math.pow(10,i))%10;
    
}
// console.log(getDigit(12345, 2))

function digitCount(num){
    // console.log(num);
    // console.log(Math.abs(num))
    // console.log(Math.log10(num))
    // console.log(Math.log10(Math.abs(num)))
    // console.log(Math.floor(Math.log10(Math.abs(num)))+1);
    if(num == 0){
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(num))+1)
}
 //console.log(digitCount(1234));

function mostDigit(nums){
    var maxDigit =0;
    for(var i=0; i< nums.length; i++){
        // console.log(nums[i])
       // console.log(digitCount(nums[i]))
        // console.log(maxDigit)
        maxDigit = Math.max(maxDigit, digitCount(nums[i]))
    }
     return maxDigit;
}
//console.log(mostDigit([22,314,5555,7]))

///////////////////
// Radix sort implementation:
function radixSort(nums){
    var maxDigitCount = mostDigit(nums)
    // console.log(maxDigitCount);
    for(var k=0; k< maxDigitCount; k++){
        var digitBuckets = Array.from({length:10}, ()=>[])
        // console.log(digitBuckets)
        for(var i=0; i<nums.length; i++){
            // getDigit(nums[i], k)
            var digit = getDigit(nums[i],k)
            digitBuckets[digit].push(nums[i])
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;

}
console.log(radixSort([22,314,55,123,45]))