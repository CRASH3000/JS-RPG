import Player from "./Player.js";

export default class Warrior extends Player {
  constructor(position, name) {
    super(position, name);
    this.life = 120;
    this.speed = 2;
    this.attack = 10;
    this.description = 'Воин';
    this.weapon = new Sword();
  }
  takeDamage(damage) {
    if (this.life < 60 && this.getLuck() > 0.8 && this.magic > 0) {
      let newMagic = this.magic - damage;
      if (newMagic < 0) {
        this.magic = 0;
        let remainingDamage = Math.abs(newMagic);
        super.takeDamage(remainingDamage);
      } else {
        this.magic = newMagic;
      }
    } else {
      super.takeDamage(damage);
    }
  }
}
