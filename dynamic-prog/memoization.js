// 

function fibonacci(n, memo=[undefined,1,1]){
    if(memo[n] !== undefined){
        return memo[n]
    }
    // if(n<=2) return 1;
    let res = fibonacci(n-1, memo)+ fibonacci(n-2, memo)
    memo[n]= res;
    console.log(memo)
    return res;
}
console.log(fibonacci(10))