import React from "react";
import Cell from "../Models/Cell.js";
import {onValue, ref, set} from "firebase/database"
import {setPersistence, browserLocalPersistence} from "firebase/auth";

import {auth, db} from "../firebase.js";

export default class FireAPI {
	constructor() {
		setPersistence(auth, browserLocalPersistence)
			.catch(console.error)
	}

	set onChange(func) {
		if (typeof func === "function") {
			this.callbackOnChange = func;
		}
	}

	async getCells() {
		return await new Promise((resolve, reject) => {
			onValue(ref(db, 'cells'), (snapshot) => {resolve(snapshot.val())}, reject)
		});
	}

	async setCell(cell=new Cell({})) {
		const { task, date, id } = cell.info;
		try {
			await set(ref(db, `cells/${id}`), { task, date });
		} catch (e) {
			console.error(e)
		}
	}
}