function randMax(max) {
  return Math.trunc(1e9 * Math.random()) % max;
}

var reel = {
  symbols: ["♠", "♥", "♦", "♣", "☺", "★", "☾", "☀"],
  spin() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
  },
  display() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    return this.symbols[this.position];
  },
};

var slotMachine = {
  reels: [Object.create(reel), Object.create(reel), Object.create(reel)],
  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.spin();
    });
  },
  display() {
    const topRow = [];
    const midRowResult = [];
    const bottomRow = [];
    const symbols = Object.create(reel).symbols;

    this.reels.forEach((reel) => midRowResult.push(reel.display()));

    midRowResult.forEach((val) => {
      let index = symbols.indexOf(val);

      topRow.push(symbols.at(index - 1));
      if (index === symbols.length - 1) {
        bottomRow.push(symbols.at(-index + -1));
      } else {
        bottomRow.push(symbols[index + 1]);
      }
    });
    return console.log(
      `${topRow.join(" | ")}\n${midRowResult.join(" | ")}\n${bottomRow.join(
        " | "
      )}\n`
    );
  },
};

slotMachine.spin();
slotMachine.display();
// ☾ | ☀ | ★
// ☀ | ♠ | ☾
// ♠ | ♥ | ☀

slotMachine.spin();
slotMachine.display();
// ♦ | ♠ | ♣
// ♣ | ♥ | ☺
// ☺ | ♦ | ★
