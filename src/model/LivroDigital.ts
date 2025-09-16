import { Livro, vendaDigital } from './Livro';


export class LivroDigital extends Livro {
    private _extensoesDisponiveis: string[] = ["PDF", "EPUB", "MOBI"];
    private _historico: Array<vendaDigital> = new Array<vendaDigital>();
    private _extensao: string;

     constructor(id: number, titulo: string, autor: string, ano: string, formato: number, valor: number, extensao: string) {
        super(id, titulo, autor, ano, formato, valor);
        if (!["PDF", "EPUB", "MOBI"].includes(extensao.toUpperCase())){
            throw new Error("\nExtensao invalida!");
        }

        this._extensao = extensao.toUpperCase();
    }

    public get extensao() {
        return this._extensao;
    }

    public set extensao(extensao: string){
        this._extensao = extensao;
    }

    public get extensoesDisponiveis(): string[] {
        return this._extensoesDisponiveis;

    }

    public get historico() {
        return this._historico;
    }

    public registrarVenda(registro: vendaDigital): boolean {
        this.historico.push(registro);
        return true;
        
    }
     public listarVendas(): vendaDigital[] {
        return [...this.historico]
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Extensao: " + this._extensao)
    }
}