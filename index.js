const formatter = new Intl.NumberFormat('id-ID', {
  style: 'decimal',
})

function ask(number, status) {
  let a = Math.floor((Math.random() * 1000000) / 100) * 100
  let b = Math.floor((Math.random() * 10) / 2) * 2
  let c = Math.floor((Math.random() * 1000000) / 100) * 100
  let d = Math.floor((Math.random() * 1000000) / 100) * 100
  let op = ['*', '/'][Math.floor(Math.random() * 2)]
  let op2 = ['+', '-'][Math.floor(Math.random() * 2)]
  if (status === 'a') {
    return console.log(
      number +
        '. Berapa hasil dari ' +
        formatter.format(a) +
        ' ' +
        op +
        ' ' +
        formatter.format(b) +
        '?'
    )
  } else if (status === 'b') {
    return console.log(
      number +
        '. Berapa hasil dari ' +
        formatter.format(c) +
        ' ' +
        op2 +
        ' ' +
        formatter.format(d)
    )
  } else {
    return
  }
}

for (let i = 0; i < 100; i++) {
  let param = ['a', 'b'][Math.floor(Math.random() * 2)]

  ask(i + 1, param)
}
