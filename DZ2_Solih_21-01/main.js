
for (let num = 20; num >= 0; num--){
    console.log(num)
}

let empty = []

for(let i = 0; i < 11; i++){
    empty.push(i)
}
console.log(empty)


let trLight = prompt("Select a color (red,yellow,green)")
switch (trLight) {
    default:
        console.log("Unknown color")
        break
    case "red":
        console.warn("STOP!!!")
        break;
    case "yellow":
        console.log("WAIT!")
        break;
    case "green":
        console.log("GO =>")
        break;
}
