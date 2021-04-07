'use strict';

function check(input) { 
  input = input.trim();
  if (!/^[а-яА-ЯёЁa-zA-Z ]+$/.test(input) || !input) {
    alert('Вы ввели НЕ строку!');
  } else if (input.length > 30 ) {
    alert(input.substr(0, 30) + '...');
  } else {
    alert(input);
  }
 }

 check(prompt('введите строку!'));
