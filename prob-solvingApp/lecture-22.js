// way-1
    // function count(str){
    //     let result = {};
    //     for(let i=0; i<str.length; i++){
    //         let char = str[i].toLowerCase()
    //         //console.log(char)
    //        if(result[char]>0){
    //            result[char]++;
    //           // console.log(result[char])
    //        }
    //        else{
    //            result[char]=1;
    //            //console.log(result[char])
    //        }
    //     }
    //     return result;
    // }
    // console.log(count("hello There!!"));


// alternative way-
function count(str){
    var obj ={};
    for(var char of str){
        char = char.toLowerCase();
        if(isAlphaNumeric(char)){
            obj[char] = ++obj[char] || 1;
        }

    }
    return obj;
}

function isAlphaNumeric(char){
    var char = char.charCodeAt(0);
    if(!(char > 47 && char < 58) && !(char > 64 && char < 91) && !(char > 96 && char < 123)){
        return false
    }
    return true;   
}

console.log(count("hello"))