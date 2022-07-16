import { useState } from 'react';
import ACTIONS from '../state/actions';

const Settings = ({ dispatch, handleSetting, sessionTime, breakTime }) => {
	const [sessionMinute, setSessionMinute] = useState(sessionTime);
	const [breakMinute, setBreakMinute] = useState(breakTime);

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
						<input
							type='number'
							min={1}
							max={99}
							step={1}
							defaultValue={sessionMinute}
							onChange={(e) => {
								if (e.target.value > 99) {
									setSessionMinute(99);
								} else if (e.target.value < 1) {
									setSessionMinute(1);
								} else {
									setSessionMinute(e.target.value);
								}
							}}
						/>
					</div>
					<div className='setup'>
						<p>How many minutes per Break?</p>
						<input
							type='number'
							min={1}
							max={99}
							step={1}
							defaultValue={breakMinute}
							onChange={(e) => {
								if (e.target.value > 99) {
									setBreakMinute(99);
								} else if (e.target.value < 1) {
									setBreakMinute(1);
								} else {
									setBreakMinute(e.target.value);
								}
							}}
						/>
					</div>
					<div className='setting-btn'>
						<button
							className='btn-save'
							onClick={() => {
								handleClick();
								handleSetting();
								dispatch({ type: ACTIONS.RESET });
							}}>
							Save
						</button>
						<button className='btn-cancel' onClick={handleSetting}>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Settings;
