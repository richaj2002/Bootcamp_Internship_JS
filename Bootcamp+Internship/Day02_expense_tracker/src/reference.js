// const e1 = {
//    desc:"Something", 
// };

// const e2 = e1;
// e2.amount = 1200;

// //desturcturing
// //copied the values from e1 to e3
// const e3 ={...e1};


const person ={
    name: "Nirav",
    address:{
        street : "Street name",
        pincode : 123455,
        apartment : {
            block : "some",
            room : "1202"
        }

    },
    printName: function () {},
}

const p2 = {...person};

//write a function that takes