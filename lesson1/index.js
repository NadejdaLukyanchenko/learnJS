class Game {
    constructor(round, robot) {
        this.round = 0;
        this.robot1 = new Robot('Tulen');
        this.robot2 = new Robot('Pingvin');
        this.robot3 = new Robot('Dog')
    }

    startGame() {
        let notEnd = false;
        do {
            this.round++;
            notEnd = this.__goRound();
        } while (notEnd)
        console.log(this.round);
    }

    __goRound() {
        this.robot1.getUron(this.robot1.doUron());
        if (!this.robot1.aLife()) {
            console.log('Pingvin WIN!!!!')
            return false
        } else {
            this.robot2.getUron(this.robot1.doUron())
            if (!this.robot2.aLife()) {
                console.log('Tulen WIN!!!!')
                return false
            }else{
                this.robot3.getUron(this.robot2.doUron())
                if (!this.robot3.aLife()) {
                    console.log('Dog WIN!!!!')
                    return false
                }
            }
        }
        return true
    }
}

class Robot {
    constructor(name,hp,uron) {
        this.hp = hp;
        this.uron = uron;
        this.name = name;
    }
    doUron() {
        return this.uron;
    }

    getUron(demage) {
        this.hp = this.hp - demage;
    }

    aLife() {
        return this.hp > 0;
    }

};

class Heavy extends Robot {
    constructor(name) {
        super(name,1000,100)
        this.armor = 20;
    }

    getUron(demage) {
        this.hp = this.hp - (demage*(1-this.armor/100));
    }
};

class Assault extends Robot {
    constructor(name) {
        super(name,1000,100)
        this.cric = 50;
    }

    doUron() {
        if(Math.random()*100>this.cric){
            return this.uron
        }else{
            return this.uron*2
        }
        
    }
};

class Light extends Robot {
    constructor(name) {
        super(name,1000,100)
        this.agility = 70;
   }

    getUron(demage) {
        if(Math.random()*100<this.agility){
            this.hp=this.hp-demage
        }
    }
};
const robo = new Light ();
robo.getUron(200)
console.log(robo)