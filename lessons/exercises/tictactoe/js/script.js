class TicTacToe {
   constructor() {
      this.gameButtons = document.querySelectorAll('.game-btn');
      this.playerToMove = document.querySelector('.player-to-move')
      this.playerToMoveText = document.querySelector('.player-to-move-text')
      this.xMoves;
      this.disabledBtns;
      this.oScore = document.querySelector('#o-score');
      this.xScore = document.querySelector('#x-score');

      this.restartGame()
      this.handleMove();
   }

   restartGame() {
      this.gameButtons.forEach((button) => {
         button.removeAttribute('disabled');
         button.classList.remove('win');
         button.textContent = String.fromCharCode(160);
      });
      this.xMoves = !this.xMoves;
      this.playerToMove.textContent = this.xMoves ? 'x' : 'o';
      this.playerToMoveText.textContent = 'Moves!';
      this.disabledBtns = 0;
   };

   disableBtn(button) {
      button.toggleAttribute('disabled');
      this.disabledBtns++;
   };

   disableAllBtns() {
      this.gameButtons.forEach(button => {
         if (button.getAttribute('disabled') == null) {
            button.toggleAttribute('disabled');
         }
      });
   };

   // in any on cases default action
   caseValid(player) {
      this.playerToMove.textContent = '';
      this.playerToMoveText.textContent = (player).toString().toUpperCase() + ' WON!';
      this.disableAllBtns();

      return true;
   }

   checkIfGameOver(player) {
      // debugger;
      var btnsArr = [];
      this.gameButtons.forEach((button) => {
         btnsArr.push(button.textContent);
      });   

      /* case 1
               0 | 1 | 2 
               3 | 4 | 5 
               6 | 7 | 8 
      */

      // horizontal cases
      /* case 1
         X | X | X
           |   |   
           |   |  
      */
      if (btnsArr[0] === player && btnsArr[1] === player && btnsArr[2] === player) {
         this.gameButtons.item(0).classList.add('win');
         this.gameButtons.item(1).classList.add('win');
         this.gameButtons.item(2).classList.add('win');

         return this.caseValid(player);
      }
      /* case 2
           |   |
         X | X | X
           |   |
      */
      else if (btnsArr[3] === player && btnsArr[4] === player && btnsArr[5] === player) {
         this.gameButtons.item(3).classList.add('win');
         this.gameButtons.item(4).classList.add('win');
         this.gameButtons.item(5).classList.add('win');

         return this.caseValid(player);
      }
      /* case 3
           |   |
           |   |
         X | X | X
      */
      else if (btnsArr[6] === player && btnsArr[7] === player && btnsArr[8] === player) {
         this.gameButtons.item(6).classList.add('win');
         this.gameButtons.item(7).classList.add('win');
         this.gameButtons.item(8).classList.add('win');

         return this.caseValid(player);
      }

      // vertical cases
      /* case 4
               X |   |
               X |   |
               X |   |  
            */
      else if (btnsArr[0] === player && btnsArr[3] === player && btnsArr[6] === player) {
         this.gameButtons.item(0).classList.add('win');
         this.gameButtons.item(3).classList.add('win');
         this.gameButtons.item(6).classList.add('win');

         return this.caseValid(player);
      }
      /* case 5
                 | X |   
                 | X |   
                 | X |   
            */
      else if (btnsArr[1] === player && btnsArr[4] === player && btnsArr[7] === player) {
         this.gameButtons.item(1).classList.add('win');
         this.gameButtons.item(4).classList.add('win');
         this.gameButtons.item(7).classList.add('win');

         return this.caseValid(player);
      }
      /* case 6
                       |   | X 
                       |   | X 
                       |   | X 
                  */
      else if (btnsArr[2] === player && btnsArr[5] === player && btnsArr[8] === player) {
         this.gameButtons.item(2).classList.add('win');
         this.gameButtons.item(5).classList.add('win');
         this.gameButtons.item(8).classList.add('win');

         return this.caseValid(player);
      }

      // diagonal cases 
      /* case 7
                     X |   |   
                       | X |   
                       |   | X 
                  */
      else if (btnsArr[0] === player && btnsArr[4] === player && btnsArr[8] === player) {
         this.gameButtons.item(0).classList.add('win');
         this.gameButtons.item(4).classList.add('win');
         this.gameButtons.item(8).classList.add('win');

         return this.caseValid(player);
      }
      /* case 7
                       |   | X 
                       | X |   
                     X |   |   
                  */
      else if (btnsArr[2] === player && btnsArr[4] === player && btnsArr[6] === player) {
         this.gameButtons.item(2).classList.add('win');
         this.gameButtons.item(4).classList.add('win');
         this.gameButtons.item(6).classList.add('win');

         return this.caseValid(player);
      }

      return false;
   };

   handleMove() {
      this.gameButtons.forEach((button) => {
         button.addEventListener('click', (e) => {
            // move
            button.textContent = this.xMoves ? 'x' : 'o';
            if (!this.checkIfGameOver(this.xMoves ? 'x' : 'o')) {
               this.xMoves = !this.xMoves;
               this.playerToMove.textContent = this.xMoves ? 'x' : 'o';
               this.disableBtn(button);

               if (this.disabledBtns === 9) {
                  this.playerToMove.textContent = '';
                  this.playerToMoveText.textContent = 'Draw';
               }
            } else {
               // setting score
               let winner = this.xMoves ? "x" : "o";
               if(winner === 'x') {
                  this.xScore.textContent = parseInt(this.xScore.textContent) + 1;
               } else if(winner === 'o') {
                  this.oScore.textContent = parseInt(this.oScore.textContent) + 1;
               }
            }
         });
      });
   };
}


let ticTacToe = new TicTacToe();
const resetGameBtn = document.querySelector('#reset-game');
resetGameBtn.addEventListener('click', () => { ticTacToe.restartGame() });