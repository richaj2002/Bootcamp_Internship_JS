let e2 = {
    expenseId:"456def",
    description:"coffee",
    category:"food",
    amount:250,
    date:"24/04/2024", //proper date type in js
    modeOfPayment:"UPI",  
};


//constructor function
function Expense(
    expenseId,
    description,
    category,
    amount,
    date,
    modeOfPayment,
){
    this.description = description;
    this.category = category;
    this.amount = amount;
    this.date = date;
    this.modeOfPayment = modeOfPayment;

    return this;

}

const e1 = new Expense();
