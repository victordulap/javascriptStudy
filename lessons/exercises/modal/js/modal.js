(() => {
   const storeItems = document.querySelectorAll('.store-item');
   const lightBox = document.querySelector('.lightbox-container');
   const lightBoxItem = document.querySelector('.lightbox-item');
   const cardImages = document.querySelectorAll('.store-img');

   let imageSrcList = [];
   let imageIndex = 0;

   cardImages.forEach((image) => {
      imageSrcList.push(image.src);

      // image.addEventListener('click', () => {
      //    console.log('yes');
      // });
   });
   // console.log(cardImages);
   // console.log(imageSrcList);

   cardImages.forEach((item) => {
      item.addEventListener('click', e => {
         // target ii variabila item in cazul dat
         let image = e.target.src;
         // console.log(JSON.stringify(image));
         lightBoxItem.style.backgroundImage = `url("${image}")`;
         lightBox.classList.add('show');
         imageIndex = imageSrcList.findIndex((img) => img === image);
      })
   });

   let btnLeft = document.querySelector('.btn-left');
   btnLeft.addEventListener('click', () => {
      imageIndex--;
      if(imageIndex < 0) {
         imageIndex = imageSrcList.length - 1;
      }

      lightBoxItem.style.backgroundImage = `url("${imageSrcList[imageIndex]}")`;
   });

   let btnRight = document.querySelector('.btn-right');
   btnRight.addEventListener('click', () => {
      imageIndex++;
      if (imageIndex >= imageSrcList.length) {
         imageIndex = 0;
      }

      lightBoxItem.style.backgroundImage = `url("${imageSrcList[imageIndex]}")`;
   });

   let closeBtn = document.querySelector('.lightbox-close');
   closeBtn.addEventListener('click', () => {
      lightBox.classList.remove('show');
   });


})();