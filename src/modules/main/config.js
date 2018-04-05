module.exports = {
	API_DOMAIN: process.env.NODE_ENV == "production" ? "https://back-client-a.herokuapp.com" : "http://localhost:3000",
	SOCKET_PATH: process.env.NODE_ENV == "production" ? "https://back-client-a.herokuapp.com/auth" : "http://localhost:3000/auth"
};