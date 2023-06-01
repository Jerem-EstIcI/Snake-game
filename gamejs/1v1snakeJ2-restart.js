// Load images
var appleImg2 = new Image();
appleImg2.src = "../SRC/IMG/JS/apple.png";
var headUpImg2 = new Image();
headUpImg2.src = "../SRC/IMG/JS/head-up.png";
var headDownImg2 = new Image();
headDownImg2.src = "../SRC/IMG/JS/head-down.png";
var headLeftImg2 = new Image();
headLeftImg2.src = "../SRC/IMG/JS/head-left.png";
var headRightImg2 = new Image();
headRightImg2.src = "../SRC/IMG/JS/head-right.png";
var bodyHorizontalImg2 = new Image();
bodyHorizontalImg2.src = "../SRC/IMG/JS/body-horizontal.png"
var bodyVerticalImg2 = new Image();
bodyVerticalImg2.src = "../SRC/IMG/JS/body-vertical.png"
var tailUpImg2 = new Image();
tailUpImg2.src = "../SRC/IMG/JS/tail-up.png";
var tailDownImg2 = new Image();
tailDownImg2.src = "../SRC/IMG/JS/tail-down.png";
var tailLeftImg2 = new Image();
tailLeftImg2.src = "../SRC/IMG/JS/tail-left.png";
var tailRightImg2 = new Image();
tailRightImg2.src = "../SRC/IMG/JS/tail-right.png";
var cornerTopLeftImg2 = new Image();
cornerTopLeftImg2.src = "../SRC/IMG/JS/corner-top-left.png";
var cornerTopRightImg2 = new Image();
cornerTopRightImg2.src = "../SRC/IMG/JS/corner-top-right.png";
var cornerBottomLeftImg2 = new Image();
cornerBottomLeftImg2.src = "../SRC/IMG/JS/corner-bottom-left.png";
var cornerBottomRightImg2 = new Image();
cornerBottomRightImg2.src = "../SRC/IMG/JS/corner-bottom-right.png";

// Initialize canvas
var canvas2 = document.getElementById("snakeJ2");
var ctx2 = canvas2.getContext("2d");

// Set variables
var tileSize2 = 32;
var canvasWidth2 = canvas2.width;
var canvasHeight2 = canvas2.height;
var tileCount2 = 15;
var snake2 = [];
var snakeLength2 = 3;
var speed2 = 115
var apple2 = {
	x: 0,
	y: 0
};
var direction2 = "right";
var score2 = 0;
var gameLoop2;

// Generate snake
for (var i = snakeLength2 - 1; i >= 0; i--) {
	snake2.push({x: i, y: 0});
}

// Generate apple
generateApple2();

// Game loop
gameLoop2 = setInterval(function() {
	update2();
	draw2();
}, speed2);

// Update game
function update2() {
	// Move snake
	var nextX2 = snake2[0].x;
	var nextY2 = snake2[0].y;
switch (direction2) {
	case "right":
		nextX2++;
		break;
	case "left":
		nextX2--;
		break;
	case "up":
		nextY2--;
		break;
	case "down":
		nextY2++;
		break;
}

// Check collision with walls
if (nextX2 < 0 || nextX2 >= tileCount2 || nextY2 < 0 || nextY2 >= tileCount2) {
	gameOver2();
	return;
}

// Check collision with snake
for (var i = 0; i < snake2.length; i++) {
	if (snake2[i].x === nextX2 && snake2[i].y === nextY2) {
		gameOver2();
		return;
	}
}

// Check collision with apple
if (nextX2 === apple2.x && nextY2 === apple2.y) {
	snakeLength2++;
	score2++;
	generateApple2();
}

// Move snake
snake2.unshift({x: nextX2, y: nextY2});
if (snake2.length > snakeLength2) {
	snake2.pop();
}
}

// Handle key events
//azerty ZQSD
document.addEventListener("keydown", function(event) {
	if (event.keyCode == 37 && direction2 != "right") {  		//K_LEFT - left
		direction2 = "left";
	} else if (event.keyCode == 38 && direction2 != "down") { 	//K_UP - up
		direction2 = "up";
	} else if (event.keyCode == 39 && direction2 != "left") { 	//K_RIGHT - right
		direction2 = "right";
	} else if (event.keyCode == 40 && direction2 != "up") { 	//K_DOWN - down
		direction2 = "down";
	} else if (event.keyCode == 32) {
		location.reload();
	}
});

