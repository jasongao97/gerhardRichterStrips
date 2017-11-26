let CANVAS_WIDTH = document.documentElement.clientWidth - 160
let CANVAS_HEIGHT = Math.min(document.documentElement.clientHeight - 400, CANVAS_WIDTH + 200)

function normal() {
  return (Math.random() + Math.random()) / 2
}

function getRandomColor(where) {
  let Hue
  let choice = Math.round(Math.random())
  if (choice == 1) {
    Hue = (normal() * 55 + where) % 360
  } else {
    Hue = (normal() * 75 + 180 + where) % 360
  }
  return hsv2rgb([Hue, Math.random() * 60 + 20, Math.random() * 60 + 30])
}

function setup() {
  // put setup code here
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)

  let colors = []
  let Hueplace = normal() * 60 + 140
  console.log(Hueplace)
  for (let i = 0; i < 500; i++) {
    colors.push(getRandomColor(Hueplace))
  }
  let singleHeight = CANVAS_HEIGHT / colors.length

  noStroke()
  let positionY = 0
  colors.forEach(function (rgbcolor) {
    c = color(rgbcolor)
    fill(c)
    let lineHeight = singleHeight * (Math.random() * 2 + 1)
    rect(0, positionY, CANVAS_WIDTH, lineHeight)
    positionY += lineHeight
  })

  var h1 = createElement("h1","格哈德·里希特的线")
  var ap = createP("<a href='https://www.gerhard-richter.com/en/art/paintings/abstracts/strips-93'>Strip by Gerhard Richter</a>")
}

function draw() {
  // put drawing code here
  let p = document.getElementsByTagName('p')
  let heading = document.getElementsByTagName('h1')
  if (CANVAS_WIDTH < 1000) {
    p[0].style.fontSize = '30px'
    heading[0].style.fontSize = '70px'
  }
  
}