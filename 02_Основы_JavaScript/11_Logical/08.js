if (-1 || 0) alert( 'first' ); // alert выведется, потому что результат - Истина т.к. ИЛИ ищет истину, -1 - это Истина
if (-1 && 0) alert( 'second' ); // alert не выведется, И ищет Ложь, первое - -1 - Истина, второе 0 - Ложь. Итог - Ложь
if (null || -1 && 1) alert( 'third' ); // alert выведется, т.к. сначала сработатет И, он выведет Истину, затем сработает ИЛИ и найдет эту Истину