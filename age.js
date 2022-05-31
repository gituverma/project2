//day calculator
function clickMe(){
    var birthYear =prompt('enter your age in years');
     var days =birthYear*365;
     var h1=document.createElement('h1');
     var textAnswer =document.createTextNode('you are '+days+' days old.');
     h1.setAttribute('id','days');
     h1.appendChild(textAnswer);
     document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
    document.getElementById('days').remove();

}
//cat generator
function generate(){
    var image = document.createElement('img');
    image.setAttribute('id','img');
    image.src = "https://media.giphy.com/media/c5wbvuaVVLWzC/giphy.gif";
    var div = document.getElementById('image');
    div.appendChild(image);
}
function remove(){
    document.getElementById('img').remove();
}

//rock,paper and scissors
function start(yourChoice){
    console.log(yourChoice);
    var humanchoice,botchoice;
    humanchoice = yourChoice.id;
    botchoice = botChoice(randomNum());
    alert(botchoice);
    result = winner(humanchoice,botchoice);
    console.log(result);


}
//random number for bot choice
function randomNum(){
    return Math.floor(Math.random() *3);
}

//bot chocie in rock , paper , scissors and
function botChoice(number){
    return ['rock','paper','scissors'][number];
}
//deciding winner and loser
function winner(yourChoice, computerChoice){
    var database={
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0}
    };
    
    var humanScore = database[yourChoice][computerChoice];
    var botScore = database[computerChoice][yourChoice];

    return [humanScore, botScore];


}