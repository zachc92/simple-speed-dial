const clock = document.querySelector('#nav-clock');
const timeOfDay = document.querySelector('#time-of-day');

const dialDivs = document.querySelectorAll('.speeddial');

const ids = {
    ffea: "./img/fflogs.png",
    ffpp: "./img/fflogs.png",
    yt: "./img/yt.png",
    twitch: "./img/twitch.png",
    v: "./img/v.png",
    udemy: "./img/udemy.png",
    github: "./img/github.png",
    schedule: "./img/schedule.png"
};

hoverEffect = (e) => {
    const temp = e.target.previousElementSibling.id;
    e.target.previousElementSibling.style.visibility = "hidden";
    e.target.parentElement.parentElement.style.backgroundImage = `url(${ids[temp]})`;
    e.target.parentElement.parentElement.style.backgroundPosition = "center";
    e.target.parentElement.parentElement.style.backgroundSize = "contain";
    e.target.parentElement.parentElement.style.backgroundRepeat = "no-repeat";
    // e.target.parentElement.parentElement.style.transform = "scale(2)";
}

removeHoverEffect = (e) => {
    e.target.previousElementSibling.style.visibility = "visible";
    e.target.parentElement.parentElement.style.backgroundColor = "#808e9b";
    e.target.parentElement.parentElement.style.backgroundImage = "none";
}

dialDivs.forEach(el => { el.addEventListener('mouseover', hoverEffect) });
dialDivs.forEach(el => { el.addEventListener('mouseout', removeHoverEffect) });