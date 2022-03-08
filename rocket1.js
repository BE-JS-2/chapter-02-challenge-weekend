function gameControl(gameBoard, controller) {
  // memindahkan bintang => mengubah indeks 

  // menemukan indeks dari bintang (menemukan posisi dari bintangnya)

  let horizontal = 0
  let vertikal = 0

  // menemukan posisi bintang
  for (let i = 0; i < gameBoard.length; i++) {
    let found = false
    for (let j = 0; j < gameBoard[i].length; j++) {
      if (gameBoard[i][j] === '*') {
        horizontal = j
        vertikal = i
        found = true
        gameBoard[i][j] = ""
        break;
      }
    }

    if (found === true) {
      break;
    }
  }

  // memindah-mindahkan bintang sesuai dengan controller

  for (let i = 0; i < controller.length; i++) {
    switch (controller[i]) {
      case '↑':
        if (vertikal - 1 >= 0) {
          vertikal --
        }
        break;
      case '↓':
        if (vertikal + 1 <= gameBoard.length - 1) {
          vertikal ++
        }
        break;
      case '→':
        if (horizontal + 1 <= gameBoard[0].length - 1) {
          horizontal ++
        }
        break;
      case '←':
        if (horizontal - 1 >= 0) {
          horizontal --
        }
        break;
    }
  }

  gameBoard[vertikal][horizontal] = '*'
  return gameBoard
}
let board1 = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '*', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', '']
]
console.log(gameControl(board1, ['←', '←', '←', '↑']))