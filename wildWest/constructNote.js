 ////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

function strCount(str1, str2){
    
    var countsStr1 = {};
    var countsStr2 = {};
    var ch,count;
    // for str1
    // console.log(str2)
    if(str1 == ""){
        return true;
    }
    for(var i=0; i< str1.length; i++){
        ch = str1.charAt(i)
        count = countsStr1[ch]
        countsStr1[ch]= count ? count+1 : 1;

    }
    // console.log("first string")
    // for(ch in countsStr1){
        
    //     console.log( ch + ":" + countsStr1[ch])
    // } 

    // for str2
    for(var i=0; i< str2.length; i++){
        ch = str2.charAt(i)
        count = countsStr2[ch]
        countsStr2[ch]= count ? count+1 : 1;

    }
    // console.log("second string")
    // for( ch in countsStr2){
        
    //     console.log(ch + "::"+ countsStr2[ch])
    // }
    // checking:
    for(i in countsStr1){
        for(j in countsStr2){
          //  console.log(countsStr1[i], countsStr2[j])
          if(countsStr1[i]== countsStr2[j]){
              return true;
          }
           else{
              return false;
          }

        }
    }
    
    
}

console.log(strCount("","bcabcaddff"))
