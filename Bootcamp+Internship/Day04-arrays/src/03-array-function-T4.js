
import Expenses  from "./data/Expenses.js";

console.log("Expenses",Expenses);
const category= [
    "Food",
    "Travel",
    "EMI",
    "Bills",
    "Medical Expense",
    "Grocery",
];

function findExpenseById(id){
    // Expenses.forEach(expense);

    const result = Expenses.find((expense)=> {
        return expense.id == id;

    });

    // return final answer
    return result
};

// console.log(findExpenseById(10));


const findExpenseByCategory = (category) => {
    const result = {expenses : [], totalExpense : []};
    result.expenses = Expenses.filter((expense)=>{
        return expense.category === category;
    });
      
    //for calculating total expense 
    const generateUniqueId = (config = {}) =>{
        //destructing
        const {prefix} = config;
        if(prefix){
            return prefix +"_"+
            Math.random().toString(36).substring(2);
        }
        return
        Math.random().toString(36).substring(2);
    }
    // result.expenses.forEach((expense)=>{
    //     result.totalExpense = result.totalExpense + expense.amount;
    //     // return result.totalExpense;

    // });

    return result;
};


console.log(findExpenseByCategory(category[0]));


const updateExpenseById = (id, updateObject) => {
    // Find the index of the expense with the given id
    const index = Expenses.findIndex((expense) => expense.id === id);

    // If the expense with the given id exists
    if (index !== -1) {
        // Create a copy of the expense object at the found index
        const updatedExpense = { ...Expenses[index] };

        // Update the properties of the copy with the values from updateObject
        for (let key in updateObject) {
            // Ensure that the key is not 'id' (as we don't want to update the id)
            if (key !== 'id' && updateObject.hasOwnProperty(key)) {
                updatedExpense[key] = updateObject[key];
            }
        }

        // Update the expense array with the modified expense object
        Expenses[index] = updatedExpense;

        // Return the updated expense
        return Expenses[index];
    } else {
        // If expense with the given id does not exist, return null
        return null;
    }
};




// total expense

//new array in employees updated
// const employeesUpdated = employees.map((emp) => {
//     let email = emp.name + "@" + emp.company + ".com"; 
//     const newObj = {...emp,email:email};
//     return newObj;
// });
