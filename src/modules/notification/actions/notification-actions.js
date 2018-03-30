export function show(message) {
	return (dispatch) => {
		dispatch({
			type: "SHOW_NOTIFICATION",
			message: message,
			isOpen: true
		});
	};
}

export function hide() {
	return (dispatch) => {
		dispatch({
			type: "HIDE_NOTIFICATION",
		});
	};
}
