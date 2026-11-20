let main = document.querySelector("main")
let btn = document.querySelector("button")

let quotes = [
    "😎", "🚀", "❤️", "🔥", "🎯",
    "💻", "🎧", "🌈", "⚡", "✨",
    "😍", "🥳", "👑", "💯", "🌟",
    "🦋", "🍀", "🎉", "🤩", "🙌",
    "😀", "😂", "🤣", "🥹", "😊",
    "😇", "🥰", "😘", "😜", "🤪",
    "🤗", "🤭", "🫡", "🤔", "😴",
    "🥱", "😭", "😤", "🤯", "🥶",
    "👻", "💀", "🤖", "👽", "🐱",
    "🐶", "🦁", "🐼", "🦄", "🐸",
    "🌻", "🌸", "🌺", "🌷", "🌹",
    "🍕", "🍔", "🍟", "🍩", "🍫",
    "⚽", "🏆", "🎮", "🎸", "🎤",
    "💎", "💰", "💸", "🎁", "🎈",
    "🌍", "🌙", "☀️", "⭐", "☁️",
    "🌊", "❄️", "🌪️", "🌴", "🌵",
    "💖", "💕", "💗", "💘", "💝",
    "🖤", "🤍", "💜", "💙", "💚",
    "🧡", "💛", "❤️‍🔥", "💫", "🪄",
    "👑", "💪", "👏", "🤝", "✌️",
    "🤟", "🫶", "🙌", "🙏", "🕺",
    "💃", "🧑‍💻", "👨‍🚀", "🧠", "👀"
];

btn.addEventListener("click", function(){

    let x = Math.random()*90
    let y = Math.random()*90
    let rot = Math.random()*360
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)


    let h1 = document.createElement("h1")

    let randomidx = Math.floor(Math.random() * quotes.length) 

    h1.innerHTML = quotes[randomidx]

    h1.style.position = 'absolute'

    h1.style.color = "white"

    h1.style.top = x+'%'
    h1.style.left = y+'%'
    h1.style.rotate = rot+'deg'
    h1.style.color = `rgb(${r}, ${g}, ${b})`

    main.appendChild(h1)
})