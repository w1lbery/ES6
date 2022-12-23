// Задача 1
customerName = prompt("Hello, please enter your Name");
customerSurname = prompt("And Surname");
console.log("Здраствуйте,", customerSurname + " " +  customerName + "!" );

//Задача 2
const a = Number(prompt("Select a number"))
const b = Number(prompt("Select a number"))

if(a > b){
    console.log("Данное число больше", a)
}else if(a < b){
    console.log("Данное число больше", b)
}else{
    console.log("Числа равны")
}

//Задача 3

let trafficLight = prompt("select color trafficlight")

if (trafficLight === "" || trafficLight === undefined) {
  console.log("No Value(");
} else if (trafficLight === "red") {
  console.log("STOP!");
} else if (trafficLight === "yellow") {
  console.warn("WAIT!");
} else if (trafficLight === "green") {
  console.log("GO!");
} else {
  console.log("Other meaning");
}

