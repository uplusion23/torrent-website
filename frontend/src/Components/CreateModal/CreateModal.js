import { useState } from 'react';
import PostService from '../../Services/PostService';
import './CreateModal.css';

export const CreateModal = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const handleTitle = e => {
    e.preventDefault();
    setTitle(e.target.value);
  }

  const handleLink = e => {
    e.preventDefault();
    setLink(e.target.value);
  }

  const handleDescription = e => {
    e.preventDefault();
    setDescription(e.target.value);
  }

  const handleCancel = e => {
    e.preventDefault();
    setTitle('');
    setDescription('');
    setLink('');
    props.setIsModalShown(false);
  }

  const handleSubmit = e => {
    e.preventDefault();
    PostService.submitPost({title, description, link, authorID: props.account.id}).then(res => {
      props.setIsModalShown(false);
      props.showAlert("success", "Post Submitted");
      console.log(res);
      setTitle('');
      setDescription('');
      setLink('');
    }).catch(err => {
      props.showAlert("error", "Error submitting post.\n" + err);
      console.warn(err);
    })
  }

  return (
    <div className="create-modal">
      <div className="create-modal-container">
        <h2>Post New Torrent</h2>
        <div className="group">
          <input
            type="text"
            onChange={handleTitle}
            value={title}
            required></input>
          <span>Title</span>
        </div>
        <div className="group">
          <input
            type="text"
            onChange={handleDescription}
            value={description}
            required></input>
          <span>Description</span>
        </div>
        <div className="group">
          <input
            type="text"
            onChange={handleLink}
            value={link}
            required></input>
          <span>Link</span>
        </div>
        <div className="group buttons">
          <button onClick={handleCancel}>Cancel</button>
          <button
            className="primary"
            onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  )
};