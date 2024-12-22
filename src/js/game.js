import Archer from "./characters/Archer.js";
import Warrior from "./characters/Warrior.js";
import Mage from "./characters/Mage.js";
import Dwarf from "./characters/Dwarf.js";
import Crossbowman from "./characters/Crossbowman.js";
import Demourge from "./characters/Demourge.js";

export default function play(players) {
  while (
    players.filter((currentPlayer) => !currentPlayer.isDead()).length > 1
  ) {
    let alivePlayers = players.filter(
      (currentPlayer) => !currentPlayer.isDead()
    );
    for (let currentPlayer of alivePlayers) {
      if (alivePlayers.filter((survivor) => !survivor.isDead()).length <= 1) {
        break;
      }
      currentPlayer.turn(alivePlayers);
    }
  }
  return players.find((possibleWinner) => !possibleWinner.isDead()) || null;
}

