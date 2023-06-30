

console.log('----------------------1---------------------');
//1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)



console.log('----------------------2---------------------');
//2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)


for (let a = 0; a <= 10; a++) {
     console.log(a);
}
console.log('----------------------3---------------------');
//3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

for (let x = 0; x <= 10; x +=2) {
     console.log(x);
}


console.log('----------------------4---------------------');
//4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

let list = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

const final1 = [];


for (const q of list) {
    if (Math.floor(Math.random() * 3)) {
        final1.push(q);
    } 
}

console.log(final1);



/*for (let c = 1; c <= 10; c++) {
  
}
console.log(c = Math.floor(Math.random()));*/

console.log('----------------------5---------------------');
//5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
let b = 1;
while (b <= 10) {
   console.log(b = Math.floor(Math.random() * 10) + 1);
   if (b === 5) {
       break;
   }
}


console.log('----------------------6---------------------');
//6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)


console.log('----------------------7---------------------');
//7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)


console.log('----------------------8---------------------');
//8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas). Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)


console.log('----------------------9---------------------');
//9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)

console.log('----------------------10---------------------');
//10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis. Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX". (10 taškų)