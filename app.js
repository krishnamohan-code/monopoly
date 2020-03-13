
var player1_Button=document.getElementById("player-1");
player1_Button.addEventListener("click",rollDice_1);
var player1 =["ProGrad",0,1000];
var player2=["FacePrep",0,1000];
function rollDice_1(){
    let position =Math.floor(Math.random()*6)+1;
    console.log("Player one rolls",position);
    changePosition_1(player1[1],position);
}
function rolldice_2(){
    let position=Math.floor(Math.random()*6)+1;
    console.log("player-2 roll",position);
    changePosition_2(player2[2],position);
}
function changePosition_1(old,currentPosition){
    var newPosition=old+currentPosition;
    player1[1]=newPosition;
    console.log(player1[1]);
    updateMoney_1(player1[1]);
}
function changePosition_2(old,currentPosition){
    var newPosition=old+currentPosition;
    player2[1]=newPosition;
    console.log(player2[1]);
    updateMoney_2(player2[1]);
}


function updateMoney_1(p1){
    var updateMoney=0;
    if(p1<board.length)
    updateMoney=player1[2]-board[p1-1];
    else{
        p1%=15;
        updateMoney=updateMoney=player1[2]-board[p1-1];
    }
    console.log(updateMoney);
    
}
function updateMoney_2(p2){
    var updateMoney=0;
    if(p2<board.length)
    updateMoney=player2[2]-board[p2-1];
    else{
        p2%=15;
        updateMoney=updateMoney=player2[2]-board[p2-1];
    }
    console.log(updateMoney);
    
}