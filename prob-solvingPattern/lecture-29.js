// Anagram problem:
function anagram(str1, str2){

    if(str1.length != str2.length){
        return false;
    }
    var check = {};
    for(var i=0; i< str1.length; i++){
        var letter = str1[i];
        check[letter] ? check[letter]  +=1 : check[letter] =1;
    }
    for(var j=0; j< str2.length; j++){
        var letter = str2[j]
        if(!check[letter]){
            return false;
        }
        else{
            check[letter] -= 1;
        }
    }
    return true;

}
console.log(anagram("cat", "rat"))
