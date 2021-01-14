const canvas = document.querySelector('canvas'); //document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let radius = canvas.height / 2;

ctx.translate(radius, radius);

radius *= 0.9;

setInterval(drawClock, 1000);

function drawClock() {
   drawFace(ctx, radius);
   drawNumbers(ctx, radius);
   drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
   let gradient;
   ctx.beginPath();
   ctx.arc(0, 0, radius, 0, 2 * Math.PI);
   ctx.fillStyle = "#454545";
   ctx.fill();

   gradient = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
   gradient.addColorStop(0, "#242424");
   gradient.addColorStop(1, "#353535");

   // use gradient in context 
   ctx.strokeStyle = gradient;
   ctx.lineWidth = radius * 0.05;
   ctx.stroke();

   // draw center of clock
   ctx.beginPath();
   ctx.arc(0, 0, radius * 0.05, 0, 2 * Math.PI);
   ctx.fillStyle = '#e100ff';
   ctx.fill();
}

function drawNumbers(ctx, radius) {
   let angle, num;
   ctx.font = radius * 0.15 + "px arial";
   ctx.textBaseline = 'middle';
   ctx.textAlign = 'center';
   for (num = 1; num <= 12; num++) {
      angle = num * Math.PI / 6;
      ctx.rotate(angle); // invertesti num de la centru pe 30deg
      ctx.translate(0, -radius * 0.85); // il muti la sfartsit
      ctx.rotate(-angle); // il invertesti inapoi ca sa fie aliniat normal
      ctx.fillText(num.toString(), 0, 0); // scriem cifra
      // next 3 lines mutam positia inapoi in centru
      ctx.rotate(angle);
      ctx.translate(0, radius * 0.85);
      ctx.rotate(-angle);
   }
}

function drawTime(ctx, radius) {
   let currentTime = new Date(); // data si ora curenta
   let hours = currentTime.getHours();
   let minutes = currentTime.getMinutes();
   let seconds = currentTime.getSeconds();

   hours = hours % 12;
   // hours angle
   hours = (hours * Math.PI / 6) + (minutes * Math.PI / (6 * 60)) + (seconds * Math.PI / (6 * 3600));
   drawAxe(ctx, hours, radius * 0.25, 10);

   // minutes angle
   minutes = (minutes * Math.PI / 30) + (seconds * Math.PI / (6 * 360));
   drawAxe(ctx, minutes, radius * 0.5, 5);

   // seconds angle
   seconds = (seconds * Math.PI / 30);
   drawAxe(ctx, seconds, radius * 0.65, 2.5);
}

function drawAxe(ctx, angle, length, width) {
   ctx.beginPath();
   ctx.lineWidth = width;
   ctx.lineCap = 'round';
   ctx.moveTo(0, 0);
   ctx.rotate(angle);
   ctx.lineTo(0, -length);
   ctx.stroke();

   ctx.rotate(-angle);
   // ctx.lineTo(0, length);

}