// koding di sini

let lebar = 5
let tinggi = 3

for (let i = 1; i <= tinggi; i++) {
  let result = ''
  for (let j = 1; j <= lebar; j++) {
    if (i === 1 || i === tinggi) {
      result += '*'
    } else {
      if (j === 1 || j === lebar) {
        result += '*'
      } else {
        result += ' '
      }
    }
  }
  console.log(result)
}