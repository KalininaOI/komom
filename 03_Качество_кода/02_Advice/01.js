function pow(x,n) // добавить пробел между аргументами
{ // первая фигурная скобка должна быть на строке с функцией
    let result=1; // равно должно в пробелах, и лучше добавить вертикальный пробел после для читабельности
    for(let i=0;i<n;i++) {result*=x;} // нет пробелов внутри for, result нужно спустить на следующую строку, оставив фигурную скобку, добавить пробелы
    return result;
}


let x=prompt("x?",''), n=prompt("n?",'') // добавить пробелы около =, prompt спустить на следующую строку, добавить точку с запятой
if (n<=0) // пробелы и можно добавить вертикальный отступ
{ // дожна быть на предыдущей строке
    alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`); // лучше разбить на несколько строк
}
else // надо поднять на строку к фигурной скобке, следующую фигурную скобку тоже поднять в эту строку
{
    alert(pow(x,n)) // добавить пробелы вложенного вызова и нет точки с запятой
}
//глобально, можно разбить на 2 блока, где вариант <= 0 будет отрабатываться отдельно
