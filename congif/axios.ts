import { message } from 'antd';
// import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { BASE_URL } from './constans';
import { ResponseError } from './errors';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
// import { ResponseError } from './errors';
// import { MAIN_URL } from 'config/utils';

let instance = axios.create();

const onRequest = (config: InternalAxiosRequestConfig ): InternalAxiosRequestConfig  => {
    
    config.baseURL = `${BASE_URL}`;

    // config.headers = {
    //     'Authorization': "Bearer " + access_token,
    //     'Access-Control-Allow-Origin': '*',
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/x-www-form-urlencoded'
    // }
    return config;
}

const onRequestError = async (error: AxiosError): Promise<AxiosError> => {
    new ResponseError(error);
    return Promise.reject(error);
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    new ResponseError(error);
    return Promise.reject(error);
}

instance.interceptors.request.use(onRequest, onRequestError)
instance.interceptors.response.use(onResponse, onResponseError)

export default instance;