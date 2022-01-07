function Counter() {
    let count = 0;

    this.up = function() {
        return ++count;
    };
    this.down = function() {
        return --count;
    };
}

let counter = new Counter();

alert( counter.up() ); // 1 - посчитает 0+1 (++ перед count) = 1
alert( counter.up() ); // 2 - посчитает 1 (предыдущее значение) и +1 = 2
alert( counter.down() ); // 1 - посчтает 2 - 1 = 1