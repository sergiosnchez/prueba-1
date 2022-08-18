import { fichapersonas } from "./ficha persona";
export class FichaPersonaMenor extends fichapersonas {
    constructor(n, a, nr, ar) {
        super(n, a);
        this._ar = ar;
        this._nr = nr;
    }
    completaficha() {
        var ndom = document.getElementById("fname");
        var adom = document.getElementById("lname");
        var nrdom = document.getElementById("fname_r");
        var ardom = document.getElementById("lname_r");
        var menor = document.getElementById("menor");
        nrdom.value = this._nr;
        ardom.value = this._ar;
        ndom.value = this._n;
        adom.value = this._a;
        menor.style.display = "block";
    }
}
var Persona = new FichaPersonaMenor("roverto", "perez", "mariano", "closs");
Persona.completaficha();
