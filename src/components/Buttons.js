import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faRotate } from '@fortawesome/free-solid-svg-icons';

const Buttons = () => {
	return (
		<div className='controls-button'>
			<button className='btn'>
				<FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
			</button>
			<button className='btn'>
				<FontAwesomeIcon icon={faPause}></FontAwesomeIcon>
			</button>
			<button className='btn'>
				<FontAwesomeIcon icon={faRotate}></FontAwesomeIcon>
			</button>
		</div>
	);
};

export default Buttons;
