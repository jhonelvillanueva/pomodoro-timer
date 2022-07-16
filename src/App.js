import './App.css';
import { useReducer, useState, useEffect } from 'react';
import { reducer } from './state/reducer';
import Header from './components/Header';
import Timer from './components/Timer';
import Buttons from './components/Buttons';
import ACTIONS from './state/actions';
import Settings from './components/Settings';

const App = () => {
	const [isSetting, setIsSetting] = useState(false);
	const [
		{ sessionStatus, time, start, alert, sessionTime, breakTime },
		dispatch,
	] = useReducer(reducer, {
		sessionStatus: true,
		time: 1500,
		start: false,
		sessionTime: 1500,
		breakTime: 300,
		alert: false,
	});

	const handleSetting = () => {
		setIsSetting(!isSetting);
		dispatch({ type: ACTIONS.PAUSE });
	};

	useEffect(() => {
		if (!start) return;
		const timer = setInterval(() => dispatch({ type: ACTIONS.START }), 1000);
		return () => clearInterval(timer);
	}, [start]);

	useEffect(() => {
		if (!alert) return;
		const audio = new Audio(
			'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
		);

		audio.play();
	}, [alert]);

	return (
		<div className='app-container'>
			{isSetting && (
				<>
					<Settings
						dispatch={dispatch}
						handleSetting={handleSetting}
						sessionTime={Math.floor(sessionTime / 60)}
						breakTime={Math.floor(breakTime / 60)}
					/>
					<div className='backdrop' onClick={handleSetting}></div>
				</>
			)}
			{!isSetting && (
				<div className='pomodoro'>
					<Header sessionStatus={sessionStatus} handleSetting={handleSetting} />
					<Timer time={time} />
					<Buttons dispatch={dispatch} start={start} />
				</div>
			)}
		</div>
	);
};
export default App;
