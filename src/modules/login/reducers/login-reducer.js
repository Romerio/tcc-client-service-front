/*import Immutable from "immutable";

const initialState = new Immutable.Map({
	isLoggingIn: false,
	isLoggedIn: false,
	error: null
});*/

const initialState = {
	isLoggingIn: false,
	isLoggedIn: false,
	error: null
};

function loginReducer(state = initialState, action) {
	switch (action.type) {
	case "LOGGED_SUCCESSFULLY":
		return {
			isLoggedIn: true,
			token: action.data.token,
			name: action.data.name,
			email: action.data.email,
			userId: action.data.userId
		};
		break;
	case "LOGGED_FAILURE":
		return state;
		break;
	case "LOGGED_OUT":
		return initialState;
		break;
	default:
		return state;
	}
}

export default loginReducer;
