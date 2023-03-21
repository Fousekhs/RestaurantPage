

export default class MenuPage {
    dishObjects = new Array();
    constructor() {
        dishes.forEach(dish => {
            this.dishObjects.push(new Dish(dish));
        })
        this.Print = this.Print.bind(this);
    }
    Print() {
        const content = document.querySelector("#content");

        content.dataset.state = "menu"
        this.dishObjects.forEach(dish => {
            content.appendChild(dish.DishElement);
        })
    }
}

class Dish {
    constructor(dish) {

        this.div = document.createElement("div");
        this.div.classList.add("dish");
        
        const header = document.createElement("h3");
        header.innerText = dish.name;
        this.div.appendChild(header);

        const img = document.createElement("img");
        img.src = dish.imgPath;
        this.div.appendChild(img);

        const priceDiv = document.createElement("div");
        priceDiv.classList.add("price");
        const span = document.createElement("span");
        span.innerText = "Price: ";
        priceDiv.appendChild(span);
        priceDiv.innerHTML += `\$${dish.price}`;
        this.div.appendChild(priceDiv);

        const ingr = document.createElement("div");
        ingr.classList.add("ingredients");
        ingr.innerText =  `Ingredients: ${dish.ingredients}`;
        this.div.appendChild(ingr);
    }

    get DishElement() {
        return this.div;
    }
}

let dishes = [
    {name: "hummus", ingredients: "chickpeas, tahini, lemon juice, and garlic served with pita bread or vegetables", price: 8, imgPath: "../pics/hummus.jpg"},
    {name: "Falafel", ingredients: "ground chickpeas, herbs, and spices served with pita bread, hummus, and tzatziki sauce", price: 10, imgPath: "../pics/falafel.jpeg"},
    {name: "Tabbouleh", ingredients: "parsley, tomatoes, onions, mint, and bulgur wheat dressed with lemon juice and olive oil", price: 10, imgPath: "../pics/tabbouleh.jpg"},
    {name: "Shawarma", ingredients: "Grilled meat (chicken or lamb) served with vegetables and pita bread", price: 13, imgPath: "../pics/shawarma.jpg"},
    {name: "Fattoush", ingredients: "lettuce, tomatoes, cucumbers, radishes, onions, and crispy pita chips dressed with lemon juice and sumac", price: 10, imgPath: "../pics/fattoush.jpg"},
    {name: "Baba Ganoush", ingredients: "roasted eggplant, tahini, garlic, and lemon juice served with pita bread", price: 8, imgPath: "../pics/baba_ganoush.jpg"},
    {name: "Moussaka", ingredients: "eggplant, ground beef or lamb, tomatoes, onions, and spices topped with a creamy béchamel sauce", price: 15, imgPath: "../pics/moussaka.jpg"},
    {name: "Kebab", ingredients: "Grilled meat (chicken, beef, or lamb) marinated in spices and served on a skewer with vegetables and rice or bulgur", price: 15, imgPath: "../pics/kebab.jpg"},
    {name: "Spanakopita", ingredients: "phyllo dough and filled with spinach, feta cheese, and herbs", price: 10, imgPath: "../pics/spanakopita.jpg"},
    {name: "Baklava", ingredients: "phyllo dough, chopped nuts, and honey syrup", price: 8, imgPath: "../pics/baklava.jpeg"}
]