let loadAboutPage = function() {
    const content = document.createElement("div");
    content.classList.add("main-content");

    const header = document.createElement("h1");
    header.textContent = "About Kirby's restaurant!";
    content.appendChild(header);

    const aboutText = document.createElement("p");
    aboutText.textContent = "What is there to say... what do you want to know.... just eat kirby's food...."
    content.appendChild(aboutText);

    const locationHeader = document.createElement("h1");
    locationHeader.textContent = "Location";
    content.appendChild(locationHeader);

    const location = document.createElement("p");
    location.textContent = "Located in Forgotten Hollow";
    content.appendChild(location);

    const contactHeader = document.createElement("h1");
    contactHeader.textContent = "Contact Us";
    content.appendChild(contactHeader);

    const contactUs = document.createElement("p");
    contactUs.textContent = "None of us have phones or emails so just come!!!!"
    content.appendChild(contactUs);

    return content;
}

export { loadAboutPage };