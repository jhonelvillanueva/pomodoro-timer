import './App.css';
import { useReducer, useState, useEffect } from 'react';
import { reducer } from './state/reducer';
import Header from './components/Header';
import Timer from './components/Timer';
import Buttons from './components/Buttons';
import ACTIONS from './state/actions';

const App = () => {
	const [isSetting, setIsSetting] = useState(false);
	const [{ sessionStatus, time, start }, dispatch] = useReducer(reducer, {
		sessionStatus: true,
		time: 5,
		start: false,
		sessionTime: 5,
		breakTime: 5,
	});

	const handleSetting = () => {
		setIsSetting(!isSetting);
	};

	useEffect(() => {
		if (!start) return;
		const timerId = setInterval(() => dispatch({ type: ACTIONS.START }), 1000);

		return () => clearInterval(timerId);
	}, [start]);

	useEffect(() => {
		console.log(sessionStatus);
	}, [sessionStatus]);

	return (
		<div className='app-container'>
			<div className='pomodoro'>
				{isSetting && <div className='backdrop' onClick={handleSetting}></div>}
				<Header sessionStatus={sessionStatus} handleSetting={handleSetting} />
				<Timer time={time} />
				<Buttons dispatch={dispatch} start={start} />
			</div>
		</div>
	);
};

export default App;
