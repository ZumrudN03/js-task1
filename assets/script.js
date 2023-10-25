// ? 1.prompt ilə daxil olunan ədədin , 2-nin quvveti  olub olmadigini tapan alqoritm yazin.

// let num=prompt("eded daxil edin");
// for (let i = 0; i < num; i++) {
//     if (num%2===0) {
//         num=num/2;
//         console.log(true);
//     }else{
//        break
//     };
// }




// ? 2.Göndərilmiş 2 ədəddən 1-cisini 2-cisinin qüvvətinə yüksəldən alqoritm yazin

// let num1 = prompt("quvvet olacaq ededi daxil edin:");
// let num2 = prompt("quvvete yukseldilecek ededi ededi daxil edin:");
// let answer = 1;
// for (let i = 1; i <= num1; i++) {
//   answer = answer * num2;
// }
// console.log(answer);

// ? 3.1- den 1000e qeder  ededler icerisinde  reqemleri eyni olan ededlerin cemin tapin. example(11 ,222,333 ve  s)

// let sum1 = 0;
// let sum2 = 0;
// for (let i = 0; i < 100; i++) {
//   if (i % 11 === 0) {
//     sum1 = sum1 + i;
//   }
// }
// console.log("1-den 100-e qeder " + sum1);
// for (let i = 100; i < 1000; i++) {
//   if (i % 111 === 0) {
//     sum2 = sum2 + i;
//   }
// }
// console.log("100-den 1000-e qeder " + sum2);
// console.log(sum1 + sum2);

// ? 4.Verilmis array-de cut ededlerin en boyuyunu tapan alqoritm yazin.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
// }
// console.log(max);

// ? 5.Verilmis array-de tek ededlerin en kiciyinin index-ni tapan alqoritm yazin.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let min = arr[0];
// let index = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 1) {
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//   }
//   if (arr[i] === min) {
//     index = i;
//   }
// }
// console.log("en kicik eded: " + min);
// console.log("en kicik ededin index'i: " + index);

// ?  6.Verilmis array-de  sade ve murekkeb ededlerin sayini tapan alqoritm yazin.

const arr = [1, 2, 33, 4, 5, 6, 7, 8, 9, 10,54,24,76,12,435,24243];
let sade_eded_sayi=0
let murekkeb_eded_sayi=0
for (let i = 0; i < arr.length; i++) {
    if (i%2===0 || i%3===0 || i%5===0 || i%7===0) {
        murekkeb_eded_sayi=murekkeb_eded_sayi+1
    }else{
        sade_eded_sayi=sade_eded_sayi+1
    }

}
console.log("murekkeb " + murekkeb_eded_sayi);
console.log("sade " + sade_eded_sayi);

// ? 7.Verilmis array-de minimum ededle maksimum ededin cemini array-in ededi ortasindan boyuk olub olmadigini yoxlayin.

// const arr = [2, 3, 4, 5];
// let min = arr[0];
// let max = arr[0];
// let minplusmax = 0;
// let ededi_orta = 0;
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (min > arr[i]) {
//     min = arr[i];
//   }
//   if (max < arr[i]) {
//     max = arr[i];
//   }
//   sum = sum + arr[i];
// }
// minplusmax = min + max;
// ededi_orta = sum / arr.length;

// console.log("array'deki en kicik eded " + min);
// console.log("array'deki en boyuk eded " + max);
// console.log("min + max = " + minplusmax);
// console.log("ededi orta = " + ededi_orta);
// if (minplusmax > ededi_orta) {
//   console.log("min + max > ededi orta");
// } else {
//   console.log("min + max < ededi orta");
// }

// ? 8.Verilmish ededin en boyuk reqemini tapan alqoritm yazin. example: 709 en boyuk 9-dir, 37 en boyuk 7-dir.

// let eded = prompt("eded daxil edin:"); //ededin user terefinden daxil edilmesini istedim^^
// let max = 0;
// for (let i = 0; i < eded.length; i++) {
//   if (max < eded[i]) {
//     max = eded[i];
//   }
// }
// console.log(max);
