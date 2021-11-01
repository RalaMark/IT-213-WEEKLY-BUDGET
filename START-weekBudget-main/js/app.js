
class Budget {
    constructor(budget){
        this.budget = Number( budget );
        this.budgetLeft = this.budget;
    }

    subtractFromBudget(amount){
        return this.budgetLeft -= amount;

    }
}

class HTML {

    insertTotal(amount) {

        budgetTotal.innerHTML = '${amount}';
    }

    printMessage(message, className){
        const messageWrapper = document.createElement('div');
        messageWrapper.classList.add('text-center', 'alert', className);
        messageWrapper.appendChild(document.createTextNode(message));

        document.querySelector('.primary').insertBefore(messageWrapper, addExpenseForm);

        setTimeout(function() {
            document.querySelector('.primary .alert').remove();
            //addExpenseForm.reset();
        }, 3000);
    }
    addExpenseToList(name, amount){
        const expenseList = document.querySelector('#expenses ul');

        const li = document.createElement('li');
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        li.innerHTML =`
        ${amount}
        <span class="badge badge-primary badge+pill">${amount}</span>
        `;

        expenseList.appendChild(li);
    }

    trackBudget(amount){
        const budgetLeftDollar = badget.substractFromBudget(amount);
        badgetLeft.innerHTML = '${budgetLeftDollars}';

        if((budget.budget / 4) > budget.substractLeftDollar) {
            budgetLeft.parentElement.parentElement.classList.remove('alert-succes', 'alert-warning');
            budgetLeft.parentElement.parentElement.classList.add('alert-dander');


        } else if ( (budget.budget / 2 ) > budgetLeftDollar ) {
            budgetLeft.parentElement.parentElement.classList.remove('alert-sucees');
            budgetLeft.parentElement.parentElement.classList.add('alert-warning');
        }
    }
}

const addExpenseForm = document.querySelector('#add-expense'),
budgetTotal = document.querySelector('span#total');
budgetLeft = document.querySelector('span#left');

let budget, userBudget;

const html = new HTML();


eventListener();
function eventListener() {

    document.addeventListener('DOMContentLoaded', function(){

        userBudget = prompt('what\s your budget for this week? ');

        if(userBudget === null || userBudget === '0'){
            window.location.reload();
        } else {

            budget = new Budget(userBudget);

            html.insertBudget(budget.budget);

        }
    } 
    );


addExpenseForm.addEventEventListener('submit', function(e) {
    e.preventDefault();

    const expenseName = document.querySelector('#expense').value;
    const amount = document.querySelector('#amount').value;

    if(expenceName === '' || '' ) {
        html.printMessage('There was an error, all the fields are mandatory', 'alert-dander');

    } else {
        
        html.addExpenseToList(expenseName, amount);
        html.trackBudget(amount);
        html.printMessage('Added...', 'alert-success');
    }

});


}

