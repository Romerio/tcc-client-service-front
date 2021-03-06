const API_DOMAIN = process.env.NODE_ENV === "production" ? process.env.API_HOST : "http://localhost:5000";
const SOCKET_PATH = process.env.NODE_ENV === "production" ? `${process.env.API_HOST}/auth` : "http://localhost:5000/auth";

module.exports = {
	API_DOMAIN,
	SOCKET_PATH
};