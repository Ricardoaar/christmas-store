import axios from "axios";

const ApiInstance = axios.create({
  baseURL: "https://api.escuelajs.co/api"
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
    const response = await ApiInstance.get(`${this.#version}/${url}`, config);
    return Api.#handleResponse(response);
  }

  static async getRawResponse(url, config) {
    const response = await ApiInstance.get(`${this.#version}/${url}`, config);
    return Api.#handleResponse(response);
  }

  static async post(url, data, config) {
    const response = await ApiInstance.post(
      `${this.#version}/${url}`,
      data,
      config
    );

    return Api.#handleResponse(response);
  }

  static async put(url, data, config) {
    const response = await ApiInstance.put(
      `${this.#version}/${url}`,
      data,
      config
    );

    return Api.#handleResponse(response);
  }

  static #handleResponse(response) {
    if (response.status >= 200 && response.status < 300) {
      return {
        count: response.data.count,
        next: response.data.next,
        previous: response.data.previous,
        results: response.data.results
      };
    } else {
      return {
        error: response.data
      };
    }
  }
}

export default Api;
