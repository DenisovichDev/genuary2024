// Genuary2024 Day 3: Droste Effect
// Denisovich

let textResponse, code;
let started = false;

async function setup() {
    l = min(windowWidth, windowHeight)
    l = 600
    cnv = createCanvas(w = l / 0.8, h = l)

    const response = await fetch('http://127.0.0.1:8080/sketch.js');
    textResponse = await response.text();
    code = textResponse.split('\n').join('\n');
    started = true;
}

function draw() {
    background("#414b55")
    if (!started) return;
    drawBrowser();
    drawCodeEditor();
    drawLaptop();
}

function drawCodeEditor() {
    push()
    translate(w / 2, 0);
    fill(0, 150);
    strokeWeight(0.5)
    stroke("#757575")
    rect(0, 0, w / 2, h);

    // tabline
    noStroke()
    fill("#89ddff");
    rect(5, 15, 50, 15);
    fill("#3b3f51");
    rect(55, 15, w / 2 - 60, 15);
    fill("#1f2233");
    rect(w / 2 - 55, 15, 50, 15);

    // tab texts
    textFont('Courier New');
    textSize(8);
    textStyle(BOLD);
    fill(0);
    text("sketch.js", 7, 19, 40, 40);
    fill("#8f93a2");
    text("index.html <> |...|", 58, 19, 100, 40);
    text("buffers", w / 2 - 51, 19, 100, 40);

    // editor
    fill("#0f111a");
    rect(5, 30, w / 2 - 10, h - 35);

    // code
    fill("#d1d7ee");
    textStyle(NORMAL);
    textSize(10)
    textAlign(LEFT, TOP)
    text(code, 30, 40)

    lineNums = ""
    for (let i = 1; i <= 50; i++) {
        lineNums = lineNums + i + "\n"
    }
    fill("#8f93a2");
    text(lineNums, 10, 40);
    
    pop()
}

function drawLaptop() {
    push()
    rectMode(CENTER)
    noStroke();
    fill("#1e1e1e");
    rect(w / 4, h / 2, 230 / 0.84, 230, 5)
    rectMode(CORNER)
    rect(50.5, h / 2, 230 / 0.84, 230 / 2)
    fill(10)
    circle(w / 4, 193, 8)
    fill(80)
    circle(w / 4, 193, 5)

    fill("#909090");
    beginShape()
    vertex(50.5, 413);
    vertex(20, 470);
    vertex(w / 2 - 20, 470);
    vertex(50.5 + 230 / 0.84, 413);
    endShape(CLOSE)
    
    push()
    translate(w / 4, 441.5);
    scale(0.25);
    translate(-w / 4, -441.5);
    translate(0, 60);
    fill("#1e1e1e");
    beginShape()
    vertex(50.5, 413);
    vertex(20, 470);
    vertex(w / 2 - 20, 470);
    vertex(50.5 + 230 / 0.84, 413);
    endShape(CLOSE)
    pop()

    fill("#b6b6b6");
    beginShape()
    vertex(20, 470);
    vertex(20, 470 + 15);
    vertex(w / 2 - 20, 470 + 15);
    vertex(w / 2 - 20, 470);
    endShape(CLOSE)

    stroke("#1e1e1e")
    strokeWeight(2);
    drawingContext.setLineDash([5, 7.5]);
    line(57, 413 + 10, 315, 413 + 10);
    line(51, 413 + 20, 322, 413 + 20);
    line(45, 413 + 30, 326, 413 + 30);

    image(cnv, 62.5, 200, 200 / 0.8, 200);
    image(cnv, 62.5, 200, 200 / 0.8, 200);
    image(cnv, 62.5, 200, 200 / 0.8, 200);
    image(cnv, 62.5, 200, 200 / 0.8, 200);
    image(cnv, 62.5, 200, 200 / 0.8, 200);
    pop()
}

function drawBrowser() {
    push()
    fill("#323232");
    strokeWeight(1)
    stroke("#757575")
    rect(0, 0, w / 2, h);
    // bar
    stroke("#e2e2e2");
    strokeWeight(0.5);
    circle(15, 15, 10)
    fill("#e2e2e2");
    circle(30, 15, 10)
    noStroke()
    stroke("#202020")
    fill("#202020")
    rect(45, 10, w / 4, 10, 5);
    fill("#e2e2e2");
    textSize(8);
    text("\u24D8   127.0.0.1:8080", 50, 12, w / 4, 30)

    // viewport
    const gradient = drawingContext.createRadialGradient(w / 4, h / 2, 0, w / 4, h / 2, w);
    gradient.addColorStop(0, "#606060");
    gradient.addColorStop(0.4, "#3a3a3a");
    gradient.addColorStop(0.6, "#2b2b2b");
    drawingContext.fillStyle = gradient;
    noStroke()
    rect(5, 30, w / 2 - 10, h - 35, 5);
    pop()
}
