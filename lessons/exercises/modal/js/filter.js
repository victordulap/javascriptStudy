// (() => {
//    const buttons = document.querySelectorAll('.btn');
//    const storeItems = document.querySelectorAll('.store-item');

//    // console.log(buttons);
//    buttons.forEach((button) => {
//       button.addEventListener('click', (e) => {
//          e.preventDefault();
//          const filter = e.target.dataset.filter;

//          if(filter === 'all') {
//             storeItems.forEach((item) => {
//                item.style.display = 'block';
//             });
//          } else if (filter === 'cakes') {
//             storeItems.forEach((item) => {
//                if (item.classList.contains('cakes')) {
//                item.style.display = 'block';
//                } else {
//                   item.style.display = 'none';
//                }
//             });
//          } else if (filter === 'cupcakes') {
//             storeItems.forEach((item) => {
//                if (item.classList.contains('cupcakes')) {
//                   item.style.display = 'block';
//                } else {
//                   item.style.display = 'none';
//                }
//             });
//          } else if (filter === 'doughnuts') {
//             storeItems.forEach((item) => {
//                if (item.classList.contains('doughnuts')) {
//                   item.style.display = 'block';
//                } else {
//                   item.style.display = 'none';
//                }
//             });
//          } else if (filter === 'sweets') {
//             storeItems.forEach((item) => {
//                if (item.classList.contains('sweets')) {
//                   item.style.display = 'block';
//                } else {
//                   item.style.display = 'none';
//                }
//             });
//          } else {
//             storeItems.forEach((item) => {
//                item.style.display = 'none';
//             });
//          }
//       })
//    })
// })();

// optimization of code above
(() => {
   const buttons = document.querySelectorAll('.btn');
   const storeItems = document.querySelectorAll('.store-item');

   // console.log(buttons);
   buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
         e.preventDefault();
         const filter = e.target.dataset.filter;

         if (filter !== '') {
            if (filter === 'all') {
               storeItems.forEach((item) => {
                  item.style.display = 'block';
               });
            } else {
               storeItems.forEach((item) => {
                  if (item.classList.contains(filter)) {
                     item.style.display = 'block';
                  } else {
                     item.style.display = 'none';
                  }
               });
            }
         }
      })
   })
})();

(() => {
   const searchBar = document.getElementById('search-item');
   const storeItems = document.querySelectorAll('.store-item');

   searchBar.addEventListener('keyup', (e) => {
      // const searchFilter = e.target.value.toLowerCase().trim();
      const searchFilter = searchBar.value.toLowerCase().trim();
      console.log(JSON.stringify(e));
      console.log(searchFilter);

      storeItems.forEach(item => {
         // includes pt string, contains pt arrayz
         if (item.textContent.includes(searchFilter)) {
            item.style.display = 'block';
         } else {
            item.style.display = 'none';
         }
      })
   })

   
})();