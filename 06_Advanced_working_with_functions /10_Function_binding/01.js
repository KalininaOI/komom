function f() {
    alert( this ); // выведет null, т.к. мы привязали его к F
}

let user = {
    g: f.bind(null)
};

user.g();