//Являются ли фрагменты кода ниже эквивалентными?
// Другими словами, ведут ли они себя одинаково во всех обстоятельствах,
// для всех переданных им обработчиков?

promise.then(f1).catch(f2);

// и

promise.then(f1, f2);

//Разница в том, что если ошибка произойдёт в f1,
//то она будет обработана в .catch в этом примере:
//
// promise
//   .then(f1)
//   .catch(f2);

// …но не в этом:
//
// promise
//   .then(f1, f2);
// Ошибка передаётся по цепочке, но во втором примере нет продолжения цепочки после f1.
//
// Другими словами, .then передаёт результат или ошибку следующему
// блоку .then/catch. Так как в первом примере в цепочке далее имеется блок catch,
// а во втором – нет, то ошибка в нём останется необработанной.