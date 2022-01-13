function f() {
    alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя"} );

f(); // Вася

    // Экзотический объект bound function, возвращаемый при первом вызове f.bind(...),
    // запоминает контекст (и аргументы, если они были переданы) только во время создания.
    // Следующий вызов bind будет устанавливать контекст уже для этого объекта. Это ни на что не повлияет.
    // Можно сделать новую привязку, но нельзя изменить существующую.