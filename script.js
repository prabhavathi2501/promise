//!syntax of promise
//* var/let/const variablename = new Promise((resolve,reject)=>{})
//!Example
/*const b = parseInt(prompt("Enter the number"));
const a = new Promise((resolve,reject)=>{
    if(b%2==0)
    {
        resolve("Even Number")
    }
    else
    {
        reject("Odd Number")
    }
})
console.log(a);
*/
//! session Task
/*const year = parseInt(prompt("Enter your age"))
 const age = new Promise((resolve,reject)=>{
    if(year>=18){
        resolve("You are eligible to vote!")
    }
    else{
        reject("Sorry! You are not eligible to vote")
    }
 })
age.then((data)=>console.log(data)).catch((error)=>console.log(error))
*/

//! promise in functions
//* Function returns the promise
// for a promise if there are both resolve and reject then it executes in the order.
/*function foo(num) {
  return new Promise((resolve, reject) => {
    resolve("this is resolved"+" "+num);
    reject("this is rejected"+" "+num);
   
  });
}
foo(12).then((data)=>console.log(data)).catch((error)=>console.log(error))
*/

//! Promise chaining
/*function mul(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num * 2), 2000);
  });
}
mul(5).then((ele)=>{
    console.log(ele); //10
    return mul(ele) //return mul(10)
}).then((ele1)=>{
    console.log(ele1); //20
    return mul(ele1) //return mul(20)
}).then((ele2)=>console.log(ele2)).catch((error)=>console.log(error))
*/

//! promise.all()
/*const p1 = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => resolve("P1 is resolved"), 2000);
  } else {
    setTimeout(() => reject("P1 is rejected"), 4000);
  }
});

const p2 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("P2 is resolved"), 2000);
  } else {
    setTimeout(() => reject("P2 is rejected"), 4000);
  }
});

const p3 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("P3 is resolved"), 2000);
  } else {
    setTimeout(() => reject("P3 is rejected"), 4000);
  }
});

Promise.all([p1, p2, p3])
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
*/

//!promise.allsettled

const p1 = new Promise((resolve, reject) => {
    if (false) {
      setTimeout(() => resolve("P1 is resolved"), 2000);
    } else {
      setTimeout(() => reject("P1 is rejected"), 4000);
    }
  });
  
  const p2 = new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => resolve("P2 is resolved"), 2000);
    } else {
      setTimeout(() => reject("P2 is rejected"), 4000);
    }
  });
  
  const p3 = new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => resolve("P3 is resolved"), 2000);
    } else {
      setTimeout(() => reject("P3 is rejected"), 4000);
    }
  });
  const res = Promise.allSettled([p1,p2,p3]).then((data)=>data.forEach((res)=>console.log(res)))