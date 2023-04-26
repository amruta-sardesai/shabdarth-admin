import api from "../middlware/api";
import { camelToSnake, snakeCase } from "../utils/CamelToSnake";
import { BASE_URL } from "../constants";

export const getWords = (payload: any) => {
    return new Promise((resolve, reject) => {
        const query = new URLSearchParams(payload);
        api
            .get(`${BASE_URL}/api/v1/admin/words?${query}`)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err.response.data);
            });
    });
}

export const saveWord = (payload: any) => {
    return new Promise((resolve, reject) => {
        api.post(`${BASE_URL}/api/v1/admin/words`, payload).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err.response)
        })
    })
}

export const getWord = (wordId: number) => {
    return new Promise((resolve, reject) => {
        api.get(`${BASE_URL}/api/v1/admin/words/${wordId}`).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}

export const deleteWord = (wordId: number) => {
    return new Promise((resolve, reject) => {
        api.delete(`${BASE_URL}/api/v1/admin/words/${wordId}`).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export const restoreWord = (wordId: number) => {
    return new Promise((resolve, reject) => {
        api.get(`${BASE_URL}/api/v1/admin/words/restore/${wordId}`).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}