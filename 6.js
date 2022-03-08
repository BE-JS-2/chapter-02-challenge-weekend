// toLowercase() dan toUppercase() => dilarang

const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

let names = ['ade', 'adi', 'febryan', 'Aqrom']
const dictionary = {
  a: 'A',
  b: 'B',
  c: 'C',
  d: 'D',
  e: 'E',
  f: 'F',
  g: 'G',
  h: 'H',
  i: 'I',
  j: 'J',
  k: 'K',
  l: 'L',
  m: 'M',
  n: 'N',
  o: 'O',
  p: 'P',
  q: 'Q',
  r: 'R',
  s: 'S',
  t: 'T',
  u: 'U',
  v: 'V',
  w: 'W',
  x: 'X',
  y: 'Y',
  z: 'Z'
}

// berfungsi menampung nama-nama yang depannya sudah huruf kapital
let result = []
// for (let i = 0; i < names.length; i++) {
//   let temp = ''
//   temp += dictionary[names[i][0]] || names[i][0]
//   for (let j = 1; j < names[i].length; j++) {
//     temp += names[i][j]
//   }
//   result.push(temp)
// }

// console.log(result)

for (let i = 0; i < names.length; i++) {
  let temp = ''
  let isUppercase = false
  for (let k = 0; k < lowercase.length; k++) {
    if (lowercase[k] === names[i][0]) {
      console.log(uppercase[k])
      temp += uppercase[k]
      isUppercase = true
      break;
    }
  }
  if (isUppercase === false) {
    temp += names[i][0]
  }
  for (let j = 1; j < names[i].length; j++) {
    temp += names[i][j]
  }
  result.push(temp)
}

console.log(result)