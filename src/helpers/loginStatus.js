export default () => {
	if(localStorage.loginData) {
		const loginData = JSON.parse(localStorage.loginData)
		return {
			isLoggedIn: true,
			...loginData 
		};
	} 
    
	return {
		isLoggedIn: false,
		loginData: null
	};
};