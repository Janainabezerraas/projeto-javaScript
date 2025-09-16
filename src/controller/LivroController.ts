import { Livro, vendaDigital, vendaFisica } from "../model/Livro";
import { LivroDigital } from "../model/LivroDigital";
import { LivroFisico } from "../model/LivroFisico";
import { LivroRepository } from "../repository/LivroRepository";
import { colors } from "../util/Colors";

export class LivroController implements LivroRepository {

    registrarVenda(id: number, venda: vendaFisica | vendaDigital): boolean {
        let livro = this.buscarNoArray(id);

        if (livro) {
            if (livro instanceof LivroFisico && 'unidades' in venda) {
                return livro.registrarVenda(venda as vendaFisica);
            } else if (livro instanceof LivroDigital && 'extensao' in venda) {
                return livro.registrarVenda(venda as vendaDigital);
            }
        }
        console.log(colors.fg.red, "\nO livro de Id: " + id + " não foi encontrado!", colors.reset);
        return false;
    }

    visualizarHistoricoDeVendas(id: number): vendaFisica[] | vendaDigital[] | undefined {


        let livro = this.buscarNoArray(id);
        if (livro instanceof LivroFisico) {
            return livro.listarVendas();
        }
        else if (livro instanceof LivroDigital) {
            return livro.listarVendas();
        }
    }


    private listaLivros: Array<Livro> = new Array<Livro>();
    id: number = 0;

    procuraPorId(id: number): void {
        let buscaLivro = this.buscarNoArray(id);

        if (buscaLivro != null) {
            buscaLivro.visualizar();
        } else
            console.log(colors.fg.red, "\nO livro de Id: " + id + " não foi encontrado!", colors.reset);
    }

    listarTodos(): void {
        for (let conta of this.listaLivros) {
            conta.visualizar();
        };
    }

    cadastrar(livro: Livro): void {

        this.listaLivros.push(livro);
        console.log(colors.fg.whitestrong, "\nO livro de Id: " + livro.id + " foi registrado com sucesso", colors.reset)
    }

    atualizar(livro: Livro): void {
        let buscaLivro = this.buscarNoArray(livro.id);

        if (buscaLivro != null) {
            this.listaLivros[this.listaLivros.indexOf(buscaLivro)] = livro;
            console.log(colors.fg.whitestrong, "\nO livro de Id: " + livro.id + " foi atualizado com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nO livro: " + livro.id + " não foi encontrado!", colors.reset);
    }

    deletar(id: number): void {
        let buscaLivro = this.buscarNoArray(id);

        if (buscaLivro != null) {
            this.listaLivros.splice(this.listaLivros.indexOf(buscaLivro), 1);
            console.log(colors.fg.whitestrong, "\nO livro de Id: " + id + " foi apagado com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nO livro de Id: " + id + " nao foi encontrado!", colors.reset);
    }



    public gerarId(): number {
        return ++this.id;

    }
    public buscarNoArray(id: number): Livro | null {

        for (let livro of this.listaLivros) {
            if (livro.id === id)
                return livro;
        }

        return null;
    }

}