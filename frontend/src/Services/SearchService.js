import BaseService from './BaseService';

const SearchService = {
  baseUrl: BaseService.endpoint + '/posts',
  getPosts: (params, type = '') => {
    type = (type === 'search') ? '/search?' : '?';
    return new Promise((resolve, reject) => {
      fetch(SearchService.baseUrl + type + new URLSearchParams({
        ...params
      }), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(response => response.json())
      .then(response => {
        console.log(response);
        resolve(response);
      }).catch(error => {
        reject(error);
      });
    });
  }
}

export default SearchService;