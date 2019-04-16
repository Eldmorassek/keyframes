var name = "Eflyax";
var health = 100; // proměnné

function setDamage(){ // funkce
    if(health > 0) { // pokud je health větší než 0 
        health -= 10;   // dej mu dmg za 10                          
        console.log(name);
        console.log(health + " hp");  
       }
}

// dokumente, dej mi element s název "shoot" a poslouchej kliknutí
document.getElementById("shoot").addEventListener("click", function(){
    setDamage(); // při kliknutí se zavolá funkce setDamage()
});

document.getElementById("heal").addEventListener("click", function(){ // událost kliknutí na tlačítko
   if(health < 100) {
    health += 10;                                       // health = health - 10;
    console.log(name);
    console.log(health + " hp");  
   }
});

setInterval(function(){ // časovač (spouští se každých 500 milisekund)
    setDamage();
}, 500);


