//Etat

interface EtatPerso{
    effectuerAction():void;
    nomEtat():string;
}

class FaitRien implements EtatPerso{
    effectuerAction(): void {
        console.log("Le personnage ne fait rien il peut : Attaquer, Sauter, Se déplacer");
    }

    nomEtat(): string {
        return "Fait rien";
    }
}

class Attaque implements EtatPerso{
    effectuerAction(): void {
        console.log("Le personnage attaque il peut : Attaquer");
    }

    nomEtat(): string {
        return "Attaquer";
    }
}

class SeDeplacer implements EtatPerso{
    effectuerAction(): void {
        console.log("Le personnage se déplace il peut : Sauter, Attaquer");
    }

    nomEtat(): string {
        return "Se déplace";
    }
}

class Sauter implements EtatPerso{
    effectuerAction(): void {
        console.log("Le personnage saute il peut : Attaquer");
    }

    nomEtat(): string {
        return "Saute";
    }
}

class Etourdit implements EtatPerso{
    effectuerAction(): void {
        console.log("Le personnage est étourdit il ne peut rien faire");
    }

    nomEtat(): string {
        return "Est étourdit";
    }
}

class Personnage{
    private _etat:EtatPerso;

    constructor(){
        this._etat=new FaitRien();
    }

    changerEtat(etat:EtatPerso):void{
        this._etat=etat;
        console.log("L'état du personnage est passé à : "+etat.nomEtat());
    }

    effectuerAtion():void{
        this._etat.effectuerAction();
    }
}

let perso=new Personnage();
perso.effectuerAtion();
perso.changerEtat(new Attaque());
perso.effectuerAtion();
perso.changerEtat(new Etourdit());
perso.effectuerAtion();
