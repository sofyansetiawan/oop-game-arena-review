const { Enemy } = require("./players");

class Arena {
    constructor(type, max_player, max_enemy){
        this._type = type;
        this._max_player = max_player;
        this._max_enemy = max_enemy;
        this._players = [];
        this._enemies = [];
    }

    addPlayer(newPlayer){ // aggregation
        if(this._players.length < this._max_player){
            this._players.push(newPlayer);
        }
        else{
            console.log("Gak bisa nambah player lagi..")
        }
        return this;
    }

    createEnemy(number){ // composition
        if(number <= this._max_enemy){
            for(let i = 0; i < number; i++){
                this._enemies.push(new Enemy(`Enemy${i+1}`));
            }
        }
        else{
            console.log("Jumlah enemy melebihi kapasitas enemies");
        }
        return this;
    }

    playersAttack(){
        if(this._players.length > 0 && this._enemies.length > 0){
            for(let i = 0; i < this._players.length; i++){
                for(let j = 0; j < this._enemies.length; j++){
                    this._enemies[j].decreaseLife = this._players[i].attack;
                    if(this._enemies[j].life <= 0){
                        this._enemies[j].life = 0;
                        this._enemies[j].isDead = true;
                    }
                }
            }
        }
        return this;
    }
}

class ForestArena extends Arena{
    constructor(){
        super("Forest", 8, 16);
    }
} 

class DesertArena extends Arena{
    constructor(){
        super("Desert", 6, 12);
    }
} 

class CastileArena extends Arena{
    constructor(){
        super("Castile", 5, 10);
    }
} 

module.exports = { ForestArena, DesertArena, CastileArena }