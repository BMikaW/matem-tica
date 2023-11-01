player1_name = localStorage.getItem("play1");
player2_name = localStorage.getItem("play2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player1_name;
document.getElementById("player_answer").innerHTML = "Tuerno de Resposta - " + player2_name;

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    
question_number = "<h4>"+number1+" x "+nunber2+"</h4>"
input_box = "<br> Resposta: <input type='text' id='inpt_check_box'>";
check_button ="<br><br> <button class='btn btn-info' onclick='check()'>Checara</button>";
 
row = question_number+input_box_+check_button;

document.getElementById("output").innerHTML=row;

document.getElementById("numero1").value ="";
document.getElementById("numero2").value ="";
}