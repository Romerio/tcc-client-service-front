import request from "superagent";
import _ from "lodash";
import appHistory from "../../main/app-history";
import * as Config from "../../main/config";
import * as NotificationActions from "../../notification/actions/notification-actions";
// import { showSnack, dismissSnack } from "react-redux-snackbar";

export function login(email, password) {
	return (dispatch) => {
		// NotificationActions.show("Loging in. Please wait.")(dispatch);

		request
			.post(Config.API_DOMAIN + "api/users/login")
			.send({
				email: email,
				password: password
			})
			.end((error, response) => {
				if (_.isUndefined(response)) {
					NotificationActions.show("Erro")(dispatch);
					return dispatch(loginFailure("Error: No response"));
				}

				if (error) {
					NotificationActions.show(response.body.error.title)(dispatch);
					//console.log(Object.keys(error));
					//console.log(response.body.error.title);
					return dispatch(loginFailure(error));
				}

				var token = response.body.data.token;
				var userId = response.body.data._id;

				if (token && userId) {
					localStorage.setItem("token", token);
					localStorage.setItem("userId", userId);

					dispatch(loginSuccess({
						userId: userId, 
						name: response.body.data.name,
						email: response.body.data.email,
						token: token
					}));
					appHistory.push("/profile");
				} else {
					NotificationActions.show("E-mail ou senha incorretos")(dispatch);
					localStorage.removeItem("token");
				}
			});
	};
}

export function loginWithAuthenticator(userData) { // userId, name, email, token	
	return (dispatch) => {
		localStorage.setItem("token", userData.token);
		localStorage.setItem("userId", userData.userId);

		dispatch(loginSuccess(userData));
		appHistory.push("/profile");
	};
}

export function loginSuccess(data) { // userId, name, email, token
	return {type: "LOGGED_SUCCESSFULLY", data};
}

export function loginFailure(error) {
	return {type: "LOGGED_FAILURE", error};
}
