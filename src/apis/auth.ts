import api from "../middlware/api";
import { camelToSnake, snakeCase } from "../utils/CamelToSnake";
import { BASE_URL } from "../constants";
import axios from "../middlware/api";

export const signIn = (payload: any) => {
  return new Promise((resolve, reject) => {
    api
      .post(`${BASE_URL}/api/v1/login`, camelToSnake(payload))
      .then((res) => {
        window.localStorage.setItem('user', JSON.stringify(res.data.user));
        window.localStorage.setItem('token', res.data.accessToken);
        axios.defaults.headers.common.Authorization = `Bearer ${res.data.accessToken}`;
        resolve(res);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};
