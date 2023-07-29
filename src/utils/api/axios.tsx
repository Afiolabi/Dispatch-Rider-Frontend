import axios from "axios";

const baseURI = "http://localhost:4000";
export default axios.create({
	baseURL: "http://localhost:4000/api",
	headers: {
		"Content-type": "application/json",
	},
});
const baseURL = "http://localhost:4000/api";

export const apiGet = async (path: string) => {
	return await axios.get(`${baseURI}${path}`);
};

export const apiGetAndAuth = async (path: string, config: any) => {
	return await axios.get(`${baseURI}${path}`, config);
};

export const apiPostAndAuth = async (path: string, data: any) => {
	const signature = localStorage.getItem("signature");
	if (signature === null) {
		return;
	}

	const config = {
		headers: {
			Authorization: `Bearer ${signature}`,
		},
	};

	return await axios.post(`${baseURL}${path}`, data, config);
};

export const apiPost = async (path: string, data: any) => {
	return await axios.post(`${baseURI}${path}`, data);
};

export const apiPut = async (path: string, data: any) => {
	const signature = localStorage.getItem("signature");
	if (signature === null) {
		return;
	}
	const config = {
		headers: {
			Authorization: `Bearer ${signature}`,
		},
	};

	return await axios.put(`${baseURL}${path}`, data, config);
};

export const apiPatch = async (path: string, data: any) => {
	const signature = localStorage.getItem("signature");
	if (signature === null) {
		return;
	}
	const config = {
		headers: {
			Authorization: `Bearer ${signature}`,
		},
	};

	return await axios.patch(`${baseURI}${path}`, data, config);
};

export const apiDelete = async (path: string) => {
	const signature = localStorage.getItem("signature");
	if (signature === null) {
		return;
	}
	const config = {
		headers: {
			Authorization: `Bearer ${signature}`,
		},
	};

	return await axios.delete(`${baseURI}${path}`, config);
};
