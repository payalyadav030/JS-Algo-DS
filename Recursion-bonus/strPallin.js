// without recursion:
// function isPall(str){
//  console.log(str.substr(str.length-1))
//   //console.log(str[0])

//     if(str[0] != str.substr(str.length-1)){
//         return false;
//      }
                    
//     var reverse = str.split( '' ).reverse().join('');
//         // console.log(reverse)

//          if(str == reverse){
//             return "pallin";
//          }
//          else{
//             return "not Pallin";
//       }
//  }
//console.log(isPall('madam'));

// with recursion:
 function isPallindrome(str){
   if(str.length == 1){
       return true;
   }
    if(str.length == 2){
       return str[0] == str[1]
    }
    // console.log(str.slice(-3))
    if(str[0] == str.slice(-1)){
        return isPallindrome(str.slice(1,-1))
    }
    else{
        return false;
    }
     
     
 }
 console.log(isPallindrome('madam'));










//  function isPalindrome(str){
//     if(str.length === 1) return true;
//     if(str.length === 2) return str[0] === str[1];
//     if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
//     return false;
// }