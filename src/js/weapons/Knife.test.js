import Knife from "./Knife.js";

describe("Knife tests", () => {
  test("Knife constructor sets properties correctly", () => {
    const knife = new Knife();
    expect(knife.name).toBe("Нож");
    expect(knife.attack).toBe(5);
    expect(knife.durability).toBe(300);
    expect(knife.initDurability).toBe(300);
    expect(knife.range).toBe(1);
  });

  test("takeDamage reduces durability but not below 0", () => {
    const knife = new Knife();
    knife.takeDamage(50);
    expect(knife.durability).toBe(250);
    knife.takeDamage(9999);
    expect(knife.durability).toBe(0);
  });

  test("getDamage returns 0 if the weapon is broken", () => {
    const knife = new Knife();
    knife.takeDamage(300);
    expect(knife.getDamage()).toBe(0);
  });

  test("getDamage returns full attack if durability >= 30% of initDurability", () => {
    const knife = new Knife();
    knife.takeDamage(50);
    expect(knife.getDamage()).toBe(5);
  });

  test("getDamage returns half attack if durability < 30% but > 0", () => {
    const knife = new Knife();
    knife.takeDamage(250);
    expect(knife.getDamage()).toBe(2.5);
  });

  test("isBroken returns false until durability is 0, then true", () => {
    const knife = new Knife();
    expect(knife.isBroken()).toBe(false);
    knife.takeDamage(300);
    expect(knife.isBroken()).toBe(true);
  });
});
