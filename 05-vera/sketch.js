const rectSize = 400
const displacementFactor = 0.15

function setup() {
  cnv = createCanvas(w = 600, h = 600);
  bg = 230
  frameRate(1)
}

function draw() {
  background(bg)
  rectMode(CENTER)
  noStroke()
  
  let stepSize = rectSize / 22
  for (let i = 0; i < 20; i++) {
    i % 2 ? fill(bg) : fill(0)
    if (frameCount % 4 == 1 || frameCount % 4 == 3) {
      rect(w / 2, h / 2, rectSize - i * stepSize)
      continue
    } else if (frameCount % 4 == 2) {
      let dx = random(rectSize * displacementFactor) * random([-1, 1]) % stepSize;
      let dy = random(rectSize * displacementFactor) * random([-1, 1]) % stepSize;
      rect(w / 2 + dx, h / 2 + dy, rectSize - i * stepSize);
      continue
    } else if (frameCount % 4 == 0) {
      let dx = floor(random(rectSize * displacementFactor) * random([-1, 1]) / stepSize) * stepSize;
      let dy = floor(random(rectSize * displacementFactor) * random([-1, 1]) / stepSize) * stepSize;
      rect(w / 2 + dx, h / 2 + dy, rectSize - i * stepSize);
    }
  }
}
