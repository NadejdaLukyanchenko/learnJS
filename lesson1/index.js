class Game {
    constructor(round, robot) {
        this.round = 0;
        this.robot1 = new Robot('Tulen');
        this.robot2 = new Robot('Pingvin');
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
            this.robot2.getUron(this.robot2.doUron())
            if (!this.robot2.aLife()) {
                console.log('Tulen WIN!!!!')
                return false
            }
        }
        return true
    }
}

class Robot {
    constructor(name) {
        this.hp = 100;
        this.uron = 50;
        this.name = '';
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

const game = new Game(); 
game.startGame()