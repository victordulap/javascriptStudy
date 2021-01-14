const game = document.querySelector('.game');
const player = {
   gameOver: true
}
// get width and height 
let gameDimesion = game.getBoundingClientRect()

// menu
const gameOver = document.createElement('div');
gameOver.textContent = 'Start game';
// gameOver.style.position = 'absolute';
gameOver.style.color = '#fafafa';
gameOver.style.lineHeight = '60px';
// gameOver.style.height = '25%'
gameOver.style.textAlign = 'center';
gameOver.style.fontSize = '3em';
gameOver.style.textTransform = 'uppercase'
gameOver.style.backgroundColor = '#353535';
gameOver.style.width = '100%';
gameOver.style.cursor = 'pointer';
gameOver.style.border = '2px solid var(--light)';
gameOver.style.borderRadius = '10px';

gameOver.addEventListener('click', startGame);
game.appendChild(gameOver);

// ball
const ball = document.createElement('div');
ball.style.position = 'absolute';
ball.style.height = '20px';
ball.style.width = '20px';
ball.style.backgroundColor = 'var(--light)';
ball.style.borderRadius = '25px';
// ball.style.backgroundImage = 'url("img/ball.png")';
ball.style.backgroundSize = '20px 20px';
ball.style.top = '70%';
ball.style.left = '50%';
ball.style.display = 'none';

game.appendChild(ball);

// paddle
const paddle = document.createElement('div');
paddle.style.position = 'absolute';
paddle.style.backgroundColor = '#f1f1f1';
paddle.style.height = '15px';
paddle.style.width = '100px';
paddle.style.bottom = '30px';
paddle.style.left = '50%';

game.appendChild(paddle);

document.addEventListener('keyup', (e) => {
   // console.log(e);

   if (e.key == 'ArrowLeft') {
      paddle.left = false;
   }
   if (e.key == 'ArrowRight') {
      paddle.right = false;
   }
   
});

document.addEventListener('keydown', (e) => {
   // console.log(e);

   if (e.key == 'ArrowLeft') {
      paddle.left = true;
   }
   if (e.key == 'ArrowRight') {
      paddle.right = true;
   }
   if (e.key == 'ArrowUp' && !player.isPlay) {
      player.isPlay = true;
   }
});

function startGame() {
   if (player.gameOver) {
      player.gameOver = false;
      gameOver.style.display = 'none';

      player.score = 0;
      player.lives = 2;

      ball.style.display = 'block';
      paddle.style.display = 'block'
      ball.style.left = paddle.offsetLeft + 50 + 'px';
      ball.style.top = paddle.offsetTop - 30 + 'px';

      player.ballDirection = [2, -3];
      player.num = 10; // 50 bricks to break
      setupBricks(player.num);
      scoreUpdater();
      player.animationFrame = window.requestAnimationFrame(update);
   }
}

function setupBricks(num) {
   let row = {
      x: (gameDimesion.width % 100 / 2),
      y: 50
   };

   let skip = false;

   for (let x = 0; x < num; x++) {
      if (row.x > (gameDimesion - 100)) {
         row.y += 50;
         if (row.y > gameDimesion.height / 2) {
            skip = true;
         }
         row.x = (gameDimesion.width % 100 / 2);
      }

      row.counter = x;
      if (!skip) {
         createBrick(row);
      }
      row.x += 100;
   }
}

function createBrick(pos) {
   const div = document.createElement('div');
   div.setAttribute('class', 'brick');
   div.style.backgroundColor = randomColor();
   div.textContent = pos.counter + 1;
   div.style.left = pos.x + 'px';
   div.style.top = pos.y + 'px';

   game.appendChild(div);
}

function randomColor() {
   return '#' + Math.random().toString(16).substring(2, 8);
}

function scoreUpdater() {
   document.querySelector('.score').textContent = player.score;
   document.querySelector('.lives').textContent = player.lives;
}

function update() {
   if (!player.gameOver) {
      let paddleCurrentPosition = paddle.offsetLeft;

      if (paddle.left && paddleCurrentPosition > 0) {
         paddleCurrentPosition -= 15;
      }
      if (paddle.right && paddleCurrentPosition < gameDimesion.width - paddle.offsetWidth) {
         paddleCurrentPosition += 15;
      }
      paddle.style.left = paddleCurrentPosition + 'px';

      if (!player.isPlay) {
         waitingForPaddle();
      } else {
         moveBall();
      }

      // la fiecare frame, executa update
      player.animationFrame = window.requestAnimationFrame(update);
   }
}

// move ball to center of paddle
function waitingForPaddle() {
   ball.style.top = (paddle.offsetTop - 20) + 'px';
   ball.style.left = (paddle.offsetLeft + 40) + 'px';
}

function moveBall() {
   let ballCurrentPostion = {
      x: ball.offsetLeft,
      y: ball.offsetTop
   };

   if (ballCurrentPostion.y > (gameDimesion.height - 20) || ballCurrentPostion.y < 0) {
      if (ballCurrentPostion.y > (gameDimesion.height - 20)) {
         fallOff();
      } else {
         player.ballDirection[1] *= -1;
      }

      
   }

   if (ballCurrentPostion.x > (gameDimesion.width - 20) || ballCurrentPostion.x < 0) {
      player.ballDirection[0] *= -1;
   }

   if(isColide(paddle, ball)) {
      let tmpBallPosX = (ballCurrentPostion.x - paddle.offsetLeft) - paddle.offsetWidth / 2;
      console.log('hit with paddle');
      player.ballDirection[0] = tmpBallPosX;
      player.ballDirection[1] *= -1;
   }

   let bricks = document.querySelectorAll('.brick');
   if(bricks.length == 0 && !player.gameOver) {
      stopper();
      setupBricks(player.num);
   }
   
   for(const brickElem of bricks) {
      if(isColide(brickElem,ball)) {
         player.ballDirection[1] *= -1;
         
         // brickElem.parentNode.removeChild(brickElem);
         brickElem.remove();
         player.score++;
         scoreUpdater();
      }
   }

   ballCurrentPostion.x += player.ballDirection[0];
   ballCurrentPostion.y += player.ballDirection[1];

   ball.style.left = ballCurrentPostion.x + 'px';
   ball.style.top = ballCurrentPostion.y + 'px';

}

function fallOff() {
   player.lives--;
   if (player.lives < 1) {
      endGame();
      player.lives = 0;
   }

   scoreUpdater();
   stopper();
}

function endGame() {
   gameOver.style.display = 'block';
   gameOver.innerHTML = `game over <br> <p>your score: <span class='red'>${player.score}</span></p>`;
   player.gameOver = true;
   ball.style.display = 'none';
   paddle.style.display = 'none';

   let remainingBricks = document.querySelectorAll('.brick');

   remainingBricks.forEach(brick => brick.remove());

   window.cancelAnimationFrame(player.animationFrame);
}

function stopper() {
   player.isPlay = false;
   // direction, value
   player.ballDirection = [0, -5];
   waitingForPaddle();
   window.cancelAnimationFrame(player.animationFrame);
}

function isColide(a, b) {
   let aRect = a.getBoundingClientRect();
   let bRect = b.getBoundingClientRect();

   return !((aRect.right < bRect.left) || (aRect.left > bRect.right) ||
          (aRect.top > bRect.bottom) || (aRect.bottom < bRect.top));

}