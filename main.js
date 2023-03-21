(()=>{"use strict";class e{head=document.createElement("h2");sections=[document.createElement("section"),document.createElement("section"),document.createElement("section")];images=[document.createElement("img"),document.createElement("img")];constructor(){this.head.innerText="About us";for(let e=0;e<3;e++)this.sections[e].innerText=t[e];for(let e=0;e<2;e++)this.images[e].src=n[e],this.images[e].alt="Mediterrenean Couzine";this.Print=this.Print.bind(this)}Print(){let e=document.getElementById("content");e.dataset.state="home",e.appendChild(this.head),e.appendChild(this.sections[0]),e.appendChild(document.createElement("br")),e.appendChild(this.images[0]),e.appendChild(document.createElement("br")),e.appendChild(this.sections[1]),e.appendChild(document.createElement("br")),e.appendChild(this.images[1]),e.appendChild(document.createElement("br")),e.appendChild(this.sections[2])}}let t={0:"Welcome to our Mediterranean restaurant, where we offer a taste of the Mediterranean right in your own backyard. Our menu features a wide variety of fresh and flavorful dishes inspired by the cuisines of Greece, Italy, Turkey, and other Mediterranean countries. From our delicious hummus and baba ghanoush appetizers to our savory kebabs and seafood dishes, we have something for everyone.",1:"We use only the freshest, high-quality ingredients in all of our dishes, and our chefs prepare each dish with care and attention to detail. Whether you're dining in with friends and family or grabbing a quick bite on-the-go, our friendly and attentive staff will ensure that your dining experience is a memorable one.     In addition to our delicious food, we also offer a great selection of wines, beers, and cocktails to complement your meal. And if you're looking to host a private event or party, we have plenty of space to accommodate groups of all sizes.",2:"Come visit us and experience the warmth and hospitality of the Mediterranean right here in our restaurant. We can't wait to serve you!"},n={0:"pics/pic1.jpg",1:"pics/pic2.jpg"};class i{dishObjects=new Array;constructor(){s.forEach((e=>{this.dishObjects.push(new a(e))})),this.Print=this.Print.bind(this)}Print(){const e=document.querySelector("#content");e.dataset.state="menu",this.dishObjects.forEach((t=>{e.appendChild(t.DishElement)}))}}class a{constructor(e){this.div=document.createElement("div"),this.div.classList.add("dish");const t=document.createElement("h3");t.innerText=e.name,this.div.appendChild(t);const n=document.createElement("img");n.src=e.imgPath,this.div.appendChild(n);const i=document.createElement("div");i.classList.add("price");const a=document.createElement("span");a.innerText="Price: ",i.appendChild(a),i.innerHTML+=`$${e.price}`,this.div.appendChild(i);const s=document.createElement("div");s.classList.add("ingredients"),s.innerText=`Ingredients: ${e.ingredients}`,this.div.appendChild(s)}get DishElement(){return this.div}}let s=[{name:"hummus",ingredients:"chickpeas, tahini, lemon juice, and garlic served with pita bread or vegetables",price:8,imgPath:"pics/hummus.jpg"},{name:"Falafel",ingredients:"ground chickpeas, herbs, and spices served with pita bread, hummus, and tzatziki sauce",price:10,imgPath:"pics/falafel.jpeg"},{name:"Tabbouleh",ingredients:"parsley, tomatoes, onions, mint, and bulgur wheat dressed with lemon juice and olive oil",price:10,imgPath:"pics/tabbouleh.jpg"},{name:"Shawarma",ingredients:"Grilled meat (chicken or lamb) served with vegetables and pita bread",price:13,imgPath:"pics/shawarma.jpg"},{name:"Fattoush",ingredients:"lettuce, tomatoes, cucumbers, radishes, onions, and crispy pita chips dressed with lemon juice and sumac",price:10,imgPath:"pics/fattoush.jpg"},{name:"Baba Ganoush",ingredients:"roasted eggplant, tahini, garlic, and lemon juice served with pita bread",price:8,imgPath:"pics/baba_ganoush.jpg"},{name:"Moussaka",ingredients:"eggplant, ground beef or lamb, tomatoes, onions, and spices topped with a creamy béchamel sauce",price:15,imgPath:"pics/moussaka.jpg"},{name:"Kebab",ingredients:"Grilled meat (chicken, beef, or lamb) marinated in spices and served on a skewer with vegetables and rice or bulgur",price:15,imgPath:"pics/kebab.jpg"},{name:"Spanakopita",ingredients:"phyllo dough and filled with spinach, feta cheese, and herbs",price:10,imgPath:"pics/spanakopita.jpg"},{name:"Baklava",ingredients:"phyllo dough, chopped nuts, and honey syrup",price:8,imgPath:"pics/baklava.jpeg"}];class r{constructor(){this.Print=this.Print.bind(this),this.container=document.createElement("div"),this.container.classList.add("contact-container");const e=document.createElement("h2");e.innerText="Contact us",this.container.appendChild(e);const t=document.createElement("div");t.innerHTML="Email us at: <a>notAnEmail@email.com</a>",this.container.appendChild(t);const n=document.createElement("div");n.innerHTML="Or call us at: <a>6942069420</a>",this.container.appendChild(n),this.container.appendChild(document.createElement("br"));const i=document.createElement("iframe");i.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26219757.706080467!2d-2.939011211800376!3d36.65877319313543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131421b81c473c9f%3A0x2e93598afeccf840!2zzpzOtc-Dz4zOs861zrnOv8-CIM6YzqzOu86xz4PPg86x!5e0!3m2!1sel!2sgr!4v1678584859965!5m2!1sel!2sgr",this.container.appendChild(i)}Print(){const e=document.querySelector("#content");e.dataset.state="Contact",e.appendChild(this.container)}}let d=new Array;class c{constructor(e,t){this.div=document.createElement("div"),this.div.innerText=e,this.div.id=e,this.div.classList.add("btn"),this.div.addEventListener("click",(()=>{!function(){d.forEach((e=>{e.dataset.state="not-selected"}));let e=document.getElementById("content");for(;null!=e.firstChild;)e.removeChild(e.firstChild)}(),this.div.dataset.state="selected",t()}))}get Element(){return this.div}}!function(){const t=document.querySelector("header"),n=document.createElement("h1");n.innerText="[Restaurant]",t.appendChild(n);const a=document.createElement("div");a.classList.add("buttons"),a.appendChild(new c("Home",(new e).Print).Element),a.appendChild(new c("Menu",(new i).Print).Element),a.appendChild(new c("Contact",(new r).Print).Element),t.appendChild(a),d.push(document.querySelector("#Home")),d.push(document.querySelector("#Menu")),d.push(document.querySelector("#Contact")),document.querySelector("footer").innerText="SINCE 2003",(new e).Print(),d[0].dataset.state="selected"}()})();