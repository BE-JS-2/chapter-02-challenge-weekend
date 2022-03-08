// koding di sini
// reverse, split, join
// method dalam array => built-in function 
// looping array => membutuhkan panjang array => length
// membuat function => mencari length dari array

let kata = 'Javascript' // string

// string mempunyai indeks dan bisa dilooping seperti array
// let numbers = [1, 2, 3]
// numbers[0] = 0
// let str = 'Javascript' => Kavascript
// str[0] = 'K' => tidak bisa

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

console.log(result)