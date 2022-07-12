import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import ACTIONS from '../state/actions';

const Buttons = ({ dispatch, start }) => {
	return (
		<div className='controls-button'>
			{!start && (
				<button
					className='btn'
					onClick={() => {
						dispatch({ type: ACTIONS.START });
					}}>
					<FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
				</button>
			)}
			{start && (
				<button
					className='btn'
					onClick={() => {
						dispatch({ type: ACTIONS.PAUSE });
					}}>
					<FontAwesomeIcon icon={faPause}></FontAwesomeIcon>
				</button>
			)}
			<button
				className='btn'
				onClick={() => {
					dispatch({ type: ACTIONS.RESET });
				}}>
				<FontAwesomeIcon icon={faStop}></FontAwesomeIcon>
			</button>
		</div>
	);
};

export default Buttons;
