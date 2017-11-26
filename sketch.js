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

  var h1 = createElement("h1","格哈德·里希特的线")
  var pass = createP("八月份的时候和朋友去看了格哈德·里希特的展，虽说一共也就没展出几副作品也还是<a href='https://www.instagram.com/p/BXufBJLD0Xd'>看了拍了</a>俩小时，可以说是非常喜欢了。后来再想起来突然想写个生成类似抽象线条的程序，然后就有了这个页面。可惜不会机器学习，只好自己观察分析写了几条生成规律，等以后再升级！")
  var ap = createP("<a href='https://www.gerhard-richter.com/en/art/paintings/abstracts/strips-93'>原作地址</a>")
}

function draw() {
  // put drawing code here
  
}