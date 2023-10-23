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






// const str = 'Salut, ma numesc Maria'
// const char = 'aeiouAEIOU'

// const func = (char, str) => {
//     return str.split('').reduce((acc, cur) => {
//         return char.includes(cur) ? ++acc : acc
//     }, 0)
// }

// console.log(func(char, str))





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






// const input = 'Hello World!';

// function caractereInversate(mesaj) {
//     const sirInversat = mesaj.split('').reverse().join('');
//     return sirInversat
// }


// const output = caractereInversate(input);
// console.log(output);






// const input = 'level';

// function esteSauNuPalindrom(sir) {

//     const sirInversat = sir.split('').reverse().join('');

//     return sir === sirInversat;
// }


// const palindrom = esteSauNuPalindrom(input);
// console.log(palindrom);




// function findBestMatch(k, numere) {
//     if (numere.length === 0) {
//         return null;
//     }   

// let numarApropiat = numere[0];
// let diferentaMica = Math.abs(k - numere[0]);

// for (let i= 1;i < numere.length; i++) {
//     const diferenta = Math.abs(numere[i]);
//     const (diferenta < diferentaMica) {
//         diferentaMica = diferenta;
//         numarApropiat = numere[i]
//     }
// }

//     return numarApropiat;
// }
// const k = 5;
// const numere = [2, 6, 3, 8, 9, 1];
// const result = findBestMatch(k, numere);

// console.log(result);


function findBestMatch(k, numere) {
    if (numere.length === 0) {
        return null;
    }

    let numarApropiat = numere[0];
    let diferentaMica = Math.abs(k - numere[0]);

    for (let i = 1; i < numere.length; i++) {
        const diferenta = Math.abs(k - numere[i]);
        if (diferenta < diferentaMica) {
            diferentaMica = diferenta;
            numarApropiat = numere[i];
        }
    }

    return numarApropiat;
}

const k = 5;
const numere = [2, 6, 3, 8, 9, 1];
const result = findBestMatch(k, numere);

console.log(result);




// function sortareCifre(array) {
//     const numarImpar = array.filter(numar => numar % 2 === 1).sort((a, b) => a - b);
//     const numarPar = array.filter(numar => numar % 2 === 0).sort((a, b) => b - a);
//     return numarImpar.concat(numarPar);
// }

// const input = [4, 6, 7, 8, 1, 2, 3];
// const output = sortareCifre(input);

// console.log(output);