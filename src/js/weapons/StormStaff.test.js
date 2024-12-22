import StormStaff from "./StormStaff.js";

describe("StormStaff tests", () => {
  test("StormStaff constructor sets properties correctly", () => {
    const stormStaff = new StormStaff();
    expect(stormStaff.name).toBe("Посох Бури");
    expect(stormStaff.attack).toBe(10);
    expect(stormStaff.durability).toBe(300);
    expect(stormStaff.initDurability).toBe(300);
    expect(stormStaff.range).toBe(3);
  });

  test("takeDamage reduces durability but not below 0", () => {
    const stormStaff = new StormStaff();
    stormStaff.takeDamage(50);
    expect(stormStaff.durability).toBe(250);
    stormStaff.takeDamage(9999);
    expect(stormStaff.durability).toBe(0);
  });

  test("getDamage returns 0 if the weapon is broken", () => {
    const stormStaff = new StormStaff();
    stormStaff.takeDamage(300);
    expect(stormStaff.getDamage()).toBe(0);
  });

  test("getDamage returns full attack if durability >= 30% of initDurability", () => {
    const stormStaff = new StormStaff();
    stormStaff.takeDamage(50);
    expect(stormStaff.getDamage()).toBe(10);
  });

  test("getDamage returns half attack if durability < 30% but > 0", () => {
    const stormStaff = new StormStaff();
    stormStaff.takeDamage(250);
    expect(stormStaff.getDamage()).toBe(5);
  });

  test("isBroken returns false until durability is 0, then true", () => {
    const stormStaff = new StormStaff();
    expect(stormStaff.isBroken()).toBe(false);
    stormStaff.takeDamage(300);
    expect(stormStaff.isBroken()).toBe(true);
  });
});
