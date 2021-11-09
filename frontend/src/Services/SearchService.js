import BaseService from './BaseService';

const SearchService = {
  baseUrl: BaseService.endpoint + '/',
  searchPosts: (query, params) => {
    return new Promise((resolve, reject) => {
      fetch(SearchService.baseUrl + 'posts/search?query=' + query, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(response => response.json())
      .then(response => {
        console.log(response)
        resolve(response);
      }).catch(error => {
        reject(error);
      });
    });
  }
}

export default SearchService;