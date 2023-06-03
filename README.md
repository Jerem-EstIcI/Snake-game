# Snake Game 

**[Snake Game](https://jerem-estici.github.io/Snake-game-html/)**

## Langage 
HTML/Javascript/CSS/Markdown

## Ressourcesutilisées
[Pour faire des README](https://www.youtube.com/watch?v=4lg3YyugRZQ&ab_channel=e-genieclimatique/) et [générateur de README](https://readme.so/fr/editor)
<br>
[Documentation pour le site](https://developer.mozilla.org/fr/)
<br>
[Générateur de textes customs](https://textcraft.net)
<br>
[Générateur de gif a partir d'images](ezgif.com)

## Musique utilisée
- Auteur: <a href="https://soundcloud.com/c_luke_hall">Luke Hall</a><br />
Track: <b> Dystopia</b><br />
Licence: <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.fr">https://creativecommons.org/licenses/by-sa/3.0/deed.fr</a><br />
Source: <a href="https://www.auboutdufil.com">Télécharger la musique gratuitement</a>

## Régles
_**Votre but**_ : Le but du jeu Snake est de contrôler un serpent qui se déplace sur un terrain de jeu en 2D, en le faisant manger des aliments pour le faire grandir tout en évitant de heurter les murs ou la queue du serpent lui-même.
Le serpent se déplace continuellement dans une direction donnée, et le joueur peut changer cette direction en utilisant les touches de direction sur le clavier.
Plus le serpent grandit, plus il devient difficile à contrôler, car il occupe une plus grande partie de l'écran et sa queue devient un obstacle à éviter.
Le jeu se termine lorsque le serpent heurte un mur ou sa propre queue, et le but est d'obtenir le meilleur score possible en mangeant le plus grand nombre possible d'aliments avant de perdre.

## Evolution du projet
---
### 24 Mars 2023
#### **Création du Projet sur GitHub**
#### **Ajouts d'images**
- **Serpent** 
1. tête droite/haut/bas/gauche 
2. corps
- **Pomme** 
#### **Création et Ajouts de la page HTML Principale (snake.html)**
- Canva 
- style de Canva (bordures et dimensions)
- Titre de la page
- Lien avec le script JS
#### **Création et Ajouts du Script JS fonctionnel Solo  (snake.js)**
- Texture du serpent (ceux-ci dessus)
- Apparition du serpent
- Dessin du serpent dans le tableau (le Canva)
- Déplacement du serpent (avec les flèches du clavier)
- Génération de la pomme
- Collision de la pomme, mur et soit même pour le serpent 
- Comptage du score
- Message de fin de jeu (alert)
### **Problème actuel  remarqué**
- La pomme apparaît parfois sur le serpent malgré la fonction fait pour ne pas le faire
![Image from Snake Game](https://app.milanote.com/media/p/images/1Q58Sx1bsLCx9X/kzC/03-24.png?w=800)
---
### 30 Mars 2023 (Jour En Groupe)
#### **Ajout d'image**
- **Fond du Canva**
#### **Ajouts de la page HTML Principale (index.html)**
- Titre de la page
- Commandes
- Lien avec la page de style (CSS)
- Bouton Recommencer
#### **Modification de la page HTML Principale (index.html)**
- Nom de la page principale (snake->index)
- Suppression du style du Canva sur la page html (hors dimension)
#### **Création et Ajouts du style CSS (style.css)**
- Couleur du fond 
- Style de Canva
- Style du Titre
- Style du bouton
#### **Ajouts du Script JS Solo (snake.js)**
- Bouton recommencer fonctionnel
- Création d'une nouvelle variable (speed)
#### **Modifications  du Script JS Solo (snake.js)**
- Suppression du message de fin de jeu (alert)
- Changement de la couleur du score
- changement de la vitesse 37.5% plus rapide (200 -> 125)
#### **Création du README (Pour Objectifs...)**
![Image from Snake Game](https://app.milanote.com/media/p/images/1Q59Kf1bsLTl1B/kAz/03-30.png?w=800)
---
### 31 Mars 4/5/6/7 Avril 2023
#### **Ajout d'image**
- **Touche de clavier (flèches)**
#### **Ajouts de la page HTML Principale (index.html)**
- Lien avec le logo (Image)
- Ajout du bouton commencer 
#### **Ajouts du style CSS (style.css)**
- Style des commandes (image et texte)
- Style du bouton commencer
#### **Ajout du Script JS Solo (snake.js)**
- Ajout des touches ZQSD
### **Problème supplémentaire actuel remarqué**
- La partie se termine si trop de touches sont appuyées rapidement
![Image from Snake Game](https://app.milanote.com/media/p/images/1Q5a7Z1bsLTl1I/Ch5/04-07.png?w=800)
---
### 13 Avril 2023 (Jour En Groupe)
#### **Ajouts d'images**
- **Ensemble du pattern du serpent**
- **Nouvelle tête droite/haut/bas/gauche**
- **Nouvelle Pomme**
- **Corps Horizontal et Vertical**
- **Logo du jeu**
#### **Ajouts de la page HTML Principale (index.html)**
- Barre de navigation
- Titre
#### **Modification de la page HTML Principale (index.html)**
- Tout le jeu déplacer vers snake.html
#### **Création Ajouts de la page HTML Solo(snake.html)**
- Ligne de l'ancien index.html
- Barre de navigation
- Musique
#### **Ajout du style CSS (style.css)**
- Barre de navigation
#### **Ajout du Script JS Solo (snake.js)**
- Ajout des textures du Corps vertical et horizontal
![Image from Snake Game](https://app.milanote.com/media/p/images/1Q5aoz1bsLTl1N/KiB/Sans%20titref.png?w=800)
---
### 15/16/20/21/22/23 Avril 2023
#### **Ajouts d'images**
- **Serpent**
1. Queue droite/gauche/haut/bas
2. Angle haut droit/bas droit/haut gauche/bas gauche
- **Nouveau fond du Canva**
- **Touches de clavier GIF** 
#### **Ajouts de la page HTML Principale (index.html)**
- Lien vers le Github
- Bande blanche et noire pour la barre de navigation
#### **Ajouts de la page HTML Solo (solosnake.html)**
- Bande blanche et noire pour la barre de navigation
#### **Modification de la page HTML  Solo(solosnake.html)**
- Nom du fichier snake -> solosnake
#### **Création et Ajouts de la page HTML 1v1 (1v1snake.html)**
- Copie de la page solo sans le canva/boutons/image
- Bande blanche et noire pour la barre de navigation
#### **Ajouts du style CSS (style.css)**
- Bande blanche et noire pour la barre de navigation
- Style page solo et 1v1 (texte et image)
#### **Ajouts du Script JS Solo (solosnake.js)**
- Touche AWSD (qwerty)
- Queue du serpent
- Angle haut droit/bas droit/haut gauche/bas gauche
- Bouton pour commencer
- La pomme ne peut pas apparaitre 2 fois au même endroit
#### **Modifications  du Script JS Solo (solosnake.js)**
- Nom du fichier snake -> solosnake
- Bouton Recommencer
- **Problème d'une Partie du code qui faisait ralentir le jeu (niveau des images)**
- **Problème de la pomme qui apparaît sur le serpent corriger**
### **Problème supplémentaire actuel remarqué**
- Les pages ne sont pas adaptés suivant tous les écrans
![Image from Snake Game](https://app.milanote.com/media/p/images/1Q5b121bsLTl1W/rtp/5.png?w=800)
---
### 11 Mai 2023 (Jour en Groupe)
#### **Ajout de la page HTML Principale (index.html)**
- But du jeu
#### **Ajout de la page HTML 1v1 (1v1snake.html)**
- Image des touches
#### **Ajout du style CSS (style.css)**
- Style de la page principale
#### **Modification  du Script JS Solo (solosnake.js)**
- Changement de la vitesse de 8% plus rapide (125 -> 115)
![Image from Snake Game](https://app.milanote.com/media/p/images/1Q5bOh1bsLTl21/gwZ/5%5Ep.png?w=800)
---
### 13/14/15 en groupe/16/17/18/19/20 Mai 2023
#### **Ajout d'image**
- Fond animé
#### **Ajouts de la page HTML 1v1 (1v1snake.html)**
- Bouton commencer
- Bouton recommencer
- Canva
#### **Ajouts du style CSS (style.css)**
- Image animé en fond (index.html)
- Style de la barre de navigation
- Style du bouton commencer
- Style du bouton recommencer
- **Adaptation pour la plupart des écrans les éléments et optimisation pour la plupart des navigateurs**
- Style des Canva 1v1
#### **Modification  du Script JS Solo (solosnake.js)**
- Rajout du message de fin de jeu (alert) 
#### **Création  des Scripts 1V1 fonctionnels**
![Image from Snake Game](https://app.milanote.com/media/p/images/1Q5cvC1bsLTl28/L0N/dfd.png?w=800)
---
### 22/25 Mai 1 Juin 2023 (Jours en Groupe)
### Global
- Restructuration du site 
- Langue anglaise ajouté (index.html)
**Ajouts de la page principal (menu.html)**
- changement du nom index.html -> menu.html
- But du mode 1v1
#### **Ajouts du style CSS (style.css)**
- **Adaptation pour la plupart des écrans les éléments et optimisation pour la plupart des navigateurs**
- Correction de certaines valeurs
- Modification du style de certains éléments
- Style de la page d'arrivé
#### **Ajouts des Scripts JS  (solosnake.js et 1v1)**
- Début des commentaires dans le code
- Touche Espace pour recommencer
#### **Modifications  des Scripts JS  (solosnake.js et 1v1 )**
- Optimisation des touches de claviers
- Chemin vers les images
---
### 2/3 Juin 2023
**Ajout de la page menu (fr) (menu.html)**
- iframe vers ce document de l'évolution du projet
**Ajout de la page principal (solosnake-restart.html et 1v1 restart)**
- Texte de la commande pour la touche espace
#### **Ajouts du style CSS (style.css)**
- Commentaire du css
- Style de la barre de navigation
- Style de l'iframe
- Style du bouton recommencer
#### **Ajout des Scripts JS  (solosnake.js et 1v1)**
- Commentaire des scripts

# A faire

---

## Javascript
### Principal
- [x] Jeu complet
- [x] Jeu fonctionel (Solo)
#### Score
- [x] Score 
- [ ] meilleur score **(option)**
- [ ] Camparateur de scores 1V1
#### Bouttons/Touches/Musique
- [x] Bouton recommencer
- [x] Bouton commencer
- [x] Le bouton commencer disparais quand il est actionné **(option)**
- [x] Le bouton recommencer apparais quand le bouton commencer est actionné **(option)**
- [ ] La partie peu commencé quand une touche est actionné **(option)**
- [ ] La musique commence quand la partie commence et se fnit quand c'est terminé **(option)**
- [x] Fonctionne avec les claviers QWERTY **(option)**
#### Autres
- [x] La pomme n'apparais pas deux fois au meme endroit de suite **(option)**
- [x] peu se deplacer avec les flèches et ZQSD (AZERT)
- [ ] Peu changer la vitesse avant de commencer **(option)**
- [ ] Sauvegarde la couleur du serpent **(option)**
### 1v1
- [x] Jeu 1v1 qui fonctionne

---

## Texture
###  Textures globaux
- [x] Toutes les textures du jeu
- [x] Toutes les textures du serpent
#### Textures
- [x] image de fond **(option)**
- [x] Logo
- [x] texture de la pomme
- [x] texture de la tête du serpent
- [x] texture du corps du serpent
- [x] texture des coins du serpent
- [x] texture de la queue du serpent
- [x] texture du fond du jeu
- [x] texture des flèches
- [x] texture de ZQSD (AZERTY)
- [ ] texture de AWSD (QWERTY) **(option)**
#### Textures sumplémentaires
- [ ] Différentes textures du serpent **(option)**
- [ ] Différentes textures du fond du jeu **(option)**

---

## HTML
### Menu et Index 
- [x] Page du menu
#### Principal 
- [x] Barre de navigation
- [x] But du jeu (solo)
- [x] But du jeu (1v1)
### jeu Solo
- [x] Page du jeu solo
#### Principal
- [x] Barre de navigation
- [x] Les commandes du jeu 
- [x] Musique **(option)**
### Jeu 1v1
- [x] Page du jeu 1v1
#### Principal
- [x] Barre de navigation
- [x] Les commandes du jeu 
- [x] Musique **(option)**

---

## CSS
### Principal 
- [x] page index et menu
- [x] page 1v1
- [x] page solo

---

## BUG/Error/Adjustment
### Javascript
#### 1.1
- [ ] La partie se termine si trop de touches sont appuyées rapidement
- [x] Recommencer recommence directement la partie
### CSS
- [x] Adaptaton pour la pluspart des écrans
