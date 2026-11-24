// ---> Normal Way

// let main = document.querySelector("main");
// let btn = document.querySelector("button");

// let bulb = true;
// btn.addEventListener("click", ()=>{
//     if(bulb){
//         main.style.backgroundColor = "yellow"
//         btn.textContent = "Off"
//         bulb = false;
//     }else{
//         main.style.backgroundColor = "transparent"
//         btn.textContent = "On"
//         bulb = true;
//     }
// })


// ---> With the help of ClassList

let main = document.querySelector("main");
let btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    if(main.classList.toggle("lightUp")){
        btn.textContent = "Off"
    }else{
        btn.textContent = "On"
    }
})