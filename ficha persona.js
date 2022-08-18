/*var n:string="Juan";
var a:string="Perez";

var ndom:any=document.getElementById("fname");
var adom:any=document.getElementById("lname");

ndom.value = n;
adom.value = a;*/
export class fichapersonas {
    constructor(n, a) {
        this._a = a;
        this._n = n;
    }
    get n() {
        return this._n;
    }
    get a() {
        return this._a;
    }
    set n(n) {
        this._n = n;
    }
    set a(a) {
        this._a = a;
    }
    completaficha() {
        var ndom = document.getElementById("fname");
        var adom = document.getElementById("lname");
        ndom.value = this._n;
        adom.value = this._a;
    }
}
