const hello =()=>{
    console.log("This message is printed after 2 seconds ")
}

console.log("this message is printed at first out of the callback function hello")
setInterval(() => {
    hello()
}, (2000));