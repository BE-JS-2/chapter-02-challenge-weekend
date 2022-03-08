// koding di sini

let rows = 5
// baris 1 => 5
// baris 2 => 4
// baris 3 => 3
// dst
// baris 5 => 1

for (let i = 0; i < rows; i++) {
  let result = ''

  // batas looping ini dinamis => mengikuti hitungan i yang ada di luar
  for (let j = 1; j <= rows - i; j++) {
    result += '*'
  }
  console.log(result)
}