import readlinesync = require('readline-sync');
import { colors } from './src/util/Colors';
import { Livro } from './src/model/Livro';

export function main () {

    let opcao: number;

    const livro: Livro = new Livro(42, "King e as Libelulas", "Kacen Callender", "2022", 1, 52);
    livro.visualizar();


    while (true) {
    console.log(colors.bg.black, colors.fg.cyan,
        "**************************************************", colors.reset);

    console.log(colors.bg.black, colors.fg.gray,
        "                      Oriki Livros                      ", colors.reset);

    console.log(colors.bg.black, colors.fg.cyan,
        "**************************************************", colors.reset);

    console.log(colors.bg.black, colors.fg.gray,
        "1 - Cadastrar produto                           ", colors.reset);
    console.log(colors.bg.black, colors.fg.gray,
        "2 - Listar todas os produtos                    ", colors.reset);
    console.log(colors.bg.black, colors.fg.gray,
        "3 - Buscar por produto                          ", colors.reset);
    console.log(colors.bg.black, colors.fg.gray,
        "4 - Atualizar dados do produto                  ", colors.reset);
    console.log(colors.bg.black, colors.fg.gray,
        "5 - Apagar produto                              ", colors.reset);
    console.log(colors.bg.black, colors.fg.gray,
        "6 - Vender                                      ", colors.reset);
    console.log(colors.bg.black, colors.fg.gray,
        "7 - Calcular frete                                       ", colors.reset);
 console.log(colors.bg.black, colors.fg.gray,
        "8 - Sair                                       ", colors.reset);
    console.log(colors.bg.black, colors.fg.cyan,
        "**************************************************", colors.reset);

    console.log("Entre com a opcao desejada: ");
    opcao = readlinesync.questionInt("");

    if (opcao === 8) {
        console.log(colors.fg.cyan,"\nORIKI LIVROS - A LIVRARIA QUE LOUVA O SABER!");
        sobre();
        console.log(colors.reset,"");
        process.exit(0)
    }

    switch(opcao) {
        case 1:
            console.log(colors.fg.gray,"\n\nCadastrar livro\n\n", colors.reset);

            keyPress()
            break;

        case 2:
            console.log(colors.fg.gray,"\n\nListar todos os livros\n\n", colors.reset);

            keyPress()
            break;

        case 3:
            console.log(colors.fg.gray,"\n\nBuscar por livro\n\n", colors.reset);

            keyPress()
            break;

        case 4:
            console.log(colors.fg.gray,"\n\nAtualizar dados do livro \n\n", colors.reset);

            keyPress()
            break;

        case 5:
            console.log(colors.fg.gray,"\n\nApagar livro\n\n", colors.reset);

            keyPress()
            break;

        
        case 6:
            console.log(colors.fg.gray,"\n\nVender\n\n", colors.reset);

            keyPress()
            break;

        case 7:
            console.log(colors.fg.gray,"\n\nCalcular frete\n\n", colors.reset);

            keyPress()
            break;
            
        default:
            console.log(colors.fg.red,"\nOpcao ivalida!\n", colors.reset);
            
            keyPress()
            break
        }
    }

}


export function sobre(): void{
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