// Draw game
function draw2() {
// Clear canvas
ctx2.clearRect(0, 0, canvasWidth2, canvasHeight2);
// Draw snake
for (var i = 0; i < snake2.length; i++) {
	var snakePart2 = snake2[i];
	var img2;

	if (i === 0) {
		// Snake head
		switch (direction2) {
			case "right":
				img2 = headRightImg2;
				break;
			case "left":
				img2 = headLeftImg2;
				break;
			case "up":
				img2 = headUpImg2;
				break;
			case "down":
				img2 = headDownImg2;
				break;
		}
	} else if (i === snake2.length - 1) {
		// Snake tail
		var previousSnakePart2 = snake2[i - 1];
		switch (direction2) {
			case "right":
				img2 = previousSnakePart2.y < snakePart2.y ? tailDownImg2 : tailUpImg2;
				break;
			case "left":
				img2 = previousSnakePart2.y < snakePart2.y ? tailDownImg2 : tailUpImg2;
				break;
			case "up":
				img2 = previousSnakePart2.x < snakePart2.x ? tailRightImg2 : tailLeftImg2;
				break;
			case "down":
				img2 = previousSnakePart2.x < snakePart2.x ? tailRightImg2 : tailLeftImg2;
				break;
		}
	} else {
		// Snake body
		var previousSnakePart2 = snake2[i - 1];
		var nextSnakePart2 = snake2[i + 1];
		if ((previousSnakePart2.x < snakePart2.x && nextSnakePart2.x > snakePart2.x) ||
			(previousSnakePart2.x > snakePart2.x && nextSnakePart2.x < snakePart2.x)) {
			img2 = bodyHorizontalImg2;
		} else if ((previousSnakePart2.y < snakePart2.y && nextSnakePart2.y > snakePart2.y) ||
			(previousSnakePart2.y > snakePart2.y && nextSnakePart2.y < snakePart2.y)) {
			img2 = bodyVerticalImg2;
		}
	}
ctx2.drawImage(img2, snakePart2.x * tileSize2, snakePart2.y * tileSize2, tileSize2, tileSize2);
}

// Draw apple
ctx2.drawImage(appleImg2, apple2.x * tileSize2, apple2.y * tileSize2, tileSize2, tileSize2);

// Draw score
ctx2.font = "20px Luckiest_Guy";
ctx2.fillStyle = "#ffffff";
ctx2.fillText("Score: " + score2, 10, 25);
}

// Generate apple
function generateApple2() {
apple2.x = Math.floor(Math.random() * tileCount2);
apple2.y = Math.floor(Math.random() * tileCount2);
}
// Game over
function gameOver2() {
	clearInterval(gameLoop2);
}

// Draw game
function draw2() {
	// Clear canvas
	ctx2.clearRect(0, 0, canvasWidth2, canvasHeight2);
	
	// Draw snake
	for (var i = 0; i < snake2.length; i++) {
		var snakePart2 = snake2[i];
		var img2;
		//snale head
		if (i === 0) {
			switch (direction2) {
				case "right":
					img2 = headRightImg2;
					break;
				case "left":
					img2 = headLeftImg2;
					break;
				case "up":
					img2 = headUpImg2;
					break;
				case "down":
					img2 = headDownImg2;
					break;
			}
		//snake tail	
		} else if (i === snake2.length - 1) {
			var previousSnakePart2 = snake2[i - 1];

			if (previousSnakePart2.x < snakePart2.x) {
				img2 = tailRightImg2;
			} else if (previousSnakePart2.x > snakePart2.x) {
				img2 = tailLeftImg2;
			} else if (previousSnakePart2.y < snakePart2.y) {
				img2 = tailDownImg2;
			} else if (previousSnakePart2.y > snakePart2.y) {
				img2 = tailUpImg2;
				}
			} else {
				// Snake body
				var previousPart2 = snake2[i - 1];
				var nextPart2 = snake2[i + 1];
				if (snakePart2.x === previousPart2.x && snakePart2.x === nextPart2.x) {
					img2 = bodyVerticalImg2;
				} else if (snakePart2.y === previousPart2.y && snakePart2.y === nextPart2.y) {
					img2 = bodyHorizontalImg2;
				} else if (snakePart2.x < previousPart2.x && snakePart2.y < nextPart2.y || snakePart2.y < previousPart2.y && snakePart2.x < nextPart2.x) {
					img2 = cornerTopRightImg2;
				} else if (snakePart2.x < previousPart2.x && snakePart2.y > nextPart2.y || snakePart2.y > previousPart2.y && snakePart2.x < nextPart2.x) {
					img2 = cornerBottomRightImg2;
			} else if (snakePart2.x > previousPart2.x && snakePart2.y > nextPart2.y || snakePart2.y > previousPart2.y && snakePart2.x > nextPart2.x) {
					img2 = cornerBottomLeftImg2;
				} else if (snakePart2.x > previousPart2.x && snakePart2.y < nextPart2.y || snakePart2.y < previousPart2.y && snakePart2.x > nextPart2.x) {
					img2 = cornerTopLeftImg2;
				}
			}

		ctx2.drawImage(img2, snakePart2.x * tileSize2, snakePart2.y * tileSize2, tileSize2, tileSize2);
	}

	// Draw apple
	var appleX2 = apple2.x * tileSize2;
	var appleY2 = apple2.y * tileSize2;
	ctx2.drawImage(appleImg2, appleX2, appleY2, tileSize2, tileSize2);
	
	// Draw score
	ctx2.fillStyle = "#fff";
	ctx2.font = "20px Luckiest_Guy";
	ctx2.fillText("Score: " + score2, 10, 30);
}

// Generate apple
function generateApple2() {
    var lastApple2 = {
        x: apple2.x,
        y: apple2.y
    };
    do {
        apple2.x = Math.floor(Math.random() * tileCount2);
        apple2.y = Math.floor(Math.random() * tileCount2);
    } while (appleOnSnake2() || (apple2.x === lastApple2.x && apple2.y === lastApple2.y));
}

// Check if apple is on snake
function appleOnSnake2() {
    for (var i = 0; i < snake2.length; i++) {
        if (apple2.x === snake2[i].x && apple2.y === snake2[i].y) {
            return true;
        }
    }
    return false;
}

// restart key event
var restartButton2 = document.getElementById("restart");
restartButton2.addEventListener("click", function() {
	location.reload();
});
