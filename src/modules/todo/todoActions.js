import ApiIntegrationClass from "../api/apiIntegration";
import ActionsEnum from "../../helpers/constants";

const apiIntegration = new ApiIntegrationClass();

export const changeDescription = (event) => ({
	type: "DESCRIPTION_CHANGED",
	payload: event.target.value
});

export const fetchSearch = (payload) => {
	return {
		type: "TODO_SEARCHED",
		payload
	}
}

export const search = () => {
	return async (dispatch, getState) => {
		const description = getState().todo.description
		const search = description ? `description__regex=/${description}/` : ''
		const request = await apiIntegration.getTodos({search, sort : "-createdAt"});
		
		dispatch(fetchSearch(request.data));
	}
};

export const alterList = (param) => {
	return async (dispatch, getState) => {
		const todo = param.data
		const list = [...getState().todo.list]
		const todoIndex = list.findIndex((item) => { return item._id === todo._id });

		switch(param.action) {
			case ActionsEnum.TODO_ADD:
					list.unshift(todo)
				break;
			case ActionsEnum.TODO_UPDATE:
				if(todoIndex > -1)
					list[todoIndex] = todo
				break;
			case ActionsEnum.TODO_REMOVE: 
				if(todoIndex > -1)
					list.splice(todoIndex, 1)
				break;
			default: break;
		}

		dispatch(fetchSearch(list));
	}
};

export const add = (description) => {
	return (dispatch) => {
		apiIntegration.addNewTodo({description})
			//.then(data => dispatch(alterList({action: ActionsEnum.TODO_ADD, data})))
			.then(() => dispatch(clear()))
	};
};

export const markAsDone = async (todo) => {
	return async (dispatch) => {
		const data = {...todo, done: true}
		await apiIntegration.updateTodo({id: todo._id, done: true})
			//.then(() => dispatch(alterList({action: ActionsEnum.TODO_UPDATE, data})))
			/*.then(() => dispatch({
				type: 'TEST'
			}))*/
	}
};

export const markAsPending = async (todo) => {
	return async (dispatch) => {
		const data = {...todo, done: false}
		await apiIntegration.updateTodo({id: todo._id, done: false})
		//.then(() => dispatch(alterList({action: ActionsEnum.TODO_UPDATE, data})))
	}
};

export const remove = (todo) => {
	return async (dispatch) => {
	
		await apiIntegration.removeTodoById(todo._id)
			//.then(() => dispatch(alterList({action: ActionsEnum.TODO_REMOVE, data: todo})))
	};
};

export const clear = () => {
	return [{
		type: 'TODO_CLEAR'
	}, search()]
}