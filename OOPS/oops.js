const obj1 = {

    name: "Akanksha",
    email: "pawar.ak@northeastern.edu",
    getMyDetails: function () {
        // console.log("Email is: " + this.email);
        // console.log(this)
    }
}

obj1.getMyDetails();
// console.log(this);  //abhi global context m kuch ni hai. Diff in browser


function User(name, age)
{
    this.name = name
    this.age = age
    return this
}

const userOne = User("Akanksha", 28)
// console.log(userOne);
const userTwo = User("Pawar", 27)
console.log(userOne);   //values got overwritten as I was using the same instance. That's why new(constructor func req)


const userThree = new User("Akanksha", 28)
console.log(userThree);
const userFour = new User("Pawar", 27)
console.log(userThree);


// new - empty obj gets created - instance
// constructor func gets called due to new keyword - argu sare pack karke deta hai
// this keyword hai - args like hai wo inject ho jate hai
 