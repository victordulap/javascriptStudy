(() => {
   const pictures = [
      'contBcg-0',
      'contBcg-1',
      'contBcg-2',
      'contBcg-3',
      'contBcg-4'
   ];

   // const btnLeft = document.querySelector()
   const buttons = document.querySelectorAll('.btn');
   const imageContainer = document.querySelector('.image-container');
   let imageIndex = 0;

   imageContainer.style.backgroundImage = `url('img/${pictures[imageIndex]}.jpeg')`;
   buttons.forEach((button) => {
      button.addEventListener('click', () => {
         if (button.classList.contains('btn-left')) {
            if (imageIndex == 0) {
               imageIndex = pictures.length - 1;
            } else {
               imageIndex--;
            }
            
            imageContainer.style.backgroundImage = `url('img/${pictures[imageIndex]}.jpeg')`;
         }
         if (button.classList.contains('btn-right')) {
            if (imageIndex == (pictures.length - 1)) {
               imageIndex = 0;
            } else {
               imageIndex++;
            }

            imageContainer.style.backgroundImage = `url('img/${pictures[imageIndex]}.jpeg')`;
         }
      })
   })
})()