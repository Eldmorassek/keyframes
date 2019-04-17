// = nastavuješ 
// == ptáš je to to samé? 
// ... 
// var ondra = "Borec" // ondra je borec 
// ondra == "Borec"  je ondra borec? 
 

$(document).ready(function(){ 
 
    $('.game-status').text('Čeká se na start');
    var startGame = false; 
 
    var playerName1 = "PC"; 
    var playerHp1 = 100;  
     
    var playerName2 = "Eldmor"; 
    var playerHp2 = 50; 
 
    function healPlayer(amount) { 
        if(startGame){ 
            if(playerHp2 < 100){ 
                playerHp2 += amount; 
            } 
            printStats(); 
        } 
    } 
 
    function damageToPc(amount) { 
        if(startGame){  
            if(playerHp1 > 0){ 
                playerHp1 -= amount; 
             
            } 
            printStats(); 
        } 
    } 
 
    function printStats(){ 
        $('.player-name-1').text(playerName1); 
        $('.player-hp-1').text(playerHp1); 
 
        $('.player-name-2').text(playerName2); 
        $('.player-hp-2').text(playerHp2); 
    } 
 
    printStats(); 
 
    $('body').on('keypress', function(event){ 
        if(event.key == "e"){ 
            healPlayer(10); 
        } 
    }); 
 
    $(document).on('click', function(event){ 
       // console.log(event.which); // 1 = leve, 2 = prave 
       if(event.which == 1){ 
           damageToPc(5); 
       }
    }); 

    $("#start-game").on('click', function(){ 
        startGame = true; 
        $('.game-status').text('Hra začala');
        $("#start-music").get(0).play(); 
    }); 
 
    var timer = setInterval(tick, 150); 

    function tick(){
        if(isEndOfTheGame()){ // skočila hra?
            clearInterval(timer); //  pokud ano, zrušíme časovač
            startGame = false;
        } 
        healPc(5); 
        damageToPlayer(5); 
    }
 
    function healPc(amount) { 
        if(startGame){ 
            if(playerHp1 < 100){ 
                playerHp1 += amount; 
            } 
            printStats(); 
        } 
    } 
 
    function damageToPlayer(amount) { 
        if(startGame){  
            if(playerHp2 > 0){ 
                playerHp2 -= amount; 
             
            } 
            printStats(); 
        } 
    } 
   
    function isEndOfTheGame() {
        if(playerHp1 == 0 || playerHp2 == 0) { // je HP hráče nebo počítač rovno 0 ?
            $('.game-status').text('Konec hry');
            return true;
        } 
        return false;
    }
    




}); 
 
// vykreslime hrace v html 
// pridame k nim jmeno a HP  přes javascript 
// jak zjistit jaka klaves byla zmačnkutá 
// => hra