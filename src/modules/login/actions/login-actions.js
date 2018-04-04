import request from "superagent";
import _ from "lodash";
import appHistory from "../../main/app-history";
import * as Config from "../../main/config";
import * as NotificationActions from "../../notification/actions/notification-actions";

const setLocalStorage = ({ token, userId, name, email}) => {
	localStorage.setItem("loginData", JSON.stringify({ token, userId, name, email}));
};

const removeLocalStorage = () => {
	localStorage.removeItem("loginData");
};

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
					return dispatch(loginFailure(error));
				}

				const loginData = {
					userId: response.body.data._id,
					name: response.body.data.name,
					email: response.body.data.email,
					token: response.body.data.token
				};

				if (loginData.token && loginData.userId) {
					setLocalStorage(loginData);

					dispatch(loginSuccess(loginData));
					appHistory.push("/profile");
				} else {
					NotificationActions.show("E-mail ou senha incorretos")(dispatch);
					removeLocalStorage();
				}
			});
	};
}

export function loginWithAuthenticator(userData) { 
	return (dispatch) => {
		setLocalStorage(userData);

		dispatch(loginSuccess(userData));
		appHistory.push("/profile");
	};
}

export function logout(data) { 	
	removeLocalStorage();
	return {type: "LOGGED_OUT", data};
}

export function loginSuccess(data) { 
	return {type: "LOGGED_SUCCESSFULLY", data};
}

export function loginFailure(error) {
	return {type: "LOGGED_FAILURE", error};
}
