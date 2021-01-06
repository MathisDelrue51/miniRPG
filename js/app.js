var app = {
  player: {
    positionX: 0,
    positionY: 0,
    direction: 'right',
  },
  targetCell: {
    positionX: 5,
    positionY: 3,
  },
  nbRow: 4,
  nbColumn: 6,
  gameOver: false,

  nbMove: 0,

  grid: document.getElementById('board'),


  init: function () {
    console.log('init !');
    app.drawBoard();
    app.listenKeyboardEvents();
  },

  //En fonction des paramètres définis, dessine une grille, place une cellule cible et un personnage a une position et dans une directione définie
  drawBoard: function () {

    for (lineIndex = 0; lineIndex < app.nbRow; lineIndex++) {
      var line = document.createElement('div');
      line.className = 'line';
      app.grid.appendChild(line);

      for (columnIndex = 0; columnIndex < app.nbColumn; columnIndex++) {
        var square = document.createElement('div');
        square.className = 'square';

        if (lineIndex == app.targetCell.positionY && columnIndex == app.targetCell.positionX) {
          square.classList.add('square--targetCell');

        } else if (lineIndex == app.player.positionY && columnIndex == app.player.positionX) {
          var player = document.createElement('div');
          player.classList.add('player');

          switch (app.player.direction) {
            case 'right':
              // player.classList.remove('player--up');
              // player.classList.remove('player--down');
              // player.classList.add('player--right');
              player.style.backgroundPositionY = '-64px';
              break;
            case 'up':
              // player.classList.remove('player--left');
              // player.classList.remove('player--right');
              // player.classList.add('player--up');
              player.style.backgroundPositionY = '-96px';
              break;
            case 'left':
              // player.classList.remove('player--up');
              // player.classList.remove('player--down');
              // player.classList.add('player--left');
              player.style.backgroundPositionY = '-32px';
              break;
            case 'down':
              // player.classList.remove('player--left');
              // player.classList.remove('player--right');
              // player.classList.add('player--down');
              player.style.backgroundPositionY = '0px';
              break;
          }

          square.appendChild(player);
        }

        line.appendChild(square);
      }
    }
    app.isGameOver();
  },

  //vide notre page
  clearBoard: function () {
    app.grid.textContent = '';
  },

  redrawBoard: function () {
    app.clearBoard();
    app.drawBoard();
  },

  //Modifie la direction du personnage vers la gauche
  turnLeft: function () {
    if (app.gameOver == false) {
      console.log("je tourne à gauche");
      switch (app.player.direction) {
        case 'right':
          app.player.direction = 'up';
          break;

        case 'up':
          app.player.direction = 'left';
          break;

        case 'left':
          app.player.direction = 'down';
          break;

        case 'down':
          app.player.direction = 'right';
          break;
      }
      app.nbMove = app.nbMove + 1;
      app.redrawBoard();
    } else if (app.gameOver == true) {
      console.log("La partie est finie!");
    }

  },

  //Modifie la direction du personnage vers la droite
  turnRight: function () {
    if (app.gameOver == false) {
      console.log("je tourne à droite");
      switch (app.player.direction) {
        case 'right':
          app.player.direction = 'down';
          break;

        case 'down':
          app.player.direction = 'left';
          break;

        case 'left':
          app.player.direction = 'up';
          break;

        case 'up':
          app.player.direction = 'right';
          break;
      }
      app.nbMove = app.nbMove + 1;
      app.redrawBoard();
    } else if (app.gameOver == true) {
      console.log("La partie est finie!");
    }

  },

  //Modifie la position de notre personnage si le jeu n'est pas fini et qu'il peut encore avancer dans cette direction
  moveForward: function () {
    if (app.gameOver == false) {
      console.log("j'avance");
      switch (app.player.direction) {
        case 'right':
          if (app.player.positionX < app.nbColumn - 1) {
            app.player.positionX = app.player.positionX + 1;
            console.log(app.player.positionX, app.player.positionY);
          } else {
            console.log("Je ne peux pas aller plus loin dans cette direction");
          }
          break;

        case 'down':
          if (app.player.positionY < app.nbRow - 1) {
            app.player.positionY = app.player.positionY + 1;
            console.log(app.player.positionX, app.player.positionY);
          } else {
            console.log("Je ne peux pas aller plus loin dans cette direction");
          }
          break;

        case 'left':
          if (app.player.positionX > 0) {
            app.player.positionX = app.player.positionX - 1;
            console.log(app.player.positionX, app.player.positionY);
          } else {
            console.log("Je ne peux pas aller plus loin dans cette direction");
          }
          break;

        case 'up':
          if (app.player.positionY > 0) {
            app.player.positionY = app.player.positionY - 1;
            console.log(app.player.positionX, app.player.positionY);
          } else {
            console.log("Je ne peux pas aller plus loin dans cette direction");
          }
          break;
      }
      app.nbMove = app.nbMove + 1;
      app.redrawBoard();
    } else if (app.gameOver == true) {
      console.log("La partie est finie!");
    }

  },

  //Ajoute un eventListener sur l'ensemble de notre jeu, lorsque qu'une touche est relevée, appelle la fonction qui vérifie laquelle
  listenKeyboardEvents: function () {
    document.addEventListener('keyup', app.verifyKeyPressed)
  },

  //Vérifie quelle touche a été pressée
  verifyKeyPressed: function (event) {
    var key = event.key;
    if (key == 'ArrowUp') {
      app.moveForward();

    } else if (key == 'ArrowLeft') {
      app.turnLeft();

    } else if (key == 'ArrowRight') {
      app.turnRight();
    }
  },

  //vérifie si le jeu est terminé
  isGameOver: function () {
    if (app.player.positionX == app.targetCell.positionX && app.player.positionY == app.targetCell.positionY) {
      app.gameOver = true;
      console.log("Fin du jeu");
      console.log(app.nbMove + " mouvements");
    }
  },
};

document.addEventListener('DOMContentLoaded', app.init);