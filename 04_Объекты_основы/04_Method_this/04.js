

let calculator = {
    read () {
        this.a = +prompt("введите a", '');
        this.b = +prompt("введите b", '');
    },
    sum () {
        return this.a + this.b;
    },
    mul () {
        return this.a * this.b;
    }

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
