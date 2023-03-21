

export default class ContactPage {
    constructor() {

        this.Print = this.Print.bind(this);

        this.container = document.createElement("div");
        this.container.classList.add("contact-container");

        const h2 = document.createElement("h2");
        h2.innerText = "Contact us";
        this.container.appendChild(h2);
        // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26219757.706080467!2d-2.939011211800376!3d36.65877319313543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131421b81c473c9f%3A0x2e93598afeccf840!2zzpzOtc-Dz4zOs861zrnOv8-CIM6YzqzOu86xz4PPg86x!5e0!3m2!1sel!2sgr!4v1678584859965!5m2!1sel!2sgr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
        const email = document.createElement("div");
        email.innerHTML = "Email us at: <a>notAnEmail@email.com</a>";
        this.container.appendChild(email);

        const phone = document.createElement("div");
        phone.innerHTML = "Or call us at: <a>6942069420</a>";
        this.container.appendChild(phone);

        this.container.appendChild(document.createElement("br"));

        const map = document.createElement("iframe");
        map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26219757.706080467!2d-2.939011211800376!3d36.65877319313543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131421b81c473c9f%3A0x2e93598afeccf840!2zzpzOtc-Dz4zOs861zrnOv8-CIM6YzqzOu86xz4PPg86x!5e0!3m2!1sel!2sgr!4v1678584859965!5m2!1sel!2sgr";
        this.container.appendChild(map);
    
    }
    Print() {
        const content = document.querySelector("#content");
        content.dataset.state = "Contact";
        content.appendChild(this.container);
    }
}