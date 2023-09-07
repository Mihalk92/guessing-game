class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.carrent = 0;
    }

    guess() {
        this.carrent = Math.ceil((this.max - this.min) / 2 + this.min)
        return this.carrent;
    }

    lower() {
        this.max = this.carrent
    }

    greater() {
        this.min = this.carrent
    }
}

module.exports = GuessingGame;
