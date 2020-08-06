var randomNumber = function(min, max){
    var value = Math.floor(Math.random()*(max-min + 1) + min);
    return value;
}

var getPlayerName=function(){
    

    do{
        name=prompt("What is your robots name?")
    }while(name === "" || name === null);

    console.log("Your robot's name is " + name);
    return name;
};



var playerInfo ={
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,

    reset: function(){
        this.health= 100;
        this.money= 10;
        this.attack = 10;
    },
    refillHealth: function(){
        if(playerInfo.money >= 7){
            window.alert("Refill health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else{
            window.alert("not enough money");
        }

    },
    upgradeAttack: function(){
        if(playerInfo.money >= 7){
            window.alert("Upgrading attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else{
            
            window.alert("not enough money");
        }

    }
}


var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10,14),
        shield: {
            type: "wood",
            strength: 10,
        }
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,14),
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14),
    }
]



for(var i = 0; i < enemyInfo.length; i++){
    console.log(enemyInfo[i]);
    console.log(i);
    console.log(enemyInfo[i] + " is at "+ i + " index")
};


var test = function(){
    var response = prompt("would you like to FIGHT or SKIP this battle?");
    if (response === "" || response === null){
        window.alert("Provide a valid answer");
        test();
    }
    return response;
}

var fightOrSkip = function(promptFight){
    promptFight = promptFight.toLocaleLowerCase();
    if (promptFight === "skip"){

        var confirmSkip = window.confirm("are you sure you'd like to quit?");

        if(confirmSkip){
            window.alert(playerInfo.name + " has chosen to skip the fight. Goodbye!");
            playerInfo.money = Math.max(0, playerInfo.money-10);
            console.log("playerMoney", playerInfo.money);
            return true;
        }
        return false;
    }
}


var fight = function(enemy) {
    
    var isPlayerTurn = true;

    if(Math.random() > 0.5){
        isPlayerTurn = false;
    }

    while(enemy.health > 0 && playerInfo.health > 0){
        
        if(isPlayerTurn){
                var promptFight = test();
                if(fightOrSkip(promptFight)){
                    break;
                }
            


        
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

            enemy.health = Math.max(0, enemy.health-damage);

            console.log(
                playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health."
            )
            if (enemy.health  <= 0){
                window.alert(enemy.name + " has died!");
                playerInfo.money += 20;
                break;
            }else {
                window.alert(enemy.name + "still has " + enemy.health + " health left");
            }

        }else{
            var damage = randomNumber(enemy.attack - 3, enemy.attack);

            playerInfo.health = Math.max(0, playerInfo.health-damage);
    
            console.log(
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health."
            )
    
            if(playerInfo.health <= 0){
                window.alert(playerInfo.name + " has died!");
                break;
            }
            else{
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");    
            }
            
        }

        isPlayerTurn = !isPlayerTurn;
        }
       


};




var startGame = function(){
    //reset stats
    playerInfo.reset();

    console.log(enemyInfo.length)
    for(var i = 0; i < enemyInfo.length; i++){
        
        if(playerInfo.health > 0){
            window.alert("welcome to Robot Gladiators! Round " + (i+1) );


            var pickedEnemyObject = enemyInfo[i];
            
            pickedEnemyObject.health = randomNumber(40,60);

            fight(pickedEnemyObject);

            if(i < enemyInfo.length-1 && playerInfo.health > 0){

                var storeConfirm = window.confirm("The fight is over, visit store before the next battle?")

                if (storeConfirm){
                    shop();
                }
            }
        }else{
            window.alert("you have lost your robot in battle! Game over!");
        }
    }
    //play again
    endGame();
};

var endGame = function(){
    if (playerInfo.health > 0){
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
};

var shop = function(){
    console.log("Entered the shop");

    var shopOptionPrompt = window.prompt(
        "Would you like to (1)REFILL your health, (2)UPGRADE your attack, or (3)LEAVE the shop? Please enter REFILL, UPGRADE, or LEAVE."
    );

    shopOptionPrompt = parseInt(shopOptionPrompt);

    switch (shopOptionPrompt){
        case 1:
            playerInfo.refillHealth();
       
        break;
        case 2:
            playerInfo.upgradeAttack;

        break;

        case 3:
        window.alert("Leaving the store");
        break;

        default:
        window.alert("You did not pick a valid option, try again.");
        shop();
        break;

    }
};



startGame();