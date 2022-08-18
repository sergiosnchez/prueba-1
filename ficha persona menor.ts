import { fichapersonas } from "./ficha persona";

export class FichaPersonaMenor extends fichapersonas{
    private _nr:string;
    private _ar:string;

    constructor(n:string,a:string,nr:string,ar:string){
        super(n,a);
        this._ar=ar;
        this._nr=nr;
    }
    completaficha():void{
        var ndom:any=document.getElementById("fname");
        var adom:any=document.getElementById("lname");
        var nrdom:any=document.getElementById("fname_r");
        var ardom:any=document.getElementById("lname_r");
        var menor:any=document.getElementById("menor");

        nrdom.value = this._nr;
        ardom.value = this._ar;
        ndom.value = this._n;
        adom.value = this._a;

        menor.style.display="block";
    }
}
var Persona = new FichaPersonaMenor("roverto","perez","mariano","closs");
    Persona.completaficha();