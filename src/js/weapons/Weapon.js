export default class Weapon {
  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.initDurability = durability;
    this.range = range;
  }
  takeDamage(damage) {
    let newDurability = this.durability - damage;
    this.durability = newDurability < 0 ? 0 : newDurability;
  }
  getDamage() {
    if (this.durability <= 0) {
      return 0;
    }
    if (this.durability >= this.initDurability * 0.3) {
      return this.attack;
    }
    return this.attack / 2;
  }
  isBroken() {
    return this.durability === 0;
  }
}
