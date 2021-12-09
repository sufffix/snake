let cnv = document.getElementById("gameCnv");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let player = {
    x: 400,
    y: 400,
    w: 25,
    h: 25,
    xSpeed: 0,
    ySpeed: 0,
    speed: 25,
    alive: true
}

requestAnimationFrame(draw);
function draw() {
    if (player.xSpeed > 0 && player.x < 775 || player.xSpeed < 0 && player.x > 0) {
        player.x += player.xSpeed;
    } else if (player.ySpeed > 0 && player.y < 575 || player.ySpeed < 0 && player.y > 0) {
        player.y += player.ySpeed;
    }

    ctx.clearRect(0, 0, 800, 600);

    // draw player
    ctx.fillStyle = "orange";
    ctx.fillRect(player.x, player.y, player.w, player.h);

    setTimeout(function () {
        requestAnimationFrame(draw);
    }, 100)
}

// key events

document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
    if (player.alive) {
        if (!event.repeat) {
            if (event.key == "w" || event.key == "ArrowUp") {
                player.ySpeed = -player.speed;
                player.xSpeed = 0;
            } else if (event.key == "a" || event.key == "ArrowLeft") {
                player.xSpeed = -player.speed;
                player.ySpeed = 0;
            } else if (event.key == "s" || event.key == "ArrowDown") {
                player.ySpeed = player.speed;
                player.xSpeed = 0;
            } else if (event.key == "d" || event.key == "ArrowRight") {
                player.xSpeed = player.speed;
                player.ySpeed = 0;
            } else if (event.key == "l") {
                player.xSpeed = 0;
                player.ySpeed = 0;
            }
        }
    }

}

setInterval(function () {
    // move player by xSpeed and ySpeed

}, 150)