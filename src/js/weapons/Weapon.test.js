import Weapon from './Weapon';

describe('Weapon class tests', () => {
  test('Weapon constructor sets properties correctly', () => {
    const sword = new Weapon('Sword', 25, 500, 1);
    expect(sword.name).toBe('Sword');
    expect(sword.attack).toBe(25);
    expect(sword.durability).toBe(500);
    expect(sword.initDurability).toBe(500);
    expect(sword.range).toBe(1);
  });

  test('takeDamage reduces durability, but not below 0', () => {
    const sword = new Weapon('Sword', 25, 500, 1);
    sword.takeDamage(100);
    expect(sword.durability).toBe(400);

    sword.takeDamage(999);
    expect(sword.durability).toBe(0);
  });

  test('getDamage returns 0 if the weapon is broken (durability = 0)', () => {
    const sword = new Weapon('Sword', 25, 500, 1);
    sword.takeDamage(500);
    expect(sword.getDamage()).toBe(0);
  });

  test('getDamage returns full attack if durability >= 30% of initDurability', () => {
    const sword = new Weapon('Sword', 25, 500, 1);
    sword.takeDamage(100);
    expect(sword.getDamage()).toBe(25);

    sword.takeDamage(200);
    expect(sword.getDamage()).toBe(25);
  });

  test('getDamage returns half attack if durability < 30% of initDurability but > 0', () => {
    const sword = new Weapon('Sword', 25, 500, 1);
    sword.takeDamage(400);
    expect(sword.getDamage()).toBe(12.5);
  });

  test('isBroken returns true if durability = 0, otherwise false', () => {
    const sword = new Weapon('Sword', 25, 500, 1);
    expect(sword.isBroken()).toBe(false);
    
    sword.takeDamage(500);
    expect(sword.isBroken()).toBe(true);
  });
});
