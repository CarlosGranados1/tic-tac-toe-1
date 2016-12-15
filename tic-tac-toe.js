// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var currentPlayer = 1
var topleftclick = 007
function makeShape1(){
  if (currentPlayer == 1){
    if (topleftclick == 007) {
      var circle = document.createElementNS(namespace, "circle")
      circle.setAttribute("cx", "75")
      circle.setAttribute("cy", "75")
      circle.setAttribute("r", "20")
      circle.setAttribute("fill", "red")
      var canvas = document.getElementById("game-board")
      canvas.appendChild(circle)
      topleftclick= "spy"
      currentPlayer= 2
  }
}else if (currentPlayer == 2){
  if (topleftclick == 007) {
    var square = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", "75")
    rect.setAttribute("y", "75")
    rect.setAttribute("height", "25")
    rect.setAttribute("width", "25")
    rect.setAttribute("fill", "blue")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    topleftfclick= "spy"
    currentPlayer= 1
    }
  }
}

var topMiddleClick= 007
function makeShape2(){
  if (currentPlayer == 1){
    if (topMiddleClick == 007){
      var circle = document.createElementNS(namespace, "circle")
      circle.setAttribute("cx", "75")
      circle.setAttribute("cy", "85")
      circle.setAttribute("r", "20")
      circle.setAttribute("fill", "blue")
      var canvas = document.getElementById("game-board")
      canvas.appendChild(circle)
      topMiddleClick= "spy"
      currentPlayer= 2
    }
  }else if (currentPlayer == 2) {
    if (topMiddleClick == 007){
      var square = document.createElementNS(namespace, "rect")
      rect.setAttribute("x", "110")
      rect.setAttribute("y", "10")
      rect.setAttribute("height", "80")
      rect.setAttribute("width", "80")
      rect.setAttribute("fill", "blue")
      var canvas = document.getElementById("game-board")
      canvas.appendChild(rect)
      topMiddleClick= "spy"
      currentPlayer= 1
    }
  }
}

  var topRightClick= 007
  function makeShape3(){
    if (currentPlayer == 1){
      if (topRightClick == 007){
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", "250")
    circle.setAttribute("cy", "50")
    circle.setAttribute("r", "50")
    circle.setAttribute("fill", "red")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(circle)
    topRightClick= "spy"
    currentPlayer= 2
    }
}else if (currentPlayer == 2) {
  if (topRightClick == 007){
    var square = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", "210")
    rect.setAttribute("y", "10")
    rect.setAttribute("height", "80")
    rect.setAttribute("width", "80")
    rect.setAttribute("fill", "blue")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    topRightClick= "spy"
    currentPlayer= 1
    }
  }
}
var middleLeftClick= 007
function makeShape4(){
  if (currentPlayer == 1){
    if (middleLeftClick == 007){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "50")
  circle.setAttribute("cy", "150")
  circle.setAttribute("r", "50")
  circle.setAttribute("fill", "red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  middleLeftClick= "spy"
  currentPlayer= 2
  }
}else if (currentPlayer == 2) {
  if (middleLeftClick == 007){
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", "10")
    rect.setAttribute("y", "110")
    rect.setAttribute("height", "80")
    rect.setAttribute("width", "80")
    rect.setAttribute("fill", "blue")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    middleLeftClick= "spy"
    currentPlayer= 1
    }
  }
}
var middleClick= 007
function makeShape5(){
  if (currentPlayer == 1){
    if (middleClick == 007){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "150")
  circle.setAttribute("cy", "150")
  circle.setAttribute("r", "50")
  circle.setAttribute("fill", "red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  middleClick= "spy"
  currentPlayer= 2
  }
}else if (currentPlayer == 2) {
  if (middleClick == 007){
    var square = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", "110")
    rect.setAttribute("y", "110")
    rect.setAttribute("height", "80")
    rect.setAttribute("width", "80")
    rect.setAttribute("fill", "blue")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    middleClick= "spy"
    currentPlayer= 1
    }
  }
}
var middleRightClick= 007
function makeShape6(){
  if (currentPlayer == 1){
    if (middleRightClick == 007){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "250")
  circle.setAttribute("cy", "150")
  circle.setAttribute("r", "50")
  circle.setAttribute("fill", "red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  middleRightClick= "spy"
  currentPlayer= 2
  }
}else if (currentPlayer == 2) {
  if (middleRightClick == 007){
    var square = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", "210")
    rect.setAttribute("y", "110")
    rect.setAttribute("height", "80")
    rect.setAttribute("width", "80")
    rect.setAttribute("fill", "blue")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    middleRightClick= "spy"
    currentPlayer= 1
    }
  }
}
var bottomLeftClick= 007
function makeShape7(){
  if (currentPlayer == 1){
    if (bottomLeftClick == 007){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "50")
  circle.setAttribute("cy", "250")
  circle.setAttribute("r", "50")
  circle.setAttribute("fill", "red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  bottomLeftClick= "spy"
  currentPlayer= 2
  }
}else if (currentPlayer == 2) {
  if (bottomLeftClick == 007){
    var square = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", "10")
    rect.setAttribute("y", "210")
    rect.setAttribute("height", "80")
    rect.setAttribute("width", "80")
    rect.setAttribute("fill", "blue")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    bottomLeftClick= "spy"
    currentPlayer= 1
    }
  }
}
var bottomMiddleClick= 007
function makeShape8(){
  if (currentPlayer == 1){
    if (bottomMiddleClick == 007){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "150")
  circle.setAttribute("cy", "250")
  circle.setAttribute("r", "50")
  circle.setAttribute("fill", "red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  bottomMiddleClick= "spy"
  currentPlayer= 2
  }
}else if (currentPlayer == 2) {
  if (bottomMiddleClick == 007){
    var square = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", "110")
    rect.setAttribute("y", "210")
    rect.setAttribute("height", "80")
    rect.setAttribute("width", "80")
    rect.setAttribute("fill", "blue")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    bottomMiddleClick= "spy"
    currentPlayer= 1
    }
  }
}
var bottomRightClick= 007
function makeShape9(){
  if (currentPlayer == 1){
    if (bottomRightClick == 007){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "250")
  circle.setAttribute("cy", "250")
  circle.setAttribute("r", "50")
  circle.setAttribute("fill", "red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  bottomRightClick= "spy"
  currentPlayer= 2
  }
}else if (currentPlayer == 2) {
  if (bottomRightClick == 007){
    var square = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", "210")
    rect.setAttribute("y", "210")
    rect.setAttribute("height", "80")
    rect.setAttribute("width", "80")
    rect.setAttribute("fill", "blue")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    bottomRightClick= "spy"
    currentPlayer= 1
    }
  }
}
