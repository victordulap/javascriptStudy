let container = document.querySelectorAll('.container');
console.log(container);

var blocks = document.querySelectorAll(".element");
var paragraph = document.querySelector("#info");
// var paragraph2 = document.getElementById("info");

console.log(`title of page: ${paragraph.textContent}`);

var deleteLastElement = () => {
   container[0].removeChild(blocks[blocks.length - 1]);
}

var appendLastElement = () => {
   container[0].appendChild(blocks[blocks.length - 1]);
}

// container[1].appendChild(blocks[0]);
// container[1].appendChild(blocks[1]);
// container[1].appendChild(blocks[0]);

// container[1].insertBefore(blocks[3], blocks[0]);
// container[1].replaceChild(blocks[3], blocks[1]);

// let timer = setTimeout(() => {alert("2500ms")}, 2500);

// pastreaza blocks[0]
// var replaced;
// setTimeout(() => { replaced = container[1].
//    replaceChild(blocks[5], blocks[0])}, 2000)
// setTimeout(() => container[0].appendChild(replaced), 2500)


container[0].appendChild(blocks[0].cloneNode()) // copierie
container[0].appendChild(blocks[0].cloneNode(true)) // copierie full inner
container[0].appendChild(blocks[0].cloneNode(true)) // copierie full inner
container[0].appendChild(blocks[0].cloneNode(true)) // copierie full inner
container[0].appendChild(blocks[0].cloneNode(true)) // copierie full inner

//fill 3rd container
var thirdContainer = document.querySelector(".container-3");
var templateCell = document.querySelector(".element-0");
for (let i = 0; i < 10; i++) {
   let element = templateCell.cloneNode(true);
   element.textContent = `<span>${i}</span>`;

   thirdContainer.appendChild(element);
}