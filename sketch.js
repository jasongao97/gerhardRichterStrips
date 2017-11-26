let CANVAS_WIDTH = document.documentElement.clientWidth - 160
let CANVAS_HEIGHT = document.documentElement.clientHeight - 320

function getRandomColor(type) {
  let Hue
  let choice = Math.round(Math.random())
  if (choice == 1) {
    Hue = Math.random() * 55
  } else {
    Hue = Math.random() * 75 + 180
  }
  return hsv2rgb([Hue, Math.random() * 60 + 20, Math.random() * 60 + 30])
}

function setup() {
  // put setup code here
  console.log(document.documentElement.clientWidth)
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)

  let colors = []
  for (let i = 0; i < 600; i++) {
    colors.push(getRandomColor())
  }
  let singleHeight = CANVAS_HEIGHT / colors.length

  noStroke()
  let positionY = 0
  colors.forEach(function (rgbcolor) {
    c = color(rgbcolor);
    fill(c)
    let lineHeight = singleHeight * (Math.random() * 2 + 1)
    rect(0, positionY, CANVAS_WIDTH, lineHeight)
    positionY += lineHeight
  })
}

function draw() {
  // put drawing code here
  
}