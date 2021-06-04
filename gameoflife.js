//conway's game of life
var lodash = require('lodash');

function play(board,state,timeline){
  console.log('State');
  console.table(state);
  board = state;
  for(c = 0; c < timeline; c++){
    var boardStep = lodash.cloneDeep(board);
    for(i=0; i < board.length; i++){
      for(j=0; j<board[i].length; j++){
        var neighbours = getNeighbours(i,j,board);
        boardStep[i][j] = conwayPropagation(neighbours,board[i][j]);
        // console.log("Validating: "+ board[i][j] + " vs "+  conwayPropagation(neighbours,state[i][j]));
      }
      // console.log("Board Row: "+ board[i]);
      // console.log("Boardstep: "+ boardStep[i]);
    }
    console.log('Board'+c);
    console.log('Board Properties: Rows - '+boardStep.length + ' Columns -'+ boardStep[0].length);

    console.table(boardStep);
    board = boardStep;
  }
}

function getNeighbours(i,j,boardState){
  var n=[];
  if(boardState[i-1] != undefined && boardState[i-1][j-1] != undefined){
    n[0]=boardState[i-1][j-1];
  }
  if(boardState[i] != undefined && boardState[i][j-1] != undefined){
    n[1]=boardState[i][j-1];
  }
  if(boardState[i+1] != undefined && boardState[i+1][j-1] != undefined){
    n[2]=boardState[i+1][j-1];
  }
  if(boardState[i+1] != undefined && boardState[i+1][j] != undefined){
    n[3]=boardState[i+1][j];
  }
  if(boardState[i+1] != undefined && boardState[i+1][j+1] != undefined){
    n[4]=boardState[i+1][j+1];
  }
  if(boardState[i] != undefined && boardState[i][j+1] != undefined){
    n[5]=boardState[i][j+1];
  }
  if(boardState[i-1] != undefined && boardState[i-1][j+1] != undefined){
    n[6]=boardState[i-1][j+1];
  }
  if(boardState[i-1] != undefined && boardState[i-1][j] != undefined){
    n[7]=boardState[i-1][j];
  }

  // console.log("Neighbours:"+n);
  return n;
}

function conwayPropagation(neighbours,currentState){
  var aliveNeighbours = 0;
  var propagateFlag = 0;
  // console.log("Propagated neighbours: "+neighbours);
  aliveNeighbours = neighbours.filter(n => n === 1).length;
  // console.log('aliveNeighbours:'+aliveNeighbours);
  //Underpopulation & Overpopulation
  if( (currentState == 1) && (aliveNeighbours < 2 || aliveNeighbours > 3) ){
    propagateFlag = 0;
  }

  //Next generation - survival
  if( (currentState == 1) && (aliveNeighbours == 2 || aliveNeighbours == 3) ){
    propagateFlag = 1;
  }

  //Reproduction - cross breeding and affairs ;-)
  if( (currentState == 0) && (aliveNeighbours == 3)){
    propagateFlag = 1;
  }
  // console.log("Propagated: "+ propagateFlag);
  return propagateFlag;
}

var board = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
], state = [
  [1,1,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0],
  [1,1,0,1,0,0,0,0,0,0],
  [1,1,0,1,1,0,0,0,0,0],
  [1,1,0,0,0,0,0,1,0,0],
  [1,1,0,0,0,1,1,1,0,0],
  [1,1,0,0,1,0,1,0,0,0],
  [1,1,0,0,0,0,0,0,0,0],
  [1,1,0,0,1,0,1,1,0,0],
  [1,1,0,0,1,1,1,0,0,1],
];

play(board,state,200);
