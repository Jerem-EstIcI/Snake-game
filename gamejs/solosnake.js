// Load images
var appleImg = new Image();
appleImg.src = "../SRC/IMG/JS/apple.png";
var headUpImg = new Image();
headUpImg.src = "../SRC/IMG/JS/head-up.png";
var headDownImg = new Image();
headDownImg.src = "../SRC/IMG/JS/head-down.png";
var headLeftImg = new Image();
headLeftImg.src = "../SRC/IMG/JS/head-left.png";
var headRightImg = new Image();
headRightImg.src = "../SRC/IMG/JS/head-right.png";
var bodyHorizontalImg = new Image();
bodyHorizontalImg.src = "../SRC/IMG/JS/body-horizontal.png"
var bodyVerticalImg = new Image();
bodyVerticalImg.src = "../SRC/IMG/JS/body-vertical.png"
var tailUpImg = new Image();
tailUpImg.src = "../SRC/IMG/JS/tail-up.png";
var tailDownImg = new Image();
tailDownImg.src = "../SRC/IMG/JS/tail-down.png";
var tailLeftImg = new Image();
tailLeftImg.src = "../SRC/IMG/JS/tail-left.png";
var tailRightImg = new Image();
tailRightImg.src = "../SRC/IMG/JS/tail-right.png";
var cornerTopLeftImg = new Image();
cornerTopLeftImg.src = "../SRC/IMG/JS/corner-top-left.png";
var cornerTopRightImg = new Image();
cornerTopRightImg.src = "../SRC/IMG/JS/corner-top-right.png";
var cornerBottomLeftImg = new Image();
cornerBottomLeftImg.src = "../SRC/IMG/JS/corner-bottom-left.png";
var cornerBottomRightImg = new Image();
cornerBottomRightImg.src = "../SRC/IMG/JS/corner-bottom-right.png";

// Load Sound
var appleSound = new Audio();
appleSound.src = "../SRC/MUSIC/JS/apple.mp3";
var deathSound = new Audio();
deathSound.src = "../SRC/MUSIC/JS/death.mp3";

// Initialisation du Canva
var canvas = document.getElementById("snake");
var ctx = canvas.getContext("2d");

// Variables
var tileSize = 32; // Taille en pixels d'une tuile
var canvasWidth = canvas.width; // Largeur du canvas
var canvasHeight = canvas.height; // Hauteur du canvas
var tileCount = 15; // Nombre de tuiles dans le canvas (hauteur et longueur)
var snake = []; // Tableau représentant le serpent
var snakeLength = 3; // Longueur initiale du serpent
var speed = 115 // Vitesse du jeu en millisecondes
var apple = {
	x: 0,
	y: 0
}; // Objet représentant la position de la pomme
var direction = "right"; // Direction initiale du serpent
var score = 0; // Score du joueur
var gameLoop; // Identifiant de la boucle de jeu
var bestScore = 0; // Meilleur score initial

// Génère le serpent
for (var i = snakeLength - 1; i >= 0; i--) {
	snake.push({x: i, y: 0}); // Ajoute des segments au serpent
}

// Génère la pomme 
generateApple(); // Génère la position initiale de la pomme


// Mettre à jour le jeu
function update() {
	// Déplacement du serpent
	var nextX = snake[0].x;
	var nextY = snake[0].y;
switch (direction) {
	case "right":
		nextX++; // Déplace le serpent vers la droite
		break;
	case "left":
		nextX--; // Déplace le serpent vers la gauche
		break;
	case "up":
		nextY--; // Déplace le serpent vers le haut
		break;
	case "down":
		nextY++; // Déplace le serpent vers le bas
		break;
}

// Vérifier la colision avec les murs
if (nextX < 0 || nextX >= tileCount || nextY < 0 || nextY >= tileCount) {
	gameOver(); // Fin du jeu en cas de collision avec les mur
	return;
}

// Vérifier la colision avec le serpent
for (var i = 0; i < snake.length; i++) {
	if (snake[i].x === nextX && snake[i].y === nextY) {
		gameOver(); // Fin du jeu en cas de collision avec le serpent lui-même
		return;
	}
}

// Vérifier la colision avec la pomme
if (nextX === apple.x && nextY === apple.y) {
	snakeLength++; // Augmente la longueur du serpent
	appleSound.play();
	score++; // Augmente le score du joueur
	generateApple(); // Génère une nouvelle position pour la pomme
}

// Déplacement du serpent
snake.unshift({x: nextX, y: nextY}); // Ajoute un segment au serpent à la position suivante
if (snake.length > snakeLength) {
	snake.pop(); // Supprime le segment de queue du serpent si sa longueur dépasse la longueur actuelle
}
}

// Récupérer le bouton de démarrage
var startButton = document.getElementById("start");

// Récupérer le bouton de redémarrage
var restartButton = document.getElementById("restart");

// Ajouter un écouteur d'événements au bouton de démarrage
startButton.addEventListener("click", function() {
  // Cacher le bouton de démarrage
  startButton.style.display = "none";
  // Afficher le bouton de redémarrage
  restartButton.style.display = "block";
  // Démarrer la boucle de jeu
  gameLoop = setInterval(function() {
    update(); // Mettre à jour le jeu
    draw(); // Dessiner le jeu
  }, speed); // Vitesse du jeu
});

