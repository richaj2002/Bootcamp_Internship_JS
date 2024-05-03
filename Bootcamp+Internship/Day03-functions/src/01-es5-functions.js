function functionName(i1,i2,i3){
    //logic
    return
}



//functiom is always return something....
//if no return statement --.return undefined
//it can anything as an input 
//it can anything as an output

// function addition(num1,num2){
//     const sum = num1 + num2;
//     return sum;
// }



//write a function to add any number of integers

// function returnAdditionFunction(){
//     //this function will return a function
//     //definition

//     function temp(){
//         console.log("I am temporary function");
//     }
//     temp();
// }

// function returnAdditionFunction(){
//     //this function will return a function
//     //definition
    
//     function addition(num1,num2){
//         const sum = num1 + num2;
//         return sum;
//     }
//     return addition;
// }
// const add = returnAdditionFunction();


function addition(num1,num2){
    const sum = num1 + num2;
    return sum;
}

const result = addition(10,20);
const add = addition;
const summation = addition;

//Function in JS are "Objects"