import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Button, Modal, Form, InputGroup } from 'react-bootstrap';
import { BsChatDots, BsSend } from 'react-icons/bs';

const Dashboard = () => {

  const teacherUploadData = [
    { name: 'Praveen Sir', notes: 12, videos: 8 },
    { name: 'Ramesh Sir', notes: 10, videos: 12 },
    { name: 'Divya Mam', notes: 18, videos: 20 },
    { name: 'Suresh Sir', notes: 14, videos: 10 },
    { name: 'Kavitha Mam', notes: 12, videos: 8 }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial',marginLeft:"120px",width:"600px" }}>
      <h3 style={{marginLeft:"100px"}}>Teachers - Notes & Videos 📚🎥</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={teacherUploadData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="notes" fill="#0088FE" name="Notes Uploaded" />
          <Bar dataKey="videos" fill="#FF8042" name="Videos Uploaded" />
        </BarChart>
      </ResponsiveContainer>

      <Button
        variant="dark"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 10px rgba(0,0,0,0.3)',
          zIndex: 1000,
          border: "2px solid blue"
        }}
        onClick={() => setShowChat(true)}
      >
        <BsChatDots size={24} />
      </Button>

    </div>
  );
};

export default Dashboard;
