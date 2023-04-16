// Load images
var appleImg = new Image();
appleImg.src = "SRC/IMG/JS/apple.png";
var headUpImg = new Image();
headUpImg.src = "SRC/IMG/JS/head-up.png";
var headDownImg = new Image();
headDownImg.src = "SRC/IMG/JS/head-down.png";
var headLeftImg = new Image();
headLeftImg.src = "SRC/IMG/JS/head-left.png";
var headRightImg = new Image();
headRightImg.src = "SRC/IMG/JS/head-right.png";
var bodyHorizontalImg = new Image();
bodyHorizontalImg.src = "SRC/IMG/JS/body-horizontal.png"
var bodyVerticalImg = new Image();
bodyVerticalImg.src = "SRC/IMG/JS/body-vertical.png"
var tailUpImg = new Image();
tailUpImg.src = "SRC/IMG/JS/tail-up.png";
var tailDownImg = new Image();
tailDownImg.src = "SRC/IMG/JS/tail-down.png";
var tailLeftImg = new Image();
tailLeftImg.src = "SRC/IMG/JS/tail-left.png";
var tailRightImg = new Image();
tailRightImg.src = "SRC/IMG/JS/tail-right.png";
var cornerTopLeftImg = new Image();
cornerTopLeftImg.src = "SRC/IMG/JS/corner-top-left.png";
var cornerTopRightImg = new Image();
cornerTopRightImg.src = "SRC/IMG/JS/corner-top-right.png";
var cornerBottomLeftImg = new Image();
cornerBottomLeftImg.src = "SRC/IMG/JS/corner-bottom-left.png";
var cornerBottomRightImg = new Image();
cornerBottomRightImg.src = "SRC/IMG/JS/corner-bottom-right.png";

// Initialize canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");



// Set variables
var tileSize = 32;
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var tileCount = 15;
var snake = [];
var snakeLength = 3;
var speed = 125
var apple = {
	x: 0,
	y: 0
};
var direction = "right";
var score = 0;
var gameLoop;

// Generate snake
for (var i = snakeLength - 1; i >= 0; i--) {
	snake.push({x: i, y: 0});
}

// Generate apple
generateApple();


// Update game
function update() {
	// Move snake
	var nextX = snake[0].x;
	var nextY = snake[0].y;
switch (direction) {
	case "right":
		nextX++;
		break;
	case "left":
		nextX--;
		break;
	case "up":
		nextY--;
		break;
	case "down":
		nextY++;
		break;
}

// Check collision with walls
if (nextX < 0 || nextX >= tileCount || nextY < 0 || nextY >= tileCount) {
	gameOver();
	return;
}

// Check collision with snake
for (var i = 0; i < snake.length; i++) {
	if (snake[i].x === nextX && snake[i].y === nextY) {
		gameOver();
		return;
	}
}

// Check collision with apple
if (nextX === apple.x && nextY === apple.y) {
	snakeLength++;
	score++;
	generateApple();
}

// Move snake
snake.unshift({x: nextX, y: nextY});
if (snake.length > snakeLength) {
	snake.pop();
}
}

// Get start button
var startButton = document.getElementById("start");

// Get restart button
var restartButton = document.getElementById("restart");

// Add event listener to start button
startButton.addEventListener("click", function() {
  // Hide start button
  startButton.style.display = "none";
  // Show restart button
  restartButton.style.display = "block";
  // Start game loop
  gameLoop = setInterval(function() {
    update();
    draw();
  }, speed);
});
// Draw game
function draw() {
// Clear canvas
ctx.clearRect(0, 0, canvasWidth, canvasHeight);
// Draw snake
for (var i = 0; i < snake.length; i++) {
	var snakePart = snake[i];
	var img;

	if (i === 0) {
		// Snake head
		switch (direction) {
			case "right":
				img = headRightImg;
				break;
			case "left":
				img = headLeftImg;
				break;
			case "up":
				img = headUpImg;
				break;
			case "down":
				img = headDownImg;
				break;
		}
	} else if (i === snake.length - 1) {
		// Snake tail
		var previousSnakePart = snake[i - 1];
		switch (direction) {
			case "right":
				img = previousSnakePart.y < snakePart.y ? tailDownImg : tailUpImg;
				break;
			case "left":
				img = previousSnakePart.y < snakePart.y ? tailDownImg : tailUpImg;
				break;
			case "up":
				img = previousSnakePart.x < snakePart.x ? tailRightImg : tailLeftImg;
				break;
			case "down":
				img = previousSnakePart.x < snakePart.x ? tailRightImg : tailLeftImg;
				break;
		}
	} else {
		// Snake body
		var previousSnakePart = snake[i - 1];
		var nextSnakePart = snake[i + 1];
		if ((previousSnakePart.x < snakePart.x && nextSnakePart.x > snakePart.x) ||
			(previousSnakePart.x > snakePart.x && nextSnakePart.x < snakePart.x)) {
			img = bodyHorizontalImg;
		} else if ((previousSnakePart.y < snakePart.y && nextSnakePart.y > snakePart.y) ||
			(previousSnakePart.y > snakePart.y && nextSnakePart.y < snakePart.y)) {
			img = bodyVerticalImg;
		}
	}
ctx.drawImage(img, snakePart.x * tileSize, snakePart.y * tileSize, tileSize, tileSize);

}

// Draw apple
ctx.drawImage(appleImg, apple.x * tileSize, apple.y * tileSize, tileSize, tileSize);

// Draw score
ctx.font = "20px Luckiest_Guy";
ctx.fillStyle = "#ffffff";
ctx.fillText("Score: " + score, 10, 25);
}

