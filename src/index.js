import { loadHomePage } from "./home.js";
import { loadMenuPage } from "./menu.js";

let clearContent = function() {
    let contentDiv = document.querySelector("div#content");

    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.lastChild);
    }
}

const homePageButton = document.querySelector("button#home");
console.log(homePageButton);
homePageButton.addEventListener('click', () => { clearContent(); loadHomePage();});

const menuPageButton = document.querySelector("button#menu");
menuPageButton.addEventListener('click', () => { clearContent(); loadMenuPage();});

const aboutPageButton = document.querySelector("button#about");