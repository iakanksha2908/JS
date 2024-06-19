function multiply(num)
{
    return num * 5;
}


console.log(multiply(5))
console.log(multiply.prototype)
console.log(multiply.power)


const myObj = {

    name: "Akanksha",
    lastname: "Pawar",
    age: 27
}


const myObjChild = {

    name: "student",
    clg: "NEU",
    __proto__: myObj
}

Object.prototype.customProperty = function()
{
    console.log("This is a custom property");
}

// myObj.customProperty()

// console.log(myObjChild.lastname);  myObjChild extends myObj(inheritance in java, prototypal inheritance in JS)



function setUserName(username)
{
    this.username = username
    console.log("called")

}

function createUser(username, email, pwd)
{
    // setUserName.call(this, username)
    setUserName(username) //it will be called but everything from the app context of the called method will be destroyed when it returns, but when you pass this, as an optional param, it maked sure that the value is set to the this of the method that clls the method
    this.email = email
    this.pwd = pwd

    // console.log("user: " + username + " email: " + this.email + " pwd: " + this.pwd)
}

const user1 = new createUser("Akanksha", "pawar.ak@northeastern.edu", "ak")
console.log(user1)
