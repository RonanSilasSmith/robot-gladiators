var playerName = window.prompt("What is you characters name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "roborto";
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function() {
    window.alert("welcome to Robot Gladiators");

    enemyHealth = enemyHealth - playerAttack;

    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health."
    )

if (enemyHealth  <= 0){
    window.alert(enemyName + " has died!")
}else {
    window.alert(enemyName + "still has " + enemyHealth + " health left")
}


    playerHealth = playerHealth - enemyAttack;

    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health."
    )



}

fight();