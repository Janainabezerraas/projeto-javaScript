import readlinesync = require('readline-sync');
import { colors } from './src/util/Colors';
import { LivroFisico } from './src/model/LivroFisico';
import { LivroDigital } from './src/model/LivroDigital';
import { LivroController } from './src/controller/LivroController';
import { vendaDigital, vendaFisica } from './src/model/Livro';

export function main() {

    let livros: LivroController = new LivroController();


    let opcao, formato, valor, quantidade, id, dia, mes, anoDaVenda: number;
    let titulo, autor, ano, extensao, cliente: string;
    const formatosLivros = ['Livro fisico', 'Livro digital'];

    while (true) {
        console.log(colors.bg.black, colors.fg.cyan,
            "**************************************************", colors.reset);

        console.log(colors.bg.black, colors.fg.gray,
            "                      Oriki Livros                      ", colors.reset);

        console.log(colors.bg.black, colors.fg.cyan,
            "**************************************************", colors.reset);

        console.log(colors.bg.black, colors.fg.gray,
            "1 - Cadastrar livro                          ", colors.reset);
        console.log(colors.bg.black, colors.fg.gray,
            "2 - Listar todas os livros                    ", colors.reset);
        console.log(colors.bg.black, colors.fg.gray,
            "3 - Buscar por livro                         ", colors.reset);
        console.log(colors.bg.black, colors.fg.gray,
            "4 - Atualizar dados do livro                 ", colors.reset);
        console.log(colors.bg.black, colors.fg.gray,
            "5 - Remover livro                             ", colors.reset);
        console.log(colors.bg.black, colors.fg.gray,
            "6 - Registrar venda                                   ", colors.reset);
        console.log(colors.bg.black, colors.fg.gray,
            "7 - Visualizar histórico de vendas                                    ", colors.reset);
        console.log(colors.bg.black, colors.fg.gray,
            "8 - Sair                                       ", colors.reset);
        console.log(colors.bg.black, colors.fg.cyan,
            "**************************************************", colors.reset);

        console.log("Entre com a opcao desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao === 8) {
            console.log(colors.fg.cyan, "\nORIKI LIVROS - A LIVRARIA QUE LOUVA O SABER!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0)
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.gray, "\n\nCadastrar livro\n\n", colors.reset);

                console.log("Digite o titulo do livro: ");
                titulo = readlinesync.question("");

                console.log("Digite o nome do autor: ");
                autor = readlinesync.question("");

                console.log("Digite o ano de publicação: ");
                ano = readlinesync.question("");

                console.log("Digite o formato: ");
                formato = readlinesync.keyInSelect(formatosLivros, "", { cancel: false }) + 1

                console.log("Digite o valor do livro: ");
                valor = readlinesync.questionInt(" ");

                switch (formato) {
                    case 1:
                        console.log("Digite a quantidade do estoque: ");
                        quantidade = readlinesync.questionInt("");
                        livros.cadastrar(new LivroFisico(livros.gerarId(), titulo, autor, ano, formato, valor, quantidade));
                        break;
                    case 2:
                        console.log("Digite a extensão: ");
                        extensao = readlinesync.question("");
                        livros.cadastrar(new LivroDigital(livros.gerarId(), titulo, autor, ano, formato, valor, extensao));
                        break;
                }



                keyPress()

                break;

            case 2:
                console.log(colors.fg.gray, "\n\nListar todos os livros\n\n", colors.reset);

                livros.listarTodos();

                keyPress()
                break;

            case 3:
                console.log(colors.fg.gray, "\n\nBuscar por livro\n\n", colors.reset);


                console.log("Digite id do livro: ");
                id = readlinesync.questionInt("");
                livros.procuraPorId(id);

                keyPress()
                break;

            case 4:
                console.log(colors.fg.gray, "\n\nAtualizar dados do livro \n\n", colors.reset);


                console.log("Digite o id do livro: ");
                id = readlinesync.questionInt("");

                let livro = livros.buscarNoArray(id);

                if (livro != null) {

                    console.log("Digite o titulo: ");
                    titulo = readlinesync.question("");

                    console.log("Digite o nome do autor: ");
                    autor = readlinesync.question("");

                    console.log("Digite o ano de publicação: ");
                    ano = readlinesync.question("");

                    formato = livro.formato;

                    console.log("Digite o valor do livro: ");
                    valor = readlinesync.questionInt(" ");

                    switch (formato) {
                        case 1:
                            console.log("Digite a quantidade do estoque: ");
                            quantidade = readlinesync.questionInt("");
                            livros.atualizar(new LivroFisico(id, titulo, autor, ano, formato, valor, quantidade));
                            break;
                        case 2:
                            console.log("Digite a extensão: ");
                            extensao = readlinesync.question("");
                            livros.atualizar(new LivroDigital(id, titulo, autor, ano, formato, valor, extensao));
                            break;
                    }

                } else {
                    console.log(colors.fg.red, "\nO livro de id: " + id + " não foi encontrado!", colors.reset);

                }

                keyPress()
                break;

            case 5:
                console.log(colors.fg.gray, "\n\nApagar livro\n\n", colors.reset);

                console.log("Digite o id do livro: ");
                id = readlinesync.questionInt("");
                livros.deletar(id);

                keyPress()
                break;


            case 6:
                console.log(colors.fg.gray, "\n\nRegistrar venda\n\n", colors.reset);

                console.log("Digite o id do livro")
                id = readlinesync.questionInt(" ")

                let livroEncontrado = livros.buscarNoArray(id);

                if (livroEncontrado != null) {

                    console.log("Digite o nome do cliente: ");
                    cliente = readlinesync.question("")

                    console.log("Digite o dia da venda: ");
                    dia = readlinesync.questionInt("")

                    console.log("Digite o mês da venda: ");
                    mes = readlinesync.questionInt("")

                    console.log("Digite o ano da venda: ");
                    anoDaVenda = readlinesync.questionInt("")

                    let vendaRegistrada = false;

                    switch (livroEncontrado.formato) {
                        case 1:
                            console.log("Digite a quantidade de unidades vendidas: ");
                            let unidades = readlinesync.questionInt("");
                            let dadosVendaFisica: vendaFisica = { cliente, dia, mes, anoDaVenda, unidades };
                            vendaRegistrada = livros.registrarVenda(id, dadosVendaFisica);
                            break;

                        case 2:
                            let livroDigitalEncontrado: LivroDigital = <LivroDigital>livroEncontrado;
                            let extensao = livroDigitalEncontrado.extensao;
                            console.log("Extensão do arquivo: " + extensao);
                            let dadosVendaDigital: vendaDigital = { cliente, dia, mes, anoDaVenda, extensao };
                            vendaRegistrada = livros.registrarVenda(id, dadosVendaDigital);
                            break;
                    }
                    if (vendaRegistrada) {
                        console.log("Venda registrada com sucesso!")
                    }

                }

                keyPress()
                break;

            case 7:
                console.log(colors.fg.gray, "\n\nVisualizar historico de vendas\n\n", colors.reset);


                console.log("Digite o ID do livro para visualizar as vendas: ");
                id = readlinesync.questionInt("")


                let historicoVendas = livros.visualizarHistoricoDeVendas(id);

                if (historicoVendas && historicoVendas.length > 0) {
                    console.log(colors.fg.whitestrong, "\nHistórico de Vendas:", colors.reset);

                    for (let venda of historicoVendas) {
                        console.log("\n-------------------------------------------");
                        console.log("Cliente: " + venda.cliente);
                        console.log("Data: " + venda.dia + "/" + venda.mes + "/" + venda.anoDaVenda);


                        if ('unidades' in venda) {
                            console.log("Unidades vendidas: " + venda.unidades);

                        } else if ('extensao' in venda) {
                            console.log("Extensão do arquivo: " + venda.extensao);
                        }
                    }
                } else if (historicoVendas && historicoVendas.length === 0) {

                    console.log(colors.fg.yellow, "\nO livro de ID: " + id + " ainda não tem vendas registradas.", colors.reset);
                } else {
                    console.log(colors.fg.red, "\nO livro de ID: " + id + " não foi encontrado!", colors.reset);
                }


                keyPress()
                break;

            default:
                console.log(colors.fg.red, "\nOpcao ivalida!\n", colors.reset);

                keyPress()
                break
        }
    }

}


export function sobre(): void {
    console.log("\n********************************************************");
    console.log("Projeto desenvolvido por: Janaina Bezerra");
    console.log("Email: janainabdas@gmail.com");
    console.log("github.com/Janainabezerraas");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
