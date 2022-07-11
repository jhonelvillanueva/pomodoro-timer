import './App.css';
import { useReducer } from 'react';
import { reducer } from './state/reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import Display from './components/Display';
import Buttons from './components/Buttons';

const App = () => {
	const [state, dispatch] = useReducer(reducer, {});

	return (
		<div className='app-container'>
			<div className='pomodoro'>
				<FontAwesomeIcon icon={faGear} className='setting'></FontAwesomeIcon>
				<Display />
				<Buttons />
			</div>
		</div>
	);
};

export default App;
