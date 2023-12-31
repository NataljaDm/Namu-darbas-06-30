console.log('----------------------1---------------------');
//1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

function skaiciai (a ,b ) {
    if (a > b){
        return a 
    } else if (a===b){
        return `lygus`
    } else 
        return b
 }
 console.log(skaiciai(45, 65));

console.log('----------------------2---------------------');
//2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

for (let d = 1; d <= 10; d++) {
     console.log(d);
}

console.log('----------------------3---------------------');
//3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

for (let x = 0; x <= 10; x +=2) {
     console.log(x);
}

console.log('----------------------4---------------------');
//4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

for (let s = 1; s <= 5; s ++) {
    const number = Math.floor((Math.random()*10))
    console.log(number)
}

console.log('----------------------5---------------------');
//5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

let f = 1;
while (f <= 10) {
   console.log(f = Math.floor(Math.random() * 10) +1);
   if (f === 5) {
       break;
   }
}

console.log('----------------------6---------------------');
//6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

const masyvas = [];
for (let m = 20; m < 30; m++) {
masyvas.push(Math.floor(Math.random() * 20) + 10)
}
console.log(masyvas)
let biggestNum = masyvas[0];
     for (let d = 0; d < masyvas.length; d++) {
         if (masyvas[d] > biggestNum) {
             biggestNum = masyvas[d]
         }
     }
console.log(biggestNum);

console.log('----------------------7---------------------');
//7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

const masyvas2 = [];
let raideA = 0;
let raideB = 0;
let raideC = 0;
let raideD = 0;

for (let i = 0; i < 100; i++) {
    masyvas2.push(Math.floor(Math.random() * 4));
}

for (let k = 0; k < masyvas2.length; k++) {
    if (masyvas2[k] === 0) {
        masyvas2[k] = 'A'
        raideA++
    } else if (masyvas2[k] === 1) {
        masyvas2[k] = 'B';
        raideB++;
    } else if (masyvas2[k] === 2) {
        masyvas2[k] = 'C';
        raideC++;
    } else if (masyvas2[k] === 3) {
        masyvas2[k] = 'D';
        raideD++;
}
}
console.log(`A: ${raideA}, B: ${raideB}, C: ${raideC}, D: ${raideD}`);

console.log('----------------------8---------------------');
//8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas). Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

function lygineSuma ( numer1, numer2){
     if (typeof numer1 === `number` && typeof numer2 === `number`) {
         let summa = numer1 + numer2;
             if(summa % 2 === 0) {
                 return `Suma - ` + summa;
             } else {
                 return `Nelygine suma`;
             }
           
     } if (typeof numer1 === `object` && typeof numer2 === `object`) {
         let arrSum  = numer1.length + numer2.length;
            if(arrSum % 2 === 0) {
                return `Masyvo ilgis - ` + arrSum;
             } else {
                return `Nelygine suma`;
            }
      } else {
         return `ERROR`
      }
}
console.log(lygineSuma(12, 74));
console.log(lygineSuma(56, 123));
console.log(lygineSuma([9,5,2,], [8,5,2,1,4]));
console.log(lygineSuma([9,6,3,2,5,8,0], [7,4,1,0]));
console.log(lygineSuma([8], 23));
console.log(lygineSuma(`VNBM`, `LNJK`));

console.log('----------------------9---------------------');
//9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)

function pirminisSkaicius(u) {
    if (typeof u !== 'number') {
        return 'Ne skaicius'
    } 
    if (u % 2 === 0 && u > 2) {
        return `${u} ne pirminis skaicius`
    } else if (u % 3 === 0 && u > 3){
        return `${u} ne pirminis skaicius`
    } else if (u % u === 0 && u % 1 === 0) {
            return `${u} pirminis skaicius`
    }
}

console.log(pirminisSkaicius(58));
console.log('----------------------10---------------------');
//10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis. Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX". (10 taškų)

function telefonoNumeris(num) {
    let tel = ` `;
    for (let g = 0; g < num.length; g++) {
        if (typeof num[g] !== 'number' || !isFinite(num[g])) {
            return `ERROR`
        } else {
            tel += num[g];
        }
    }
    return telNumeris = `(${tel[0]}${tel[1]}${tel[2]}) ${tel[3]}${tel[4]}${tel[5]}-${tel[6]}${tel[7]}${tel[8]}${tel[9]}`;
}
console.log(telefonoNumeris([8632598741]));