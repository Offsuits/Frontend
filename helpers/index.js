

class LogicHelpers {

  constructor(bb, dealer, playerNum) {
    this.bb = bb;
    this.dealer = dealer;
    this.playerSeats = playerSeats;
  }

  minBetRaise(attemptedBet, lastBet) {
    return lastBet ? attemptedBet >= lastBet * 2 : attemptedBet >= this.bb;
  }

  nextDealer() {
    while(!this.playerSeats[this.dealer]) {
      if (this.dealer + 1 === this.playerSeats.length) {
        this.dealer = 0;
      } else {
        this.dealer++;
      }
    }

    return this.dealer;
  }



}



export default LogicHelpers;