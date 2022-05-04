import { downTo, capitalize } from './helpers';
class Bottles {
	song() {
		return this.verses(99, 0);
	}
	verses(max, min) {
		const arr = downTo(max, min);
		return arr.map((v) => this.verse(v)).join('\n');
	}
	verse(n) {
		return (
			`${n === 0 ? capitalize('no more') : n} bottle${
				n === 1 ? '' : 's'
			} of beer on the wall, ` +
			`${n === 0 ? 'no more' : n} bottle${n === 1 ? '' : 's'} of beer.\n` +
			`${
				n > 0
					? `Take ${n === 1 ? 'it' : 'one'} down and pass it around`
					: 'Go to the store and buy some more'
			}, ` +
			`${n - 1 < 0 ? '99' : n - 1 === 0 ? 'no more' : n - 1} bottle${
				n - 1 === 1 ? '' : 's'
			} of beer on the wall.\n`
		);
	}
}
export { Bottles };
