function hitungAlphabet(str) {
  let result = {
    huruf: {
      vokal: 0,
      konsonan: 0
    },
    panjang: str.length
  }

  let consonants = 'bcdfghjklmnpqrstvwxyz'
  let vocals = 'aiueo'


  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < consonants.length; j++) {
      if (str[i].toLowerCase() === consonants[j]) {
        result.huruf.konsonan ++
        break;
      }
    }
    for (let j = 0; j < vocals.length; j++) {
      if (str[i].toLowerCase() === vocals[j]) {
        result.huruf.vokal ++
        break;
      }
    }
  }
  return result
}

console.log(hitungAlphabet('When I Get Older Losing My Hair'))