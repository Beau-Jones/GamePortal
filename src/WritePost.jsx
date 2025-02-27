import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import './WritePost.css';

function WritePost() {
  const [textAreaContent1, setTextAreaContent1] = useState('');
  const [textAreaContent2, setTextAreaContent2] = useState('');

  const handleTextAreaChange1 = (event) => setTextAreaContent1(event.target.value);
  const handleTextAreaChange2 = (event) => setTextAreaContent2(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (textAreaContent1.trim() !== '' && textAreaContent2.trim() !== '') {
      const newObject = {
        friend: "Beau Jones",
        game: textAreaContent1,
        text: textAreaContent2,
      };
  
      try {
        await addDoc(collection(db, "posts"), newObject);
        setTextAreaContent1('');
        setTextAreaContent2('');
      } catch (error) {
        console.error("Error adding post:", error);
      }
    }
  };

  return (
    <Form className="write-post-form" onSubmit={handleSubmit}>
      <Card.Header className="card-header" as="h5">Write a Review</Card.Header>
      <Form.Group className="mb-3">
        <Form.Label className="form-label">Game Title</Form.Label>
        <Form.Control 
          className="write-post-textbox" 
          type="text" 
          placeholder="What have you been playing?" 
          value={textAreaContent1}
          onChange={handleTextAreaChange1}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="form-label">What do you think about it?</Form.Label>
        <Form.Control 
          className="write-post-textbox" 
          as="textarea" 
          rows={3}
          value={textAreaContent2}
          onChange={handleTextAreaChange2}
        />
      </Form.Group>
      <Button type="submit">Add Post</Button>
    </Form>
  );
}

export default WritePost;
