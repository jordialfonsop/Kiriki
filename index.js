var states = ["Rolled", "Covered", "Cleared", "Start", "Rolling", "End"];
var currentstate = states[3]; 
var randomNumber1, randomNumber2;
var text, tutotext;
var btn1text, btn2text;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function chooseImage(randomNumber){
    var source = "images/dice1.png";

    if (randomNumber == 2){
        source = "images/dice2.png";
    }else if (randomNumber == 3){
        source = "images/dice3.png";
    }else if (randomNumber == 4){
        source = "images/dice4.png";
    }else if (randomNumber == 5){
        source = "images/dice5.png";
    }else if (randomNumber == 6){
        source = "images/dice6.png";
    }

    return source;
}

function rollDice(){
    randomNumber1 = getRandomInt(1,6)
    source1 = chooseImage(randomNumber1);
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", source1);


    randomNumber2 = getRandomInt(1,6)
    source2 = chooseImage(randomNumber2);
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", source2);
}

function rollState(){
    if ((randomNumber1 == 1 && randomNumber2 == 2) || (randomNumber1 == 2 && randomNumber2 == 1)){
        text = document.querySelector("h1").innerHTML = "Kiriki! What do you want to do?";

        btn1text = document.querySelectorAll("button")[0].innerHTML = "Reveal it (1+ point for everyone)";
        document.querySelectorAll("button")[0].addEventListener("click",function (){
            currentstate = states[2];

        });

        btn2text = document.querySelectorAll("button")[1].style.visibility = 'visible';
        btn2text = document.querySelectorAll("button")[1].innerHTML = "Hide it";
        document.querySelectorAll("button")[1].addEventListener("click",function (){
            currentstate = states[1];

        });
    }else{
        text = document.querySelector("h1").innerHTML = "Are you ready?";

        btn1text = document.querySelectorAll("button")[0].innerHTML = "Yes (Hide the dices)";
        document.querySelectorAll("button")[0].addEventListener("click",function (){
            currentstate = states[1];

        });

        btn2text = document.querySelectorAll("button")[1].style.visibility = 'hidden';
    }
    
}

function coveredState(){

    source1 = "images/questionmark.png";
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", source1);

    source2 = "images/questionmark.png";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", source2);


    text = document.querySelector("h1").innerHTML = "What will you do?";

    btn1text = document.querySelectorAll("button")[0].innerHTML = "Reveal the dices";
    document.querySelectorAll("button")[0].addEventListener("click",function (){
        currentstate = states[2];

    });

    btn2text = document.querySelectorAll("button")[1].style.visibility = 'visible';
    btn2text = document.querySelectorAll("button")[1].innerHTML = "Roll";
    document.querySelectorAll("button")[1].addEventListener("click",function (){
        currentstate = states[4];

    });
    
}

function clearedState(){

    source1 = chooseImage(randomNumber1);
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", source1);

    source2 = chooseImage(randomNumber2);
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", source2);

    if ((randomNumber1 == 1 && randomNumber2 == 2) || (randomNumber1 == 2 && randomNumber2 == 1)){
        text = document.querySelector("h1").innerHTML = "Kiriki!";
        btn1text = document.querySelectorAll("button")[0].innerHTML = "Play again";
        document.querySelectorAll("button")[0].addEventListener("click",function (){
            currentstate = states[4];

        });

        btn2text = document.querySelectorAll("button")[1].style.visibility = 'visible';
        btn2text = document.querySelectorAll("button")[1].innerHTML = "Finish";
        document.querySelectorAll("button")[1].addEventListener("click",function (){
            currentstate = states[5];
        });
    }else{
        text = document.querySelector("h1").innerHTML = "Here's the result.";

        btn1text = document.querySelectorAll("button")[0].innerHTML = "Play again";
        document.querySelectorAll("button")[0].addEventListener("click",function (){
            currentstate = states[4];

        });

        btn2text = document.querySelectorAll("button")[1].style.visibility = 'visible';
        btn2text = document.querySelectorAll("button")[1].innerHTML = "Finish";
        document.querySelectorAll("button")[1].addEventListener("click",function (){
            currentstate = states[5];
        });
    }

}

function finishState(){
    
    
    var image1 = document.querySelectorAll("img")[0];
    image1.style.visibility = 'hidden';
    var image2 = document.querySelectorAll("img")[1];
    image2.style.visibility = 'hidden';

    text = document.querySelector("h1").innerHTML = "Thanks for Playing!";
    text2 = document.querySelector("h2").innerHTML = "Made by Jordi Alfonso Poza";

    btn2text = document.querySelectorAll("button")[1].style.visibility = 'hidden';
    btn1text = document.querySelectorAll("button")[0].style.visibility = 'hidden';
}

function game(){
    text = document.querySelector("h1").innerHTML = "Kiriki!";

    btn1text = document.querySelectorAll("button")[0].innerHTML = "Start";
    document.querySelectorAll("button")[0].addEventListener("click",function (){
        for(var i = 0; i < document.querySelectorAll("p").length; i++){
            tutotext = document.querySelectorAll("p")[i].innerHTML = "";
        }
        currentstate = states[4];
        setInterval(function() {
            switch (currentstate) {
            case "Rolling":
                rollDice();
                currentstate = states[0];
                break;
            case "Rolled":
                rollState();
                break;
            case "Covered":
                coveredState();
                break;
            case "Cleared":
                clearedState();
                break;
            default:
                finishState();
                break;
        }}, 100);
    });

    btn2text = document.querySelectorAll("button")[1].style.visibility = 'hidden';
}

game();








