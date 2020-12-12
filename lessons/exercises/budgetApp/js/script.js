class UI {
   constructor() {
      // feedbacks
      this.incomeFeedback = document.querySelector('.income-feedback');
      this.expenseFeedback = document.querySelector('.expense-feedback');

      // forms
      this.incomeForm = document.querySelector('#income-form');
      this.expenseForm = document.querySelector('#expense-form');

      // inputs
      this.incomeAmount = document.querySelector('#income-input');
      this.incomeReason = document.querySelector('#income-reason');
      this.expenseAmount = document.querySelector('#expense-input');
      this.expenseReason = document.querySelector('#expense-reason');

      // history lists
      this.incomeList = document.querySelector('.income-list');
      this.expenseList = document.querySelector('.expense-list');

      // total amounts
      this.totalIncome = document.querySelector('#total-income');
      this.totalExpense = document.querySelector('#total-expense');

      // balance
      this.balance = document.querySelector('#balance');
   }

   displayFeedback(element, message) {
      element.classList.remove('hide');
      element.innerHTML = message;
      // const self = this; // daca in loc de arrow folosim function
      setTimeout(() => {
         element.classList.add('hide');
      }, 3000)
   }

   submitIncomeForm() {
      let income = this.incomeAmount.value
      let incomeMessage = this.incomeReason.value
      if (income < 0 || income == '') {
         this.displayFeedback(this.incomeFeedback, "Write a valid amount");
      } else {
         if(incomeMessage.length < 1) {
            this.displayFeedback(this.incomeFeedback, "Write a reason for income amount");
         } else {
            // recalculate total income
            // add income to income list
            // recalculate balance
            // clear income form
         }
      }
   }
}

let ui = new UI();
// ui.submitIncomeForm();
