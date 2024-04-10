//Variaveis
const screenOne = document.querySelector('.screenOne')
const screenTwo = document.querySelector('.screenTwo')
let randomNumber = Math.round(Math.random() * 10)
let attempts = 1

//Eventos
const btnTry = document.querySelector('#btnTry')
const btnAgain = document.querySelector('#btnAgain')

function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == randomNumber) {
    toogleScreen()

    document.querySelector(
      '.screenTwo h2'
    ).innerText = `Acertou em ${attempts} tentativas`
  } else if (Number(inputNumber.value) > 10 || Number(inputNumber.value) < 0) {
    alert(`
    Esté número não esta entre 0 e 10, 
    coloque um número entre 0 e 10.`)
  } else if (
    Number(inputNumber.value) == '' &&
    Number(inputNumber.value) != 0
  ) {
    alert(`
    UE?? Você não colocou nada, 
    coloque um número entre 0 e 10.`)
  } else {
    alert(`Errou, Tente novamente.`)
    attempts++
  }

  console.log(attempts)
}

function handleAgainClick() {
  randomNumber = Math.round(Math.random() * 10)
  toogleScreen()

  inputNumber.value = ''
  attempts = 1
}

document.addEventListener('keydown', keyDown)

//Função CallBack
btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', handleAgainClick)

//Função toogle
function toogleScreen() {
  screenOne.classList.toggle('hide')
  screenTwo.classList.toggle('hide')
}

function keyDown(e) {
  if (e.key == 'Enter' && screenOne.classList.contains('hide')) {
    handleAgainClick()
  }
}
