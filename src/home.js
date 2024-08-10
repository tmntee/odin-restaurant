let loadHomePage = function() {

    const content = document.querySelector("div#content");

    const headline = document.createElement("h1");
    headline.textContent = "Come Eat at Kirby's Kitchen!!!";

    content.appendChild(headline);

    const description = document.createElement("p");
    description.textContent = "Delectable healing treats waiting for you!!";

    content.appendChild(description);

    const kirbyImage = document.createElement("img");
    kirbyImage.setAttribute("src", "https://cdn.wikirby.com/thumb/7/78/KSA_Cook_Artwork.png/800px-KSA_Cook_Artwork.png");

    content.appendChild(kirbyImage);

    document.body.appendChild(content);
}

export { loadHomePage };