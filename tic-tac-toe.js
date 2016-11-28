// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var turn = "player1"
function makeShape1() {
  if(turn == "player1") {
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 74)
    circle.setAttribute("cy", 75)
    circle.setAttribute("r", 20)
    var canvas = document.
    turn = "player2"
  } else{
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", 74)
    rect.setAttribute("y", 75)
    rect.setAttribute("width", 20)
    rect.setAttribute("height", 20)
    turn = "player1"
  }
}

function midLeft() {
  if(turn == "player1"){
    var circle = documnet.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 74)
    circle.setAttribute("cy", 75)
    circle.setAttribute("r", 20)
    turn = "player2"
  }else{
    //create rect in top middle
    turn = "player1"
  }
}

function makeShape1() {
  var turn = "player1"
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 74)
  circle.setAttribute("cy", 75)
  circle.setAttribute("r", 20)
  circle.setAttribute("fill", "red")
  canvas.appendChild(circle)
  currentShape = "rect"
  } else{
  var turn = "player2"
  var canvas = document.getElementById("game-board")
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", 74)
  rect.setAttribute("y", 75)
  rect.setAttribute("width", 20)
  rect.setAttribute("height", 20)
  canvas.appendChild(rect)
  currentShape = "circle"
  }
}

function makeShape2() {
  var turn = "player1"
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 74)
  circle.setAttribute("cy", 125)
  circle.setAttribute("r", 20)
  circle.setAttribute("fill", "blue")
  canvas.appendChild(circle)
  currentShape = "rect"
  } else{
  var turn = "player2"
  var canvas = document.getElementById("game-board")
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", 74)
  rect.setAttribute("y", 125)
  rect.setAttribute("width", 20)
  rect.setAttribute("height", 20)
  canvas.appendChild(rect)
  currentShape = "circle"
  }
}

function makeShape3() {
  var turn = "player1"
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 74)
  circle.setAttribute("cy", 175)
  circle.setAttribute("r", 20)
  circle.setAttribute("fill", "purple")
  canvas.appendChild(circle)
  currentShape = "rect"
  } else {
  var turn = "player2"
  var canvas = document.getElementById("game-board")
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", 74)
  rect.setAttribute("y", 175)
  rect.setAttribute("width", 20)
  rect.setAttribute("height", 20)
  canvas.appendChild(rect)
  currentShape = "circle"
  }
}

function makeShape4() {
  var turn = "player1"
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 125)
  circle.setAttribute("cy", 75)
  circle.setAttribute("r", 20)
  circle.setAttribute("fill", "green")
  canvas.appendChild(circle)
  currentShape = "rect"
  } else {
  var turn = "player2"
  var canvas = document.getElementById("game-board")
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", 125)
  rect.setAttribute("y", 75)
  rect.setAttribute("width", 20)
  rect.setAttribute("height", 20)
  canvas.appendChild(rect)
  currentShape = "circle"
  }
}

function makeShape5() {
  var turn = "player1"
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 125)
  circle.setAttribute("cy", 125)
  circle.setAttribute("r", 20)
  circle.setAttribute("fill", "white")
  canvas.appendChild(circle)
  currentShape = "rect"
  } else {
  var turn = "player2"
  var canvas = document.getElementById("game-board")
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", 125)
  rect.setAttribute("y", 125)
  rect.setAttribute("width", 20)
  rect.setAttribute("height", 20)
  canvas.appendChild(rect)
  currentShape = "circle"
  }
}

function makeShape6() {
  var turn = "player1"
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 125)
  circle.setAttribute("cy", 175)
  circle.setAttribute("r", 20)
  circle.setAttribute("fill", "cyan")
  canvas.appendChild(circle)
  currentShape = "rect"
  } else {
  var turn = "player2"
  var canvas = document.getElementById("game-board")
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", 125)
  rect.setAttribute("y", 175)
  rect.setAttribute("width", 20)
  rect.setAttribute("height", 20)
  canvas.appendChild(rect)
  currentShape = "circle"
  }
}

function makeShape7() {
  var turn = "player1"
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 175)
  circle.setAttribute("cy", 75)
  circle.setAttribute("r", 20)
  circle.setAttribute("fill", "magenta")
  canvas.appendChild(circle)
  currentShape = "rect"
  } else {
  var turn = "player2"
  var canvas = document.getElementById("game-board")
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", 175)
  rect.setAttribute("y", 75)
  rect.setAttribute("width", 20)
  rect.setAttribute("height", 20)
  canvas.appendChild(rect)
  currentShape = "circle"
  }
}

function makeShape8() {
  var turn = "player1"
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 175)
  circle.setAttribute("cy", 125)
  circle.setAttribute("r", 20)
  circle.setAttribute("fill", "gold")
  canvas.appendChild(circle)
  currentShape = "rect"
  } else {
  var turn = "player2"
  var canvas = document.getElementById("game-board")
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", 175)
  rect.setAttribute("y", 125)
  rect.setAttribute("width", 20)
  rect.setAttribute("height", 20)
  canvas.appendChild(rect)
  currentShape = "circle"
  }
}

function makeShape9() {
  var turn = "player1"
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 175)
  circle.setAttribute("cy", 175)
  circle.setAttribute("r", 20)
  circle.setAttribute("fill", "skyblue")
  canvas.appendChild(circle)
  currentShape = "rect"
  } else {
  var turn = "player2"
  var canvas = document.getElementById("game-board")
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", 175)
  rect.setAttribute("y", 175)
  rect.setAttribute("width", 20)
  rect.setAttribute("height", 20)
  canvas.appendChild(rect)
  currentShape = "circle"
  }
}
