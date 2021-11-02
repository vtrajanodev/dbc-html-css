const playerOne = 'X'
const playerTwo = 'O'
var playTime = playerOne



const verifyWinOrDraw = () => {
    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [6, 4, 2],
        [2, 5, 8],
        [1, 4, 7],
        [0, 3, 6],
    ]


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
                playTime = playerTwo
            } else if(block[i].innerText === '' && playTime === playerTwo){
                block[i].innerHTML = 'O'
                playTime = playerOne
            }else{
                console.log('Você não pode jogar aqui')
            }
        })
    }
}

let button = document.querySelector('button')
button.addEventListener('click' , play)

