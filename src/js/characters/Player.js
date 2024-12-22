import Arm from "../weapons/Arm.js";
import Knife from "../weapons/Knife.js";

export default class Player {
  constructor(position, name) {
    this.life = 100;
    this.magic = 20;
    this.speed = 1;
    this.attack = 10;
    this.agility = 5;
    this.luck = 10;
    this.description = 'Игрок';
    this.weapon = new Arm();
    this.position = position;
    this.name = name;
    this.hitsCount = 0;
  }
  getLuck() {
    let randomValue = Math.random() * 100;
    return (randomValue + this.luck) / 100;
  }
  getDamage(distance) {
    if (distance > this.weapon.range) {
      return 0;
    }
    let weaponDamage = this.weapon.getDamage();
    return ((this.attack + weaponDamage) * this.getLuck()) / distance;
  }
  takeDamage(damage) {
    let newLife = this.life - damage;
    this.life = newLife < 0 ? 0 : newLife;
  }
  isDead() {
    return this.life === 0;
  }
  moveLeft(distance) {
    let limitedDistance = distance > this.speed ? this.speed : distance;
    if (limitedDistance < 0) {
      limitedDistance = 0;
    }
    this.position -= limitedDistance;
  }
  moveRight(distance) {
    let limitedDistance = distance > this.speed ? this.speed : distance;
    if (limitedDistance < 0) {
      limitedDistance = 0;
    }
    this.position += limitedDistance;
  }
  move(distance) {
    if (distance < 0) {
      this.moveLeft(Math.abs(distance));
    } else {
      this.moveRight(distance);
    }
  }
  isAttackBlocked() {
    return this.getLuck() > (100 - this.luck) / 100;
  }
  dodged() {
    return this.getLuck() > (100 - this.agility - this.speed * 3) / 100;
  }
  takeAttack(damage) {
    if (this.isAttackBlocked()) {
      this.weapon.takeDamage(damage);
    } else if (this.dodged()) {
      // атака не засчитывается
    } else {
      this.takeDamage(damage);
    }
  }
  checkWeapon() {
    if (!this.weapon.isBroken()) {
      return;
    }
    switch (this.description) {
      case 'Воин':
        switch (this.weapon.name) {
          case 'Меч':
            this.weapon = new Knife();
            break;
          case 'Нож':
            this.weapon = new Arm();
            break;
        }
        break;

      case 'Лучник':
        switch (this.weapon.name) {
          case 'Лук':
          case 'Длинный лук':
            this.weapon = new Knife();
            break;
          case 'Нож':
            this.weapon = new Arm();
            break;
        }
        break;

      case 'Маг':
        switch (this.weapon.name) {
          case 'Посох':
          case 'Посох Бури':
            this.weapon = new Knife();
            break;
          case 'Нож':
            this.weapon = new Arm();
            break;
        }
        break;

      case 'Гном':
        switch (this.weapon.name) {
          case 'Секира':
            this.weapon = new Knife();
            break;
          case 'Нож':
            this.weapon = new Arm();
            break;
        }
        break;

      case 'Арбалетчик':
        switch (this.weapon.name) {
          case 'Длинный лук':
            this.weapon = new Knife();
            break;
          case 'Нож':
            this.weapon = new Arm();
            break;
        }
        break;

      case 'Демиург':
        switch (this.weapon.name) {
          case 'Посох Бури':
            this.weapon = new Knife();
            break;
          case 'Нож':
            this.weapon = new Arm();
            break;
        }
        break;

      default:
        this.weapon = new Arm();
        break;
    }
  }
  tryAttack(enemy) {
    let distanceBetween = Math.abs(this.position - enemy.position);
    if (distanceBetween > 0 && distanceBetween <= this.weapon.range) {
      this.weapon.takeDamage(10 * this.getLuck());
      let damageDealt = this.getDamage(distanceBetween);
      if (this.position === enemy.position) {
        enemy.position += 1;
        enemy.takeAttack(damageDealt * 2);
      } else {
        enemy.takeAttack(damageDealt);
      }
      this.checkWeapon();
    }
  }
  chooseEnemy(players) {
    let alivePlayers = players.filter(
      (possibleEnemy) => !possibleEnemy.isDead() && possibleEnemy !== this
    );
    if (alivePlayers.length === 0) {
      return null;
    }
    let minimumLife = Math.min(
      ...alivePlayers.map((playerUnit) => playerUnit.life)
    );
    return alivePlayers.find((playerUnit) => playerUnit.life === minimumLife);
  }
  moveToEnemy(enemy) {
    if (!enemy) {
      return;
    }
    let distanceToEnemy = enemy.position - this.position;
    if (distanceToEnemy > 0) {
      this.moveRight(distanceToEnemy);
    } else {
      this.moveLeft(Math.abs(distanceToEnemy));
    }
  }
  turn(players) {
    let chosenEnemy = this.chooseEnemy(players);
    if (!chosenEnemy) {
      return;
    }
    this.moveToEnemy(chosenEnemy);
    this.tryAttack(chosenEnemy);
  }
}
