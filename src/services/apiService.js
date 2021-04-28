import axios from 'axios';
const apiURL = 'http://localhost:5000';
const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

const insert = (path, data, callback) => {
    axios.post(`${apiURL}/${path}`, data, { headers })
        .then(response => callback(response.data))
        .catch(reason => {
            console.log(reason);
            callback(false);
        })
}

const list = (path, callback) => {
    axios.get(`${apiURL}/${path}`, { headers })
        .then(response => callback(response.data))
        .catch(reason => {
            console.log(reason);
            callback(false);
        })
}

const read = (path, id, callback) => {
    axios.get(`${apiURL}/${path}/${id}`, { headers })
        .then(response => callback(response.data))
        .catch(reason => {
            console.log(reason);
            callback(false);
        })
}

const update = (path, id, data, callback) => {
    axios.put(`${apiURL}/${path}/${id}`, data, { headers })
        .then(response => callback(response.data))
        .catch(reason => {
            console.log(reason);
            callback(false);
        })
}

const remove = (path, id, callback) => {
    axios.delete(`${apiURL}/${path}/${id}`, { headers })
        .then(response => callback(response.data))
        .catch(reason => {
            console.log(reason);
            callback(false);
        })
}

export { insert, list, read, update, remove }