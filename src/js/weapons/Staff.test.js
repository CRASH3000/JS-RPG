import Staff from "./Staff.js";

describe("Staff tests", () => {
  test("Staff constructor sets properties correctly", () => {
    const staff = new Staff();
    expect(staff.name).toBe("Посох");
    expect(staff.attack).toBe(8);
    expect(staff.durability).toBe(300);
    expect(staff.initDurability).toBe(300);
    expect(staff.range).toBe(2);
  });

  test("takeDamage reduces durability but not below 0", () => {
    const staff = new Staff();
    staff.takeDamage(50);
    expect(staff.durability).toBe(250);
    staff.takeDamage(9999);
    expect(staff.durability).toBe(0);
  });

  test("getDamage returns 0 if the weapon is broken", () => {
    const staff = new Staff();
    staff.takeDamage(300);
    expect(staff.getDamage()).toBe(0);
  });

  test("getDamage returns full attack if durability >= 30% of initDurability", () => {
    const staff = new Staff();
    staff.takeDamage(50);
    expect(staff.getDamage()).toBe(8);
  });

  test("getDamage returns half attack if durability < 30% but > 0", () => {
    const staff = new Staff();
    staff.takeDamage(250);
    expect(staff.getDamage()).toBe(4);
  });

  test("isBroken returns false until durability is 0, then true", () => {
    const staff = new Staff();
    expect(staff.isBroken()).toBe(false);
    staff.takeDamage(300);
    expect(staff.isBroken()).toBe(true);
  });
});
