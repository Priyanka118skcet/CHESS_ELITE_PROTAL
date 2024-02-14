export default {
    board: [
      rook("black"), knight("black"), bishop("black"), queen("black"), king("black"), bishop("black"), knight("black"), rook("black"),
      pawn("black"), pawn("black"), pawn("black"), pawn("black"), pawn("black"), pawn("black"), pawn("black"), pawn("black"),
      null, null, null, null, null, null, null, null,
      null, null, null, null, null, null, null, null,
      null, null, null, null, null, null, null, null,
      null, null, null, null, null, null, null, null,
      pawn("white"), pawn("white"), pawn("white"), pawn("white"), pawn("white"), pawn("white"), pawn("white"), pawn("white"),
      rook("white"), knight("white"), bishop("white"), queen("white"), king("white"), bishop("white"), knight("white"), rook("white"),
    ],
    highlights: Array(64).fill(null),
    capturedByBlack: [],
    capturedByWhite: [],
    selected: null,
    isWhiteTurn: true
  };
  
  function king(player) {
    return {
      player,
      piece: "king",
      symbol: player === "white" ? "♔" : "♚",
      moved: false,
    };
  }
  
  function queen(player) {
    return {
      player,
      piece: "queen",
      symbol: player === "white" ? "♕" : "♛",
      moved: false
    };
  }
  
  function knight(player) {
    return {
      player,
      piece: "knight",
      symbol: player === "white" ? "♘" : "♞",
      moved: false
    };
  }
  
  function rook(player) {
    return {
      player,
      piece: "rook",
      symbol: player === "white" ? "♖" : "♜",
      moved: false
    };
  }
  
  function bishop(player) {
    return {
      player,
      piece: "bishop",
      symbol: player === "white" ? "♗" : "♝",
      moved: false
    };
  }
  
  function pawn(player) {
    return {
      player,
      piece: "pawn",
      symbol: player === "white" ? "♙" : "♟",
      moved: false,
    };
  }