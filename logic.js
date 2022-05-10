var key = document.querySelectorAll('.keyboard-key');
var allGuesses = document.querySelectorAll('.guesses li');
var portuguese = document.querySelector('.portuguese');
var english = document.querySelector('.english');
var result = document.querySelector('.result');


var counter = 0
var portugueseWords = ['IDEIA', 'SUTIL', 'VIGOR', 'PODER', 'AMIGO', 'MAMAE', 'SAGAZ', 'NOBRE', 'AFETO', 'FAZER', 'CARNE', 'PODER', 'MORAL', 'MUITO', 'HONRA', 'JUSTO', 'ETNIA', 'SONHO', 'ICONE', 'RAZAO', 'SONHO', 'CASAL', 'TEMPO', 'DENGO', 'GENRO', 'CULTO', 'TEMOR', 'VICIO', 'FORTE', 'REGRA', 'LOUCO', 'SAUDE', 'BANAL', 'FELIZ', 'ONTEM', 'HOMEM', 'MEIGA', 'HEROI', 'ABRIR', 'FALSO', 'BRAVO', 'GENIO']
var englishWords = ['ABOUT', 'ALERT', 'ACTOR', 'APPLE', 'AWARE', 'ADULT', 'ALARM', 'ALIVE', 'AGREE', 'AUDIO', 'BEACH', 'BRAIN', 'BREAK', 'BROWN', 'BLOOD', 'BEGIN', 'BROKE', 'CLEAR', 'CHINA', 'CLOUD', 'CHEAP', 'CLASS', 'CRASH', 'DRIVE', 'EVERY', 'INPUT', 'JOINT', 'PHOTO', 'PLANT', 'RURAL', 'SHARP', 'SHELF', 'SHIRT', 'TEETH', 'TEACH', 'SUGAR', 'TRUCK', 'TRUST', 'UNDER', 'YOUNG', 'WATER', 'VIRUS', 'WATCH']
var words;
var wordTest;

var pushedLetter = ''; 
var redLetter = '';

portuguese.addEventListener("click", function(){
    words = portugueseWords
    document.querySelector('.popup').style.display = 'none'
    wordTest = wordDrawn()

})
english.addEventListener("click", function(){
    words = englishWords
    document.querySelector('.popup').style.display = 'none'
    wordTest = wordDrawn()

})



function wordDrawn (){
    return words[Math.floor(Math.random() * words.length)]
}

for (var i=0; i< key.length; i++){
    key[i].addEventListener("click", function(event){
        
        if (event.target.textContent == '←' && (counter % 5 != 0) ){
            counter --
            allGuesses[counter].innerHTML = ''
        }
        else if (event.target.textContent == '←' && (counter % 5 == 0)){
            allGuesses[counter].innerHTML = ''
        }
        else{
            allGuesses[counter].innerHTML = event.target.textContent;
            counter ++
            console.log(event.target.textContent)
        }

        pushedLetter = event.target.textContent

        switch (counter) {
            case 5:
                tryGuess()
                break;
            case 10:
                line = secondGuess
                tryGuess()
                break;
            case 15:
                line = thirdGuess
                tryGuess()
                break;
            case 20:
                line = fourthGuess
                tryGuess()
                break;
            case 25:         
                line = fifthGuess
                tryGuess()
                result.innerHTML = wordTest
                result.style.display = 'block'
                break;      
        } 
    })


}

var firtsGuess = document.querySelectorAll('.firtsGuess li')
var secondGuess = document.querySelectorAll('.secondGuess li')
var thirdGuess = document.querySelectorAll('.thirdGuess li')
var fourthGuess = document.querySelectorAll('.fourthGuess li')
var fifthGuess = document.querySelectorAll('.fifthGuess li')

var line = firtsGuess

function tryGuess (){

    for (var i = 0; i < wordTest.length; i++){
        for (var i = 0; i < line.length; i++)

            if (line[i].textContent == wordTest[i]){
                line[i].style.backgroundColor = 'var(--green)'
            }        

             else if (wordTest.includes(line[i].textContent)){
                line[i].style.backgroundColor = 'var(--yellow)'
            } 

            else if (line[i].textContent != wordTest[i]){
                line[i].style.backgroundColor = 'var(--red)'
                redLetter += line[i].textContent
              }

    }
    console.log (wordTest)
    console.log (redLetter)
    makeKeyboardRed()
}


function makeKeyboardRed () {
    for (var i=0; i< key.length; i++){
        for (var r=0; r<redLetter.length; r++){
            if (key[i].textContent == redLetter[r]){
                key[i].style.opacity = 0.3;
                key[i].style.backgroundColor = 'var(--red)';
            }
        }


    }
    console.log('almost')


}
