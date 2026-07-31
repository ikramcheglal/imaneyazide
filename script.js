const button = document.getElementById("giftButton");
const giftMessage = document.getElementById("giftMessage");
const music = document.getElementById("music");

button.addEventListener("click", () => {

    giftMessage.classList.remove("hidden");

    button.innerHTML = "🎉 Joyeux Anniversaire 🎉";

    music.play();

    createConfetti();

    createHearts();

});

function createConfetti(){

    const container = document.getElementById("confetti");

    for(let i=0;i<150;i++){

        const confetti = document.createElement("div");

        confetti.style.position="absolute";
        confetti.style.width="8px";
        confetti.style.height="8px";

        const colors=[
            "#ff4081",
            "#00e5ff",
            "#ffeb3b",
            "#4caf50",
            "#ffffff",
            "#ff9800"
        ];

        confetti.style.background=
            colors[Math.floor(Math.random()*colors.length)];

        confetti.style.left=Math.random()*100+"vw";
        confetti.style.top="-20px";

        confetti.style.borderRadius="50%";

        confetti.style.transition="4s linear";

        container.appendChild(confetti);

        setTimeout(()=>{

            confetti.style.transform=
            "translateY(120vh) rotate(720deg)";

            confetti.style.opacity="0";

        },100);

        setTimeout(()=>{

            confetti.remove();

        },4500);

    }

}

function createHearts(){

    for(let i=0;i<120;i++){

        const p=document.createElement("div");

        p.style.position="fixed";
        p.style.width="8px";
        p.style.height="8px";
        p.style.borderRadius="50%";

        const colors=[
            "#ff0000",
            "#00ff00",
            "#00ccff",
            "#ffff00",
            "#ff00ff",
            "#ffffff",
            "#ff8800"
        ];

        p.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        p.style.left="50vw";
        p.style.top="50vh";

        document.body.appendChild(p);

        const angle=Math.random()*Math.PI*2;
        const distance=150+Math.random()*250;

        p.animate([
            {transform:"translate(0,0)",opacity:1},
            {transform:`translate(${Math.cos(angle)*distance}px,${Math.sin(angle)*distance}px)`,opacity:0}
        ],{
            duration:1800,
            easing:"ease-out"
        });

        setTimeout(()=>{
            p.remove();
        },1800);
    }
}
// 🎈 Ballons
function createBalloon() {

    const balloon = document.createElement("div");

    balloon.innerHTML = "🎈";

    balloon.style.position = "fixed";
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.bottom = "-80px";
    balloon.style.fontSize = (40 + Math.random() * 30) + "px";
    balloon.style.transition = (8 + Math.random() * 4) + "s linear";
    balloon.style.pointerEvents = "none";

    document.body.appendChild(balloon);

    setTimeout(() => {
        balloon.style.transform = "translateY(-120vh)";
    }, 100);

    setTimeout(() => {
        balloon.remove();
    }, 12000);
}

setInterval(createBalloon, 800);

// ✨ Étoiles
for (let i = 0; i < 120; i++) {

    const star = document.createElement("div");

    star.innerHTML = "✨";
    star.style.zIndex = "-1";
    star.style.position = "fixed";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.opacity = Math.random();

    document.body.appendChild(star);

    setInterval(() => {
        star.style.opacity = Math.random();
    }, 1000);
}

// 🎆 Feux d'artifice
function firework() {

    const colors = [
        "#ff4081",
        "#00e5ff",
        "#ffff00",
        "#ffffff",
        "#00ff66",
        "#ff9800"
    ];

    for (let i = 0; i < 40; i++) {

        const p = document.createElement("div");

        p.style.position = "fixed";
        p.style.width = "6px";
        p.style.height = "6px";
        p.style.borderRadius = "50%";
        p.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        const x = window.innerWidth / 2;
        const y = window.innerHeight / 2;

        p.style.left = x + "px";
        p.style.top = y + "px";

        document.body.appendChild(p);

        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 250;

        p.animate([
            {
                transform: "translate(0,0)",
                opacity: 1
            },
            {
                transform: `translate(${Math.cos(angle)*distance}px,${Math.sin(angle)*distance}px)`,
                opacity: 0
            }
        ], {
            duration: 1800,
            easing: "ease-out"
        });

        setTimeout(() => {
            p.remove();
        }, 1800);
    }
}

setInterval(firework, 3500);
