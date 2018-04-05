const API_DOMAIN = process.env.API_HOST ? process.env.API_HOST : "http://localhost:3000";
const SOCKET_PATH = process.env.API_HOST ? `${process.env.API_HOST}/auth` : "http://localhost:3000/auth";

module.exports = {
	API_DOMAIN,
	SOCKET_PATH
};