// built in sort method in js

    //console.log([10,15,6,4].sort());


    var array = [2,7,49,13];
    //console.log(array.sort());

    var str = ["hello", "ok", "apple"];
    //console.log(str.sort())

    function numCompare(n1, n2){
        console.log(n1-n2)
        return (n1-n2);

    }
    console.log([3,7,9,4].sort(numCompare));


