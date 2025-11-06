// test comment

export class Winkelmand {
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

    berekenTotaal() {
        let totaal = 0;
        for (let i = 0; i < this.items.length; i++) {
            totaal += this.items[i].prijs;
        }
        return totaal;
    }

    maakWinkelmandHTML(product) {
        return `
        <div class="item-winkelmand">
            <img src="${product.afbeelding}" alt="${product.naam}" class="item-img">
            <div class="item-info">
                <h4>${product.naam}</h4>
                <p>€${product.prijs.toFixed(2)}</p>
                <button class="verwijder-winkelmand">Verwijder</button>
                <button class="betalen-winkelmand">Betalen</button>
            </div>
        </div>`;
    }
}

export class WinkelmandController {
    constructor(producten, winkelmand, btnWinkelmandje, winkelmandLijst, winkelmandTotaal) {
        this.producten = producten;
        this.winkelmand = winkelmand;
        this.btnWinkelmandje = btnWinkelmandje;
        this.winkelmandLijst = winkelmandLijst;
        this.winkelmandTotaal = winkelmandTotaal;
    }

    voegToeAanWinkelmand(id) {
        const product = this.producten.find(p => p.ID === id);
        if (!product) return;
        this.winkelmand.voegToe(product);
        this.btnWinkelmandje.textContent = this.winkelmand.aantal();
        this.toonWinkelmandje();
    }

    toonWinkelmandje() {
        this.winkelmandLijst.innerHTML = '';

        const alleProducten = this.winkelmand.getAlle();
        for (let i = 0; i < alleProducten.length; i++) {
            const product = alleProducten[i];
            const div = document.createElement('div');
            div.innerHTML = this.winkelmand.maakWinkelmandHTML(product);

            div.querySelector('.verwijder-winkelmand').addEventListener('click', () => {
                this.winkelmand.verwijder(product.ID);
                this.btnWinkelmandje.textContent = this.winkelmand.aantal();
                this.toonWinkelmandje();
            });

            this.winkelmandLijst.appendChild(div);
        }

        this.winkelmandTotaal.textContent = `Totaal: €${this.winkelmand.berekenTotaal().toFixed(2)}`;
    }
}