let CANVAS_WIDTH = document.documentElement.clientWidth - 160
let CANVAS_HEIGHT = Math.min(document.documentElement.clientHeight - 300, CANVAS_WIDTH)

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
  for (let i = 0; i < 500; i++) {
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

  var h2 = createElement("h1","Gerhard Richter's strips")
  var pass = createP("The stripe configuration is not systematic, but the result of a partly random process. With not enough time to paint while preparing for his recent European retrospective, Richter turned to the computer, running a digital photo of one of his 1990 “scraped” paintings through software that essentially deconstructed it, dividing, mirroring and repeat- ing ever-reduced sections until the image was distilled to its chromatic essence. The formalist in Richter then took over, organizing the linear segments into unique compositions, 18 in this exhibition, ranging in size from moderate (20 by 56 inches) to monumental: 6 feet high and nearly 20 feet long, the largest bisected with minute vertical seams. All the prints are mounted between Plexiglas and aluminum.")
}

function draw() {
  // put drawing code here
  
}