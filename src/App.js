import './App.css';
import { useReducer } from 'react';
import { reducer } from './state/reducer';
import Header from './components/Header';
import Timer from './components/Timer';
import Buttons from './components/Buttons';

const App = () => {
	const [state, dispatch] = useReducer(reducer, {});

	return (
		<div className='app-container'>
			<div className='pomodoro'>
				<Header />
				<Timer />
				<Buttons />
			</div>
		</div>
	);
};

export default App;
