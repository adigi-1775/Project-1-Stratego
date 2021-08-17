// console.log('Project 1 Stratego');

// global
const beginGame = ()=> {
  document.getElementById('ready-button').disable = true
  let player1 = movePiece()
  // start the match
}

const bluePieces = ['general', 'colonel', 'major', 'captain', 'lieutenant', 'sergeant', 'corporal', 'mineSweeper', 'infantry', 'bomb', 'flag', 'commando'];

const redPieces = ['general', 'colonel', 'major', 'captain', 'lieutenant', 'sergeant', 'corporal', 'mineSweeper', 'infantry', 'bomb', 'flag', 'commando'];

const cells = ['1A', '1B', '1C', '1D', '1E', '1F', '1G', '1H', '1I', '1J', '2A', '2B', '2C', '2D', '2E', '2F','2G', '2H', '2I', '2J', '3A', '3B','3C', '3D', '3E', '3F', '3G', '3H', '3I', '3J', '4A', '4B', '4C', '4D','4E', '4F', '4G', '4H', '4I', '4J', '7A', '7B', '7D', '7E', '7F', '7G', '7H', '7I', '7J', '8A', '8B', '8C', '8D', '8E', '8F', '8G', '8H', '8I', '8J', '9A', '9B', '9C', '9D', '9E', '9F', '9G', '9H', '9I', '9J', '10A', '10B', '10C', '10D', '10E', '10F', '10G', '10H', '10I', '10J']

const movePiece() = {
  let state = false //false if no piece has been selected
  let currentPiece;
  let currentCell;

  let cells = document.getElementByClass('square');
    for(let i = 0; i<cells.length; i++){
      cells[i].onclick = function(){
      getCell(this);
      };
    }
  function getCell(that){
    if(!state){ //this means if the state is false (i.e. no piece selected
      state = true; //piece has been selected
      currentPiece = that.innerHTML; //get the current piece selected
      currentCell = that; //get the current cell selection
    }else{
      that.innerHTML = currentPiece; //Set the selected space to the piece that was grabbed
      currentCell.innerHTML = ''; //remove the piece from its old location
      state = false; //piece has been placed, so set state back to false
    }
  }
}

const pieceValue = document.querySelectorAll('')
const pieceValueArray = Array.from(pieceValue)
console.log(pieceValueArray);

// const winGame = ()=>{
//   alert: 'Congratulations you have won!'
// }
//
// const loseGame = ()=>{
//   alert: 'You have been defeated!'
// }

const setUp() = []
(function place(){
  for(i=0; i<blue)
})

const player1 = {
  this.blue
}
const player2 = {
  this.red
}
// const readiedUp = {
//   if(player1 + player2){
//     document.getElementById('ready-button')
//   }
// }


const general = {
  this.blue[0]
  this.red[0]
  let value = 'general'
}
const colonel = {
  this.blue[1]
  this.red[1]
  let value = ;'colonel'
}
const major = {
  this.blue[2]
  this.red[2]
  let value = 'major'
}
const captain = {
  this.blue[3]
  this.red[3]
  let value = 'captain'
}
const lieutenant = {
  this.blue[4]
  this.red[4]
  let value = 'lieutenant'
}
const sergeant = {
  this.blue[5]
  this.red[5]
  let value = 'sergeant'
}
const corporal = {
  this.blue[6]
  this.red[6]
  let value = 'corporal'
}
const mineSweeper = {
  this.blue[7]
  this.red[7]
  let value = 'mineSweeper'
}
const infantry = {
  this.blue[8]
  this.red[8]
  let value = 'infantry'
}
const commando = {
  this.blue[9]
  this.red[9]
  let value = 'commando'
}
const bomb = {
  this.blue[10]
  this.red[10]
  let value = 'bomb'
}
const flag = {
  this.blue[11]
  this.red[11]
  let value = 'flag'
}

// game logic
const game = {
  startGame(){
    if(player1 + player2 ){
      document.getElementById('ready-button').disable = true
      let player1 = movePiece()
    }
  }
}



