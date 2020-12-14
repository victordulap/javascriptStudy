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
            let classDependingOfType = this.type === "expense" ? "expense-value" : "income-value";
            this.list.insertAdjacentHTML("afterend", `<div class="list-item"><span class="list-amount ${classDependingOfType}">${amount}</span><span class="list-amount">$</span><hr class="list-line"><p class="list-message">${message}</p></div>`)

            // recalculate balance
            if (this.type === 'expense') {
               this.balance.textContent = (balance - amount).toFixed(2);
            } else if (this.type === 'income') {
               this.balance.textContent = (balance + amount).toFixed(2);
            }

            // clear income form
            this.amount.value = '';
            this.reason.value = '';
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