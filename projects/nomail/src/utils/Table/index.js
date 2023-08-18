import { table } from 'table';

export class Table {
	static show(dataToShow) {
		const config = {
			columnDefault: {
				width: 68,
				wrapWord: true,
				alignment: 'center'
			}
		};

		console.log(table(dataToShow, config));
	}
}
