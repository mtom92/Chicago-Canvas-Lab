document.addEventListener("DOMContentLoaded",main)

function main(){

  var canvas = document.getElementById("canvas")
  var ctx = canvas.getContext("2d")

//set some dimensions
canvas.width = 800
canvas.height = 800

//give the context some context
ctx.width = canvas.width
ctx.height = canvas.height

function cell(x,y,size){
  ctx.fillRect(x,y,size,size)
       }

  cell(0,0,100)     

}
