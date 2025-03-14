let totalBudget = 0;
let expensesList = [];

function updateBudget() {
    totalBudget = parseFloat(document.getElementById("set-budget").value);
    document.getElementById("display-budget").innerText = `Budget: $${totalBudget}`;
    calculateBalance();
}

function recordExpense() {
    let title = document.getElementById("expense-title").value;
    let cost = parseFloat(document.getElementById("expense-value").value);
    
    if (title && cost) {
        expensesList.push({ title, cost });
        renderExpenses();
        calculateBalance();
    }
}

function renderExpenses() {
    let expenseLog = document.getElementById("expense-log");
    expenseLog.innerHTML = "";
    expensesList.forEach(item => {
        let listItem = document.createElement("li");
        listItem.innerText = `${item.title}: $${item.cost}`;
        expenseLog.appendChild(listItem);
    });
}

function calculateBalance() {
    let totalSpent = expensesList.reduce((sum, exp) => sum + exp.cost, 0);
    let balance = totalBudget - totalSpent;
    document.getElementById("balance").innerText = `Remaining Balance: $${balance}`;
}
