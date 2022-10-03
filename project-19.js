function fixTheMeerkat(arr) {
   let end = arr.shift(); //tail - вырезает первый элемент массива
   let begin = arr.pop(); //head - вырезает последний элемент массива

   arr.push(end); //Добавляет элемент в начало массива
   arr.unshift(begin); //Добавляет элемент в конец массива

   return arr;
}

fixTheMeerkat(['tail', 'body', 'head']);
