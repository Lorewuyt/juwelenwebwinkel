export class FakeDatabase {

    constructor() {
        this.producten = [
            {
                ID: 1,
                naam: 'oorring met hartje',
                beschrijving: "een minimalistische oorbel met een klein hartje er aan.",
                afbeelding: "afbeeldingen/oorringmethartje.jpg",
                prijs: 12.99,
                categorie: 'oorbellen',
                materiaal: 'goud',
            },

            {
                ID: 2,
                naam: 'bangle armband',
                beschrijving: "een minimalistische armband die soepel aan de arm zit.",
                afbeelding: "afbeeldingen/bangle_armband.goud.jpg",
                prijs: 14.99,
                categorie: 'armbanden',
                materiaal: 'goud',
            },

            {
                ID: 3,
                naam: 'bangle armband',
                beschrijving: "een minimalistische armband die soepel aan de arm zit.",
                afbeelding: "afbeeldingen/bangle_armband.zilver.jpg",
                prijs: 14.99,
                categorie: 'armbanden',
                materiaal: 'zilver',
            },

            {
                ID: 4,
                naam: 'ketting met klavers',
                beschrijving: "een minimalistische ketting met klavers die je geluk aan bied.",
                afbeelding: "afbeeldingen/ketting_klavers.goud.jpg",
                prijs: 16.99,
                categorie: 'kettingen',
                materiaal: 'goud',
            },

            {
                ID: 5,
                naam: 'statment ring met hartje',
                beschrijving: "een statment ring met een hartje er op.",
                afbeelding: "afbeeldingen/hartjesring_statement.goud.jpg",
                prijs: 13.99,
                categorie: 'ringen',
                materiaal: 'goud',
            },

             {
                ID: 6,
                naam: 'statment ring met hartje',
                beschrijving: "een statment ring met een hartje er op.",
                afbeelding: "afbeeldingen/hartjesring_statement.zilver.jpg",
                prijs: 13.99,
                categorie: 'ringen',
                materiaal: 'zilver',
            }

            
        ]
    }

    getAlleProducten() {
        return this.producten;
    }

}