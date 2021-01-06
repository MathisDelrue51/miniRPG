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

  grid: document.getElementById('board'),


  init: function () {
    console.log('init !');
    app.drawBoard();
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
          square.appendChild(player);
        }

        line.appendChild(square);
      }
    }
  },

  clearBoard: function () {
    app.grid.textContent = '';
  },

  redrawBoard: function () {
    app.clearBoard();
    app.drawBoard();
  },

  turnLeft: function () {
    var player = document.querySelector('.player');
    switch (app.player.direction) {
      case 'right':
        app.player.direction = 'up';
        // document.querySelector('.player').style.transform = 'rotate(-90deg)';
        player.classList.remove('player--right');
        player.classList.add('player--up');
        break;
      case 'up':
        app.player.direction = 'left';
        player.classList.remove('player--up');
        player.classList.add('player--left');
        break;
      case 'left':
        app.player.direction = 'down';
        player.classList.remove('player--left');
        player.classList.add('player--down');
        break;
      case 'down':
        app.player.direction = 'right';
        player.classList.remove('player--down');
        player.classList.add('player--right');
        break;
    }

  },

  turnRight: function () {
    var player = document.querySelector('.player');
    switch (app.player.direction) {
      case 'right':
        app.player.direction = 'down';
        player.classList.remove('player--right');
        player.classList.add('player--down');
        break;

      case 'down':
        app.player.direction = 'left';
        player.classList.remove('player--down');
        player.classList.add('player--left');
        break;

      case 'left':
        app.player.direction = 'up';
        player.classList.remove('player--left');
        player.classList.add('player--up');
        break;

      case 'up':
        app.player.direction = 'right';
        player.classList.remove('player--up');
        player.classList.add('player--right');
        break;
    }
  },

  moveForward: function () {
    //SI la direction du joueur est droite ou gauche on va modifier x sinon on modifie y
    switch (app.player.direction) {
      case 'right':
        if (app.player.positionX < app.nbColumn) {
          app.player.positionX = app.player.positionX + 1;
          console.log(app.player.positionX);
        } else {
          console.log("Je ne peux pas aller plus loin dans cette direction");
        }
        break;

      case 'down':
        if (app.player.positionY < app.nbRow) {
          app.player.positionY = app.player.positionY + 1;
          console.log(app.player.positionY);
        } else {
          console.log("Je ne peux pas aller plus loin dans cette direction");
        }
        break;

      case 'left':
        if (app.player.positionX > 0) {
          app.player.positionX = app.player.positionX - 1;
          console.log(app.player.positionX);
        }else {
          console.log("Je ne peux pas aller plus loin dans cette direction");
        }
        break;
        
      case 'up':
        if (app.player.positionY > 0) {
          app.player.positionY = app.player.positionY - 1;
          console.log(app.player.positionY);
        }else {
          console.log("Je ne peux pas aller plus loin dans cette direction");
        }
        break;
    }

  },
};


document.addEventListener('DOMContentLoaded', app.init);