// Handle key events
document.addEventListener("keydown", function(event) {
	if (event.keyCode == 81 && direction != "right") { 			//Q - left
		direction = "left";
	} else if (event.keyCode == 90 && direction != "down") { 	//Z - up
		direction = "up";
	} else if (event.keyCode == 68 && direction != "left") {	//D - right
		direction = "right";
	} else if (event.keyCode == 83 && direction != "up") { 		//S - down
		direction = "down";
	} else if (event.keyCode == 65 && direction != "right") { 	//A - left
		direction = "left";
	} else if (event.keyCode == 87 && direction != "down") { 	//W - up
		direction = "up";
	} else if (event.keyCode == 37 && direction != "right") {	//K_LEFT - left
		direction = "left";
	} else if (event.keyCode == 38 && direction != "down") {	//K_UP - up
		direction = "up";
	} else if (event.keyCode == 39 && direction != "left") {	//K_RIGHT - right
		direction = "right";
	} else if (event.keyCode == 40 && direction != "up") {		//K_DOWN - down
		direction = "down";
	} //else if (event.keyCode == 32) {							//Space - restart
		// location.reload();
	// }
});

// Dessine le jeu
function draw() {
// Vide le Canva
ctx.clearRect(0, 0, canvasWidth, canvasHeight);
// Dessine le serpent
for (var i = 0; i < snake.length; i++) {
	var snakePart = snake[i];
	var img;

	if (i === 0) {
		// Tête du serpent
		switch (direction) {
			case "right":
				img = headRightImg; // Image de la tête du serpent tournée vers la droite
				break;
			case "left":
				img = headLeftImg; // Image de la tête du serpent tournée vers la gauche
				break;
			case "up":
				img = headUpImg; // Image de la tête du serpent tournée vers le haut
				break;
			case "down":
				img = headDownImg; // Image de la tête du serpent tournée vers le haut
				break;
		}
	} else if (i === snake.length - 1) {
		// Queue du serpent
		var previousSnakePart = snake[i - 1];
		switch (direction) {
			case "right":
				img = previousSnakePart.y < snakePart.y ? tailDownImg : tailUpImg; // Image de la queue du serpent tournée vers la droite
				break;
			case "left":
				img = previousSnakePart.y < snakePart.y ? tailDownImg : tailUpImg; // Image de la queue du serpent tournée vers la gauche
				break;
			case "up":
				img = previousSnakePart.x < snakePart.x ? tailRightImg : tailLeftImg; // Image de la queue du serpent tournée vers le haut
				break;
			case "down":
				img = previousSnakePart.x < snakePart.x ? tailRightImg : tailLeftImg; // Image de la queue du serpent tournée vers le bas
				break;
		}
	} else {
		// Corps du serpent
		var previousSnakePart = snake[i - 1];
		var nextSnakePart = snake[i + 1];
		if ((previousSnakePart.x < snakePart.x && nextSnakePart.x > snakePart.x) ||
			(previousSnakePart.x > snakePart.x && nextSnakePart.x < snakePart.x)) {
			img = bodyHorizontalImg; // Image du corps du serpent horizontale
		} else if ((previousSnakePart.y < snakePart.y && nextSnakePart.y > snakePart.y) ||
			(previousSnakePart.y > snakePart.y && nextSnakePart.y < snakePart.y)) {
			img = bodyVerticalImg; // Image du corps du serpent verticale
		}
	}
ctx.drawImage(img, snakePart.x * tileSize, snakePart.y * tileSize, tileSize, tileSize); // Dessine le segment du serpent avec l'image correspondante
}

// Dessine la pomme
ctx.drawImage(appleImg, apple.x * tileSize, apple.y * tileSize, tileSize, tileSize);

// Dessine le score
ctx.font = "20px Luckiest_Guy"; // Police et taille du texte
ctx.fillStyle = "#ffffff"; // Couleur du texte
ctx.fillText("Score: " + score, 10, 25); // Affiche le score en haut à gauche du canvas
}

// Generate apple
function generateApple() {
apple.x = Math.floor(Math.random() * tileCount);
apple.y = Math.floor(Math.random() * tileCount);
}
// Game over
function gameOver() {
    clearInterval(gameLoop);
    deathSound.play();
    
    if (score > bestScore) {
        bestScore = score; // Update best score
        localStorage.setItem('bestScore', bestScore); // Save best score to local storage
    }
    
    alert("Game over! Score: " + score);
}
// Draw game
function draw() {
	// Clear canvas
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	
	// Draw snake
	for (var i = 0; i < snake.length; i++) {
		var snakePart = snake[i];
		var img;
		//snale head
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
		//snake tail	
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
	
	var storedBestScore = localStorage.getItem('bestScore');
    if (storedBestScore !== null) {
        bestScore = parseInt(storedBestScore);
    }
    
    // Dessine le score et le meilleur score
    ctx.fillStyle = "#fff";
    ctx.font = "20px Luckiest_Guy";
    ctx.fillText("Score: " + score, 10, 30);
    ctx.fillText("Best: " + bestScore, canvasWidth - 100, 30); // Affiche le meilleur score
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

// Récupérer le bouton avec l'ID "start"
// const boutonStart = document.getElementById("start");

// Ajouter un écouteur d'événement pour la touche "Espace"
// document.addEventListener("keydown", function(event) {
  // if (event.keyCode === 32) {
    // Vérifier si la touche pressée est la barre d'espace (keyCode 32)
    // boutonStart.click(); // Activer le bouton "start"
  // }
// });

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 32) { // Vérifie si la touche enfoncée est la barre d'espace (keyCode 32)
    window.location.href = 'solosnake-restart.html'; // Redirige vers le lien 
  }
});