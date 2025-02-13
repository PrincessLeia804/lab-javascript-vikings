// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };

    attack() {
        return this.strength;
    };

    receiveDamage(damage) {
        this.health -= damage;
    };

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    };

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    };

    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    };

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    };
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {

        let randomVikingPick = Math.floor(Math.random() * this.saxonArmy.length);
        let randomSaxonPick = Math.floor(Math.random() * this.vikingArmy.length);

        let randomViking = this.vikingArmy.at(randomVikingPick);
        let randomSaxon = this.saxonArmy.at(randomSaxonPick);

        const fightResult = randomSaxon.receiveDamage(randomViking.strength);

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonPick, 1);
        }
        return fightResult;
    }

    saxonAttack() {

        let randomSaxonPick = Math.floor(Math.random() * this.vikingArmy.length);
        let randomVikingPick = Math.floor(Math.random() * this.saxonArmy.length);

        let randomSaxon = this.saxonArmy.at(randomSaxonPick);
        let randomViking = this.vikingArmy.at(randomVikingPick);

        const fightResult = randomViking.receiveDamage(randomSaxon.strength);

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingPick, 1);
        }
        return fightResult;
    }


    generalAttack(attackingClan) {

        let attacker = this.saxonArmy
        let victim = this.vikingArmy
        if(attackingClan === "Viking") {
           attacker = this.vikingArmy
           victim = this.saxonArmy
        }


        let attackerPick = Math.floor(Math.random() * attacker.length);
        let victimPick = Math.floor(Math.random() * victim.length);

        let randomAttacker = attacker.at(attackerPick);
        let randomVictim = victim.at(victimPick);

        const fightResult = randomVictim.receiveDamage(randomAttacker.strength);

        if (randomVictim.health <= 0) {
            victim.splice(randomVictim, 1);
        }
        return fightResult;
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }

}
