// koding di sini

// for (inisialisasi; menentukan batas; operasi yang dilakukan pada counter)

for (let i = 1; i <= 100; i += 3) {

  // menampung jenis angka => ganjil/genap
  let jenisAngka;

  // 5 : 2 = 2 sisa 1
  // Math.floor(5 / 2)
  // 5 % 2 = 1

  // genap => semuanya bisa dibagi 2 tanpa sisa
  // ganjil => semuanya bisa dibagi 2 tapi sisa 1
  if (i % 2 === 0) {
    jenisAngka = 'genap'
  } else {
    jenisAngka = 'ganjil'
  }
  console.log(i + ' - ' + jenisAngka )
}

