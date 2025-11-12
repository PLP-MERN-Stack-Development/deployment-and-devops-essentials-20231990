import React from 'react';
import axios from 'axios';

const BugList = ({ bugs, fetchBugs }) => {

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/bugs/${id}`, { status });
      fetchBugs();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteBug = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/bugs/${id}`);
      fetchBugs();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {bugs.map(bug => (
        <div key={bug._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{bug.title}</h3>
          <p>{bug.description}</p>
          <p>Status: {bug.status}</p>
          <button onClick={() => updateStatus(bug._id, 'open')}>Open</button>
          <button onClick={() => updateStatus(bug._id, 'in-progress')}>In Progress</button>
          <button onClick={() => updateStatus(bug._id, 'resolved')}>Resolved</button>
          <button onClick={() => deleteBug(bug._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BugList;
