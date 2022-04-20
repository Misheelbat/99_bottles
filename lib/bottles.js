import { downTo } from './helpers';
class Bottles {
	verse(n) {
		return (
			`${n} bottles of beer on the wall, ` +
			`${n} bottles of beer.\n` +
			'Take one down and pass it around, ' +
			`${n - 1} bottles of beer on the wall.\n`
		);
	}
}
export { Bottles };
