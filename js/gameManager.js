

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

        getHeader.innerHTML = '<h3>' + fighterType + ' is ready to fight</h3><p>Proceed to Select an opponent</p>';
        getAction.innerHTML = '<button class="btn" id="pro_button" onclick="GameManager.setFight()">Select an opponent</button>'

    },
    setFight: function () {
        let getHeader = document.querySelector("#header");
        let getAction = document.querySelector("#action");
        let getEnemy = document.querySelector("#enemy");

        //create enemy

        

    }

}



