// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
function makeShape1() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 74)
  circle.setAttribute("cy", 75)
  circle.setAttribute("r", 20)
  circle.setAttribute("fill", "red")
  canvas.appendChild(circle)
}

function makeShape2() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 74)
  circle.setAttribute("cy", 125)
  circle.setAttribute("r", 20)
  circle.setAttribute("fill", "blue")
  canvas.appendChild(circle)
}

function makeShape3() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 74)
  circle.setAttribute("cy", 175)
  circle.setAttribute("r", 20)
  circle.setAttribute("fill", "purple")
  canvas.appendChild(circle)
}

function makeShape4() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 125)
  circle.setAttribute("cy", 75)
  circle.setAttribute("r", 20)
  circle.setAttribute("fill", "green")
  canvas.appendChild(circle)
}

function makeShape5() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 125)
  circle.setAttribute("cy", 125)
  circle.setAttribute("r", 20)
  circle.setAttribute("fill", "white")
  canvas.appendChild(circle)
}

function makeShape6() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 125)
  circle.setAttribute("cy", 175)
  circle.setAttribute("r", 20)
  circle.setAttribute("fill", "cyan")
  canvas.appendChild(circle)
}

function makeShape7() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 175)
  circle.setAttribute("cy", 75)
  circle.setAttribute("r", 20)
  circle.setAttribute("fill", "magenta")
  canvas.appendChild(circle)
}

function makeShape8() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 175)
  circle.setAttribute("cy", 125)
  circle.setAttribute("r", 20)
  circle.setAttribute("fill", "gold")
  canvas.appendChild(circle)
}

function makeShape9() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 175)
  circle.setAttribute("cy", 175)
  circle.setAttribute("r", 20)
  circle.setAttribute("fill", "skyblue")
  canvas.appendChild(circle)
}
