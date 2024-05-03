// const printWelcomeMessage = function(name, company,email,phone,address){
//     console.log("Welcome ==",name,"to--",company);
//     console.log("Your email is ",email);
//     console.log("we will call you on",phone);
//     console.log("your mail will be send to",address);
// };

const student ={
    name: "something",
    company: "Some Company",
    phone : 1234,
    email : "Some Email",
    address : "Address",
};


//destructuring   
const {name, phone, email}= student;


// const PrintName = function(student){
//     console.log("Welcome ==",student.name,"to--",student.company);
//     console.log("Your email is ",student.email);
//     console.log("we will call you on",student.phone);
//     console.log("your mail will be send to",student.address);
// };

// destructuring object
const printWelcomeMessage = function(name, company,email,phone,address){
    
    console.log("Welcome ==",name,"to--",company);
    console.log("Your email is ",email);
    console.log("we will call you on",phone);
    console.log("your mail will be send to",address);
};