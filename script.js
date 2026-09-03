const gameScreen = document.getElementById("gameScreen");
const scoreElement = document.getElementById("score");
let score = 0; let speed = 0; let laneh = 0;
document-addEventListener("keypress", (e) =>{
    switch(e.key.toLowerCase()){
        case "d": case "rightarrow":
            e.preventDefault();
            //
            break;
        case "a": case "leftarrow":
            e.preventDefault();
            //
            break;
        default: return;
    }
});
setInterval(() => {
    scroll()
    score += 1; scoreElement.textContent = score;
}, 20 - speed);

function scroll(){
    for (let i = 1; i < 5; i++) {
        document.getElementById("sep" + i.toString()).style.top = laneh.toString() + "px";
    }
    laneh += 2;
}
console.log("Script.js loaded!");