export class Favorieten {
    constructor() {
        this.items = [];
    }

    voegToe(product) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].ID === product.ID) return;
        }
        this.items.push(product);
    }

    verwijder(id) {
        let nieuweLijst = [];
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].ID !== id) {
                nieuweLijst.push(this.items[i]);
            }
        }
        this.items = nieuweLijst;
    }

    getAlle() {
        return this.items;
    }

    aantal() {
        return this.items.length;
    }

    maakFavorietHTML(product) {
        return `
    <div class="item-favoriet">
        <img src="${product.afbeelding}" alt="${product.naam}" class="item-img">
        <div class="item-info">
            <h4>${product.naam}</h4>
            <p>€${product.prijs.toFixed(2)}</p>
            <button class="verwijder-favoriet">Verwijder</button>
        </div>
    </div>`;
    }
}

export class FavorietenController {
    voegToeAanFavorieten(id) {
        const product = this.producten.find(p => p.ID === id);
        this.favorieten.voegToe(product);
        this.btnfavoriet.textContent = this.favorieten.aantal();
        this.toonFavorieten();
    }

    toonFavorieten() {
        this.favorietenLijst.innerHTML = '';

        const alleFavorieten = this.favorieten.getAlle();
        for (let i = 0; i < alleFavorieten.length; i++) {
            const p = alleFavorieten[i];
            const div = document.createElement('div');
            div.innerHTML = this.favorieten.maakFavorietHTML(p);

            div.querySelector('.verwijder-favoriet').addEventListener('click', () => {
                this.favorieten.verwijder(p.ID);
                this.btnfavoriet.textContent = this.favorieten.aantal();
                this.toonFavorieten();
            });

            this.favorietenLijst.appendChild(div);
        }
    }
}