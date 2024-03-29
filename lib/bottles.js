import { downTo, capitalize } from './helpers';
class CountdownSong {
	constructor(verseTemplate, max = 99, min = 0) {
		this.verseTemplate = verseTemplate;
		this.max = max;
		this.min = min;
	}
	song() {
		return this.verses(this.max, this.min);
	}
	verses(upper, lower) {
		return downTo(upper, lower)
			.map((i) => this.verse(i))
			.join('\n');
	}
	verse(number) {
		return this.verseTemplate.lyrics(number);
	}
}
class BottleVerse {
	constructor(bottleNumber) {
		this.bottleNumber = bottleNumber;
	}

	static lyrics(number) {
		return new BottleVerse(BottleNumber.for(number)).lyrics();
	}

	lyrics() {
		return (
			capitalize(`${this.bottleNumber}`) +
			' of beer on the wall, ' +
			`${this.bottleNumber} of beer.\n` +
			`${this.bottleNumber.action()}, ` +
			`${this.bottleNumber.successor()} of beer on the wall.\n`
		);
	}
}

class BottleNumber {
	constructor(number) {
		this.number = number;
	}

	static for(number) {
		const bottleNumberClass = BottleNumber.registry.find((candidate) =>
			candidate.canHandle(number)
		);
		return new bottleNumberClass(number);
	}
	static register(candidate) {
		BottleNumber.registry.unshift(candidate);
	}
	static canHandle(number) {
		return true;
	}
	toString() {
		return `${this.quantity()} ${this.container()}`;
	}
	container() {
		return 'bottles';
	}
	pronoun() {
		return 'one';
	}
	quantity() {
		return this.number.toString();
	}
	action() {
		return `Take ${this.pronoun()} down and pass it around`;
	}
	successor() {
		return BottleNumber.for(this.number - 1);
	}
}
BottleNumber.registry = [BottleNumber];

class BottleNumber0 extends BottleNumber {
	static canHandle(number) {
		return number === 0;
	}
	action() {
		return 'Go to the store and buy some more';
	}
	quantity() {
		return 'no more';
	}
	successor() {
		return BottleNumber.for(99);
	}
}
BottleNumber.register(BottleNumber0);

class BottleNumber1 extends BottleNumber {
	static canHandle(number) {
		return number === 1;
	}
	pronoun() {
		return 'it';
	}
	container() {
		return 'bottle';
	}
}
BottleNumber.register(BottleNumber1);

class BottleNumber6 extends BottleNumber {
	static canHandle(number) {
		return number === 6;
	}
	container() {
		return 'six-pack';
	}
	quantity() {
		return '1';
	}
}
BottleNumber.register(BottleNumber6);

class VerseFake {
	static lyrics(number) {
		return `This is verse ${number}.\n`;
	}
}
export { CountdownSong, BottleVerse, VerseFake };
