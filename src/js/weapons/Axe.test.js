import Axe from "./Axe.js";

describe("Axe tests", () => {
  test("Axe constructor sets properties correctly", () => {
    const axe = new Axe();
    expect(axe.name).toBe("Секира");
    expect(axe.attack).toBe(27);
    expect(axe.durability).toBe(800);
    expect(axe.initDurability).toBe(800);
    expect(axe.range).toBe(1);
  });

  test("getDamage should return 27 if not broken", () => {
    const axe = new Axe();
    expect(axe.getDamage()).toBe(27);
  });

  test("takeDamage should reduce durability but not below 0", () => {
    const axe = new Axe();
    axe.takeDamage(100);
    expect(axe.durability).toBe(700);
    axe.takeDamage(9999);
    expect(axe.durability).toBe(0);
  });

  test("isBroken returns true when durability is 0", () => {
    const axe = new Axe();
    axe.takeDamage(800);
    expect(axe.isBroken()).toBe(true);
  });
});
