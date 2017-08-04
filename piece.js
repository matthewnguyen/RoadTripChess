class Piece {
  constructor(color) {
    this.color = color;
  }
}

class Rook extends Piece{
  constructor(color) {
    super(color);
  }
}

class Knight extends Piece{
  constructor(color) {
    super(color);
  }
}

class Bishop extends Piece{
  constructor(color) {
    super(color);
  }
}

class Queen extends Piece{
  constructor(color) {
    super(color);
  }
}

class King extends Piece{
  constructor(color) {
    super(color);
  }
}

class Pawn extends Piece{
  constructor(color) {
    super(color);
  }
}

module.exports.Piece = {
  Rook : Rook,
  Knight : Knight,
  Bishop : Bishop,
  Queen : Queen,
  King : King,
  Pawn : Pawn
}
