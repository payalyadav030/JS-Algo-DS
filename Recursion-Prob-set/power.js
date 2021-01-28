// without recursion:
    function power(a,b){
        if(b == 0){
            return 1;
        }
        return Math.pow(a,b)
    }
    //console.log(power(2,2));


// with recursion:
    function power(b, e){
        if(e ==0 ){
            return 1;

        }
        return b * power(b, e-1)
    }
    console.log(power(4,3))