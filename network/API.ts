import { Response } from "@/model/common";
import Endpoint from "./Endpoint";
import ApiManager from "./APIManager";
import { AxiosRequestConfig } from "axios";
import { UserProfile } from "@/model/user";
import { Post } from "@/model/post";

interface APIService {
	get<R>(url: string, params?: object, config?: AxiosRequestConfig): Promise<R>;
	post<R>(url: string, params: object, config?: AxiosRequestConfig): Promise<R>;
	put<R>(url: string, params: object, config?: AxiosRequestConfig): Promise<R>;
	delete<R>(url: string, params: object, config?: AxiosRequestConfig): Promise<R>;
}

class HTTPClient implements APIService {
	private instance: APIService;

	constructor(instance: APIService) {
		this.instance = instance;
	}

	get<R>(url: string, params?: object): Promise<R> {
		return this.instance.get(url, params);
	}
	post<R>(url: string, params: object, config?: AxiosRequestConfig): Promise<R> {
		return this.instance.post(url, params, config);
	}

	put<R>(url: string, params: object, config?: AxiosRequestConfig): Promise<R> {
		return this.instance.put(url, params, config);
	}
	delete<R>(url: string, params: object, config?: AxiosRequestConfig): Promise<R> {
		return this.instance.delete(url, params, config);
	}
}

class API {
	tokenclient: HTTPClient;
	publicClient: HTTPClient;

	constructor() {
		const apiBaseUrl = "http://localhost:8080/";

		const instance = ApiManager.getInstance(apiBaseUrl);
		this.tokenclient = new HTTPClient(instance);

		const publicInstance = ApiManager.getInstance(apiBaseUrl, false);
		this.publicClient = new HTTPClient(publicInstance);
	}

	getAllUsers = (): Promise<Response<UserProfile[]>> => {
		return this.publicClient.get<Response<UserProfile[]>>(Endpoint.USERS, {});
	};

	getPost = (): Promise<Response<Post[]>> => {
		return this.publicClient.get<Response<Post[]>>(Endpoint.GET_POSTS, {});
	}

	createPost = (params: any): Promise<Response<Post>> => {
		return this.tokenclient.post<Response<Post>>(Endpoint.CREATE_POST, {params});
	}
}

export default new API();
