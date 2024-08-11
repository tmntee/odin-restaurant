let loadMenuPage = function() {
    const content = document.querySelector("div#content");
    content.classList.add("main-content");

    const menuDiv = document.createElement("div");
    menuDiv.setAttribute("id", "menu");

    const menuItem1 = document.createElement("p");
    menuItem1.textContent = "Car Mouth Cake";

    const menuItem2 = document.createElement("p");
    menuItem2.textContent = "Maxim Tomato";

    const menuItem3 = document.createElement("p");
    menuItem3.textContent = "Energy Drink";

    const menuItem4 = document.createElement("p");
    menuItem4.textContent = "Kirby Burger";

    menuDiv.appendChild(menuItem1);
    menuDiv.appendChild(menuItem2);
    menuDiv.appendChild(menuItem3);
    menuDiv.appendChild(menuItem4);

    content.appendChild(menuDiv);

    document.body.appendChild(content);
}


export { loadMenuPage };