import Bow from "./Bow.js";

describe("Bow tests", () => {
  test("Bow constructor sets properties correctly", () => {
    const bow = new Bow();
    expect(bow.name).toBe("Лук");
    expect(bow.attack).toBe(10);
    expect(bow.durability).toBe(200);
    expect(bow.initDurability).toBe(200);
    expect(bow.range).toBe(3);
  });

  test("takeDamage reduces durability but not below 0", () => {
    const bow = new Bow();
    bow.takeDamage(50);
    expect(bow.durability).toBe(150);
    bow.takeDamage(9999);
    expect(bow.durability).toBe(0);
  });

  test("getDamage returns 0 if the weapon is broken", () => {
    const bow = new Bow();
    bow.takeDamage(200);
    expect(bow.getDamage()).toBe(0);
  });

  test("getDamage returns full attack if durability >= 30% of initDurability", () => {
    const bow = new Bow();
    bow.takeDamage(50);
    expect(bow.getDamage()).toBe(10);
  });

  test("getDamage returns half attack if durability < 30% but > 0", () => {
    const bow = new Bow();
    bow.takeDamage(150);
    expect(bow.getDamage()).toBe(5);
  });

  test("isBroken returns false until durability is 0, then true", () => {
    const bow = new Bow();
    expect(bow.isBroken()).toBe(false);
    bow.takeDamage(200);
    expect(bow.isBroken()).toBe(true);
  });
});
