import { AxiosError, AxiosRequestConfig } from "axios";

export function addExtraInfo(config: any) {
	const token = "token";

	config.data = {
		...config.data,
		apikey: token,
	};

	return config;
}

export function onRejected(error: AxiosError) {
	return Promise.reject(error);
}
