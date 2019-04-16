// = nastavuješ
// == ptáš je to to samé?
// ...
// var ondra = "Borec" // ondra je borec
// ondra == "Borec"  je ondra borec?


$(document).ready(function(){

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

        $("#start-music").get(0).play();
    });

    setInterval(function(){
            healPc(5);
            damageToPlayer(5);
    }, 500);

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
  
});

// vykreslime hrace v html
// pridame k nim jmeno a HP  přes javascript
// jak zjistit jaka klaves byla zmačnkutá
// => hra