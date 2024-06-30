let score1 = 0;
let score2 = 0;

const score1Container = document.getElementById("score1")
const score1Add = document.getElementById("add1")
const score1Sub = document.getElementById("sub1")

const score2Container = document.getElementById("score2")
const score2Add = document.getElementById("add2")
const score2Sub = document.getElementById("sub2")

const reset0Button = document.getElementById("reset0")
const reset20Button = document.getElementById("reset20")

const add1 = () => {
  score1 += 1
  score1Container!.innerHTML = score1.toString()
}
score1Add!.onclick = add1

const sub1 = () => {
  score1 -= 1
  score1Container!.innerHTML = score1.toString()
}
score1Sub!.onclick = sub1

const add2 = () => {
  score2 += 1
  score2Container!.innerHTML = score2.toString()
}
score2Add!.onclick = add2

const sub2 = () => {
  score2 -= 1
  score2Container!.innerHTML = score2.toString()
}
score2Sub!.onclick = sub2

const reset0 = () => {
  score1 = 0
  score2 = 0

  score1Container!.innerHTML = score1.toString()
  score2Container!.innerHTML = score2.toString()
}
reset0Button!.onclick = reset0

const reset20 = () => {
  score1 = 20
  score2 = 20

  score1Container!.innerHTML = score1.toString()
  score2Container!.innerHTML = score2.toString()
}
reset20Button!.onclick = reset20

reset0()
