//Example-01
// way-1
    function Sum(num){
        var num = num;
        var sum = 0;
        for(var i=1; i<=num; i++){
            sum = sum + i;
        }
        return sum;

    }
    //console.log(Sum(3));  // Big-O Notation is - O(1)


//way-2
    function add(n){
        return n * (n+1) /2;
    }
    //console.log(add(6));  // Big-O Notation is -  O(n)



/////////////////////
// Example-02
    function countUpAndDown(n){
        console.log("Going Up!!");
        for(var i=0; i<n; i++){
            console.log(i);          // Big-O -  O(n)
        }
        console.log("Reached Top, now going down!!");
        for(var j= n-1; j>=0; j--){
            console.log(j);         //  Big-O - O(n)
        }
        console.log("End!!");
    }

    //console.log(countUpAndDown(10)); // so Big-O Notation of this function is-  O(n)

///////////////////////////////
// Example-03
    function pairs(n){
        for(var i=0; i<n ; i++){    // Big-O Notation- O(n)
            for(var j=0; j<n ; j++){  // Big-O Notation - O(n)
                console.log(i,j);
            }
        }
    }
    console.log(pairs(4));   // Since there is O(n) operation inside of an O(n) operation,
                            //  So, Big-O Notation -  O(n*n) = O(n^2)

                            