// Generate apple
function generateApple() {
apple.x = Math.floor(Math.random() * tileCount);
apple.y = Math.floor(Math.random() * tileCount);
}
// Game over
function gameOver() {
	clearInterval(gameLoop);
}

// Draw game
function draw() {
	// Clear canvas
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	
	// Draw snake
	for (var i = 0; i < snake.length; i++) {
		var snakePart = snake[i];
		var img;

		if (i === 0) {
			switch (direction) {
				case "right":
					img = headRightImg;
					break;
				case "left":
					img = headLeftImg;
					break;
				case "up":
					img = headUpImg;
					break;
				case "down":
					img = headDownImg;
					break;
			}
		} else if (i === snake.length - 1) {
			var previousSnakePart = snake[i - 1];

			if (previousSnakePart.x < snakePart.x) {
				img = tailRightImg;
			} else if (previousSnakePart.x > snakePart.x) {
				img = tailLeftImg;
			} else if (previousSnakePart.y < snakePart.y) {
				img = tailDownImg;
			} else if (previousSnakePart.y > snakePart.y) {
				img = tailUpImg;
				}
			} else {
				// Snake body
				var previousPart = snake[i - 1];
				var nextPart = snake[i + 1];
				if (snakePart.x === previousPart.x && snakePart.x === nextPart.x) {
					img = bodyVerticalImg;
				} else if (snakePart.y === previousPart.y && snakePart.y === nextPart.y) {
					img = bodyHorizontalImg;
				} else if (snakePart.x < previousPart.x && snakePart.y < nextPart.y || snakePart.y < previousPart.y && snakePart.x < nextPart.x) {
					img = cornerTopRightImg;
				} else if (snakePart.x < previousPart.x && snakePart.y > nextPart.y || snakePart.y > previousPart.y && snakePart.x < nextPart.x) {
					img = cornerBottomRightImg;
			} else if (snakePart.x > previousPart.x && snakePart.y > nextPart.y || snakePart.y > previousPart.y && snakePart.x > nextPart.x) {
					img = cornerBottomLeftImg;
				} else if (snakePart.x > previousPart.x && snakePart.y < nextPart.y || snakePart.y < previousPart.y && snakePart.x > nextPart.x) {
					img = cornerTopLeftImg;
				}
			}

		ctx.drawImage(img, snakePart.x * tileSize, snakePart.y * tileSize, tileSize, tileSize);
	}

	
	// Draw apple
	var appleX = apple.x * tileSize;
	var appleY = apple.y * tileSize;
	ctx.drawImage(appleImg, appleX, appleY, tileSize, tileSize);
	
	// Draw score
	ctx.fillStyle = "#fff";
	ctx.font = "20px Luckiest_Guy";
	ctx.fillText("Score: " + score, 10, 30);
}

// Generate apple
function generateApple() {
    var lastApple = {
        x: apple.x,
        y: apple.y
    };
    do {
        apple.x = Math.floor(Math.random() * tileCount);
        apple.y = Math.floor(Math.random() * tileCount);
    } while (appleOnSnake() || (apple.x === lastApple.x && apple.y === lastApple.y));
}

// Check if apple is on snake
function appleOnSnake() {
    for (var i = 0; i < snake.length; i++) {
        if (apple.x === snake[i].x && apple.y === snake[i].y) {
            return true;
        }
    }
    return false;
}

// Handle key events
document.addEventListener("keydown", function(event) {
	if (event.keyCode == 37 && direction != "right") {
		direction = "left";
	} else if (event.keyCode == 38 && direction != "down") {
		direction = "up";
	} else if (event.keyCode == 39 && direction != "left") {
		direction = "right";
	} else if (event.keyCode == 40 && direction != "up") {
		direction = "down";
	}
});

document.addEventListener("keydown", function(event) {
	if (event.keyCode == 81 && direction != "right") { 
		direction = "left";
	} else if (event.keyCode == 90 && direction != "down") { 
		direction = "up";
	} else if (event.keyCode == 68 && direction != "left") { 
		direction = "right";
	} else if (event.keyCode == 83 && direction != "up") { 
		direction = "down";
	}
});

// restart key event
var restartButton = document.getElementById("restart");
restartButton.addEventListener("click", function() {
	location.reload();
});
