function makeUser() {
    return {
        name: "Джон",
        ref: this
    };
};

let user = makeUser();

alert( user.ref.name ); // Каким будет результат?

// будет ошибка,т.к. значение this будет потеряно из-за того, что makeUser вызвана как функция, а не через точку