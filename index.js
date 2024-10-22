
//Historico de quem venceu
let historic = [];

var ganhador;

//Botões do jogo
const buttons = document.getElementsByClassName("buttonGame");

//Div do placar
const dPlacar = document.getElementsByClassName("dPlacar");

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

// JOGADAS
var playerBot = [];
var player = [];

// Valida a Jogada
const Validar = (e)=>{
    // Se a Jogada ja tiver sido feita retorna true para Jogada Invalida e false para jogada vailida
    if (playerBot.includes(e) || player.includes(e) || e > 9 || e < 1) {
        //Erro
        return true
    } else {
        //Tudo Ok
        return false            
    }
}


// Faz uma Jogada Random
const JogadaRandom = ()=>{
    var jogado;
    // Roda o loop até o bot achar uma jogada valida
    do {
        // Sorteia um número aleatorio que ainda não tenha sido jogado pelo Jogador ou pelo Bot
        jogado =  Math.floor(Math.random()* 9 ) + 1;
    } while (Validar(jogado) );
    // Guarda a jogada do bot
    playerBot.push(jogado);

    //Altera o estilo do Button
    const button = buttons[jogado - 1];
    button.disabled = true;
    button.value = "O";
    button.style.color = "#6080F0";

    //Seta que é jogada do bot
    ganhador = false;

    //Verifica se o Bot Ganhou
    const res = Winer(playerBot)
    if (res) {
        console.log("Jogador 2 ganhou");
    }
}

// Função Jogar
const Jogar = (jogada) =>{
    // Vê se a jogada é valida
    if(Validar(jogada)){
        console.log("Jogada Invalida");
    }else{

        //Altera o estilo do Button
        const button = buttons[jogada - 1];
        button.disabled = true;
        button.value = "X";
        button.style.color = "#9F3030";
    
        // Armazena a jogada do jogador
        player.push(jogada);

        //Seta qyue é a jogada do jogador
        ganhador = true;

        //Verifica se o Player Ganhou
        const res = Winer(player)
        if (res) {
            console.log("Jogador 1 ganhou");
        }

        // Faz a Jogada do Bot
        if (player.length + playerBot.length  <= 8) {
            JogadaRandom();
        }

        //LOGS
        console.log("Jogue Denovo");
        console.log("Jogador: ", player);
        console.log("Bot: ", playerBot);
        console.log(historic);
        
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
            historic.push(ganhador ? 1 : 2);
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
    player = [];
    playerBot = [];
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
        buttons[i].value = "";
    }
}

