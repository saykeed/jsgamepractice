

let GameManager = {

    setGameStart: function (fighterType) {
        this.resetPlayer(fighterType);
        this.setPreFight(fighterType);
    },
    resetPlayer: function (fighterType) {
        switch (fighterType) {
            case "Warrior":
                fighter = new PlayerStats(fighterType, 200, 0, 200, 100, 50);
                break;
            case "Rouge":
                fighter = new PlayerStats(fighterType, 100, 0, 100, 150, 200);
                break;
            case "Mage":
                fighter = new PlayerStats(fighterType, 80, 0, 50, 200, 50);
                break;
            case "Hunter":
                fighter = new PlayerStats(fighterType, 200, 0, 50, 200, 100);
                break;
        }

        let getInterface = document.querySelector("#interface");

        getInterface.innerHTML = '<img src="images/' + fighterType + '.jpg" class="fighter_avatar"><div class="fighter_dashboard"><h3>' + fighterType + '</h3><p>Health: ' + fighter.health + '</p><p>Mana: ' + fighter.mana + '</p><p>Strength: ' + fighter.strength + '</p><p>Agility: ' + fighter.agility + '</p><p>Speed: ' + fighter.speed + '</p></div>';

    },
    setPreFight: function (fighterType) {
        let getHeader = document.querySelector("#header");
        let getAction = document.querySelector("#action");
        let getArena = document.querySelector("#arena");

        getHeader.innerHTML = '<h3>' + fighterType + ' is ready to fight</h3><p>Click the button below to continue</p>';
        getAction.innerHTML = '<button class="btn" id="pro_button" onclick="GameManager.setFight()">Select an opponent</button>';

    },
    setFight: function () {
        
        let getHeader = document.querySelector("#header");
        let getAction = document.querySelector("#action");
        let getEnemy = document.querySelector("#enemy");

        //create enemy
        let enemy0 = new Oppo("Goblin", 100, 0, 50, 100, 100);
        let enemy1 = new Oppo("Troll", 200, 0, 150, 80, 150);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));

        switch (chooseRandomEnemy) {
            case 0:
                opponent = enemy0;
                break;
            case 1:
                opponent = enemy1;
                break;
        }
        
        getHeader.innerHTML = '<h3>Show the Enemy what you got!!</h3>';
        getAction.innerHTML = '<button class="btn" id="pro_button" onclick="">Attack</button>';
        getEnemy.innerHTML = '<img src="images/' + opponent.oppoType + '.jpg" class="opponent_avatar"><div class="fighter_dashboard"><h3>' + opponent.oppoType + '</h3><p>Health: ' + opponent.health + '</p><p>Mana: ' + opponent.mana + '</p><p>Strength: ' + opponent.strength + '</p><p>Agility: ' + opponent.agility + '</p><p>Speed: ' + opponent.speed + '</p></div>';

    }

}


/*

setFight: function () {
        let getHeader = document.querySelector("#header");
        let getAction = document.querySelector("#action");
        let getEnemy = document.querySelector("#enemy");

        //create enemy
        let enemy00 = new Oppo("Goblin", 100, 0, 50, 100, 100);
        let enemy01 = new Oppo("Troll", 200, 0, 150, 80, 150);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        console.log(chooseRandomEnemy);



         switch (chooseRandomEnemy) {
            case 0:
                let opponent = enemy0;
                break;
            case 1:
                let opponent = enemy1;
                break;
            
        }

        getHeader.innerHTML = '<p>Show the Enemy what you got!!</p>';

    }

*/
