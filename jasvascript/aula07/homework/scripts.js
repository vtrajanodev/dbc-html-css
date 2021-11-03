const playerOne = 'X'
const playerTwo = 'O'
var playTime = playerOne

const verifyWinOrDraw = () => {
    const winCombos = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 5, 9],
        [7, 5, 3],
        [3, 6, 9],
        [2, 5, 8],
        [1, 4, 7],
    ]

    let div1 = document.getElementById('bloco1')
    let div2 = document.getElementById('bloco2')
    let div3 = document.getElementById('bloco3')
    let div4 = document.getElementById('bloco4')
    let div5 = document.getElementById('bloco5')
    let div6 = document.getElementById('bloco6')
    let div7 = document.getElementById('bloco7')
    let div8 = document.getElementById('bloco8')
    let div9 = document.getElementById('bloco9')

    

    if(div1.innerText ===  playerOne && div2.innerText === playerOne && div3.innerText === playerOne){
        alert(`O jogador ${playerOne} ganhou`)
    }else if(div1.innerText ===  playerTwo && div2.innerText === playerTwo && div3.innerText === playerTwo){
        alert(`O jogador ${playerTwo} ganhou`)
    }else if(div4.innerText ===  playerOne && div5.innerText === playerOne && div6.innerText === playerOne){
        alert(`O jogador ${playerOne} ganhou`)
    }else if(div4.innerText ===  playerTwo && div5.innerText === playerTwo && div6.innerText === playerTwo){
        alert(`O jogador ${playerTwo} ganhou`)
    }else if(div7.innerText ===  playerOne && div8.innerText === playerOne && div9.innerText === playerOne){
        alert(`O jogador ${playerOne} ganhou`)
    }else if(div7.innerText ===  playerTwo && div8.innerText === playerTwo && div9.innerText === playerTwo){
        alert(`O jogador ${playerTwo} ganhou`)
    }else if(div1.innerText ===  playerOne && div5.innerText === playerOne && div9.innerText === playerOne){
        alert(`O jogador ${playerOne} ganhou`)
    }else if(div1.innerText ===  playerTwo && div5.innerText === playerTwo && div9.innerText === playerTwo){
        alert(`O jogador ${playerTwo} ganhou`)
    }else if(div7.innerText ===  playerOne && div5.innerText === playerOne && div3.innerText === playerOne){
        alert(`O jogador ${playerOne} ganhou`)
    }else if(div7.innerText ===  playerTwo && div5.innerText === playerTwo && div3.innerText === playerTwo){
        alert(`O jogador ${playerTwo} ganhou`)
    }else if(div3.innerText ===  playerOne && div6.innerText === playerOne && div9.innerText === playerOne){
        alert(`O jogador ${playerOne} ganhou`)
    }else if(div3.innerText ===  playerTwo && div6.innerText === playerTwo && div9.innerText === playerTwo){
        alert(`O jogador ${playerTwo} ganhou`)
    }else if(div2.innerText ===  playerOne && div5.innerText === playerOne && div8.innerText === playerOne){
        alert(`O jogador ${playerOne} ganhou`)
    }else if(div2.innerText ===  playerTwo && div5.innerText === playerTwo && div8.innerText === playerTwo){
        alert(`O jogador ${playerTwo} ganhou`)
    }else if(div1.innerText ===  playerOne && div4.innerText === playerOne && div7.innerText === playerOne){
        alert(`O jogador ${playerOne} ganhou`)
    }else if(div1.innerText ===  playerTwo && div4.innerText === playerTwo && div7.innerText === playerTwo){
        alert(`O jogador ${playerTwo} ganhou`)
    }
    
    return 
}


const play = () => {

    let button = document.querySelector('button')

    if (button.innerText === 'Recomeçar') {
        for (let i = 1; i <= 9; i++) {
            document.getElementById(`bloco${i}`).innerText = ''
            playTime = playerOne
        }
    }

    button.innerText = 'Recomeçar'
    var block = document.getElementsByClassName('block')

    for (let i = 0; i < block.length; i++) {

        block[i].addEventListener('click', () => {

            if (block[i].innerText === '' && playTime === playerOne) {

                block[i].innerText = 'X'
                playTime = playerTwo;
                verifyWinOrDraw()

            } else if (block[i].innerText === '' && playTime === playerTwo) {
                block[i].innerHTML = 'O'
                playTime = playerOne
                verifyWinOrDraw()
            } else {
                console.log('Você não pode jogar aqui')
            }
        })


    }


}

document.querySelector('body').addEventListener('click', () => {
    if(document.querySelector('button').innerText !== 'Recomeçar'){
        alert('Você deve clicar em iniciar para começar o jogo')
        
    }
})

let button = document.querySelector('button')
button.addEventListener('click', play)

