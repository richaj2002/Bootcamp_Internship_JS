//learn how to write function in js

//what are the inputs : Arguments
//what are the output : Return Type
//in js its return only one thing otherwise undefined

function createExpenseObject(
    description,
    category,
    amount,
){
    //Writing all the insturction of steps you want to perform
    let tempExpense = {
        description : description,
        category : category,
        amount : amount,
    };
    tempExpense.location = "Virar";
    return tempExpense;
}

let e1 = createExpenseObject("Travel from station in Auto");
console.log(e1);