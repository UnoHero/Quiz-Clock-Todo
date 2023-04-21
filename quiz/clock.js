const tabs = document.querySelector("#tabsP");
const tabsbox = document.querySelector(".tabsbox")
tabs.addEventListener("click", () => {
    document.getElementById('clickaudio').play();
    if (tabsbox.style.display === "block") {
        tabsbox.style.display = "none";
      } else {
        tabsbox.style.display = "block";
    }
});

const date = document.querySelector(".date");

const tickd = () => {

    const now = new Date();

    const d = now.getDate();
    const m = now.getMonth();
    const y = now.getFullYear();

    const html = `
        <span>${d}</span> /
        <span>${m + 1}</span> /
        <span>${y}</span> 
    `;

    date.innerHTML = html;

    console.log(now)
};

setInterval(tickd, 100);    


const clock = document.querySelector(".clock");

const tick = () => {

    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const ms = now.getMilliseconds();

    const html = `
        <span>${h}</span> :
        <span>${m}</span> :
        <span>${s}</span> :
        <span>${ms}</span> 
    `;

    clock.innerHTML = html;

    console.log(now)
};

setInterval(tick, 1);