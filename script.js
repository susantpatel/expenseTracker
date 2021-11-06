const totalBalance = document.querySelector('.total-balance')
const incomeInput = document.getElementsByName('income-input')[0]
const expenseInput = document.querySelector('.expense-input')
const incomeAmount = document.querySelector('.income-amount')
const expenseAmount = document.querySelector('.expense-amount')
const incomeTransactionButton = document.querySelector('.income-transaction')
const expenseTransactionButton = document.querySelector('.expense-transaction')

let income = []
let expense = []

incomeTransactionButton.addEventListener('click', () => {
    let incomeInputAmount = incomeInput.value
    var amount = parseInt(incomeInputAmount)
    income.push(amount)
    let totalIncome = 0
    income.forEach((num) => {
       totalIncome = (totalIncome+num)
    })
    let totalExpense = 0
    expense.forEach((num) => {
       totalExpense = (totalExpense+num)
    })
    incomeInput.value = ''
    incomeAmount.innerHTML = totalIncome
    totalBalance.innerHTML = (totalIncome - totalExpense)
})

expenseTransactionButton.addEventListener('click', () => {
    let expenseInputAmount = expenseInput.value
    var amount = parseInt(expenseInputAmount)
    expense.push(amount)
    let totalExpense = 0
    expense.forEach((num) => {
       totalExpense = (totalExpense+num)
    })
    let totalIncome = 0
    income.forEach((num) => {
       totalIncome = (totalIncome+num)
    })
    expenseInput.value = ''
    expenseAmount.innerHTML = totalExpense
    totalBalance.innerHTML = (totalIncome - totalExpense)
})
