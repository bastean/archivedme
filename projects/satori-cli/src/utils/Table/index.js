import { table } from 'table';

export class Table {
	/**
	 * @description Show Table in Console.
	 *
	 * @param {array[]} data
	 * @param {string} headerTitle
	 * @param {array} columnsLayout Optional.
	 */
	static showData(data, headerTitle, columnsLayout = []) {
		const config = {
			header: {
				alignment: 'center',
				content: headerTitle
			},
			columns: columnsLayout
		};
		console.log();
		console.log(table(data, config));
	}
}
