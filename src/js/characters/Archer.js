import Player from "./Player.js";
import Bow from "../weapons/Bow.js";

export default class Archer extends Player {
  constructor(position, name) {
    super(position, name);
    this.life = 80;
    this.magic = 35;
    this.attack = 5;
    this.agility = 10;
    this.description = 'Лучник';
    this.weapon = new Bow();
  }
  getDamage(distance) {
    if (distance > this.weapon.range) {
      return 0;
    }
    let weaponDamage = this.weapon.getDamage();
    return (
      ((this.attack + weaponDamage) * this.getLuck() * distance) /
      this.weapon.range
    );
  }
}
