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

	container(number) {
		if (number === 1) {
			return 'bottle';
		}
		return 'bottles';
	}
	pronoun(number) {
		if (number === 1) {
			return 'it';
		}
		return 'one';
	}
	quantity(number) {
		if (number === 0) {
			return 'no more';
		}
		return number.toString();
	}
	action(number) {
		if (number === 0) {
			return 'Go to the store and buy some more';
		}
		return `Take ${this.pronoun(number)} down and pass it around`;
	}
	successor(number) {
		if (number === 0) {
			return '99';
		}
		return number - 1;
	}
	verse(number) {
		return (
			`${capitalize(this.quantity(number))} ${this.container(
				number
			)} of beer on the wall, ` +
			`${this.quantity(number)} ${this.container(number)} of beer.\n` +
			`${this.action(number)}, ` +
			`${this.quantity(this.successor(number))} ${this.container(
				this.successor(number)
			)} of beer on the wall.\n`
		);
	}
}
export { Bottles };
