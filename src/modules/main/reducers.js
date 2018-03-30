import { combineReducers } from "redux";
import todoReducer from "../todo/todoReducer";
import notificationReducer from "../notification/reducers/notification-reducer";
import loginReducer from "../login/reducers/login-reducer";

const rootReducers = combineReducers({
	login: loginReducer,
	todo: todoReducer,
	notification: notificationReducer
});

export default rootReducers;