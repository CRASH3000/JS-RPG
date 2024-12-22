import Sword from "./Sword.js";

describe("Sword tests", () => {
  test("Sword constructor sets properties correctly", () => {
    const sword = new Sword();
    expect(sword.name).toBe("Меч");
    expect(sword.attack).toBe(25);
    expect(sword.durability).toBe(500);
    expect(sword.initDurability).toBe(500);
    expect(sword.range).toBe(1);
  });

  test("takeDamage reduces durability but not below 0", () => {
    const sword = new Sword();
    sword.takeDamage(100);
    expect(sword.durability).toBe(400);
    sword.takeDamage(9999);
    expect(sword.durability).toBe(0);
  });

  test("getDamage returns 0 if the weapon is broken", () => {
    const sword = new Sword();
    sword.takeDamage(500);
    expect(sword.getDamage()).toBe(0);
  });

  test("getDamage returns full attack if durability >= 30% of initDurability", () => {
    const sword = new Sword();
    sword.takeDamage(100);
    expect(sword.getDamage()).toBe(25);
  });

  test("getDamage returns half attack if durability < 30% but > 0", () => {
    const sword = new Sword();
    sword.takeDamage(400);
    expect(sword.getDamage()).toBe(12.5);
  });

  test("isBroken returns false until durability is 0, then true", () => {
    const sword = new Sword();
    expect(sword.isBroken()).toBe(false);
    sword.takeDamage(500);
    expect(sword.isBroken()).toBe(true);
  });
});
