const form = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('.item-list');
const feedback = document.querySelector('.feedback');
const clearItems = document.querySelector('#clear-items');

let todoItems = [];

const handleItem = (itemName) => {
   const items = itemList.querySelectorAll('.item');

   items.forEach((item) => {
      if (item.querySelector('item-name').textContent === itemName) {
         item.querySelector('.item-complete').classList.toggle('completed');
         item.querySelector('.item-complete').classList.toggle('visibility');
      }

      // add eventListner to edit
      item.querySelector('item-edit').addEventListener('click', () => {
         itemInput.value = itemName;
         itemList.removeChild(item);
         todoItems = todoItems.filter((item) => {
            return item != itemName;
         });
      });

      // add eventListner to remove
      item.querySelector('item-remove').addEventListener('click', () => {
         itemList.removeChild(item);
         todoItems = todoItems.filter((item) => {
            return item != itemName;
         });

         showFeedback('task was deleted', 'succes');
      })

   })
};

const showFeedback = (message, status) => {
   feedback.textContent = message;
}

const removeItem = (item) => {
   console.log(item);
   const removeIndex = todoItems.indexOf(item);
   console.log(removeIndex);
   todoItems.splice(removeIndex, 1);
};

const getList = (todoList) => {
   itemList.innerHTML = "";
   todoList.forEach((item) => {
      itemList.insertAdjacentHTML('beforeend', `<div class="item my-2"><h5 class="item-name">${item}</h5><div class="item-icons"><a href="#" class="item-complete mx-2 item-icon"><i class="fas fa-check"></i></a><a href="#" class="item-edit mx-2 item-icon"><i class="fas fa-edit"></i></a><a href="#" class="item-remove mx-2 item-icon"><i class="fas fa-times"></i></a></div></div>`);
      handleItem(item);
   });
};

const getLocalStorage = () => {
   const todoStorage = localStorage.getItem('todoItems');
   if (todoStorage === null || todoStorage == 'undefined') {
      todoItems = [];
   } else {
      todoItems = JSON.parse(todoStorage);
      getList(todoItems);
   }
};

const setLocalStorage = (items) => {
   localStorage.setItem('todoItems', JSON.stringify(items));
};

form.addEventListener('submit', (e) => {
   e.preventDefault();
   const itemName = itemInput.value;

   if (itemName.length === 0) {
      feedback.innerHTML = "Add a real task";
      feedback.classList.add('show-item', 'alert-danger');
      setTimeout(() => {
         feedback.classList.remove('show-item');
         feedback.innerHTML = '';
      }, 3000);
   } else {
      todoItems.push(itemName);
      setLocalStorage(todoItems);
      getList(todoItems);
   }
   itemInput.value = '';
});

clearItems.addEventListener('click', () => {
   todoItems = [];
   localStorage.clear();
   getList(todoItems);
});

getLocalStorage();
