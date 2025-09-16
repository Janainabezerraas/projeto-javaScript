export type venda = {
    cliente: string;
    dia: number;
    mes: number;
    anoDaVenda: number;
};
export type vendaFisica = venda & { unidades: number; };
export type vendaDigital = venda & { extensao: string; };

export abstract class Livro {

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
        this._formato = formato;
        this._valor = valor;
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

    public abstract registrarVenda(registro: venda): boolean;

    public visualizar(): void {

        let formato: string = "";
        switch (this._formato) {

            case 1:
                formato = "Livro fisico";
                break;
            case 2:
                formato = "Livro digital";
                break;
        }


        console.log("\n\n*****************************************************");
        console.log("Livro:");
        console.log("*****************************************************");
        console.log("Id do livro: " + this._id);
        console.log("Titulo: " + this._titulo);
        console.log("Autor: " + this._autor);
        console.log("ano: " + this.ano);
        console.log("Formato: " + this.formato);
        console.log("Valor original (R$): " + this.valor.toFixed(2));

    }
}