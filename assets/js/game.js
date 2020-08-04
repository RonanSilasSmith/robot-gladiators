var playerName = window.prompt("What is you characters name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


console.log(playerName, playerAttack, playerHealth);

var enemyName = "roborto";
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function() {
    window.alert("welcome to Robot Gladiators");

    var promptFight = window.prompt("would you like to FIGHT or SKIP this battle?");

    if (promptFight === "fight" || promptFight === "FIGHT"){


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

        if(playerHealth <= 0){
            window.alert(playerName + " has died!");
        }
        else{
            window.alert(playerName + " still has " + playerHealth + " health left.");    
        }
    }else if (promptFight === "skip" || promptFight === "SKIP"){
        var confirmSkip = window.confirm("are you sure you'd like to quit?");

        if(confirmSkip){
            window.alert(playerName + " has chosen to skip the fight. Goodbye!")
            playerMoney -= 2;
        }else{
            fight();
        }
    }else{
        window.alert("pick a valid option next time.")
    }



}

fight();