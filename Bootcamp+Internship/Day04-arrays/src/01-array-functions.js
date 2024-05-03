const emp = {
    name : "name",
    company : "company",


};


// const employees = [];

function printEmpDetails(obj){
    // console.log("Welcome");
    console.log("Hello",obj.name,"Welcome to",obj.company);

}


// es6 function -->convert the above funtion es6 function
// const addition = (n1, n2) => {
//     return n1 + n2;
//  }; //this is for reference.

// console.log("Welcome");

// const printMessage = function(name, company,email,){
//     console.log("Welcome ==",name,"to--",company);
//     console.log("Your email is ",email);
//     console.log("we will call you on",phone);
//     console.log("your mail will be send to",address);
// };

const employees = [
    {
        name : "name1",
        company : "company1",
    
    },
    {
        name : "name2",
        company : "company2",
    
    },
    {
        name : "name3",
        company : "company3",
    
    },
    {
        name : "name4",
        company : "company4",
    
    },
    {
        name : "name5",
        company : "company5",
    
    },
    {
        name : "name6",
        company : "company6",
    
    },

];


for(let i=0;i<employees.length;i++){
    // console.log("Welcome to Edba",employees[i]);
    printEmpDetails(employees[i]);
}

//Array Functions
function giveCupCake(){}

// employees.forEach(giveCupCake());

// employees.forEach(printEmpDetails);

// employees.forEach(function(emp, i){
//     emp.email = "Some Email" + i
//     console.log("Using Anonmyous function",emp);
//     console.log("Good Morning",emp);
//     console.log("Good Night",emp);

// }); //this is wrong we cant alter emp..

employees.forEach(function(emp,){
    console.log("Using Anonmyous function",emp);
    console.log("Good Morning",emp);
    console.log("Good Night",emp);

});


// create abvov function in arrayfunction
employees.forEach((emp) =>{
    //Any Process you want to do here
});

//new array in employees updated
// const employeesUpdated = employees.map((emp) => {
//     let email = emp.name + "@" + emp.company + ".com"; 
//     const newObj = {...emp,email:email};
//     return newObj;
// });

const employeesUpdated = employees.map((emp) => {
    // const email = `${emp.name}@${emp.company}.com`; //template string

    // return {...emp, email: email};

     return {...emp, email:`${emp.name}@${emp.company}.com` };

}); 
