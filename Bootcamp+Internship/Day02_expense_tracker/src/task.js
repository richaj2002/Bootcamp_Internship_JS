//Day 2 js: write a fuction that takes input object any level of nesting and return a copy of the same 
// habit tracker 


// function createHabitObject (name,category,frequency) {
//     let tempHabit = {
//        name: name,
//        category: category,
//        frequency: frequency,
//     };
//     return tempHabit;
// } 

// let habit1 = createHabitObject("Exercise", "Health", "Daily");

// function copyObject(obj) {
//    let copy = {};
// }


// // function Student(
// //     stdId,stdName,stdAge,StdClass,
// // ){
// //     this.model
// // }

// const userDetails = {
//    name: "John Doe",
//    age: 14,
//    verified: false
//  };

// //  const newUser = userDetails;
// console.log(newUser);

// const newUser = userDetails;
// newUser.name = "Jane Doe";

// console.log(newUser);



const userDetails = {
   name: "John Doe",
   age: 14,
   status: {
     verified: false
   }
 };
 
 // Cloning the Object with Spread Operator
 let cloneUser = { ...userDetails };
 
 // Changing the value of cloneUser
 cloneUser.status.verified = true;
 
 console.log(cloneUser);   // {name: 'John Doe', age: 14, status: {verified: true}}
 console.log(userDetails); // {name: 'John Doe', age: 14, status: {verified: true}}