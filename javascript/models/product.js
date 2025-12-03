export class Product {
    ID;
    naam;
    beschrijving;
    afbeelding;
    prijs;
    categorie;
    materiaal;

    constructor(data) {
        this.ID = data.ID;
        this.naam = data.naam;
        this.beschrijving = data.beschrijving;
        this.afbeelding = data.afbeelding;
        this.prijs = data.prijs;
        this.categorie = data.categorie;
        this.materiaal = data.materiaal;
    }

    maakProductHTML() {
        return `
        <img src="${this.afbeelding}" alt="${this.naam}">
        <div class="item-info">
            <h4>${this.naam}</h4>
            <p>${this.beschrijving}</p>
            <p>€${this.prijs.toFixed(2)}</p>
            <button class="btn-winkelmand"><img src="afbeeldingen/winkelkarretje logo.png" width="40"></button>
            <button class="btn-favoriet"><img src="afbeeldingen/heart logo.png" width="40"></button>
        </div>`;
    }
}

export class ProductController {
    constructor(producten, productenLijstElement) {
        this.producten = producten;
        this.productenLijstElement = productenLijstElement;
    }

    toonProducten(filter = "alles") {
        this.productenLijstElement.innerHTML = '';

        let lijst = this.producten;
        if (filter !== "alles") {
            lijst = lijst.filter(product => product.categorie === filter);
        }

        for (let i = 0; i < lijst.length; i++) {
            const product = lijst[i];

            const li = document.createElement('li');
            li.classList.add('item-product');
            li.innerHTML = product.maakProductHTML();
            this.productenLijstElement.appendChild(li);
        }
    }
}