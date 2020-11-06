/*
   Creati o pagina cu html care include 
   referinta la un script javascript 
   care contine functii care schimba 
   unele propietati ale tag-urilor de pe pagina
*/

function changeTextToTextFromInput(id) {
   var str = document.getElementById(id).value;
   return str;
}

function changeTextToTextFromTextArea(id) {
   var str = document.getElementById(id).innerText;
   return str;
}


function getRandomColor() {
   var color = "";
   for (let i = 0; i < 6; i++) {
      var chr = Math.floor(Math.random() * 16);
      switch(chr) {
         case 10:
            chr = 'a';
            break;
         case 11:
            chr = 'b';
            break;
         case 12:
            chr = 'c';
            break;
         case 13:
            chr = 'd';
            break;
         case 14:
            chr = 'e';
            break;
         case 15:
            chr = 'f';
            break;
      }
      color += chr;
   }

   return `#${color}`;
}