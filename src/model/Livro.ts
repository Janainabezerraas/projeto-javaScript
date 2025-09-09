export class Livro {

    private _id: number;
    private _titulo: string;
    private _autor: string;
    private _ano: string;
    private _formato: number;
    private _valor: number;

    constructor(id: number, titulo: string, autor: string, ano: string, formato: number, valor: number) {
        this._id = id;
        this._titulo = titulo;
        this._autor = autor;
        this._ano = ano;
        this._valor = valor;
        this._formato = formato;
    }

    public get id() {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get titulo() {
        return this._titulo;
    }

    public set titulo(titulo: string) {
        this._titulo = titulo;
    }

    public get autor() {
        return this._autor;
    }

    public set autor(autor: string) {
        this._autor = autor;
    }

    public get ano() {
        return this._ano;
    }

    public set ano(ano: string) {
        this._ano = ano;
    }

    public get formato() {
        return this._formato;
    }

    public set formato(formato: number) {
        this._formato = formato;
    }

    public get valor() {
        return this._valor;
    }

    public set valor(valor: number) {
        this._valor = valor;
    }

    
    public visualizar(): void {

        let tipo: string = "";
        switch (this._formato) {

            case 1:
                tipo = "Livro digital";
                break;
            case 2:
                tipo = "Livro fisico";
                break;
        }


        console.log("\n\n*****************************************************");
        console.log("Livro:");
        console.log("*****************************************************");
        console.log("Id do livro: " + this._id);
        console.log("Titulo: " + this._titulo);
        console.log("Autor: " + this._autor);
        console.log("Ano: " + this._ano);
        console.log("Formato: " + this.formato);
        console.log("Valor original (R$): " + this.valor.toFixed(2));
    
    }
}