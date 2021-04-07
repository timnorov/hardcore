'use strict';
//Усложненное задание №1
let arr = ['24', '34', '65', '254', '456', '334', '54'];
let res = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charAt(0) == 2 || arr[i].charAt(0) == 4) {
      console.log(arr[i]);
    }
  }

//Усложненное задание №2
  let number,
      count,
      array = [];
    for (let i = 2; i < 100; i++) {
        number = true;
        for (count = 2; count < i; count++) {
            if (i % count == 0) {
            number = false;
            }
        }
        if (number) {
          array.push('Делители этого числа: 1 и '+ i);      
    }
  }
console.log(array.join('\n'));