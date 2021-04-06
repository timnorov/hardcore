let num = 266219;
let mul = 1;
let digit;

while (num > 0) {
  digit = num % 10;
  mul = mul * digit;
  num = Math.floor( num / 10);
}

console.log(String(mul **= 3).slice(0,2));



