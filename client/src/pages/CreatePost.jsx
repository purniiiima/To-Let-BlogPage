import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import axios from 'axios';
import 'react-quill/dist/quill.snow.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Uncategorized');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState(null);  // To display error messages

  const POST_CATEGORIES = ["News And Events", "Business", "Investment", "LifeStyle"];

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent', 'list', 'image'
  ];

  useEffect(() => {
    axios.get('http://localhost:5001/api/test')
      .then(response => {
        console.log(response.data); // Should log: { message: 'Frontend and backend are connected!' }
      })
      .catch(error => {
        console.error('Error connecting to backend', error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const token = localStorage.getItem('token');
    console.log('Token:', token);  // Retrieve token from localStorage
    if (!token) {
      setError('No token found, please log in.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('thumbnail', thumbnail);
    formData.append('name', name);
    formData.append('role', role);
    
    try {
      const response = await axios.post('http://localhost:5001/api/blogs/create', formData, {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in the request headers
          'Content-Type': 'multipart/form-data'
        },
      });
      console.log(response.data); // Handle success
    } catch (error) {
      setError('There was an error creating the post!');  // Set error message
      console.error('There was an error creating the post!', error);
    }
  };

  return (
    <section className="create-post">
      <div className="container">
        <h2>Create Post</h2>
        <form className="form create-post__form" onSubmit={handleSubmit}>
          {error && <p className="form__error-message">{error}</p>}  {/* Display error message */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            autoFocus
            required
          />
          <select
            name="category"
            value={category}
            onChange={e => setCategory(e.target.value)}
            required
          >
            {POST_CATEGORIES.map((cat, index) => <option key={index} value={cat}>{cat}</option>)}
          </select>
          <ReactQuill
            modules={modules}
            formats={formats}
            value={description}
            onChange={setDescription}
          />
          <input
            type="file"
            onChange={e => setThumbnail(e.target.files[0])}
            accept="image/png, image/jpeg"
          />
          <button type="submit" className="btn primary">Create</button>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
