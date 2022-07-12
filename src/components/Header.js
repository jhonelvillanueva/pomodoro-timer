import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const Header = ({ sessionStatus, handleSetting }) => {
	return (
		<header>
			<button className='setting' onClick={handleSetting}>
				<FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
			</button>
			<h1 className='title'>{sessionStatus ? 'Session' : 'Break'}</h1>
		</header>
	);
};

export default Header;
