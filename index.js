// const notesCount = prompt("Veuillez saisir le nombre de notes");
// let notes = [];
//
// for (let i = 1; i <= notesCount; i++) {
//     notes.push(parseFloat(prompt("Saisissez la note N°" + i)));
// }
//
// let moyenne = 0;
// for (let i = 0; i < notes.length; i++) {
//     moyenne += notes[i];
// }
// moyenne /= notes.length;
//
// alert("Votre moyenne est de " + moyenne.toFixed(2));


// en utilisant la boucle for of
const notesCount = prompt("Veuillez saisir le nombre de notes");
let notes = [];

for (let i = 1; i <= notesCount; i++) {
    notes.push(parseFloat(prompt("Saisissez la note N°" + i)));
}

let moyenne = 0;
for (let n of notes) {
    moyenne += n;
}
moyenne /= notes.length;

alert("Votre moyenne est de " + moyenne.toFixed(2));

// notes !