function caesar_encrypt (str, num) {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  let result = ''
  for (let i = 0; i < str.length; i++) {
    let is_changed = false;
    for (let j = 0; j < lowercase.length; j++) {
      if (str[i] === lowercase[j]) {
        is_changed = true
        if ((j + num) > 25) {
          result += lowercase[j + num - 26]
        } else {
          result += lowercase[j + num]
        }
      }
    }
    for (let j = 0; j < uppercase.length; j++) {
      if (str[i] === uppercase[j]) {
        is_changed = true
        if ((j + num) > 25) {
          result += uppercase[j + num - 26]
        } else {
          result += uppercase[j + num]
        }
      }
    }

    // memasukkan karakter khusus yang tidak diubah
    if (is_changed == false) {
      result += str[i]
    }
  }
  return result;
}


function caesar_decrypt(str, num) {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  let result = ''
  for (let i = 0; i < str.length; i++) {
    let is_changed = false;
    for (let j = 0; j < lowercase.length; j++) {
      if (str[i] === lowercase[j]) {
        is_changed = true
        if ((j - num) < 0) {
          result += lowercase[j - num + 26]
        } else {
          result += lowercase[j - num]
        }
      }
    }
    for (let j = 0; j < uppercase.length; j++) {
      if (str[i] === uppercase[j]) {
        is_changed = true
        if ((j - num) < 0) {
          result += uppercase[j - num + 26]
        } else {
          result += uppercase[j - num]
        }
      }
    }

    // memasukkan karakter khusus yang tidak diubah
    if (is_changed == false) {
      result += str[i]
    }
  }
  return result;
}


console.log(caesar_encrypt('xyz1', 2))
console.log(caesar_decrypt('zab1', 2))

// a => z (1 => mundur 1 => 26) (j - num + 26 < 0)
// b => 2 kali => z (2 => mundur 2 => 26)