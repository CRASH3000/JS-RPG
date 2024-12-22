import Player from "./Player.js";
import Staff from "../weapons/Staff.js";

export default class Mage extends Player {
  constructor(position, name) {
    super(position, name);
    this.life = 70;
    this.magic = 100;
    this.attack = 5;
    this.agility = 8;
    this.description = 'Маг';
    this.weapon = new Staff();
  }
  takeDamage(damage) {
    if (this.magic > 50) {
      let halfDamage = damage / 2;
      super.takeDamage(halfDamage);
      this.magic -= 12;
      if (this.magic < 0) {
        this.magic = 0;
      }
    } else {
      super.takeDamage(damage);
    }
  }
}
