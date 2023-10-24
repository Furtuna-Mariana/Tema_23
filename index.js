// function arrKey (obj, key) {
//     return key in obj;
// }

// const obiect = { 
//     name: 'John', 
//     age: 30, 
//     city: 'New York',
//  };

// const key = 'age';

// const existkey = arrKey (obiect, key);
// console.log(existkey);

// ===========================================
// const checkKey = (obj, key) => {
//     return obj.hasOwnProperty(key)
// }

// console.log(checkKey({nume: 'Alex'}, 'nume'))







// const str = 'Salut, ma numesc Maria'
// const char = 'aeiouAEIOU'

// const func = (char, str) => {
//     return str.split('').reduce((acc, cur) => {
//         return char.includes(cur) ? ++acc : acc
//     }, 0)
// }

// console.log(func(char, str))


// ============================================
// const countVowel = (str) => {
//     const vowelList = ['a', 'e', 'i', 'o', 'u']
//     const checkstr = str.toLowerCase()
//     let count = 0

// // facem un forloop
//     for(let i = 0; i < str.length; i++) {
//         if(vowelList.includes(str[i])) count++
//     }

//     return count
// }

// console.log(countVowel('Hello world'))





// const noteStudenti = {
//     John: [8, 7,9],
//     Mary: [9, 9, 10],
//     Alex: [6, 8, 7]
// };

// function calculMedii(noteStudenti) {
//     const medii = {};

//     for (const student in noteStudenti) {
//         const note = noteStudenti[student];
//         const sumaNotelor = note.reduce((acc, nota) => acc + nota, 0);
//         const media = sumaNotelor / note.length;
//         medii[student] = `Medie: ${media.toFixed(2)}`;
//     }

//     return medii;
// }


// const mediiStudenti = calculMedii(noteStudenti);
// console.log(mediiStudenti);

// ============================================
// const studenti = {
//     alex: [5,6,7,8],
//     victor: [6,7,8,10],
//     vasile: [8,9,7,10]
// }
// const checkGrandesAverage = (obj) => {
//     const keys = Object.keys(obj)

//     return keys.reduce((acc, curr) => {
//        const average = acc[curr] = obj[curr].reduce((a, c) => a + c)/obj[curr].length.toFixed(1)
//         // acc[curr] = 'Media: ${average}' = trebuie ghilimele diverse
//         acc [curr] = `Media: ${average}`
//         return acc
//  }, {})
// }

// console.log(checkGrandesAverage(studenti))





// const input = 'Hello World!';

// function caractereInversate(mesaj) {
//     const sirInversat = mesaj.split('').reverse().join('');
//     return sirInversat
// }


// const output = caractereInversate(input);
// console.log(output);


// ============================================
// const stringReverse = (str) => {
//     return str.split('').reverse().join('')

// }

// console.log(stringReverse('Hello World'))




// const input = 'level';

// function esteSauNuPalindrom(sir) {

//     const sirInversat = sir.split('').reverse().join('');

//     return sir === sirInversat;
// }


// const palindrom = esteSauNuPalindrom(input);
// console.log(palindrom);



// ============================================
// const checkPolidrom = (str) => {
//     return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
// }

// console.log(checkPolidrom('level'))






// function findBestMatch(k, numere) {
//     if (numere.length === 0) {
//         return null;
//     }

//     let numarApropiat = numere[0];
//     let diferentaMica = Math.abs(k - numere[0]);

//     for (let i = 1; i < numere.length; i++) {
//         const diferenta = Math.abs(k - numere[i]);
//         if (diferenta < diferentaMica) {
//             diferentaMica = diferenta;
//             numarApropiat = numere[i];
//         }
//     }

//     return numarApropiat;
// }

// const k = 5;
// const numere = [2, 6, 3, 8, 9, 1];
// const result = findBestMatch(k, numere);

// console.log(result);


// ============================================
// const list = [5,6,8,9,4,12]
// const number = 7
// const findBestMatch = (arr, k) => {
//     return arr.reduce((acc, cur) => {
//         return Math.abs (acc - k) < Math.abs (cur - k) ? acc : cur
//     })
// }

// console.log(findBestMatch(list, number))



// function sortareCifre(array) {
//     const numarImpar = array.filter(numar => numar % 2 === 1).sort((a, b) => a - b);
//     const numarPar = array.filter(numar => numar % 2 === 0).sort((a, b) => b - a);
//     return numarImpar.concat(numarPar);
// }

// const input = [4, 6, 7, 8, 1, 2, 3];
// const output = sortareCifre(input);

// console.log(output);


// ============================================
const list = [1,2,3,4,5,6,7,8,9]

const sortArr = (arr) => {
    const even = arr.filter((item) => item % 2 === 0).sort((a,b) => b - a)
    const odd = arr.filter((item) => item % 2 !== 0).sort((a,b) => a - b)

    return [...odd, ...even]
}

console.log(sortArr(list))