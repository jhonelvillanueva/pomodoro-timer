import React from 'react';

const SECONDS_CONVERTER = 60;

const Timer = ({ time }) => {
	const minute = Math.floor(time / SECONDS_CONVERTER);
	const seconds = Math.floor(time % 60);

	const format = (time) => {
		return time < 10 ? `0${time}` : time;
	};

	return (
		<>
			<div className='timer-container'>
				{format(minute)}:{format(seconds)}
			</div>
		</>
	);
};

export default Timer;
