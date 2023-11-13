'use strict';
const lista = []
const candidates = parseInt(prompt("Number of candidates " ))
let candidate_number = 1

for (let i = 0; i < candidates; i++) {
    let names = prompt("Name for canditate " + candidate_number + " ")
    candidate_number++
    let candidate = {
        name: names,
        votes: 0
    };
    lista.push(candidate)
}

const voters = parseInt(prompt("Number of voters " ))

let voter_number = 1
for (let i = 0; i < voters; i++) {
    let vote = prompt("Who will you vote " + voter_number + " ")
    voter_number++
    if (vote) {
        for (let j = 0; j < lista.length; j++) {
            if (lista[j].name == vote) {
                lista[j].votes++
            }
        }
}
}
lista.sort((a, b) => {
    return b.votes - a.votes;
});
console.log("The winner is " + lista[0].name + " with " + lista[0].votes + " votes.")
console.log("results:")
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i].name + ": " + lista[i].votes + " votes");
}
