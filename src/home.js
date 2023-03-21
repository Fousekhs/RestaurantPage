
export default class HomePage {
    
    head = document.createElement("h2");
    sections = [
        document.createElement("section"),
        document.createElement("section"),
        document.createElement("section")
    ]
    images = [
        document.createElement("img"),
        document.createElement("img")
    ]
    constructor() {
        this.head.innerText = "About us";
        for (let i = 0; i < 3; i++) this.sections[i].innerText = sectionText[i];
        for (let i = 0; i < 2; i++) {
            this.images[i].src = imageSrc[i];
            this.images[i].alt = "Mediterrenean Couzine";
        }
        this.Print = this.Print.bind(this);
    }
    Print() {
        let content = document.getElementById("content");

        content.dataset.state = "home";
        content.appendChild(this.head);
        content.appendChild(this.sections[0]);
        content.appendChild(document.createElement("br"));
        content.appendChild(this.images[0]);
        content.appendChild(document.createElement("br"));
        content.appendChild(this.sections[1]);
        content.appendChild(document.createElement("br"));
        content.appendChild(this.images[1]);
        content.appendChild(document.createElement("br"));
        content.appendChild(this.sections[2]);
    }
}

let sectionText = {
    0: "Welcome to our Mediterranean restaurant, where we offer a taste of the Mediterranean right in your own backyard. Our menu features a wide variety of fresh and flavorful dishes inspired by the cuisines of Greece, Italy, Turkey, and other Mediterranean countries. From our delicious hummus and baba ghanoush appetizers to our savory kebabs and seafood dishes, we have something for everyone.",
    1: "We use only the freshest, high-quality ingredients in all of our dishes, and our chefs prepare each dish with care and attention to detail. Whether you're dining in with friends and family or grabbing a quick bite on-the-go, our friendly and attentive staff will ensure that your dining experience is a memorable one. \
    In addition to our delicious food, we also offer a great selection of wines, beers, and cocktails to complement your meal. And if you're looking to host a private event or party, we have plenty of space to accommodate groups of all sizes.",
    2: "Come visit us and experience the warmth and hospitality of the Mediterranean right here in our restaurant. We can't wait to serve you!",
}

let imageSrc = {
    0: "pics/pic1.jpg",
    1: "/pics/pic2.jpg",
}