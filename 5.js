let kata = 'katak' // string

let result = ''
// looping dari indeks awal ke indeks akhir
// for (let i = 0; i < kata.length; i++) {

// }

function length(kata) {
  let indeks = 0

  while(kata[indeks] !== undefined) {
    indeks ++
  }
  return indeks
}

for (let i = length(kata) - 1; i >= 0; i--) {
  result += kata[i]
}

console.log(result === kata)