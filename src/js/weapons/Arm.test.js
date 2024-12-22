import Arm from './Arm.js';

describe('Arm tests', () => {
  test('Arm constructor sets properties correctly', () => {
    const arm = new Arm();
    expect(arm.name).toBe('Рука');
    expect(arm.attack).toBe(1);
    expect(arm.durability).toBe(Infinity);
    expect(arm.initDurability).toBe(Infinity);
    expect(arm.range).toBe(1);
  });

  test('getDamage should return 1 if not broken', () => {
    const arm = new Arm();
    expect(arm.getDamage()).toBe(1);
  });

  test('takeDamage should not affect durability since it is Infinity', () => {
    const arm = new Arm();
    arm.takeDamage(100);
    expect(arm.durability).toBe(Infinity);
  });

  test('isBroken should return false', () => {
    const arm = new Arm();
    expect(arm.isBroken()).toBe(false);
  });
});
