import ACTIONS from './actions';

export const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.START:
			if (!state.time) {
				return {
					...state,
					sessionStatus: !state.sessionStatus,
					time: state.breakTime,
				};
			}

			return {
				...state,
				start: true,
				time: state.time - 1,
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

		default:
			return state;
	}
};
