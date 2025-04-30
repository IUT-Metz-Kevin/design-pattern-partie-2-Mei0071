//chaineDeResponsabilité

interface Responsabilite{
    setSuivant(suivant:Responsabilite):void;
    traiter(somme:number):void;
}

abstract class Base implements Responsabilite{
    protected _suivant:Responsabilite;

    setSuivant(suivant: Responsabilite): void {
        this._suivant=suivant;
    }

    traiter(somme: number): void {
        this._suivant?.traiter(somme);
    }
}

class ParEmploye extends Base{
    traiter(somme: number): void {
        if(somme<=100000){
            console.log("L'employé de la banque approuve le pret de : "+somme);
        }else{
            super.traiter(somme);
        }
    }
}

class ParManager extends Base{
    traiter(somme: number): void {
        if(somme<=500000){
            console.log("Le manager de la banque approuve le pret de : "+somme);
        }else{
            super.traiter(somme);
        }
    }
}

class ParChefDep extends Base{
    traiter(somme: number): void {
        if(somme<=10000000){
            console.log("Le chef de département de la banque approuve le pret de : "+somme);
        }else{
            super.traiter(somme);
        }
    }
}

class ParDirFi extends Base{
    traiter(somme: number): void {
            console.log("Le directeur financier de la banque approuve le pret de : " +somme);
    }
}

let parEmp=new ParEmploye();
let parMAna=new ParManager();
let parCheDep=new ParChefDep();
let parDirFi=new ParDirFi();

parEmp.setSuivant(parMAna);
parMAna.setSuivant(parCheDep);
parCheDep.setSuivant(parDirFi);

parEmp.traiter(50000);
parEmp.traiter(400000);
parEmp.traiter(900000);
parEmp.traiter(11000000);

