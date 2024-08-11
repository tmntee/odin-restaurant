import { loadHomePage } from "./home.js";
import { loadMenuPage } from "./menu.js";
import { loadAboutPage } from "./about.js";
import './style.css';

let contentDiv = document.querySelector("div#content");
let clearContent = function() {
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.lastChild);
    }
}

contentDiv.appendChild(loadHomePage());

const homePageButton = document.querySelector("button#home");
console.log(homePageButton);
homePageButton.addEventListener('click', () => { clearContent(); contentDiv.appendChild(loadHomePage());});

const menuPageButton = document.querySelector("button#menu");
menuPageButton.addEventListener('click', () => { clearContent(); contentDiv.appendChild(loadMenuPage());});

const aboutPageButton = document.querySelector("button#about");
aboutPageButton.addEventListener('click', () => { clearContent(); contentDiv.appendChild(loadAboutPage());})