function star(num) {
  // pola 1 => baris yang terconsole log = 2 kali dari num

  // dua pattern => pattern segitiga (num baris) dan pattern trapesium (num baris)

  // membuat segitiga

  // pattern => spasi sebelum *, semakin ke bawah spasinya selalu berkurang 1
  // pattern => * => dia selalu bertambah 2 => dia selalu mulai dari 1 binatng

  // pattern spasi

  // ketika star 1 => 1
  // ketika star 2 => 4
  // ketika star 3 => 7
  // ketika star 4 => 10


  let spasiAtas = 1
  let segitiga = 1

  for (let i = 1; i < num; i++) {
    spasiAtas += 3
  }
  for (let i = 0; i < num; i++) {
    let temp = ''
    // membuat spasi
    for (let j = 0; j < spasiAtas; j++) {
      temp += ' '
    }

    // membuat bintang
    for (let j = 0; j < segitiga; j++) {
      temp += '*'
    }
    spasiAtas --
    segitiga += 2
    console.log(temp)
  }

  // membuat trapesium

  // patternnya ada spasi sebelum bintang
  // spasinya bertambah 2

  // pattern trapesium

  // ketika star 1 => 3
  // ketika star 2 => 9
  // ketika star 3 => 15
  // ketika star 4 => 21

  let trapesium = 3
  for (let i = 1; i < num; i++) {
    trapesium += 6
  }

  let spasiBawah = 0
  for (let i = 0; i < num; i++) {
    let temp = ''
    for (let j = 0; j < spasiBawah; j++) {
      temp += ' '
    }

    for (let j = 0; j < trapesium; j++) {
      temp += '*'
    }

    spasiBawah += 2
    trapesium -= 4

    console.log(temp)
  }
}

star(4)