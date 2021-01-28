// recursive function eg:

function countDown(num){
    if(num <=0){
        console.log("All done!");
        return;
    }
    console.log(num);
    num = num -1;
    countDown(num)

}
console.log(countDown(3));
    // print 3
    // countDown(2)
    // print 2
    // countDown(1)
    // print 1
    // countDown(0) - end point that is base case 



// above function without recursion:
    function down(num){
        for(var i=num; i>0; i--){
            console.log(i)
         }
        console.log("all done")
    }
    console.log(down(5))