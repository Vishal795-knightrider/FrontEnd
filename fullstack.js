//1.Scope

// {let a=20; b=20;}
// console.log(a+b);


// {var a=20; b=20;}
// console.log(a+b);

// {const a=20; b=20;}
// console.log(a+b);

//Mutable or not

// const a=10;                  //ok
// console.log(a);              //ok
// a=20;              //nope    value initialse nhi hogi
// console.log(a);

// let a=10;
// console.log(a);
// a=20;
// console.log(a);

// var a=10;
// console.log(a);
// a=20;                  
// console.log(a);

// console.log(a);     error
// let a=20;

// console.log(a);
// var a=20;      undefined

// console.log(a);       
// const a=30;              error




// for(i=0;i<=10;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }



//console.log(5=='5')   //true //value check krta hai not data type
//console.log(5==='5')   //false //strict equalty //value se pehele yeh data type check karega


// let num=10;          //number
// let str='Hello';      //string
// let arr=[1,2,3];             //object
// let obj={name:"Robin",age:10};        //object
// let a;   //undeefine 
// let isok=true;  //boolean
// let emp=null;    //object null  6


// function sum()


// let sum=(a,b)=>{
//     console.log(a+b); 
// }

//identify the even elements

// const arr=[2,3,4,5,6,7,8];
// let even=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         console.log(arr[i]);
//     }
// }


//1.

// const person={key:"Heloo"};
// console.log(person.key);
// person.key="bye";
// console.log(person.key);


// //2.

// const arr=["html","css","java"];
// console.log(arr);
// arr.push("py");
// console.log(arr);

//3.
// const sales="Toyota";
// function carType(name)
// {
//     return name==="Honda"?name:"Sorry we dont sell this car";
// }
// const car={carn:"City",getCar:carType("Honda"),Special:sales}
// console.log(car.carn);
// console.log(car.getCar);
// console.log(car.Special)


//4.  for each loop
// const color=["Red","Black","White"];
// color.forEach((i)=>console.log(i));

// write code to increase the array element by 3
// const arr = [1, 2, 3, 4];
// arr.forEach((v,i) => arr[i]=v+3);
// console.log(arr);


//5.for in loop

// for(const i in color)
// {
//     console.log(i,color[i]);
// }

//write the same code

// for(i in arr){
//     console.log(arr[i]+3);
// }


//6. 
// const user={name:"Rabins",age:25,hobby:"Coding"};
// for(const index in user){
//     console.log(index,user[index]);
// }


//7.for off loop  (elemnets pr iterate)
// const lang=["cpp","py","java","html"];
// for (const i of lang)
// {
//     console.log(i);
// }



//8.
// function greet(name)
// {
//     console.log("Hello"+' '+name);
//     console.log(`Hello ${name}`);
// }
// greet("user");

//9.
// const factorial=function(n)
// {
//     if(n==0||n==1)
//         return 1;
//     else return n*factorial(n-1);
// }
// console.log(factorial(5));