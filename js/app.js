var app = {
  player: {
    positionX: 0,
    positionY: 0,
    direction: 'right',
    // image: document.querySelector('.player'),
  },
  targetCell: {
    positionX: 5,
    positionY: 3,
  },
  nbRow: 4,
  nbColumn: 6,
  gameOver: false,

  nbMove:0,

  grid: document.getElementById('board'),


  init: function () {
    console.log('init !');
    app.drawBoard();
    app.listenKeyboardEvents();
  },

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

  clearBoard: function () {
    app.grid.textContent = '';
  },

  redrawBoard: function () {
    app.clearBoard();
    app.drawBoard();
  },

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
      app.nbMove=app.nbMove+1;
      app.redrawBoard();
    } else if (app.gameOver == true) {
      console.log("La partie est finie!");
    }

  },

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
      app.nbMove=app.nbMove+1;
      app.redrawBoard();
    } else if (app.gameOver == true) {
      console.log("La partie est finie!");
    }

  },

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
      app.nbMove=app.nbMove+1;
      app.redrawBoard();
    } else if (app.gameOver == true) {
      console.log("La partie est finie!");
    }

  },

  listenKeyboardEvents: function () {
    document.addEventListener('keyup', app.verifyKeyPressed)
  },

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

  isGameOver: function () {
    if (app.player.positionX == app.targetCell.positionX && app.player.positionY == app.targetCell.positionY) {
      app.gameOver = true;
      console.log("Fin du jeu");
      console.log(app.nbMove + " mouvements");
    }
  },
};

document.addEventListener('DOMContentLoaded', app.init);