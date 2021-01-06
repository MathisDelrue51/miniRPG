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
          player.classList.add('player--right');
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
    switch (app.player.direction) {
      case 'right':
        app.player.direction = 'down';
        player.classList.remove('player--right');
        player.classList.add('player--down');        break;
      case 'down':
        app.player.direction = 'left';
        player.classList.remove('player--down');
        player.classList.add('player--left');        break;
      case 'left':
        app.player.direction = 'up';
        player.classList.remove('player--left');
        player.classList.add('player--up');        break;
      case 'up':
        app.player.direction = 'right';
        player.classList.remove('player--up');
        player.classList.add('player--right');        break;
    }
  },

};

document.addEventListener('DOMContentLoaded', app.init);