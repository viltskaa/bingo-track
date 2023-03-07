export default class Cell {
	#task = "";
	#date = 0;
	#id
	constructor({ task, date, id }) {
		this.#date = date;
		this.#task = task;
		this.#id = id
	}
	get info() {
		return {
			task : this.#task,
			date : this.#date,
			id   : this.#id
		}
	}

	set date(value) {
		this.#date = value;
	}

	static get getDate() {
		return Math.ceil(Date.now() / 1000);
	}

	static Builder(item = { task : "", date : 0 }, index = 0) {
		const {task, date} = item;
		const id = task !== '' ? index > 12 ? index - 1 : index : -1;
		return new Cell({ task, date, id })
	}
}