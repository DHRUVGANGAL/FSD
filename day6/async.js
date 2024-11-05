// sayhello=()=>{
//     console.log("hello function");

// };

// console.log("start");
// setTimeout(sayhello,4000);
// console.log("end");

// console.log('start')

// setTimeout(() => {
//     console.log("first task completed")
//     setTimeout(() => {
//         console.log("second task completed")
//         setTimeout(() => {
//             console.log("third task completed")
//         }, 4000);
//     },2000)
// },3000)

// console.log("End")



const myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success){
        resolve("Data send success");
    }
    else{
        reject("Data failed to send");
    }
});

myPromise
.then((message) => console.log(message))
.catch((message)=>console.log("error fetching"+error));