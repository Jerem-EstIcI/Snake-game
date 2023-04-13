// Load images
var appleImg = new Image();
appleImg.src = "IMG/JS/apple.png";
var headUpImg = new Image();
headUpImg.src = "IMG/JS/head-up.png";
var headDownImg = new Image();
headDownImg.src = "IMG/JS/head-down.png";
var headLeftImg = new Image();
headLeftImg.src = "IMG/JS/head-left.png";
var headRightImg = new Image();
headRightImg.src = "IMG/JS/head-right.png";
var bodyImg = new Image();
bodyImg.src = "IMG/JS/body.png";
var bodyHorizontalImg = new Image();
bodyHorizontalImg.src = "IMG/JS/body-horizontal.png"
var bodyVerticalImg = new Image();
bodyVerticalImg.src = "IMG/JS/body-vertical.png"

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

// Game loop
gameLoop = setInterval(function() {
	update();
	draw();
}, speed);

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
			img = bodyImg;
		} else if (previousSnakePart.x > snakePart.x) {
			img = bodyImg;
		} else if (previousSnakePart.y < snakePart.y) {
			img = bodyImg;
		} else if (previousSnakePart.y > snakePart.y) {
			img = bodyImg;
		}
	} else {
		var previousSnakePart = snake[i - 1];
		var nextSnakePart = snake[i + 1];

		if ((previousSnakePart.x < snakePart.x && nextSnakePart.x > snakePart.x) ||
			(previousSnakePart.x > snakePart.x && nextSnakePart.x < snakePart.x)) {
			img = bodyImg;
		} else if ((previousSnakePart.y < snakePart.y && nextSnakePart.y > snakePart.y) ||
			(previousSnakePart.y > snakePart.y && nextSnakePart.y < snakePart.y)) {
			img = bodyImg;
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
			img = bodyHorizontalImg;
		} else if (previousSnakePart.x > snakePart.x) {
			img = bodyHorizontalImg;
		} else if (previousSnakePart.y < snakePart.y) {
			img = bodyVerticalImg;
		} else if (previousSnakePart.y > snakePart.y) {
			img = bodyVerticalImg;
		}
	} else {
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
	apple.x = Math.floor(Math.random() * tileCount);
	apple.y = Math.floor(Math.random() * tileCount);
	
	// Make sure apple is not on snake
	for (var i = 0; i < snake.length; i++) {
		if (apple.x == snake[i].x && apple.y == snake[i].y) {
			generateApple();
			break;
		}
	}
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
	if (event.keyCode == 81 && direction != "right") { // touche Q
		direction = "left";
	} else if (event.keyCode == 90 && direction != "down") { // touche Z
		direction = "up";
	} else if (event.keyCode == 68 && direction != "left") { // touche D
		direction = "right";
	} else if (event.keyCode == 83 && direction != "up") { // touche S
		direction = "down";
	}
});


// restart key event
var restartButton = document.getElementById("restart");
restartButton.addEventListener("click", function() {
	location.reload();
});
