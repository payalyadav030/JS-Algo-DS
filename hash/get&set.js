// hash function and using set and get values:

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


}

let data = new hashTable();
data.set("yellow","c1");
data.set("green","c2");
data.set("pink","c3");
data.set("blue", "c4")

console.log(data)

console.log(data.get("blue"))


