// implementing keys and values method :

class hashTable{
    constructor(size=4){
        this.keyMap = new Array(size)
    }

    _hash(key){
        let total = 0;
        let prime = 31;
        for(var i=0; i<Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0)-96;
            total = (total* prime+ value)% this.keyMap.length;
        }
        // console.log(total)
        return total;
    }
    set(key, val){
        // console.log(key, val)
        let index = this._hash(key);
        //  console.log(index)
        if(!this.keyMap[index]){
            this.keyMap[index]=[]
        }
        this.keyMap[index].push([key, val])
    }
    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
            // return this.keyMap[index]
            for(var i=0; i< this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] == key){
                    return this.keyMap[index][i][1]
                    // return this.keyMap[index][i]
                }
            }
        }
        return undefined;
    }
    /////////////////////////////////////////////
    // keys and values:
    values(){
        let valuesArr = [];
        for(var i=0; i< this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j=0; j< this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr;
    }

    keys(){
        let keysArr = [];
        for(var i=0; i< this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j=0; j< this.keyMap[i].length; j++){
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keysArr;
    }


}


let data = new hashTable();
data.set("yellow","c1");
data.set("green","c2");
data.set("pink","c4");
data.set("blue", "c4")
console.log(data)

// console.log(data.get("ok"))

console.log(data.values())
console.log(data.keys())
