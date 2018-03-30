import _ from "lodash";

let init = {
	message: "",
	isOpen: false
};

function notificationReducer(state = init, action) {
	switch (action.type) {
		case "SHOW_NOTIFICATION":
			return {...state, message: action.message, isOpen: true };
			break;
		case "HIDE_NOTIFICATION":
			return {...state, message: 'hidding', isOpen: false };
			break;
	default:
		return getDefault(action);
		break;
	}
}

function getDefault(action) {
	if (_.isUndefined(action.message)) {
		return init;
	}

	return { message: action.message, isOpen: false };
}

export default notificationReducer;
