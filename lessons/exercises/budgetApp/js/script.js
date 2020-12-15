class UI {
   constructor(type) {
      // used in comparing balance
      this.type = type;

      // feedbacks
      this.feedback = document.querySelector(`.${type}-feedback`);

      // forms
      this.form = document.querySelector(`#${type}-form`);

      // inputs
      this.amount = document.querySelector(`#${type}-input`);
      this.reason = document.querySelector(`#${type}-reason`);

      // history lists
      this.list = document.querySelector(`.${type}-list`);

      // total amounts
      this.total = document.querySelector(`#total-${type}`);

      // balance
      this.balance = document.querySelector(`#balance`);

      // item counter (used for delete and update btns)
      this.itemCounter = 0;

      // submit and edit btns
      this.submitBtn = document.querySelector(`.${type}-submit`);
      this.editBtn = document.querySelector(`.${type}-edit`);
   }

   displayFeedback(message) {
      this.feedback.classList.remove('hide');
      this.feedback.innerHTML = message;
      // const self = this; // daca in loc de arrow folosim function
      setTimeout(() => {
         this.feedback.classList.add('hide');
      }, 3000)
   }


   getFloatWith2Decimals(float) {
      return parseFloat(parseFloat(float).toFixed(2));
   }

   clearForm() {
      this.amount.value = '';
      this.reason.value = '';
   }

   submitForm() {
      let amount = this.getFloatWith2Decimals(this.amount.value);
      let message = this.reason.value;
      let balance = this.getFloatWith2Decimals(this.balance.textContent);
      if (amount < 0 || amount == '') {
         this.displayFeedback("Write a valid amount");
      } else {
         if (message.length < 1) {
            this.displayFeedback(`Write a reason for ${this.type} amount`);
         } else if (this.type === 'expense' && balance < amount) {
            this.displayFeedback("Balance too low!");
         } else {
            // recalculate total income/expense
            this.total.textContent = (parseFloat(this.total.textContent) + amount).toFixed(2);

            // add income/expense to list
            let classDependingOfType = this.type === "expense" ? "list-item-expense" : "list-item-income";
            this.list.insertAdjacentHTML("afterend", `<div class="list-item ${classDependingOfType}" id="list-item-${this.itemCounter}"><div class="row mb-2"><div class="col-6"><button class="btn btn-block edit-btn"><i class="fas fa-edit"></i></button></div><div class="col-6"><button class="btn btn-block delete-btn"><i class="fas fa-trash"></i></button></div></div><span class="list-amount">${amount}</span><span class="list-dollar">$</span><hr class="list-line"><p class="list-message">${message}</p></div>`)




            // get current inserted item instance
            const currentItem = document.querySelector(`#list-item-${this.itemCounter}`);
            // get currentItems amount and message
            const currentItemsAmount = currentItem.querySelector('.list-amount');
            const currentItemsMessage = currentItem.querySelector('.list-message');

            // assign to event delete btn
            const deleteBtn = currentItem.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', () => {
               // reset total
               this.total.textContent = (parseFloat(this.total.textContent) - parseFloat(currentItemsAmount.textContent)).toFixed(2);

               // reset balance
               if (this.type == 'income')
                  this.balance.textContent = parseFloat(this.balance.textContent) - parseFloat(currentItemsAmount.textContent);
               else if (this.type == 'expense')
                  this.balance.textContent = parseFloat(this.balance.textContent) + parseFloat(currentItemsAmount.textContent);

                  // hide edit button and reveal add button
               this.editBtn.classList.add('hide');
               this.submitBtn.classList.remove('hide');

               // delete item
               currentItem.remove();
            });

            // assign to event edit btn
            const editBtn = currentItem.querySelector('.edit-btn');
            editBtn.addEventListener('click', () => {
               // move data to inputs
               this.amount.value = parseFloat(currentItemsAmount.textContent);
               this.reason.value = currentItemsMessage.textContent;

               // hide add button and reveal edit button
               this.submitBtn.classList.add('hide');
               this.editBtn.classList.remove('hide');

               // hide edit button and reveal add button
               // this.editBtn.classList.add('hide');
               // this.submitBtn.classList.remove('hide');
            });

            // recalculate balance
            if (this.type === 'expense') {
               this.balance.textContent = (balance - amount).toFixed(2);
            } else if (this.type === 'income') {
               this.balance.textContent = (balance + amount).toFixed(2);
            }

            // increment itemCounter for next usage
            this.itemCounter++;

            // clear income form
            this.clearForm();
         }
      }
   }
}

let incomeUi = new UI('income');
const submitIncomeButton = document.querySelector('.income-submit');
submitIncomeButton.addEventListener("click", (e) => {
   e.preventDefault();
   incomeUi.submitForm();
});

let expenseUi = new UI('expense');
const submitExpenseeButton = document.querySelector('.expense-submit');
submitExpenseeButton.addEventListener("click", (e) => {
   e.preventDefault();
   expenseUi.submitForm();
});