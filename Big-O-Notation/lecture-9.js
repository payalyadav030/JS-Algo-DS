// More eg for finding Big-O

    // function atLeast5(n){
    //     for(var i=1; i<= Math.max(5, n); i++){
    //         console.log(i) 
    //     }
    // }
    // console.log(atLeast5(7)); // Big-O -   O(n)


    function atLeast5(n){
        for(var i=1; i<= Math.min(5, n); i++){
            console.log(i) 
        }
    }
    console.log(atLeast5(2));   // Big-O - O(1)