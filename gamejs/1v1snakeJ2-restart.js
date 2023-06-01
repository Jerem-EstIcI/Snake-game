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

// Initialisation du Canva
var canvas2 = document.getElementById("snakeJ2");
var ctx2 = canvas2.getContext("2d");

// Variables
var tileSize2 = 32; // Taille en pixels d'une tuile
var canvasWidth2 = canvas2.width; // Largeur du canvas
var canvasHeight2 = canvas2.height; // Hauteur du canvas
var tileCount2 = 15; // Nombre de tuiles dans le canvas (hauteur et longueur)
var snake2 = []; // Tableau représentant le serpent
var snakeLength2 = 3; // Longueur initiale du serpent
var speed2 = 115 // Vitesse du jeu en millisecondes
var apple2 = {
	x: 0,
	y: 0
}; // Objet représentant la position de la pomme
var direction2 = "right"; // Direction initiale du serpent
var score2 = 0; // Score du joueur
var gameLoop2; // Identifiant de la boucle de jeu

// Génère le serpent
for (var i = snakeLength2 - 1; i >= 0; i--) {
	snake2.push({x: i, y: 0}); // Ajoute des segments au serpent
}

// Génère la pomme
generateApple2(); // Génère la position initiale de la pomme

// Boucle de jeu
gameLoop2 = setInterval(function() {
	update2(); // Met à jour le jeu
	draw2(); // Dessine le jeu
}, speed2); // Répète la boucle de jeu avec l'intervalle de vitesse

// Mettre à jour le jeu
function update2() {
	// Déplacement du serpent
	var nextX2 = snake2[0].x;
	var nextY2 = snake2[0].y;
switch (direction2) {
	case "right":
		nextX2++; // Déplace le serpent vers la droite
		break;
	case "left":
		nextX2--; // Déplace le serpent vers la gauche
		break;
	case "up":
		nextY2--; // Déplace le serpent vers le haut
		break;
	case "down":
		nextY2++; // Déplace le serpent vers le bas
		break;
}

// Vérifier la colision avec les murs
if (nextX2 < 0 || nextX2 >= tileCount2 || nextY2 < 0 || nextY2 >= tileCount2) {
	gameOver2(); // Fin du jeu en cas de collision avec les mur
	return;
}

// Vérifier la colision avec le serpent
for (var i = 0; i < snake2.length; i++) {
	if (snake2[i].x === nextX2 && snake2[i].y === nextY2) {
		gameOver2(); // Fin du jeu en cas de collision avec le serpent lui-même
		return;
	}
}

// Vérifier la colision avec la pomme
if (nextX2 === apple2.x && nextY2 === apple2.y) {
	snakeLength2++; // Augmente la longueur du serpent
	score2++; // Augmente le score du joueur
	generateApple2(); // Génère une nouvelle position pour la pomme
}

// Déplacement du serpent
snake2.unshift({x: nextX2, y: nextY2}); // Ajoute un segment au serpent à la position suivante
if (snake2.length > snakeLength2) {
	snake2.pop(); // Supprime le segment de queue du serpent si sa longueur dépasse la longueur actuelle
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
	} else if (event.keyCode == 32) {							//Space - restart
		location.reload();
	}
});

// Dessine le jeu
function draw2() {
// Vide le Canva
ctx2.clearRect(0, 0, canvasWidth2, canvasHeight2);
// Dessine le serpent
for (var i = 0; i < snake2.length; i++) {
	var snakePart2 = snake2[i];
	var img2;

	if (i === 0) {
		// Tête du serpent
		switch (direction2) {
			case "right":
				img2 = headRightImg2; // Image de la tête du serpent tournée vers la droite
				break;
			case "left":
				img2 = headLeftImg2; // Image de la tête du serpent tournée vers la gauche
				break;
			case "up":
				img2 = headUpImg2; // Image de la tête du serpent tournée vers le haut
				break;
			case "down":
				img2 = headDownImg2; // Image de la tête du serpent tournée vers le haut
				break;
		}
	} else if (i === snake2.length - 1) {
		// Queue du serpent
		var previousSnakePart2 = snake2[i - 1];
		switch (direction2) {
			case "right":
				img2 = previousSnakePart2.y < snakePart2.y ? tailDownImg2 : tailUpImg2; // Image de la queue du serpent tournée vers la droite
				break;
			case "left":
				img2 = previousSnakePart2.y < snakePart2.y ? tailDownImg2 : tailUpImg2; // Image de la queue du serpent tournée vers la gauche
				break;
			case "up":
				img2 = previousSnakePart2.x < snakePart2.x ? tailRightImg2 : tailLeftImg2; // Image de la queue du serpent tournée vers le haut
				break;
			case "down":
				img2 = previousSnakePart2.x < snakePart2.x ? tailRightImg2 : tailLeftImg2; // Image de la queue du serpent tournée vers le bas
				break;
		}
	} else {
		// Corps du serpent
		var previousSnakePart2 = snake2[i - 1];
		var nextSnakePart2 = snake2[i + 1];
		if ((previousSnakePart2.x < snakePart2.x && nextSnakePart2.x > snakePart2.x) ||
			(previousSnakePart2.x > snakePart2.x && nextSnakePart2.x < snakePart2.x)) {
			img2 = bodyHorizontalImg2; // Image du corps du serpent horizontale
		} else if ((previousSnakePart2.y < snakePart2.y && nextSnakePart2.y > snakePart2.y) ||
			(previousSnakePart2.y > snakePart2.y && nextSnakePart2.y < snakePart2.y)) {
			img2 = bodyVerticalImg2; // Image du corps du serpent verticale
		}
	}
ctx2.drawImage(img2, snakePart2.x * tileSize2, snakePart2.y * tileSize2, tileSize2, tileSize2); // Dessine le segment du serpent avec l'image correspondante
}

// Dessine la pomme
ctx2.drawImage(appleImg2, apple2.x * tileSize2, apple2.y * tileSize2, tileSize2, tileSize2);

// Dessine le score
ctx2.font = "20px Luckiest_Guy"; // Police et taille du texte
ctx2.fillStyle = "#ffffff"; // Couleur du texte
ctx2.fillText("Score: " + score2, 10, 25); // Affiche le score en haut à gauche du canvas
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
