const btn = document.querySelector("button");
const div = document.querySelector("div");

const techs = ["HTML", "CSS", "JS", "JAVA", "PYTHON", "C++", "C#", "ANGULAR", "NODE.JS"];
const prefixs = ["Wylosowana technologia to:", "Twoja technologia to:", "Wybrana technologia to:", "Wylosowałeś technologię:"];

const generator = () => {
    const indexTechs = Math.floor(Math.random() * techs.length);
    const indexPrefix = Math.floor(Math.random() * prefixs.length);
    div.textContent = `${prefixs[indexPrefix]} ${techs[indexTechs]}`;
}


btn.addEventListener("click", generator);