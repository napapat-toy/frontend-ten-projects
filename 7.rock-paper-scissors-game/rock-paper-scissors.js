let playerScore = 1
let computerScore = 1

const pScore = document.getElementById('playerScore')
const cScore = document.getElementById('computerScore')
const show = document.querySelector('.show i')
const comShowIcon = document.querySelector('.computer i')
const selectBtn = document.querySelectorAll('.selection button')

const randomClasses = [
    "fas fa-hand-rock",
    "fas fa-hand-paper",
    "fas fa-hand-scissors"
]

const text1 = document.getElementById('demo1')
const text2 = document.getElementById('demo2')

//Game Function
const game = () => {
    selectBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // player click and computer random
            let clickedBtn = e.target.className
            // console.log(clickedBtn);
            show.className = clickedBtn
            let randomNum = Math.floor(Math.random() * randomClasses.length)
            comShowIcon.className = randomClasses[randomNum]

            //Handler Tie
            if (show.className === comShowIcon.className) {
                cScore.innerHTML = cScore.innerHTML
                pScore.innerHTML = pScore.innerHTML
                if (text1.innerHTML === "You got Tie") {
                    text1.innerHTML = "You got Tie again"
                    text1.style.color = "orange"
                    text2.innerHTML = text1.innerHTML
                    text2.style.color = "orange"
                }
                else {
                    text1.innerHTML = "You got Tie"
                    text1.style.color = "orange"
                    text2.innerHTML = text1.innerHTML
                    text2.style.color = "orange"
                }
            }

            //Handler Win

            //Rock Paper Scissors
            else if (
                (show.className === randomClasses[0] && comShowIcon.className === randomClasses[2]) ||
                (show.className === randomClasses[1] && comShowIcon.className === randomClasses[0]) ||
                (show.className === randomClasses[2] && comShowIcon.className === randomClasses[1])
            ) {
                pScore.innerHTML = playerScore
                playerScore++
                if (text1.innerHTML === "You Win") {
                    text1.innerHTML = "You Win again"
                    text1.style.color = "green"
                    text2.innerHTML = text1.innerHTML
                    text2.style.color = "green"
                }
                else {
                    text1.innerHTML = "You Win"
                    text1.style.color = "green"
                    text2.innerHTML = text1.innerHTML
                    text2.style.color = "green"
                }
            }

            //Handler Lose

            //Rock
            else if (
                (show.className === randomClasses[0] && comShowIcon.className === randomClasses[1]) ||
                (show.className === randomClasses[1] && comShowIcon.className === randomClasses[2]) ||
                (show.className === randomClasses[2] && comShowIcon.className === randomClasses[0])
            ) {
                cScore.innerHTML = computerScore
                computerScore++
                if (text1.innerHTML === "You Loose") {
                    text1.innerHTML = "You Loose again"
                    text1.style.color = "red"
                    text2.innerHTML = text1.innerHTML
                    text2.style.color = "red"
                }
                else {
                    text1.innerHTML = "You Loose"
                    text1.style.color = "red"
                    text2.innerHTML = text1.innerHTML
                    text2.style.color = "red"
                }

            }
        })
    })
}
game()