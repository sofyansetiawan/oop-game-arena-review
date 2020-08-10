const { Soldier, Archer, Giant, Enemy } = require("./players");

const { ForestArena, DesertArena, CastileArena } = require("./arenas");
// destructuring object

const player1 = new Soldier("Sofyan");
const player2 = new Archer("Bramah");
const player3 = new Giant("Budi");
const player4 = new Enemy("Frendy");

const castile1 = new CastileArena();

castile1.addPlayer(player1).addPlayer(player2).addPlayer(player3).addPlayer(player4).createEnemy(5).playersAttack()

console.log(castile1);