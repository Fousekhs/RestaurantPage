import HomePage from "./home";
import MenuPage from "./menu";
import ContactPage from "./contact";

let buttons = new Array();

export default function Initialise() {
    const header = document.querySelector("header");
    const h1 = document.createElement("h1");
    h1.innerText = "[Restaurant]";
    header.appendChild(h1);

    const div = document.createElement("div");
    div.classList.add("buttons");
    div.appendChild(new Button("Home", new HomePage().Print).Element);
    div.appendChild(new Button("Menu", new MenuPage().Print).Element);
    div.appendChild(new Button("Contact", new ContactPage().Print).Element);
    header.appendChild(div);
    buttons.push(document.querySelector("#Home"));
    buttons.push(document.querySelector("#Menu"));
    buttons.push(document.querySelector("#Contact"));

    const footer = document.querySelector("footer");
    footer.innerText = "SINCE 2003";

    new HomePage().Print();
    buttons[0].dataset.state = "selected";
}

function Clear() {

    buttons.forEach(btn => {
        btn.dataset.state = "not-selected";
    })

    let content = document.getElementById("content");
    while (content.firstChild != null) content.removeChild(content.firstChild);
}

class Button {
    constructor(name, func) {
        this.div = document.createElement("div");
        this.div.innerText = name;
        this.div.id = name;
        this.div.classList.add("btn");
        
        this.div.addEventListener("click", () => {
            Clear();
            this.div.dataset.state = "selected";
            func();
        });

    }
    get Element() {
        return this.div;
    }
}