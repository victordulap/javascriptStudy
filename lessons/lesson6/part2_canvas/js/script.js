// canvas sample
let canvas = document.getElementById('canvas');

let context = canvas.getContext('2d');

// define color to fill figures
context.fillStyle = '#171717'

// draw rectangle with default or specific color
// context.fillRect(0, 0, 300, 150);
// context.fillRect(310, 0, 100, 100);
// context.fillRect(310, 110, 100, 40);
// context.fillRect(310, 110, 100, 40);

// var gradient = context.createLinearGradient(0, 0, 300, 150);
// gradient.addColorStop(0, 'violet');
// gradient.addColorStop(0.5, 'blue');
// gradient.addColorStop(1, 'red');

// context.fillStyle = gradient;
// context.fillRect(0, 0, 300, 150);

context.beginPath();
// context.moveTo(10, 90);
// context.lineTo(30, 10);
// context.lineTo(50, 70);
// context.lineTo(70, 10);
// context.lineTo(90, 90);
// context.bezierCurveTo(10, 100, 90, 100, 10, 90);

context.moveTo(150,10);
context.lineTo(250, 110)
context.lineTo(50, 60);
context.lineTo(300, 60);
context.lineTo(100, 110);
context.lineTo(150, 10);


context.stroke();
// context.fill();


