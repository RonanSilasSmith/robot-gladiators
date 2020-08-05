var playerName = window.prompt("What is you characters name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


for(var i = 0; i < enemyNames.length; i++){
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at "+ i + " index")
}


var fight = function(enemyName) {
    
    while(enemyHealth > 0 && playerHealth > 0){
        
        var promptFight = window.prompt("would you like to FIGHT or SKIP this battle?");
        if (promptFight === "skip" || promptFight === "SKIP"){

            var confirmSkip = window.confirm("are you sure you'd like to quit?");

            if(confirmSkip){
                window.alert(playerName + " has chosen to skip the fight. Goodbye!")
                playerMoney -= 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

    
        enemyHealth = enemyHealth - playerAttack;

        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health."
        )
        if (enemyHealth  <= 0){
            window.alert(enemyName + " has died!")
            break;
        }else {
            window.alert(enemyName + "still has " + enemyHealth + " health left")
        }

        playerHealth = playerHealth - enemyAttack;

        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health."
        )

        if(playerHealth <= 0){
            window.alert(playerName + " has died!");
            break;
        }
        else{
            window.alert(playerName + " still has " + playerHealth + " health left.");    
        }
        
    }


    }



for(var i = 0; i < enemyNames.length; i++){
    if(playerHealth > 0){
        window.alert("welcome to Robot Gladiators! Round " + (i+1) );
        

        var pickedEnemyName = enemyNames[i];
        
        enemyHealth = 50;

        fight(pickedEnemyName);
    }else{
        window.alert("you have lost your robot in battle! Game over!");
    }
}
