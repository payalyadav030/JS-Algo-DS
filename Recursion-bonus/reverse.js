// function reverse(str){
//     console.log(str);
    
   
//     // for(var i=str.length; i>=0; i--){
//     //     console.log(str[i])   //  }
//      console.log(str.spilt( '' ))
    
// }
// console.log(reverse('hello'));


function reverseStr(str) {
    console.log( str.split( '' ))
    // .reverse( ).join( '' );
}
//console.log(reverse('hello'));


// with recursion:
function reverse(string){
    if(string.length <= 1){
        return string;
    }
    //console.log(string.slice(1))
    // console.log(string[0])
     return reverse(string.slice(1)) + string[0];
}
console.log(reverse('moon'));