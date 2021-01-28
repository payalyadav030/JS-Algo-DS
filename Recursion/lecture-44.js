// eg of recursive function:

function sum(num){
    if(num == 1){
        return 1;
    }
    return num + sum(num-1)

}
console.log(sum(4));

////////////////////////////////////////
/// from lect-45
// factorial iteravely

    function factorial(num){
        var fact = 1;
        for(var i=1; i<=num; i++){
        // console.log(i)
            fact = fact * i;
        }
        return fact;
        

    }
    console.log(factorial(4));

    // above factorial eg in recursive method:
        function fact(num){
        if(num == 1){
            return 1;
        }
        return num * fact(num-1)

        }
        console.log(fact(4));
