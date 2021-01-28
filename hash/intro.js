// intro to hash functions:
// some non eg:

function slowHash(key){
    console.log("k")
    for(var i=0; i<10000; i++){
        console.log("hashing....")
    }
    console.log("ok",key[0])
    return key[0].charCodeAt(0)
}

// console.log(slowHash(5))