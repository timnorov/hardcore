'use strict';

let day = new Date().getDay(),
    week = ['Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    hour = '',
    minute = '',
    second = '';

let options = {
  month: 'long',
  day: 'numeric'
};

for (let i = 0; i < week.length; i++) {
  if (i == day) {
    day = week[i];
  }
}

function fullDate () {
    let date = new Date();
    if (date.getHours() >= 5 && date.getHours() <= 20) {
      hour = 'часов'; 
    } else if (date.getHours()%10 >= 2 && date.getHours()%10 <= 4 || date.getHours() >= 2 && date.getHours() <= 4) {
      hour = 'часа';
    } else if (date.getHours()%10 == 1 || date.getHours() == 1){
      hour = 'час';
    } else {
      hour = 'часов';
    }

    if (date.getMinutes() >= 5 && date.getMinutes() <= 20) {
      minute = 'минут';
    } else if (date.getMinutes()%10 == 1 || date.getMinutes() == 1) {
      minute = 'минута'; 
    } else if (date.getMinutes()%10 >= 2 && date.getMinutes()%10 <= 4 || date.getMinutes() >= 2 && date.getMinutes() <= 4) {
      minute = 'минуты';
    } else {
      minute = 'минут';
    }

    if (date.getSeconds() >= 5 && date.getSeconds() <= 20){
      second = 'секунд';
    } else if (date.getSeconds()%10 == 1 || date.getSeconds() == 1) {
      second = 'секунда'; 
    } else if (date.getSeconds()%10 >= 2 && date.getSeconds()%10 <= 4 || date.getSeconds() >= 2 && date.getSeconds() <= 4) {
      second = 'секунды';
    } else {
      second = 'секунд';
    }
    
    let fullDateTime = 'Сегодня ' + day + ', ' + date.toLocaleString("ru", options) + ' ' +  date.getFullYear()+ ' года, ' + date.getHours() + ' ' + hour + ' ' + date.getMinutes() + ' ' + minute + ' ' + date.getSeconds() + ' ' + second;
    document.querySelector('#time').innerHTML = fullDateTime;
}


function formatDateTime() {
  let date = new Date();
  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;
  
  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;
  
  let yy = date.getFullYear();
  
  let hh = date.getHours();
  if (hh < 10) hh = '0' + hh;
  
  let min = date.getMinutes() + 1;
  if (min < 10) min = '0' + min;
  
  let ss = date.getSeconds();
  if (ss < 10) ss = '0' + ss;
  
  let time = dd + '.' + mm + '.' + yy + ' - ' + hh + ':' + min + ':' + ss;
  document.querySelector('#newHours').innerHTML = time;
}

setInterval(function(){
  fullDate();
}, 1000);

setInterval(function(){
  formatDateTime();
}, 1000);