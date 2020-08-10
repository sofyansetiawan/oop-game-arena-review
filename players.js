class Player {
    constructor(name, type, attack, life){
        this._name = name;
        this._type = type;
        this._attack = attack;
        this._life = life;
        this._isDead = false;
    }

    get name(){
        return this._name;
    }

    get type(){
        return this._type;
    }

    get attack(){
        return this._attack;
    }

    get life(){
        return this._life;
    }

    get isDead(){
        return this._isDead;
    }

    set decreaseLife(attack){
        this._life -= attack;
    }
    
    set life(value){
        this._life = value;
    }

    set isDead(value){
        this._isDead = value;
    }

    healing(){
        this._life += 10;
    }

    greeting(){
        console.log(`I'm a ${this._type}..`);
    }
}

class Soldier extends Player{
    constructor(name){
        super(name, "soldier", 100, 600)
    }

    healing(){
        this._life += 20;
    }

    greeting(){
        super.greeting();
        console.log(`I wanna crush you..`);
    }
}

class Archer extends Player{
    constructor(name){
        super(name, "archer", 80, 800)
    }

    healing(){
        this._life += 30;
    }

    greeting(){
        super.greeting();
        console.log(`I wanna shoot you..`);
    }
}

class Giant extends Player{
    constructor(name){
        super(name, "giant", 200, 1000)
    }

    healing(){
        this._life += 40;
    }

    greeting(){
        super.greeting();
        console.log(`I wanna eat you..`);
    }
}

class Enemy extends Player{ // NPC
    constructor(name){
        super(name, "enemy", 20, 100)
    }

    greeting(){
        super.greeting();
        console.log(`I wanna destroy you all..`);
    }
}


module.exports = { Soldier, Archer, Giant, Enemy }