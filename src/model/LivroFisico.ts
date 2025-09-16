import { Livro, vendaFisica } from './Livro';

export class LivroFisico extends Livro {
    private _historico: Array<vendaFisica> = new Array<vendaFisica>();
    private _quantidade: number;

    constructor(id: number, titulo: string, autor: string, ano: string, formato: number, valor: number, quantidade: number) {
        super(id, titulo, autor, ano, formato, valor);
        this._quantidade = quantidade;
    }

    public get historico() {
        return this._historico;
    }

    public get quantidade() {
        return this._quantidade;
    }

    public set quantidade(quantidade: number) {
        this._quantidade = quantidade;
    }

    public registrarVenda(registro: vendaFisica): boolean {
        if (registro.unidades > this.quantidade) {
            console.log("\n Impossivel registrar venda em etoque negativo!")
            return false;
        }
        this.quantidade -= registro.unidades
        this.historico.push(registro)
        return true;
    }

    public listarVendas(): vendaFisica[] {
        return [...this.historico]
    }


    public visualizar(): void {
        super.visualizar();
        console.log("Quantidade: " + this._quantidade);
    }
}