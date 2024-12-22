import Warrior from "./Warrior.js";
import Axe from "../weapons/Axe.js";

export default class Dwarf extends Warrior {
  constructor(position, name) {
    super(position, name);
    this.life = 130;
    this.attack = 15;
    this.luck = 20;
    this.description = 'Гном';
    this.weapon = new Axe();
    this.timesAttacked = 0;
  }
  takeDamage(damage) {
    this.timesAttacked++;
    if (this.timesAttacked % 6 === 0 && this.getLuck() > 0.5) {
      super.takeDamage(damage / 2);
    } else {
      super.takeDamage(damage);
    }
  }
}

