const canvas = document.getElementById("Fightcanvas");
const ctx = canvas.getContext("2d");
const tileSize = 20;
const gridSize = canvas.width / tileSize;

//image demo
const pikachu = document.createElement("img");
pikachu.src = "pikachu.png";
var canvas2 = document.getElementById("Fightcanvas");
canvas2.appendChild(pikachu);

// Box properties
let box = {
    x: 0,
    y: 0,
    size: 75
    
};


// Movement logic
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            if (box.y > 0) box.y -= tileSize;
            break;
        case "ArrowDown":
            if (box.y < canvas.height - box.size) box.y += tileSize;
            break;
        case "ArrowLeft":
            if (box.x > 0) box.x -= tileSize;
            break;
        case "ArrowRight":
            if (box.x < canvas.width - box.size) box.x += tileSize;
            break;
    }
});

// Draw the box
function drawBox() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    ctx.fillStyle = box.color;
    ctx.fillRect(box.x, box.y, box.size, box.size); // Draw box
    requestAnimationFrame(drawBox); // Loop
    ctx.drawImage(pikachu, box.x, box.y, box.size, box.size); // Draw image
}

drawBox();