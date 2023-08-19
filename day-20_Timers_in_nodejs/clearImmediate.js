const sayHello=()=>{
    console.log(" hello all")
}
console.log("It is supposed to print the data immediately")
var imm = setImmediate(sayHello)
clearImmediate(imm)