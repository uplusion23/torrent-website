import BaseService from './BaseService';

const PostService = {
  baseUrl: BaseService.endpoint + '/posts',
  submitPost: ({title, description, link, authorID}) => {
    console.log({
      title,
      description,
      link,
      authorID
    })
    return new Promise((resolve, reject) => {
      fetch(`${PostService.baseUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          description,
          link,
          authorID
        })
      })
      .then(response => response.json())
      .then(response => {
        console.log('res', response)
        response.response === "error" ? reject(response.data) : resolve(response.data);
      }).catch(error => {
        reject(error);
      });
    });
  }
}

export default PostService;