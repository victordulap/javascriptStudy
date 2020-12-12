(function () {
   const qoutes = [
      {
         qoute: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
         author: "Mr. Robot"
      },
      {
         qoute: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem omnis ad aut culpa est itaque similique dicta, excepturi voluptas pariatur perferendis voluptatem, eius facere harum, quae placeat amet? Aliquam, esse.",
         author: "Jacque Fresco"
      },
      {
         qoute: "Lorem ipsum.",
         author: "Steve Jobs"
      },
      {
         qoute: "Text legendar",
         author: "Elon Musk"
      },
      {
         qoute: "Poiezia e o combinatie de strofe",
         author: "Mihai Eminescu"
      }
   ]

   const button = document.getElementById('generateQoute');
   const qoute = document.getElementById('qoute');
   const author = document.getElementById('author');

   button.addEventListener('click', () => {
      let random = Math.floor(Math.random() * qoutes.length);

      qoute.innerText = qoutes[random].qoute;
      author.innerText = qoutes[random].author;
   })
})(); // iife