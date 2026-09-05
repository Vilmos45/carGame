const gameScreen = document.getElementById("gameScreen"), scoreElement = document.getElementById("score"), mainCar = addCar("car2");
let score = 0, speed = 0, laneh = 0, mainl = gameScreen.clientWidth/18 * 7.9, carNum = 0;
mainCar.style.top = "450px";
mainCar.style.left = mainl.toString() + "px";
document.addEventListener("keydown", (e) =>{
    switch(e.key.toLowerCase()){
        case "d": case "arrowright":
            e.preventDefault();
            if (mainl < gameScreen.clientWidth - gameScreen.clientWidth/5) mainl += gameScreen.clientWidth/5;
            mainCar.style.left = mainl.toString() + "px";
            break;
        case "a": case "arrowleft":
            e.preventDefault();
            if (mainl > gameScreen.clientWidth/5) mainl -= gameScreen.clientWidth / 5;
            mainCar.style.left = mainl.toString() + "px";
            break;
        default: return;
    }
});
setInterval(() => {
    scroll();
    score += 0.1; //0.02-> 1/sec
    scoreElement.textContent = Math.floor(score);
    if (carNum < 5 && Math.random() > 0.99) {addCar("car" + carNum); carNum++;};
}, 20 - speed);
function scroll(){
    laneh = (laneh > 0) ? laneh = -218 : laneh + 2;
    for (let i = 1; i < 5; i++) document.getElementById("sep" + i).style.top = laneh + "px";
    document.querySelectorAll("#gameScreen img:not(#car2)").forEach(e => {
        console.log(e);
        e.style.top = (parseInt(e.style.top.replace("px", "")) + 1) + "px";
        if (parseInt(e.style.top) > gameScreen.clientHeight) {e.remove(); addCar(e.id)}
    });
    document.querySelectorAll("#gameScreen img:not(#car2)").forEach(e => {if (hasCollided(mainCar, e)) alert("Your car has crashed!");})
}
function addCar(name){
    const img = document.createElement("img"); img.style.top = "-100px";
    img.src = `src/${"car"+Math.floor(Math.random() * 5)}.png`; img.alt = "car"; img.id = name;
    img.style.left = Math.floor(Math.random() * 5) * gameScreen.clientWidth / 5 + "px";
    gameScreen.appendChild(img);
    document.querySelectorAll(`#gameScreen img:not(#${name})`).forEach(e => { if (hasCollided(img, e)){e.remove(); addCar(name);}});
    return img;
}
function hasCollided(element1, element2){
    const a = element1.getBoundingClientRect(), b = element2.getBoundingClientRect();
    return a.left < b.right && a.right > b.left &&
           a.top < b.bottom && a.bottom > b.top;
}
console.log("Script.js loaded!");