import React, {useState} from 'react';
import Cell_Item from "./Cell_Item.jsx";

const Cells = ({ cells }) => {
	const [activeCell, setActiveCell] = useState(-1);

	return (
		<div className="parent">
			{
				cells.map((item, index) => <Cell_Item
					cell={item}
					key={index.toString()}
					onFocus={id => setActiveCell(id)}
					isFocus={activeCell}
				/>)
			}
		</div>);
};

export default Cells;