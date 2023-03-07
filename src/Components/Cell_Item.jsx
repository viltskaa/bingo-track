import React, {useContext} from 'react';
import DateBadge from "./DateBadge.jsx";
import Selector from "./Selector/Selector.jsx";
import {CSSTransition} from "react-transition-group";
import "./Selector/Selector.css";
import Cell from "../Models/Cell.js";
import {firebaseContext} from "../main.jsx";

const Cell_Item = ({ cell = new Cell({}), isFocus, onFocus}) => {
	const { task, date, id } = cell.info;
	const API = useContext(firebaseContext)

	const classes = task !== '' ? "cell" : "cell-empty"
	const openSelector = () => onFocus(id);
	const closeSelector = () => onFocus(-1);

	const onReady = async () => {
		cell.date = date === 0 ? Cell.getDate : 0;
		await API.setCell(cell)
		closeSelector();
	}

	return (
		<div id={id} className={!(isFocus === id || isFocus !== -1) ? classes : `${classes} unfocused`}
				 onDoubleClick={openSelector}
		>
			{ task && (
				<>
					{task}
					{date === 0 ? "" : <DateBadge date_unix={date}/>}
					<CSSTransition
						in={isFocus === id}
						timeout={200}
						classNames="selector-action"
						unmountOnExit
						mountOnEnter
					>
						<Selector>
							<li onClick={onReady}>{date ? "Не выполнено" : "Выполнено"}</li>
							<li className="selector-action-close" onClick={closeSelector}>Закрыть</li>
						</Selector>
					</CSSTransition>
				</>
			) }
		</div>
	);
}

export default Cell_Item;