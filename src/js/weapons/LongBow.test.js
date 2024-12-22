import LongBow from "./LongBow.js";

describe("LongBow tests", () => {
  test("LongBow constructor sets properties correctly", () => {
    const longBow = new LongBow();
    expect(longBow.name).toBe("Длинный лук");
    expect(longBow.attack).toBe(15);
    expect(longBow.range).toBe(4);
    expect(longBow.durability).toBe(200);
    expect(longBow.initDurability).toBe(200);
  });

  test("takeDamage reduces durability but not below 0", () => {
    const longBow = new LongBow();
    longBow.takeDamage(50);
    expect(longBow.durability).toBe(150);
    longBow.takeDamage(9999);
    expect(longBow.durability).toBe(0);
  });

  test("getDamage returns 0 if the weapon is broken", () => {
    const longBow = new LongBow();
    longBow.takeDamage(200);
    expect(longBow.getDamage()).toBe(0);
  });

  test("getDamage returns full attack if durability >= 30% of initDurability", () => {
    const longBow = new LongBow();
    longBow.takeDamage(50);
    expect(longBow.getDamage()).toBe(15);
  });

  test("getDamage returns half attack if durability < 30% but > 0", () => {
    const longBow = new LongBow();
    longBow.takeDamage(180);
    expect(longBow.getDamage()).toBe(7.5);
  });

  test("isBroken returns false until durability is 0, then true", () => {
    const longBow = new LongBow();
    expect(longBow.isBroken()).toBe(false);
    longBow.takeDamage(200);
    expect(longBow.isBroken()).toBe(true);
  });
});
