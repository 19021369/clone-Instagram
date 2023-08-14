export interface Response<T> {
	responseData?: T;
	error?: ErrorResponse;
	statusCode?: number;
	message?: string | 'success' | 'fail';
}

export interface ErrorResponse {
	code?: number;
	message?: string;
}

export type TextFieldValue = string | undefined;
