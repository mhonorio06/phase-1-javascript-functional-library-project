    function myEach(collection, callBack) {
    Object.values(collection).forEach(element => {
    callBack(element)
    })
    return collection;
}
    function myMap(collection, callBack) {
    const newArray = Object.values(collection).map(element => callBack(element))
    return newArray;
}
function myReduce(collection, callBack, initialValue) {
    let acc = initialValue;
    collection = Object.values(collection);
    if(!acc) {
        acc= collection[0];
        collection = collection.slice(1);
    }
    for(const value of collection) {
        acc = callBack(acc, value)
    }
    return acc;
}
function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
        if(predicate(collection[i])) {
            return collection[i]
        }
    }
        return undefined;
    }
    function myFilter(collection, predicate) {
        let newArray = []
        for (let i = 0; i < collection.length; i++) {
            if(predicate(collection[i])) newArray.push(collection[i])     
        }
        return newArray;
    }
    function mySize(collection) {
        return Object.keys(collection).length
    }
    function myFirst(collection, n) {
      if(n) {
        return collection.slice(0, n )
        } else {
        return collection[0]
        }
    }
    function myLast(collection, n) {
        if(n) {
            return collection.slice(collection.length - n)
        }else {
            return collection[collection.length - 1]
        }
    }
    function myKeys(object) {
        const keys = []
        for(const key in object) {
        keys.push(key);
        }
        return keys;
    }
    function myValues(object) {
        const values = []
        for(const key in object) {
            values.push(object[key])
        }
        return values;
    }