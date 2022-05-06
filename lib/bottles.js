import { downTo, capitalize } from './helpers';
class Bottles {
	song() {
		return this.verses(99, 0);
	}

	verses(upper, lower) {
		return downTo(upper, lower)
			.map((i) => this.verse(i))
			.join('\n');
	}

	verse(number) {
		const bottlenNumber = new BottleNumber(number);
		const nextBottleNumber = new BottleNumber(bottlenNumber.successor());
		return (
			`${capitalize(
				bottlenNumber.quantity(number)
			)} ${bottlenNumber.container()} of beer on the wall, ` +
			`${bottlenNumber.quantity()} ${bottlenNumber.container()} of beer.\n` +
			`${bottlenNumber.action()}, ` +
			`${nextBottleNumber.quantity()} ${nextBottleNumber.container()} of beer on the wall.\n`
		);
	}
}

class BottleNumber {
	constructor(number) {
		this.number = number;
	}
	container() {
		if (this.number === 1) {
			return 'bottle';
		}
		return 'bottles';
	}
	pronoun() {
		if (arguments.length !== 0) {
			throw new Error('wrong number');
		}
		if (this.number === 1) {
			return 'it';
		}
		return 'one';
	}
	quantity() {
		if (this.number === 0) {
			return 'no more';
		}
		return this.number.toString();
	}
	action() {
		if (this.number === 0) {
			return 'Go to the store and buy some more';
		}
		return `Take ${this.pronoun()} down and pass it around`;
	}
	successor() {
		if (this.number === 0) {
			return '99';
		}
		return this.number - 1;
	}
}
export { Bottles };
