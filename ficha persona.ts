/*var n:string="Juan";
var a:string="Perez";

var ndom:any=document.getElementById("fname");
var adom:any=document.getElementById("lname");

ndom.value = n;
adom.value = a;*/


export class fichapersonas{
    protected _n:string;
    protected _a:string;

    constructor(n:string,a:string){
        this._a=a;
        this._n=n;
    }

    public get n():string{
        return this._n;
    }

    public get a():string{
        return this._a;
    }

    public set n(n:string){
        this._n=n;
    }

    public set a(a:string){
        this._a=a;
    }

    completaficha():void{
        var ndom:any=document.getElementById("fname");
        var adom:any=document.getElementById("lname");

        ndom.value = this._n;
        adom.value = this._a;
    }
}
