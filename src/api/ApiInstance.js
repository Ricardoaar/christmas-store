import axios from "axios";

const ApiInstance = axios.create({
  baseURL: "https://fakestoreapi.com"
});

class Api {
  static #version = "v1";

  static setVersion(version) {
    Api.#version = version;
  }

  static getVersion() {
    return Api.#version;
  }

  static async get(url, config) {
    const response = await ApiInstance.get(`${url}`, config);
    return Api.#handleResponse(response);
  }

  static async getRawResponse(url, config) {
    const response = await ApiInstance.get(`${url}`, config);
    return Api.#handleResponse(response);
  }

  static async post(url, data, config) {
    const response = await ApiInstance.post(`${url}`, data, config);

    return Api.#handleResponse(response);
  }

  static async put(url, data, config) {
    const response = await ApiInstance.put(`${url}`, data, config);

    return Api.#handleResponse(response);
  }

  static #handleResponse(response) {
    if (response.status >= 200 && response.status < 300) {
      return {
        results: response.data
      };
    } else {
      return {
        error: response.data
      };
    }
  }
}

export default Api;
