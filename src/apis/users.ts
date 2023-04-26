import api from "../middlware/api";
import { BASE_URL } from "../constants";

export const getUsers = (payload: any) => {
    return new Promise((resolve, reject) => {
        const query = new URLSearchParams(payload);
        api
            .get(`${BASE_URL}/api/v1/admin/users?${query}`)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err.response.data);
            });
    });
}

export const getDashboardCounts = () => {
    return new Promise((resolve, reject) => {
        api.get(`${BASE_URL}/api/v1/admin/dashboard-counts`).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err)
        });
    })
}

export const getUserWords = (payload: any) => {
    return new Promise((resolve, reject) => {
        const query = new URLSearchParams(payload);
        api.get(`${BASE_URL}/api/v1/admin/user-words?${query}`)
            .then(res => {
                resolve(res);
            }).catch(err => {
                reject(err.response);
            })
    })
}