import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import './WritePost.css';

function WritePost({ reviews, onDataUpdate }) {

  // State for storing the content of the two text areas
  const [textAreaContent1, setTextAreaContent1] = useState('');
  const [textAreaContent2, setTextAreaContent2] = useState('');
  // Initialize state with the imported `data`
  const [updatedData, setUpdatedData] = useState(reviews);

  // Handle change for the first textarea
  const handleTextAreaChange1 = (event) => {
    setTextAreaContent1(event.target.value);
  };

  // Handle change for the second textarea
  const handleTextAreaChange2 = (event) => {
    setTextAreaContent2(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (textAreaContent1.trim() !== '' && textAreaContent2.trim() !== '') {
  // Create a new object with key-value pairs from the two text areas
  const newObject = {
          friend: "Beau Jones",
          game: textAreaContent1, // First key-value pair
          text: textAreaContent2, // Second key-value pair
      };

      // Create a new array with the new object added
      const newData = [...updatedData, newObject];
      // Pass updated data to parent via onDataUpdate
      onDataUpdate(newData);

      // Update the state with the new data array
      setUpdatedData(newData);

  // Clear the text areas after submission
  setTextAreaContent1('');
  setTextAreaContent2('');
  console.log(newData);
  }
};


  return (
    <Form className="write-post-form" onSubmit={handleSubmit}>
        <Card.Header className="card-header" as="h5">Write a Review</Card.Header>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="form-label">Game Title</Form.Label>
        <Form.Control 
        className="write-post-textbox" 
        type="title" 
        placeholder="What have you been playing?" 
        value={textAreaContent1}
        onChange={handleTextAreaChange1}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="form-label">What do you think about it?</Form.Label>
        <Form.Control 
        className="write-post-textbox" 
        as="textarea" 
        rows={3}
        value={textAreaContent2}
        onChange={handleTextAreaChange2}/>
      </Form.Group>
      <Button type="submit">Add Post</Button>
    </Form>
  );
}

export default WritePost;
