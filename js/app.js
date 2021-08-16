// console.log('Project 1 Stratego');

// global
const beginGame = ()=> {
  document.getElementById('ready-button').disable = true
  // start the match
  // blue always starts first
}

// const turn;

// const winGame = ()=>{
//   alert: 'Congratulations you have won!'
// }
//
// const loseGame = ()=>{
//   alert: 'You have been defeated!'
// }

const player1 = {
  name: '',
  color: 'blue'
}
const player2 = {
  name: '',
  color: 'red'
}
const readiedUp = {
  if(player1 + player2) = ()=>{
    document.getElementById('ready-button')
  }
}


//classes
class Pieces {
  constructor(pieces){
    this.blue = [general, colonel, major, captain, lieutenant, sergeant, corporal, mineSweeper, infantry, bomb, flag, commando]
    this.red = [general, colonel, major, captain, lieutenant, sergeant, corporal, mineSweeper, infantry, bomb, flag, commando]
  }
}

const general = {
  this.blue[0],
  this.red[0],
  let value = 1
}
const colonel = {
  this.blue[1]
  this.red[1]
  let value = 2
}
const major = {
  this.blue[2]
  this.red[2]
  let value = 3
}
const captain = {
  this.blue[3]
  this.red[3]
  let value = 4
}
const lieutenant = {
  this.blue[4]
  this.red[4]
  let value = 5
}

const sergeant = {
  this.blue[5]
  this.red[5]
  let value = 6
}

const corporal = {
  this.blue[6]
  this.red[6]
  let value = 7
}

const mineSweeper = {
  this.blue[7]
  this.red[7]
  let value = 8
}

const infantry = {
  this.blue[8]
  this.red[8]
  let value = 9
}
const commando = {
  this.blue[9]
  this.red[9]
  let value = 10
}
const bomb = {
  this.blue[10]
  this.red[10]
  let value = null
}
const flag = {
  this.blue[11]
  this.red[11]
  let value = null;
}

// game logic
const game = {
  startGame(){
    if(player1 + player2 === readiedUp){
      beginGame()
    }
  }
}

const movePiece = {

}



// const pieceVs = (player1Piece, player2Piece)=>{
//   const matchUp = {
//     if(general1 > 1){
//       'win'
//     }else if(general1 <= 1){
//       'lose'
//     }else if(general1 === bomb){
//       'lose'
//     }else if(general1 === flag){
//       winGame()
//       }
//
//     }

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


// event listeners
let form = document.getElementById('ready-button')
    form.addEventListener('click', (event)=>{
        event.preventDefault()
        game.startGame()
    })
