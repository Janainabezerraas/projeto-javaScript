import { Livro } from "../model/Livro";
import { vendaFisica } from "../model/Livro";
import { vendaDigital } from "../model/Livro";

export interface LivroRepository {

    procuraPorId(id: number): void;
    listarTodos(): void;
    cadastrar(Livro: Livro): void;
    atualizar(Livro: Livro): void;
    deletar(id: number): void;

    registrarVenda(id: number, venda: vendaFisica | vendaDigital): boolean;
    visualizarHistoricoDeVendas(id: number): vendaFisica[] | vendaDigital[] | undefined;
}