const Expense1 = {
    expenseId:"101",
    description:"",
    category:"For food",
    amount:10,
    date:"24/04/2024",
    modeOfPayment:"",  
};

function GenerateExpense(
    expenseId,
    description,
    category,
    amount,
    date,
    modeOfPayment,
){
    this.expenseId = expenseId
    this.description = description;
    this.category = category;
    this.amount = amount;
    this.date = date;
    this.modeOfPayment = modeOfPayment;

    return this;
}