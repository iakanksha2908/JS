const promise1 = new Promise(function(resolve, reject){
    // Do async tasks - like DB calls, crypto, n/w calls
    // console.log('promise created');
    resolve()
})


promise1.then(function(){
    // console.log("Promise consumed");
})

new Promise(function(resolve, reject){

    setTimeout(function(){
        // console.log("Promise 2 created");
        resolve()
    }, 1000)
}).then(function(){
    // console.log('Promise 2 consumed')
})

// promise3 with resolve args
const promise3 = new Promise(function(resolve, reject){

    setTimeout(function(){
        resolve({name: "Akanksha", email: "akankshapawar@gmail.com"})
    }, 1000)
}).then(function(user){
    // console.log(user);
})

// promise4 with chaining
new Promise(function (resolve, reject) {

    setTimeout(function () {
        const error = true
        if (error)
            reject('ERROR Found!')
        else
            resolve({ name: "Akanksha", email: "akankshapawar@gmail.com" })
    }, 1000)
}).then(function (user) {

    return user.email
}).then(function (email) {
    // console.log(email)
}).catch(function (err) {
    // console.log(err);
}).finally(()=> console.log("Finally resolved"))

//promise 5 with async and await
const promiseFive = new Promise((resolve, reject)=> {

    const error = true
    if(error)
        reject("Error Found at promise 5")
    else    
        resolve({name: "Akanksha", email: "akankshapawar@gmail.com"})
})

async function handlePromiseFive()
{
    try {
        const myPromise = await promiseFive
        console.log(myPromise)
    } catch (error) {
        console.log(error);
    }
    

}

handlePromiseFive();
//fetch
// async function myFunc() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)
//         const data = await response.json()
//         console.log(data);

//     } catch (error) {
//         console.log(error)
//     }

// }

// myFunc()

fetch('https://jsonplaceholder.typicode.com/users').then(function(response){
    // console.log(response.json())
    return response.json()
}).then(function(response){
    console.log(response)
}).catch(function(){
    console.log("Error")
})