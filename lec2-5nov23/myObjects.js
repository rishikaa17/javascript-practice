const user = {
    username: "hc",
    "First Name": "Rishika",
    email: "rishikammishra581@gmail.com",
    age: 22,
    isAdmin: true,
    IsloggedIn: true,
    tea: ["lemmon","peach","ginger"],
    address:{
        city:"Varanasi",
        state:"Uttarpradesh",
    }
}

// const anotherUser = user
// console.log(user.age)
// console.log(user['age'])
// console.log(user.tea[1])
// console.log(user.address.state)
// console.log(user["address"]["state"])

// user.email = "rishu@gmail.com"
// console.log(user)
// console.log(anotherUser)
// delete user.isAdmin
// console.log(user["First Name"])
// const userListFromDatabase = [ {},{},{}]
// console.log(userListFromDatabase )

console.log(Object.keys(user))
console.log(Object.values(user))
// console.log(user.keybord)
console.log(user.hasOwnProperty("tea"))
