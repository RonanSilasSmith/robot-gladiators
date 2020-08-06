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


var startGame = function(){
    //reset stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;


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
    //play again
    endGame();
}

var endGame = function(){
    if (playerHealth > 0){
        window.alert("Great job, you've survived the game! You now have a score");
    }
    else{
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm){
        startGame();
    }else{
        window.alert("Thanks for playing robot gladiators! come back soon!");
    }
}




startGame();