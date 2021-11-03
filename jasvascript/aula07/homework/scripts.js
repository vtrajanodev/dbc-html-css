const playerOne = 'X';
const playerTwo = 'O';
var playTime = playerOne;
var round = 0;

//Inicio de jogada
const play = () => {

    //Condição de reset
    let button = document.querySelector('button')
    if (button.innerText === 'Recomeçar') {
        for (let i = 1; i <= 9; i++) {
            document.getElementById(`bloco${i}`).innerText = '';
            playTime = playerOne;
        }
        document.querySelector('.vencedor').innerText = ''
    }

    //Se jogo iniciado, adiciona os eventos de click.
    button.innerText = 'Recomeçar';
    var block = document.querySelectorAll('.block');
    for (let i = 0; i < block.length; i++) {

        block[i].addEventListener('click', () => {

            if (block[i].innerText === '' && playTime === playerOne) {

                document.querySelector('.vencedor').innerText = `Player ${playerTwo} na vez`
                block[i].innerText = 'X';
                block[i].style.color = 'Blue'
                round += 1;
                playTime = playerTwo;
                
                if(verifyWin()){
                    document.querySelector('.vencedor').appendChild(document.createTextNode('  Clique em reiniciar para jogar outra partida'));
                    round = 0;
                }
                verifyDrawn();

            } else if (block[i].innerText === '' && playTime === playerTwo) {
                
                document.querySelector('.vencedor').innerText = `Player ${playerOne} na vez`
                block[i].innerHTML = 'O';
                block[i].style.color = 'red'
                round += 1;
                playTime = playerOne;

                if(verifyWin()){
                    document.querySelector('.vencedor').appendChild(document.createTextNode('  Clique em reiniciar para jogar outra partida'));
                    round = 0;
                }
                verifyDrawn();
            }
        })
    }
}

//Milhões de ifs para verificação de vitória
const verifyWin = () => {

    let div1 = document.getElementById('bloco1');
    let div2 = document.getElementById('bloco2');
    let div3 = document.getElementById('bloco3');
    let div4 = document.getElementById('bloco4');
    let div5 = document.getElementById('bloco5');
    let div6 = document.getElementById('bloco6');
    let div7 = document.getElementById('bloco7');
    let div8 = document.getElementById('bloco8');
    let div9 = document.getElementById('bloco9');

    if (div1.innerText === playerOne && div2.innerText === playerOne && div3.innerText === playerOne) {
        document.querySelector('.vencedor').innerText = '';
        document.querySelector('.vencedor').appendChild(document.createTextNode('Player 1 venceu!'));
        return true;
    } else if (div1.innerText === playerTwo && div2.innerText === playerTwo && div3.innerText === playerTwo) {
        document.querySelector('.vencedor').innerText = '';
        document.querySelector('.vencedor').appendChild(document.createTextNode('Player 2 venceu!'));
        return true;
    } else if (div4.innerText === playerOne && div5.innerText === playerOne && div6.innerText === playerOne) {
        document.querySelector('.vencedor').innerText = '';
        document.querySelector('.vencedor').appendChild(document.createTextNode('Player 1 venceu!'));
        return true;
    } else if (div4.innerText === playerTwo && div5.innerText === playerTwo && div6.innerText === playerTwo) {
        document.querySelector('.vencedor').innerText = '';
        document.querySelector('.vencedor').appendChild(document.createTextNode('Player 2 venceu!'));
        return true;
    } else if (div7.innerText === playerOne && div8.innerText === playerOne && div9.innerText === playerOne) {
        document.querySelector('.vencedor').innerText = '';
        document.querySelector('.vencedor').appendChild(document.createTextNode('Player 1 venceu!'));
        return true;
    } else if (div7.innerText === playerTwo && div8.innerText === playerTwo && div9.innerText === playerTwo) {
        document.querySelector('.vencedor').innerText = '';
        document.querySelector('.vencedor').appendChild(document.createTextNode('Player 2 venceu!'));
        return true;
    } else if (div1.innerText === playerOne && div5.innerText === playerOne && div9.innerText === playerOne) {
        document.querySelector('.vencedor').innerText = '';
        document.querySelector('.vencedor').appendChild(document.createTextNode('Player 1 venceu!'));
        return true;
    } else if (div1.innerText === playerTwo && div5.innerText === playerTwo && div9.innerText === playerTwo) {
        document.querySelector('.vencedor').innerText = '';
        document.querySelector('.vencedor').appendChild(document.createTextNode('Player 2 venceu!'));
        return true;
    } else if (div7.innerText === playerOne && div5.innerText === playerOne && div3.innerText === playerOne) {
        document.querySelector('.vencedor').innerText = '';
        document.querySelector('.vencedor').appendChild(document.createTextNode('Player 1 venceu!'));
        return true;
    } else if (div7.innerText === playerTwo && div5.innerText === playerTwo && div3.innerText === playerTwo) {
        document.querySelector('.vencedor').innerText = '';
        document.querySelector('.vencedor').appendChild(document.createTextNode('Player 2 venceu!'));
        return true;
    } else if (div3.innerText === playerOne && div6.innerText === playerOne && div9.innerText === playerOne) {
        document.querySelector('.vencedor').innerText = '';
        document.querySelector('.vencedor').appendChild(document.createTextNode('Player 1 venceu!'));
        return true;
    } else if (div3.innerText === playerTwo && div6.innerText === playerTwo && div9.innerText === playerTwo) {
        document.querySelector('.vencedor').innerText = '';
        document.querySelector('.vencedor').appendChild(document.createTextNode('Player 2 venceu!'));
        return true;
    } else if (div2.innerText === playerOne && div5.innerText === playerOne && div8.innerText === playerOne) {
        document.querySelector('.vencedor').innerText = '';
        document.querySelector('.vencedor').appendChild(document.createTextNode('Player 1 venceu!'));
        return true;
    } else if (div2.innerText === playerTwo && div5.innerText === playerTwo && div8.innerText === playerTwo) {
        document.querySelector('.vencedor').innerText = '';
        document.querySelector('.vencedor').appendChild(document.createTextNode('Player 2 venceu!'));
        return true;
    } else if (div1.innerText === playerOne && div4.innerText === playerOne && div7.innerText === playerOne) {
        document.querySelector('.vencedor').innerText = '';
        document.querySelector('.vencedor').appendChild(document.createTextNode('Player 1 venceu!'));
        return true;
    } else if (div1.innerText === playerTwo && div4.innerText === playerTwo && div7.innerText === playerTwo) {
        document.querySelector('.vencedor').innerText = '';
            document.querySelector('.vencedor').appendChild(document.createTextNode('Player 2 venceu!'));
        return true;
    }
}

//Verificação para empate
const verifyDrawn = () => {
    if (round >= 9) {
        document.querySelector('.vencedor').innerText = ''
        document.querySelector('.vencedor').appendChild(document.createTextNode('O jogo empatou, clique em reiniciar para outra partida.'));
        round = 0;
    }
}

//Função para obrigar a clicar em iniciar
document.querySelector('body').addEventListener('click', () => {
    if (document.querySelector('button').innerText !== 'Recomeçar') {
        alert('Você deve clicar em iniciar para começar o jogo');
    }
})

//Buscar o botão para iniciar a partida
let button = document.querySelector('button');
button.addEventListener('click', play);


