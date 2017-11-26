let CANVAS_WIDTH = document.documentElement.clientWidth - 160
let CANVAS_HEIGHT = Math.min(document.documentElement.clientHeight - 400, CANVAS_WIDTH + 200)

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
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)

  let colors = []
  for (let i = 0; i < 500; i++) {
    colors.push(getRandomColor())
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
  var pass = createP("八月份的时候和朋友去看了格哈德·里希特的展，7副作品<a href='https://www.instagram.com/p/BXufBJLD0Xd'>看了拍了</a>俩小时，可以说是非常喜欢了。于是写了个页面，刷新生成新的线条。")
  var ap = createP("原作地址： <a href='https://www.gerhard-richter.com/en/art/paintings/abstracts/strips-93'>Strip by Gerhard Richter</a>")
}

function draw() {
  // put drawing code here
  let p = document.getElementsByTagName('p')
  let heading = document.getElementsByTagName('h1')
  if (CANVAS_WIDTH < 1000) {
    p[0].style.fontSize = '30px'
    p[0].style.lineHeight = '50px'
    p[1].style.fontSize = '30px'
    heading[0].style.fontSize = '70px'
  }
  
}