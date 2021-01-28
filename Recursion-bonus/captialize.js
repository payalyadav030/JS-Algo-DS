// without recursion:
function captiliseFirst(arr){
    // console.log(arr[0][0]);
    var newArr = [];
    for(var i=0; i<arr.length; i++){
       var capital = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    //    console.log(capital)
        newArr.push(capital)
       
    }
    return newArr;
    

}
// console.log(captiliseFirst(["car", "hello"]));
////////////////////////////////////////////

// with recursion:
function capitalizeFirst(arr){
   //var res = []
    if(arr.length == 1){
        return arr[0].charAt(0).toUpperCase() + arr[0].slice(1)
    }
    if(arr.length == 0){
        return false;
    }
    const  res = capitalizeFirst(arr.slice(0, -1));
    //  console.log(arr.slice(arr.length-1));
    //   console.log(arr.slice(arr.length-1)[0][0]); // book
    //   console.log(arr.slice(arr.length-1)[0][0].toUpperCase()) // B
    //   console.log(arr.slice(arr.length-1)[0].substr(1)) // ook
    var  string = arr.slice(arr.length - 1)[0][0].toUpperCase() + arr.slice(arr.length-1)[0].substr(1);
    console.log(string)
     res.push(string);
     return res;


}
console.log(capitalizeFirst(["car", "hello", "book"]))