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

const BotaoJogado = (jogada)=>{
    const press = document.getElementById(`${jogada}`);
    if (player) {
        press.disabled = true;
        press.value = 'X';
        player1.push(jogada);
        player = !player ;
        const res = Ganhador(player1);
    }else{
        press.disabled = true;
        press.value = 'O';
        player2.push(jogada);
        player = !player ;
        const res = Ganhador(player2);
    }
}

const Ganhador = (jogador)=>{
    for (let i = 0; i < win.length; i++) {
        const comb = win[i];
        for (let e = 0; e < comb.length; e++) {
            if (!jogador.includes(comb[e])) {
                console.log("Sem Ganhador");
                return("Sem Ganhador");
            }
        }
    }
    console.log("Win Player " , player? "1 " : "2 ");
}  