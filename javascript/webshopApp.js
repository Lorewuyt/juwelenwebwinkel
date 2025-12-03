import { Winkelmand, WinkelmandController } from './models/winkelmand.js';
import { Product, ProductController } from './models/product.js';
import { FakeDatabase } from './models/fakeDatabase.js';
import { Favorieten, FavorietenController } from './models/favorieten.js';

export class Juwelenwinkel {
    constructor() {
        this.winkelmand = new Winkelmand();
        this.favorieten = new Favorieten();
        this.dataProducten = new FakeDatabase();
        this.producten = [];

        this.btnfavoriet = document.getElementById('favorietTeller');
        this.btnWinkelmandje = document.getElementById('mandTeller');
        this.inpCategorie = document.getElementById('categorie');
        this.productenlijst = document.getElementById('productenlijst');
        this.favorietenLijst = document.getElementById("favorietenlijst");
        this.winkelmandLijst = document.getElementById('winkelmandlijst');
        this.winkelmandTotaal = document.getElementById('winkelmandTotaal');

        this.productController = new ProductController(this.producten, this.productenlijst);

        this.winkelmandController = new WinkelmandController(
            this.producten,
            this.winkelmand,
            this.btnWinkelmandje,
            this.winkelmandLijst,
            this.winkelmandTotaal
        );
        this.favorietenController = new FavorietenController();
        this.favorietenController.producten = this.producten;
        this.favorietenController.favorieten = this.favorieten;
        this.favorietenController.btnfavoriet = this.btnfavoriet;
        this.favorietenController.favorietenLijst = this.favorietenLijst;
    }

    init() {
        this.eventHandlers();
        this.laadProducten();
        this.toonProducten();
    }

    eventHandlers() {
        this.inpCategorie.addEventListener('change', () => {
            this.toonProducten(this.inpCategorie.value);
        });
    }

    laadProducten() {
        const lijst = this.dataProducten.getAlleProducten();
        lijst.forEach(data => this.producten.push(new Product(data)));
    }

    toonProducten(filter = "alles") {
        this.productController.toonProducten(filter);

        const items = this.productenlijst.querySelectorAll('.item-product');
        items.forEach((item, index) => {
            const product = this.producten[index];

            const btnWinkelmand = item.querySelector('.btn-winkelmand');
            btnWinkelmand.addEventListener('click', () => {
                this.winkelmandController.voegToeAanWinkelmand(product.ID);
            });

            const btnFavoriet = item.querySelector('.btn-favoriet');
            btnFavoriet.addEventListener('click', () => {
                this.favorietenController.voegToeAanFavorieten(product.ID);
            });
        });
    }
}