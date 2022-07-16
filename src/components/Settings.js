import { useState } from 'react';
import ACTIONS from '../state/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Settings = ({ dispatch, handleSetting, sessionTime, breakTime }) => {
	const [sessionMinute, setSessionMinute] = useState(sessionTime);
	const [breakMinute, setBreakMinute] = useState(breakTime);

	const handleIncrease = (status) => {
		if (status === 'session' && sessionMinute !== 99) {
			if (sessionMinute > 99) {
				setSessionMinute(99);
			}
			setSessionMinute((prev) => prev + 1);
		} else if (status === 'break' && breakMinute !== 99) {
			if (breakMinute > 99) {
				setBreakMinute(99);
			}
			setBreakMinute((prev) => prev + 1);
		}
	};

	const handleDecrease = (status) => {
		if (status === 'session' && sessionMinute !== 1) {
			if (sessionMinute < 1) {
				setSessionMinute(1);
			}
			setSessionMinute((prev) => prev - 1);
		} else if (status === 'break' && breakMinute !== 1) {
			if (breakMinute < 1) {
				setBreakMinute(1);
			}
			setBreakMinute((prev) => prev - 1);
		}
	};

	const handleClick = () => {
		dispatch({
			type: ACTIONS.UPDATE,
			payload: {
				sessionMinute: sessionMinute,
				breakMinute: breakMinute,
			},
		});
	};

	return (
		<>
			<div className='setting-container'>
				<div className='settings'>
					<h1>Settings</h1>
					<div className='setup'>
						<p>How many minutes per Session?</p>
						<button onClick={() => handleIncrease('session')}>
							<FontAwesomeIcon icon={faAngleUp}></FontAwesomeIcon>
						</button>
						<input
							type='number'
							min={1}
							max={99}
							step={1}
							defaultValue={sessionMinute}
							onChange={(e) => {
								setSessionMinute(e.target.value);
							}}
						/>
						<button onClick={() => handleDecrease('session')}>
							<FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
						</button>
					</div>
					<div className='setup'>
						<p>How many minutes per Break?</p>
						<button onClick={() => handleIncrease('break')}>
							<FontAwesomeIcon icon={faAngleUp}></FontAwesomeIcon>
						</button>
						<input
							type='number'
							min={1}
							max={99}
							step={1}
							defaultValue={breakMinute}
							onChange={(e) => {
								setSessionMinute(e.target.value);
							}}
						/>
						<button onClick={() => handleDecrease('break')}>
							<FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
						</button>
					</div>
					<button
						className='btn-save'
						onClick={() => {
							handleClick();
							handleSetting();
							dispatch({ type: ACTIONS.RESET });
						}}>
						Save
					</button>
					<button className='btn-save' onClick={handleSetting}>
						Cancel
					</button>
				</div>
			</div>
		</>
	);
};

export default Settings;
