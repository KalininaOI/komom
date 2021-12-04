let obj, method;

obj = {
    go: function() { alert(this); }
};

obj.go();               // (1) [object Object] работает как и должно

(obj.go)();             // (2) [object Object] тоже, что и выше, скобки не роляют

(method = obj.go)();    // (3) undefined мы скопировали функцию в метод, вызывется функция, в которой this не залан

(obj.go || obj.stop)(); // (4) undefined значение this потеряно