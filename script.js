"use strict";

const game = {
  team1: "Lahore Sooc",
  team2: "Karachi Sooc",
  players: [
    [
      "Azeez",
      "Ahmad",
      "Ali",
      "Akhtar",
      "Rehman",
      "Ilyas",
      "Laraib",
      "Hamza",
      "Bakhtawar",
      "Rizwan",
      "Suleman",
    ],
    [
      "Shehroz",
      "Salman",
      "Amir",
      "Nabeel",
      "Shakeel",
      "Adeel",
      "Anwar",
      "Moon",
      "Farhan",
      "Ghafore",
      "Numan",
    ],
  ],
  score: "4.0",
  scored: ["Suleman", "Ali", "Nabeel", "Shakeel"],
  date: "Nov 9th 2037",
  odds: {
    team1: 1.35,
    x: 3.25,
    team2: 6.5,
  },
};

const [player1, player2] = game.players;
console.log(player1, player2);

const [gk, ...fieldplayers] = player1;
console.log(gk, fieldplayers);

const [gk1, ...fieldplayers1] = player2;
console.log(gk1, fieldplayers1);

const allPlayers = [...player1, ...player2];
console.log(allPlayers);

const playerFinal = [...player1, "Yawar", "Rabia", "Alia"];
console.log(playerFinal);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...player) {
  console.log(player);
  console.log(`${player.length} were scored`);
};
// printGoals("Azeez", "Ahmad", "Yawar", "Ahsan");
// printGoals("Subhan", "Usman");
printGoals(...game.scored);

team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");

//////////////////// ---------- ////////////////

for (const [i, value] of game.scored.entries()) {
  console.log(`${i + 1} Goal of ${value}`);
}

const odd = Object.values(game.odds);
let avg = 0;
for (const key of odd) {
  avg += key;
}
avg /= odd.length;
console.log(avg);
