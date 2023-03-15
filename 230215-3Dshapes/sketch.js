const container = document.getElementById('p5-container')
// make sure there is a #p5-container in index.html.

// Canvas Vars
let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side

let rnd = Math.random()



const zero = {
    x: canW/4,
    y: canH/4,
    z: 0
}


let ext = canW/4

let img
function preload() {
    img = loadImage('aa.jpg');
  }


// p5 Setup
function setup() {
    //initial setup of canvas and container
    let canvas = createCanvas(canW,canH, WEBGL)
    canvas.parent(container)
    console.log(img)
}

// p5 Draw
function draw() {
    pointLight(255, 255, 255, width, 0, width)
    orbitControl()
    translate(-width/2, -height/2)
    background(0,255,0)
    drawGuides(10,10, 240)

    // fill(255)
    texture(img)

    plane(img.width, img.height)

    beginShape()

    vertex(zero.x, zero.y, -ext, img.width, img.height)

    vertex(zero.x, zero.y, -ext, 0, 0)
    vertex(zero.x, zero.y + height/4, -ext, 3000, 1000)
    vertex(zero.x + width/4, zero.y + height/4, -ext, 0, 0)
    vertex(zero.x + width/4, zero.y + height/2, -ext, 0, 0)

    vertex(zero.x + width/4, zero.y + height/2, ext, 0, 0)
    vertex(zero.x + width/4, zero.y + height/4, ext, 0, 0)
    vertex(zero.x, zero.y + height/4, ext, 0, 0)
    vertex(zero.x, zero.y, ext, 0, 0)

    endShape(CLOSE)

    // image(img, 0, 0)

}