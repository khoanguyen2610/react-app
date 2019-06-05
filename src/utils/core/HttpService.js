import axios from 'axios';
import { isEmpty } from 'lodash';

import { AppConfig } from 'my-constants';

class HttpService {
    constructor() {
        let config = {
            withCredentials: false, //reject authen token
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }
        //Inital Service
        this.service = axios.create(config);
        this.service.interceptors.request.use(this.handleRequest, this.handleError);
        this.service.interceptors.response.use(this.handleSuccess, this.handleError);
    }

    getCancelTokenSource = () => {
        return axios.CancelToken.source();
    }

    getCancelToken = () => {
        let source = this.getCancelTokenSource();
        return source.token;
    }

    //Create request with method get
    get = (path, queryParams, cancelToken) => {
        this.setAuthorization();
        if(isEmpty(cancelToken)){
            cancelToken = this.getCancelToken();
        }

        return this.service.get(path, {
            params: queryParams,
            cancelToken: cancelToken
        });
    }

    //Create request with method post
    post = (path, payload, cancelToken) => {
        this.setAuthorization();
        if(isEmpty(cancelToken)){
            cancelToken = this.getCancelToken();
        }
        return this.service.post(path, payload, { cancelToken: cancelToken });
    }

    //Create request with method put
    put = (path, payload, cancelToken) => {
        this.setAuthorization();
        if(isEmpty(cancelToken)){
            cancelToken = this.getCancelToken();
        }
        return this.service.put(path, payload, { cancelToken: cancelToken });
    }

    //Create request with method delete
    delete = (path, queryParams, cancelToken) => {
        this.setAuthorization();
        if(isEmpty(cancelToken)){
            cancelToken = this.getCancelToken();
        }

        return this.service.delete(path, {
            params: queryParams,
            cancelToken: cancelToken
        });
    }

    //Set JWT Token
    setAuthorization = () => {
        this.service.defaults.headers.common['Authorization'] = 'Basic ' + btoa(`${AppConfig.API_AUTH_USER}:${AppConfig.API_AUTH_PASS}`);
    }

    //Handle berfore send request
    handleRequest = config => {
        return config;
    }

    //Handle when request sucessful
    handleSuccess = response => {
        //obj response : data, status, statusText, headers
        const { data } = response;
        return data;
    }

    //Handle when request fail
    handleError = error => {
        return Promise.reject(error);
    }
}

export default new HttpService();