let button = document.querySelector('button#colorChanger');
let body = document.querySelector('body');

let changeColor = () => {
   let r = Math.floor(Math.random() * 255);
   let g = Math.floor(Math.random() * 255);
   let b = Math.floor(Math.random() * 255);

   body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
   if((r + g + b) > 375) {
      body.style.color = `var(--dark)`;
   } else {
      body.style.color = `var(--light)`;
   }
}

button.addEventListener('click', changeColor);