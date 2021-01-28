// Timing our code video-

// Eg: function to find the sum from 1 upto n including n

// way-1 of implementing:
    function Sum(num){
        var num = num;
        var sum = 0;
        for(var i=1; i<=num; i++){
            sum = sum + i;
        }
        return sum;

    }

    //console.log(Sum(3));
    var t1 = performance.now();
    Sum(1000000000);
    var t2 = performance.now();
    console.log(`time elapsed: ${(t2-t1)/1000} seconds`)

// way-2
    function add(n){
        return n * (n+1) /2;
    }
    //console.log(add(6));
    var t3 = performance.now();
    add(1000000000);
    var t4 = performance.now();
    console.log(`time elapsed: ${(t4-t3)/1000} seconds`)
