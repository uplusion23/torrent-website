import BaseService from './BaseService';

const UserService = {
  baseUrl: BaseService.endpoint + '/user',
  authenticate: (username, password) => {
    return new Promise((resolve, reject) => {
      fetch(`${UserService.baseUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      })
      .then(response => response.json())
      .then(response => {
        response.response === "error" ? reject(response.data) : resolve(response.data);
      }).catch(error => {
        reject(error);
      });
    });
  },
  register: (username, password) => {
    return new Promise((resolve, reject) => {
      fetch(`${UserService.baseUrl}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      })
      .then(response => response.json())
      .then(response => {
        response.response === "error" ? reject(response.data) : resolve(response.data);
      }).catch(error => {
        reject(error);
      });
    });
  }
}

export default UserService;