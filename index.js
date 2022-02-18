var title = "titanic";

let age = 20;
// console.log(age);
age = 27;
// console.log(age);

const ip_address_server = "192.168.0.1/255.255.255.0";
// console.log(ip_address_server);

let boolean = true// false

let array = [
    age,
    ip_address_server,
    boolean,
    "fourth option"
]
// console.log(array.length)

let object = {
    age: 27,
    ip_address_server: "192.168.0.111/255.255.255.0"

}
// console.log(object.ip_address_server)

//for (let i = 0; i < array.length; i++){
//    console.log(array[i]);
// }


//for (let element of array){
//    console.log(element)
//}

function func() {
    return "function succeeded";
}
console.log(func());

const funcTwo = () => {
    return "function Two succeeded";
}
console.log(funcTwo());

let data = [
    10,
    2,
    15,
    28,
    10
]

 const modifiedData = data.map((element) => {
    if (element === 2) {
        element = 12
    }
    return element
} )
console.log(modifiedData)

const filteredData = data.filter((element) => {
    if (element <= 15) {
        return element
    }
})
//console.log(filteredData)

const foundElement = data.find((element) => {
    if (element === 10) {
        return element
    }
})
//console.log(foundElement)

