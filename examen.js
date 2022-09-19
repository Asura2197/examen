$(document).ready(function() {

    function startGame() {
      
       clearBox("uno");
       clearBox("dos");
       clearBox("tres");
       clearBox("cuatro");
       clearBox("cinco");
       clearBox("seis");
       clearBox("siete");
       clearBox("ocho");
       clearBox("nueve");
    
     
      if (Math.random() < 0.5) {
      document.turn = "X";} else {
        document.turn="O";
      }
      document.winner = null; 
      setMsg(document.turn + " inicia!");
    }
  
    function setMsg(msg) {
      var elem = document.getElementById("message");
      elem.innerText = msg;
      elem.style.color = "black";
      $(elem).removeClass("blinking");
    }
  
    function setAlr(msg) {
      var elem = document.getElementById("message");
      elem.innerText = msg;
      elem.style.color = "blue";
      $(elem).removeClass("blinking");
    }
    function blinker() {
      $('.blinking').fadeOut(500);
      $('.blinking').fadeIn(500);
    }
    setInterval(blinker, 1000);
  
    function setWarn(msg) {
      var elem = document.getElementById("message");
      elem.innerText = msg;
      elem.style.color = "red";
      $(elem).addClass("blinking");
    }
    
    function setCongs(msg) {
      var elem = document.getElementById("message");
      elem.innerText = msg;
      elem.style.color = "green";
     
    }
  
    function switchTurn() {
    
      if (ganador(document.turn)) {
        document.winner=document.turn;
        setCongs("Congratulations! " + document.turn + " is the winner!");
      
       }
     
      else if (checkForDraw()) {
        setCongs("Es un empate");
        document.winner ="D";
      }
     else 
       
      if (document.turn == 'X') {
        document.turn = "O";
        setMsg("Turno de " + document.turn);
      } else {
        document.turn = "X";
        setMsg("ITurno de " + document.turn);
      }
  
    }
  
    startGame();
  
    $("#start").click(function() {
      
      startGame();
    })
    
    $(".col-xs-4").click(function() {
     if (document.winner == "D") {setAlr ("Empate")}
      
      else
      if (document.winner != null) {setAlr(document.turn + " gano");}
      else if ($(this).html() === "") {
        $(this).html(document.turn);
        switchTurn();
      } else {
        setWarn("Ese espacio ya ha sido ocupado");
      }
    });
  
    function getBox(number) {
      return document.getElementById(number).innerText;
    }
  
    function checkRow(a, b, c, move) {
      var result = false;
      if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
      }
      return result;
    }
  
    function checkForDraw() {
    var result = false;
     if ((getBox("uno") !=="") && (getBox("dos") !=="") && (getBox("tres") !=="")  && (getBox("cuatro") !=="") && (getBox("cinco") !=="") && (getBox("seis") !=="")
    && (getBox("siete") !=="") && (getBox("ocho") !=="") && (getBox("nueve") !=="")    
        
        ) {

       
       
       result = true;
     }
      return result;
    }
    
      
      
      
    function ganador(move) {
      var result = false;
      if (checkRow("uno", "dos", "tres", move) ||
        checkRow("cuatro", "cinco", "seis",move) ||
        checkRow("siete", "ocho", "nueve", move) ||
        checkRow(" uno", "cuatro", "siete", move) ||
        checkRow("dos", "cinco", "ocho", move) ||
        checkRow("tres", "seis", "nueve", move) ||
        checkRow(" uno", "cinco", "nueve", move) ||
        checkRow("tres", "cinco", "siete", move))
  
      {
        result = true;
      }
  
      return result;
  
    }
    
    function clearBox(number) {
    document.getElementById(number).innerText=""; 
      
    }
  
  });