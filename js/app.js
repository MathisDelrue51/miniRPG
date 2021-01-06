var app = {
  positionX: 0,
  positionY: 0,
  direction: 'right',
  targetCell: {
    x: 5,
    y: 3,
  },
  nbRow: 4,
  nbColumn: 6,

  init: function () {
    console.log('init !');
    app.drawBoard();
  },

  drawBoard: function () {

    for (lineIndex = 0; lineIndex < app.nbRow; lineIndex++) {
      var line = document.createElement('div');
      line.className = 'line';
      var grid = document.getElementById('board');
      grid.appendChild(line);
      
      for (columnIndex = 0; columnIndex < app.nbColumn; columnIndex++){
        var square = document.createElement('div');
        square.className = 'square';        
        line.appendChild(square);
      }
    }
  },
};

document.addEventListener('DOMContentLoaded', app.init);