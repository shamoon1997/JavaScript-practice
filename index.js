
// function timeConverter(UNIX_timestamp){
//     var a = new Date(UNIX_timestamp * 1000);
//     var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
//     var year = a.getFullYear();
//     var month = months[a.getMonth()];
//     var date = a.getDate();
//     var hour = a.getHours();
//     var min = a.getMinutes();
//     var sec = a.getSeconds();
//     var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
//     return time;
//   }
//   console.log(timeConverter(1631853600));



// let a=1

// let b=0
// a==1 && b==0 && console.log("Both conditions mets")




const object1={
    a:1
}
const object2={...object1}

object2.c=2

// console.log("object1 ",object1)
// console.log("object2",object2)



const object3={
    food : {
        lunch : "karahi"
    }
}
const object4={...object3}

object4.food.lunch="burger"

console.log(object4);
console.log(object3);

// import { loadTest } from 'loadtest';
// const body = {
//   "username":"dj2o"
// }
// const options = {
//     url: 'https://i.instagram.com/api/v1/accounts/set_username/',
//     maxRequests: 1000,
//     concurrency:5000,
//     requestsPerSecond:1,
//     method: 'POST',
//     headers: { "Content-Type": "application/x-www-form-urlencoded", "Accept-Language": "en-US,en;q=0.5" },
//     body: JSON.stringify(body),

// };
// loadTest(options, function(error, result)
// {
//     if (error)
//     {
//         return console.error('Got an error: %s', error);
//     }
//     console.log('Tests run successfully',result);
// });













// import fetch from "node-fetch"

// const body = {
//   "username":"dj2o"
// }
// let counter=0;

// for(let i=0 ; i<5000 ; i++){
//     fetch("https://i.instagram.com/api/v1/accounts/set_username/", {  //7
//         method: "post",
//        body: JSON.stringify(body),
//         headers: { "Content-Type": "application/x-www-form-urlencoded", "Accept-Language": "en-US,en;q=0.5" }
//       })
//       .then(res => {return res})
//       .then(json => {})
//       .catch(err => console.log(err))
// }
// // setInterval(()=>{
// //   var currentDateTime = new Date();
// //   console.log("The current date time is as follows:");
// //   console.log(currentDateTime+" No of Requests "+counter++)
// //     fetch("https://i.instagram.com/api/v1/accounts/set_username/", {  //7
// //         method: "post",
// //        body: JSON.stringify(body),
// //         headers: { "Content-Type": "application/x-www-form-urlencoded", "Accept-Language": "en-US,en;q=0.5" }
// //       })
// //       .then(res => {return res})
// //       .then(json => {})
// //       .catch(err => console.log(err))


// //       fetch("https://www.instagram.com/accounts/login/?next=/api/v1/accounts/set_username/", {  //6
// //         method: "post",
// //         body: JSON.stringify(body),
// //         headers: { "Content-Type": "application/x-www-form-urlencoded", "Accept-Language": "en-US,en;q=0.5","cookie":"sessionid=sessionid123;" }
// //       })
// //       .then(res => {return res})
// //       .then(json => {})
// //       .catch(err => console.log(err))


// //       fetch("https://www.instagram.com/accounts/login/?next=/api/v1/accounts/set_username/", {   //5
// //         method: "post",
// //         body: JSON.stringify(body),
// //         headers: { "Content-Type": "application/x-www-form-urlencoded", "Accept-Language": "en-US,en;q=0.5" }
// //       })
// //       .then(res => {return res})
// //       .then(json => {})
// //       .catch(err => console.log(err))

// //       fetch("https://www.instagram.com/accounts/login/?next=/api/v1/accounts/set_username/", {     //4
// //         method: "post",
// //         body: JSON.stringify(body),
// //         headers: { "Content-Type": "application/x-www-form-urlencoded", "Accept-Language": "en-US,en;q=0.5" }
// //       })
// //       .then(res => {return res})
// //       .then(json => {})
// //       .catch(err => console.log(err))


// //       fetch("https://www.instagram.com/accounts/login/?next=/api/v1/accounts/set_username/", {     //3
// //         method: "post",
// //         body: JSON.stringify(body),
// //         headers: { "Content-Type": "application/x-www-form-urlencoded", "Accept-Language": "en-US,en;q=0.5" }
// //       })
// //       .then(res => {return res})
// //       .then(json => {})
// //       .catch(err => console.log(err))


// //       fetch("https://www.instagram.com/accounts/login/?next=/api/v1/accounts/set_username/", {       //2
// //         method: "post",
// //         body: JSON.stringify(body),
// //         headers: { "Content-Type": "application/x-www-form-urlencoded", "Accept-Language": "en-US,en;q=0.5" }
// //       })
// //       .then(res => {return res})
// //       .then(json => {})
// //       .catch(err => console.log(err))



// //       fetch("https://www.instagram.com/accounts/login/?next=/api/v1/accounts/set_username/", {     //1
// //         method: "post",
// //         body: JSON.stringify(body),
// //         headers: { "Content-Type": "application/x-www-form-urlencoded", "Accept-Language": "en-US,en;q=0.5" }
// //       })
// //       .then(res => {return res})
// //       .then(json => {})
// //       .catch(err => console.log(err))
// // },1)
















// // async function getNumber(){
// //     return 10
// // }


// // (async ()=>{
// //     let number=await getNumber()
// //     console.log(number);
// // })()




// // (function abc(){
// //     console.log("A")
// // })();



// // (()=>{
// //     console.log("ZX")
// // })();


// // (cde=()=>{
// //     console.log("cde")
// // })();
// // cde()


// // let numbers=[1,2,3,4]
// // numbers.pop()
// // numbers.unshift(0)
// // console.log(numbers);

// // numbers.shift()
// // console.log(numbers);


// // let a1=[1,2,3]
// // let a2=[...a1]
// // a1.push(1)

// // console.log(a1)
// // console.log(a2)


