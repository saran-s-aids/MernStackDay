/*console.log("first");
setTimeout(()=>{
console.log("This run after");
},5000)
console.log("end");

console.log("CallBack Hell");
setTimeout(()=>{
    console.log("Made Tea");

    setTimeout(()=>{
        console.log("Toasted Bread");
        
        setTimeout(()=>{
            console.log("Fried Egg");
        },1000);
    },1000);
},1000);*/

/*let iceCreamPromise = new Promise((resolve,reject)=>{
    let iceCreamReady = true;
    if(iceCreamReady){
        resolve("Ice cream is ready!");
    }else{
        reject("No Ice cream today");
    }
 });
 iceCreamPromise
    .then((message)=>{
    console.log("Yay! "+ message);
 })
    .catch((error) =>{
 8   console.log("oops! " + error);
});*/

/*let iceCreamPromise = new Promise((resolve,reject)=>{
    let iceCreamReady = true;
    if(iceCreamReady){
        resolve("Ice cream is ready!");
    }else{
        reject("No Ice cream today");
    }
});

async function getIceCream(){
    try{
        let message = await iceCreamPromise;
        console.log("Yay! " + message);
    }catch(error){
        console.log("oops! " + error);
    }
 }
getIceCream();*/

/*const [a,b,c] =  [10,20,30];
console.log(a);
console.log(b);
console.log(c);

const [first,...rest] = [1,2,3,4,5];
console.log(first);
console.log(rest);

const user = {name : "narenuu" , age : 23}
/*const name = user.name;
const age = user.age;

console.log(name);
console.log(age);

const{name,age} = user;
console.log(name);
console.log(age);


function greet({ name , age}){
    console.log(`Hello ${name}, you are ${age} years old`);
}
greet({
    name : "saran",
    age : 18
});*/

