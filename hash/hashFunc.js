// implementing the Hash Funcions:

let total =0;
total += "hello".charCodeAt(0) -96;
// console.log(total)

total+="hello".charCodeAt(1) -96;
// console.log(total)

total+="hello".charCodeAt(2) -96;

total+="hello".charCodeAt(3) -96;

total+="hello".charCodeAt(4) -96;

console.log(total)


// basic hash function implementaion:

// function hash(key, arrayLen){
//     let total = 0;
//     for(let i=0; i< key.length; i++){
//         //  console.log(key[i])
//         //  console.log(key[i].charCodeAt(0)-96)
//          let value = key[i].charCodeAt(0)-96;
//         //  console.log(value)
//         total = (total+ value)% arrayLen;
//         // console.log(total)
//     }
//     return total;
// }

// console.log(hash("blue", 10));

//// more refined one of the above hash function with the help of prime numbers:

function hash(key, arrayLen){
    let total =0;
    let prime=31;
    for(let i=0; i< Math.min(key.length, 100); i++){
        // let char =key[i];
        let value = key[i].charCodeAt(0)-96;
      //  console.log(value)
        total = (total * prime + value) % arrayLen;
         console.log(total)
        // return;

    }
    return total;

}

console.log(hash("hello", 10))