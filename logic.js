var key = document.querySelectorAll('.keyboard-key');
var allGuesses = document.querySelectorAll('.guesses li');

var counter = 0
var words = ['IDEIA', 'SUTIL', 'VIGOR', 'PODER', 'AMIGO', 'MAMAE']

function wordDrawn (){
    return words[Math.floor(Math.random() * words.length)]
}

for (var i=0; i< key.length; i++){
    key[i].addEventListener("click", function(event){
        allGuesses[counter].innerHTML = event.target.textContent;
        counter ++
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
                break;      
        } 
    })

}

var wordTest = wordDrawn()
var firtsGuess = document.querySelectorAll('.firtsGuess li')
var secondGuess = document.querySelectorAll('.secondGuess li')
var thirdGuess = document.querySelectorAll('.thirdGuess li')
var fourthGuess = document.querySelectorAll('.fourthGuess li')
var fifthGuess = document.querySelectorAll('.fifthGuess li')

var line = firtsGuess


var wrongPlace;




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
               
            }
    }
}

console.log (wordTest)

