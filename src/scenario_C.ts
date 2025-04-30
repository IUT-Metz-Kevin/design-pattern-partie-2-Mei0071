//Commande
interface Commande{
    executer():void;
}

class Allumer implements Commande{
    executer(): void {
        console.log("Commande exécuté : Allumer la télé");
    }
}

class Eteindre implements Commande{
    executer(): void {
        console.log("Commande excuté : Eteindre la télé");
    }
}

class LancerNetflix implements Commande{
    executer(): void {
        console.log("Commande excuté : Lancer netflix");
    }
}

class LancerAP implements Commande{
    executer(): void {
        console.log("Commande excuté : Lancer amazon prime");
    }
}

class LancerDP implements Commande{
    executer(): void {
        console.log("Commande excuté : Lancer Dysney +");
    }
}

class NumChai implements Commande{
    executer(): void {
        console.log("Commande excuté : Afficher le numéro de la chaine");
    }
}


class Bouton{
    _commande:Commande;

    constructor(commande:Commande){
        this._commande=commande;
    }

    cliquer():void{
        this._commande.executer();
    }
}

let allumer=new Allumer();
let eteindre=new Eteindre();
let netflix=new LancerNetflix();
let dysney=new LancerDP();
let numChaine=new NumChai();

let boutonAllumer=new Bouton(allumer);
let boutonEteindre=new Bouton(eteindre);
let boutonNetflix=new Bouton(netflix);
let boutonDysney=new Bouton(dysney);
let boutonNumChaine=new Bouton(numChaine);

boutonAllumer.cliquer();
boutonEteindre.cliquer();
boutonNetflix.cliquer();
boutonDysney.cliquer();
boutonNumChaine.cliquer();







