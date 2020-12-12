(function () {
   const form = document.getElementById('messageForm');

   // addEventListener transmite automat parametru "event"
   form.addEventListener('submit', (event) => {
      // sa nu face refresh la pagina cand transmite datele la "server"
      event.preventDefault();

      const message = document.getElementById('messageText');
      const feedback = document.querySelector('.feedback');
      const messageContent = document.getElementById('messageContent');

      if (message.value === '') {
         feedback.classList.add('show');
         setTimeout(() => {
            feedback.classList.remove('show');
         }, 2000);
      } else {
         messageContent.textContent = message.value;
         message.value = '';
      }
   })
})()