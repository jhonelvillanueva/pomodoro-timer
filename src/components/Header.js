import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	return (
		<header>
			<FontAwesomeIcon icon={faGear} className='setting'></FontAwesomeIcon>
			<h1 className='title'>Session</h1>
		</header>
	);
};

export default Header;
