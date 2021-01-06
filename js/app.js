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

  redrawBoard :function(){
    app.clearBoard();
    app.drawBoard();
  }
};

document.addEventListener('DOMContentLoaded', app.init);