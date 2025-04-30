//stratégie
interface TypeLavage{
    laverPar(regroupement:string):void;
}

class ParCouleur implements TypeLavage{
    private _couleur:string;

    constructor(couleur:string){
        this._couleur=couleur;
    }

    laverPar(regroupement: string): void {
        console.log("Le lavage va se faire "+regroupement+" : "+this._couleur);
    }
}

class ParTissu implements TypeLavage{
    private _typeTissu:string;

    constructor(tissu:string){
        this._typeTissu=tissu;
    }

    laverPar(regroupement: string): void {
        console.log("Le lavage va se faire "+regroupement+" : "+this._typeTissu);
    }
}

class ParNivSalete implements TypeLavage{
    private _salete:string;

    constructor(salete:string){
        this._salete=salete;
    }

    laverPar(regroupement: string): void {
        console.log("Le lavage va se faire "+regroupement+" : "+this._salete);
    }
}

class Choix{
    private _laverPar:TypeLavage;

    constructor(laverPar:TypeLavage){
        this._laverPar=laverPar;
    }

    laver(regroupement:string):void{
        this._laverPar.laverPar(regroupement);
    }
}

let regroupement="par couleur";
console.log("Lavement par couleur  ");
let choix=new Choix(new ParCouleur("Bleu"));
choix.laver(regroupement);

console.log("\n");

let regroupement1="par tissu";
console.log("Lavement par tissu ");
let choix1=new Choix(new ParTissu("Coton"));
choix1.laver(regroupement1);

console.log("\n");

let regroupement2="par niveau de saleté";
console.log("Lavement par niveau de saleté  ");
let choix2=new Choix(new ParNivSalete("Très sale"));
choix2.laver(regroupement2);