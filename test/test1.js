//class RangeIterator {
//    constructor(start, stop) {
//        this.value = start;
//        this.stop = stop;
//    }
//
//    [Symbol.iterator]() { return this; }
//
//    next() {
//        var value = this.value;
//        if (value < this.stop) {
//            this.value++;
//            return {done: false, value: value};
//        }
//        return {done: true, value: undefined};
//    }
//}
//
//function range(start, stop) {
//    return new RangeIterator(start, stop);
//}
//
//for (var value of range(0, 3)) {
//    console.log(value);
//}


var str = new String("hi");

[...str] // ["h", "i"]

str[Symbol.iterator] = function() {
    return {
        next: function() {
            if (this._first) {
                console.log(this._first)
                this._first = false;
                return { value: "bye", done: false };
            } else {
                return { done: true };
            }
        },
        _first: true
    };
};

console.log([...str]) // ["bye"]
console.log(str) // "hi"

































