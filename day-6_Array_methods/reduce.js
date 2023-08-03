array = [3,4,54,6,7,78]
console.log(array)
var total = 0;
function add(value,total){
    total = total+value;
    return total
}
var output = array.reduce(add)
console.log("the addition of values inside the array is "+ output)