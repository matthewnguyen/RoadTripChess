var piece = require("./piece.js");

class Board {
  constructor() {
    this.grid = Board.makeGrid();
  }

  static makeGrid() {
    var grid = new Array();
    function make_back_row(color) {
      return [new piece.Piece.Rook(color),
              new piece.Piece.Knight(color),
              new piece.Piece.Bishop(color),
              new piece.Piece.Queen(color),
              new piece.Piece.King(color),
              new piece.Piece.Bishop(color),
              new piece.Piece.Knight(color),
              new piece.Piece.Rook(color)];
    }
    function make_pawn_row(color) {
      var pawn_row = [];
      for (let i = 0; i < 8; i++) {
        pawn_row[i] = new piece.Piece.Pawn(color);
      }
      return pawn_row;
    }
    grid[0] = make_back_row("white");
    grid[1] = make_pawn_row("white");
    for (let i = 2; i < 6; i++) {
      grid[i] = new Array(8);
    }
    grid[6] = make_pawn_row("black");
    grid[7] = make_back_row("black");
    return grid;
  }
}

exports.Board = Board;