const pieceVs = {
        general: {
            general: "lose",
            colonel: "win",
            major: "win",
            captain: "win",
            lieutenant: "win",
            sergeant: "win",
            corporal: "win",
            mineSweeper: "win",
            infantry: "win",
            bomb: "lose",
            commando: "lose"
        },
        colonel: {
          general: "lose",
          colonel: "lose",
          major: "win",
          captain  : "win",
          lieutenant: "win",
          sergeant: "win",
          corporal: "win",
          mineSweeper: "win",
          infantry: "win",
          bomb: "lose",
          commando: "win"
        },
        major: {
          general: "lose",
          colonel: "lose",
          major: "lose",
          captain: "win",
          lieutenant: "win",
          sergeant: "win",
          corporal: "win",
          mineSweeper: "win",
          infantry: "win",
          bomb: "lose",
          commando: "win"
        },
        captain: {
          general: "lose",
          colonel: "lose",
          major: "lose",
          captain: "lose",
          lieutenant: "win",
          sergeant: "win",
          corporal: "win",
          mineSweeper: "win",
          infantry: "win",
          bomb: "lose",
          commando: "win"
        },
        lieutenant: {
          general: "lose",
          colonel: "lose",
          major: "lose",
          captain: "lose",
          lieutenant: "lose",
          sergeant: "win",
          corporal: "win",
          mineSweeper: "win",
          infantry: "win",
          bomb: "lose",
          commando: "win"
        },
        sergeant: {
          general: "lose",
          colonel: "lose",
          major: "lose",
          captain: "lose",
          lieutenant: "lose",
          sergeant: "lose",
          corporal: "win",
          mineSweeper: "win",
          infantry: "win",
          bomb: "lose",
          commando: "win"
        },
        corporal: {
          general: "lose",
          colonel: "lose",
          major: "lose",
          captain: "lose",
          lieutenant: "lose",
          sergeant: "lose",
          corporal: "lose",
          mineSweeper: "win",
          infantry: "win",
          bomb: "lose",
          commando: "win"
        },
        mineSweeper: {
          general: "lose",
          colonel: "lose",
          major: "lose",
          captain: "lose",
          lieutenant: "lose",
          sergeant: "lose",
          corporal: "lose",
          mineSweeper: "lose",
          infantry: "win",
          bomb: "win",
          commando: "win"
        },
        infantry: {
          general: "lose",
          colonel: "lose",
          major: "lose",
          captain: "lose",
          lieutenant: "lose",
          sergeant: "lose",
          corporal: "lose",
          mineSweeper: "lose",
          infantry: "lose",
          bomb: "lose",
          commando: "win"
        },
        bomb: {
          general: "win",
          colonel: "win",
          major: "win",
          captain: "win",
          lieutenant: "win",
          sergeant: "win",
          corporal: "win",
          mineSweeper: "lose",
          infantry: "win",
          commando: "win"
        },
        commando: {
          general: "win",
          colonel: "lose",
          major: "lose",
          captain: "lose",
          lieutenant: "lose",
          sergeant: "lose",
          corporal: "lose",
          mineSweeper: "lose",
          infantry: "lose",
          bomb: "lose",
          commando: "lose"
      }
    }
  }

let moveResults = ''
  if(pieceVs[player1Move][player2Move] === "win"){
    // moveResults = // "lose" piece goes into game-play-container
                  // "win" piece occupies the spot its currently in
                  // OR
                  // "win" piece occupies the spot its moving to
  }
  else if(pieceVs[player1Move][player2Move] === "lose"){
    // moveResults = // move piece to game-play-container
   }
}

// an indicator for which piece is currently selected
function selectPiece(){
  if(currentPiece === '' && $(evt.currentTarget).css('border') === '1px solid black'){
		$(evt.currentTarget).css('border', '4px solid green')
		currentPiece = evt.currentTarget;
    // and indicating when it is no longer selected
  }else if ($(evt.currentTarget).css('border') === '4px solid green'){
		$(evt.currentTarget).css('border', '1px solid black')
		currentPiece = '';
	}
}

// function shows the instructions for the game, or hides them
// function showInstructions() {
// 	if (instructions.css('display') === 'none'){
// 		instructions.css('display', 'flex');
// 		about.css('display', 'block');
// 	} else {
// 		instructions.css('display', 'none');
// 		about.css('display', 'none');
// 	}
//
// }

document.getElementById("5C").style.pointerEvents = "none";
document.getElementById("5D").style.pointerEvents = "none";
document.getElementById("5G").style.pointerEvents = "none";
document.getElementById("5H").style.pointerEvents = "none";
document.getElementById("6C").style.pointerEvents = "none";
document.getElementById("6D").style.pointerEvents = "none";
document.getElementById("6G").style.pointerEvents = "none";
document.getElementById("6H").style.pointerEvents = "none";

// event listeners
let form = document.getElementById('ready-button')
    form.addEventListener('click', (event)=>{
        event.preventDefault()
        game.startGame()
    })




game.startGame()
