var seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];

var getClothes = (season) => {
   if (season === seasons[2]) {
      return 'T-shirt and go to DISCO!';
   } else if (season === seasons[3]) {
      return 'Get a umbrella with you, and a coat';
   } else if (season === seasons[1]) {
      return 'Get your jacket and enjoy the sun';
   } else if (season === seasons[0]) {
      return 'You better stay home cuz its cold!!!'
   } else {
      return `I don't know`;
   }

   switch (season) {
      case seasons[0]:
         return 'You better stay home cuz its cold!!!';
         break;
      case seasons[1]:
         return 'Get your jacket and enjoy the sun';
         break;
      case seasons[2]:
         return 'T-shirt and go to DISCO!';
         break;
      case seasons[3]:
         return 'Get a umbrella with you, and a coat';
         break;
      default:
         return `I don't know`;
         break;
   }
}

// for (let i = 0; i < seasons.length; i++) {
//    setTimeout(() => {
//       document.body.innerHTML += "What should I choose? <br>" + getClothes(seasons[i]) + "<br><br>";
//    }, 3000);

// }

let count = 0;
let questionsInterval = setInterval(() => {
   document.body.innerHTML = `What should I choose when its ${seasons[count]}? <br>` + getClothes(seasons[count]) + "<br><br>";
   count++;
   if (count >= 4) {
      clearInterval(questionsInterval);
   }
}, 2500);