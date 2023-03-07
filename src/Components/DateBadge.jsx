import React from 'react';

const DateBadge = ({ date_unix=0 }) => {
	const date = new Date(date_unix * 1000);
	const format_time = new Intl.DateTimeFormat('ru')

	return (
		<span className="date-badge">
			{format_time.format(date)}
		</span>);
};

export default DateBadge;