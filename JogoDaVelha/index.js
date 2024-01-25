//Define a vez do jogador TRUE jogador 1 FALSE jogador 2
let player = true;

//Gardar as jogadas dos jogadores
let player1 = [];
let player2 = [];

//Historico de quem venceu
let historic = [];

//Combinações que ganha o jogo
const win = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

//Botões do jogo
const buttons = document.getElementsByClassName("buttonGame");

//Div do placar
const dPlacar = document.getElementsByClassName("dPlacar");

//Pega o botão jogado
const Press = (buttonPress) =>{

    //Seleciona o botão
    const button = buttons[buttonPress - 1];
    
    //Desabilita o botão
    button.disabled = true;

    //
    if (player) {
        button.value = "X";
        button.style.color = "#9F3030";
        player1.push(buttonPress);
        const res = Winer(player1)
        if (res) {
            console.log("Jogador 1 ganhou");
        }
        player = !player;
    } else {
        button.value = "O";
        button.style.color = "#6080F0";
        player2.push(buttonPress);
        const res = Winer(player2)
        if (res) {
            console.log("Jogador 2 ganhou");
        }
        player = !player;
    }
}

const Winer = (jogador)=>{
    for (let i = 0; i < win.length; i++) {
        const winComb = win[i];
        victory = true;
        for (let a = 0; a < winComb.length; a++) {
            if (!jogador.includes(winComb[a])) {
                victory = false;
                break;
            }
        }
        if (victory) {
            historic.push(player ? 1 : 2);
            const win1 = historic.filter(e => e === 1).length;
            const win2 = historic.length - win1;
            dPlacar[0].innerHTML = `${win1} X ${win2}`; 
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].disabled = true;
            }
            return(true);
        }
    }
}

const NewGame = () =>{
    player1 = [];
    player2 = [];
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
        buttons[i].value = "";
    }
}

