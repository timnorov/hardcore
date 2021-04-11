'use strict';
 
let week = ['Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  toDay = new Date().getDay();

for (let i = 0; i < week.length; i++) {
  if (i == toDay) {
    if (week[i] == 'Суббота' || week[i] == 'Воскресенье') {
      document.write(`<p><i><b>${week[i]}</b></i></p>`);
    } else {
      document.write(`<p><b>${week[i]}</b></p>`);
    }
  } else if (week[i] == 'Суббота' || week[i] == 'Воскресенье') {
    document.write(`<p><i>${week[i]}</i></p>`);
  } else {
    document.write(`<p>${week[i]}</p>`);
  }
}