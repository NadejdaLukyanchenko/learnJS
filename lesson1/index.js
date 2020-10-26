class Game {
    constructor([robot1,robot2]) {
        const fabric = new Robo_Fabrica();
        this.robot1 = fabric.create(robot1.type,robot1.name);
        this.robot2 = fabric.create(robot2.type,robot2.name);
        this.round = 0; 
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
        this.robot2.getUron(this.robot1.doUron());
        if (!this.robot2.aLife()) {
            console.log(`${this.robot1.name} Win!`)
            return false
        } else {
            this.robot1.getUron(this.robot2.doUron())
            if (!this.robot1.aLife()) {
                console.log(`${this.robot2.name} Win!`)
                return false
            } 
        }
        return true
    }
}

class Robot {
    constructor(name, hp, uron) {
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
        super(name, 1000, 100)
        this.armor = 20;
    }

    getUron(demage) {
        this.hp = this.hp - (demage * (1 - this.armor / 100));
    }
};

class Assault extends Robot {
    constructor(name) {
        super(name, 1000, 100)
        this.cric = 50;
    }

    doUron() {
        if (Math.random() * 100 > this.cric) {
            return this.uron
        } else {
            return this.uron * 2
        }

    }
};

class Light extends Robot {
    constructor(name) {
        super(name, 1000, 100)
        this.agility = 70;
    }

    getUron(demage) {
        if (Math.random() * 100 < this.agility) {
            this.hp = this.hp - demage
        }
    }
};

class Robo_Fabrica {    
    static type = {
        h: Heavy,
        a: Assault,
        l: Light

    }
    create(type, name) {
        const Robo = Robo_Fabrica.type[type]
        const robo = new Robo(name)
        return robo 
    }

}
const robots = [{type:'a',name:'Tulen'},
                {type:'h',name:'Pingvin'}
];
const g=new Game (robots)
g.startGame()

// const fabric = new Robo_Fabrica();
// const my_robot=fabric.create('l','Tulen')
// console.log(my_robot)