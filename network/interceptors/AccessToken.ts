import { AxiosError, AxiosRequestConfig } from "axios";

export function addExtraInfo(config: any) {
	const token = localStorage.getItem('token');

	config.headers = {
		...config.headers,
		accessToken: token,
	};

	return config;
}

export function onRejected(error: AxiosError) {
	return Promise.reject(error);
}
