let shootTwo = document.getElementById("shoot2")
let shootThree = document.getElementById("shoot3")
let teamOneScore = 0
let teamTwoScore = 0
let teamShoot = document.getElementById("teamTwoShoot")
let teamShoot3 = document.getElementById("teamTwoShoot3")


function shoot() {
teamOneScore += 2
console.log(teamOneScore)
draw()
}
function shoot3(){
  teamOneScore += 3
  console.log(teamOneScore)

  draw()
}
function teamTwoShoot() {
  teamTwoScore += 2
console.log(teamTwoScore)
  draw()
}
function teamTwoShoot3(){
  teamTwoScore +=3
console.log(teamTwoScore)
  draw()
}
function draw(){
  let one = document.getElementById("teamOneScore")
  let two = document.getElementById("teamTwoScore")
  one.innerText = teamOneScore
  two.innerText = teamTwoScore
}