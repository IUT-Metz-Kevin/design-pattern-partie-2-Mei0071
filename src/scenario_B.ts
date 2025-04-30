//Mediateur
interface Mediateur{
    notification(emetteur:object,event:string):void;
}

class TourDeControle implements Mediateur{
    private _avion1:Avion1;
    private _avion2:Avion2;
    private _avion3:Avion3;

    constructor(avion1:Avion1,avion2:Avion2,avion3:Avion3){
        this._avion1=avion1;
        this._avion1.setMediateur(this);
        this._avion2=avion2;
        this._avion2.setMediateur(this);
        this._avion3=avion3;
        this._avion3.setMediateur(this);
    }

    notification(emetteur: object, event: string): void {
        if(event==="2"){
            console.log("La tour de controle réagit au décolage et trigger l'opération suivant : ");
            this._avion2.atterit();
            this._avion3.standBy();
        }
        if(event==="5"){
            console.log("La tour de controle réagit au décolage et trigger l'opération suivant : ");
            this._avion3.atterit();
        }

    }


}

class BaseElement{
    protected mediateur:Mediateur;

    constructor(media?:Mediateur){
        this.mediateur=media!;
    }

    public setMediateur(mediateur:Mediateur):void{
        this.mediateur=mediateur;
    }
}

class Avion1 extends BaseElement{
    atterit():void{
        console.log("L'avion 1 atterit");
        this.mediateur.notification(this,"1")
    }
    Decole():void{
        console.log("L'avion 1 decole");
        this.mediateur.notification(this,"2")
    }
    standBy():void{
        console.log("L'avion 1 attend qu'une piste se libère pour atterir");
        this.mediateur.notification(this,"3")
    }
}
class Avion2 extends BaseElement{
    atterit():void{
        console.log("\nL'avion 2 atterit");
        this.mediateur.notification(this,"4")
    }
   Decole():void{
        console.log("\nL'avion 2 decole");
        this.mediateur.notification(this,"5")
    }
    standBy():void{
        console.log("L'avion 2 attend qu'une piste se libère pour atterir");
        this.mediateur.notification(this,"6")
    }
}
class Avion3 extends BaseElement{
    atterit():void{
        console.log("L'avion 3 atterit");
        this.mediateur.notification(this,"7")
    }
    Decole():void{
        console.log("L'avion 3 decole");
        this.mediateur.notification(this,"8")
    }
    standBy():void{
        console.log("L'avion 3 attend qu'une piste se libère pour atterir");
        this.mediateur.notification(this,"9")
    }
}


let avion1=new Avion1();
let avion2=new Avion2();
let avion3=new Avion3();
let tourControle=new TourDeControle(avion1,avion2,avion3)

avion1.Decole();
avion2.Decole();


