function toggleClass(){
    document.body.classList.toggle("light");
}

const deg = 6;
const hr = document.getElementById("hr");
const mn = document.getElementById("mn");
const sc = document.getElementById("sc");

setInterval(() => {
    const now = new Date();

    const hh = now.getHours() * 30;
    const mm = now.getMinutes() * deg;
    const ss = now.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
}, 1000);

VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
    scale: 1.05,
});
