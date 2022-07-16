import ACTIONS from './actions';

export const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.START:
			if (!state.time) {
				return {
					...state,
					sessionStatus: !state.sessionStatus,
					time: state.breakTime,
					alert: true,
				};
			}

			return {
				...state,
				start: true,
				time: state.time - 1,
				alert: false,
			};

		case ACTIONS.PAUSE:
			return {
				...state,
				start: false,
			};

		case ACTIONS.RESET:
			return {
				...state,
				sessionStatus: true,
				start: false,
				time: state.sessionTime,
			};

		case ACTIONS.UPDATE:
			return {
				...state,
				sessionTime: action.payload.sessionMinute * 60,
				breakTime: action.payload.breakMinute * 60,
			};

		default:
			return state;
	}
};
