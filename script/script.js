let lang = null;
let langArray = [];
let weekEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday'];
let weekRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница','Суббота','Воскресенье'];
let namePerson = null;
let result = null;

lang = 'en';

if (lang === 'en') {
  console.log(weekEn);
} else if (lang === 'ru'){
  console.log(weekRu);
} else {
  console.log('Я пока не знаю этот язык');
}

switch (lang) {
  case 'en':
    console.log(weekEn);
    break;
  case 'ru':
    console.log(weekRu);
    break;
  default:
    console.log('Я пока не знаю этот язык');
}

langArray.ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница','Суббота','Воскресенье'];
langArray.en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday'];

console.log(langArray[lang]);

namePerson = 'Aртём';
result = (namePerson === 'Aртём') ? 'Директор' : 
  (namePerson === 'Максим') ? 'Преподаватель':
  'студент';
console.log(result);