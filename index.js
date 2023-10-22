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





const noteStudenti = {
    John: [8, 7,9],
    Mary: [9, 9, 10],
    Alex: [6, 8, 7]
};

function calculMedii(noteStudenti) {
    const medii = {};

    for (const student in noteStudenti) {
        const note = noteStudenti[student];
        const sumaNotelor = note.reduce((acc, nota) => acc + nota, 0);
        const media = sumaNotelor / note.length;
        medii[student] = `Medie: ${media.toFixed(2)}`;
    }

    return medii;
}



const mediiStudenti = calculMedii(noteStudenti);
console.log(mediiStudenti);





// function caractereInversate(mesaj) {
//     const sirInversat = mesaj.split('').reverse().join('');
//     return sirInversat
// }

// const input = 'Hello World!';
// const output = caractereInversate(input);
// console.log(output);





// function esteSauNuPalindrom(sir) {

//     const sirInversat = sir.split('').reverse().join('');

//     return sir === sirInversat;
// }

// const input = 'level';
// const palindrom = esteSauNuPalindrom(input);
// console.log(palindrom);







// function sortareCifre(array) {
//     const numarImpar = array.filter(numar => numar % 2 === 1).sort((a, b) => a - b);
//     const numarPar = array.filter(numar => numar % 2 === 0).sort((a, b) => b - a);
//     return numarImpar.concat(numarPar);
// }

// const input = [4, 6, 7, 8, 1, 2, 3];
// const output = sortareCifre(input);

// console.log(output);