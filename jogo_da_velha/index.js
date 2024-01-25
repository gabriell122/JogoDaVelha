let player = true;
let player1 = [];
let player2 = [];
let win = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
const botoes = document.getElementsByClassName('button');
let historico = [];
const dHistorico = document.getElementsByClassName("historic");
const setPress = (e) => {
    console.log("Jogada " + e);
    if (player == true) {
        document.getElementById(`${e}`).value = 'X';
        document.getElementById(`${e}`).disabled = true;
        player1.push(e)
        player = !player
        console.log("Jogador 1: " + player1);
        res = verificaCombinacoes(player1, win);
        if (res) {
            alert("Jogador 1 ganhou");
            historic(1);
        }
    } else {
        document.getElementById(`${e}`).value = 'O'
        document.getElementById(`${e}`).disabled = true
        player2.push(e)
        player = !player
        console.log("Jogador 2: " + player2);
        res = verificaCombinacoes(player2, win);
        if (res) {
            alert("Jogador 2 ganhou");
            historic(2);
        }
    }
}
function verificaCombinacoes(array, comb) {
    for (let i = 0; i < comb.length; i++) {
        let combinacao = comb[i];
        let encontrouComb = true;
        for (let j = 0; j < combinacao.length; j++) {
            if (!array.includes(combinacao[j])) {
                encontrouComb = false;
                break;
            }
        }
        if (encontrouComb) {
            for (let i = 0; i < botoes.length; i++) {
                botoes[i].disabled = true;
            }
            return true; // Encontrou uma combinação
        }
    }
    return false; // Não encontrou nenhuma combinação
}

const newPlay = () =>{
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].value= '';
        botoes[i].disabled= false;
    }
    player1 = [];
    player2 = [];
}

const historic = (win)=>{
    historico.push(win);
    console.log(historico);
    const win1 = historico.filter(e => e === 1).length;
    const win2 = historico.length - win1;
    console.log(`${win1} X ${win2}`);
    const a = `${win1} X ${win2}`
    console.log(dHistorico);
    dHistorico[0].value  = a ;
}