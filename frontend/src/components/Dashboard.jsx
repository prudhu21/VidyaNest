import React, { useState, useEffect } from 'react';

import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer,} from 'recharts'

import './Dashboard.css';
import { Button, Modal, Form, InputGroup } from 'react-bootstrap';
import { BsChatDots, BsSend } from 'react-icons/bs';

const Dashboard = ({baseUrl}) => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chartData, setChartData] = useState([]);
  const [selectedMetric, setSelectedMetric] = useState('LPA');
  const [selectedCourses, setSelectedCourses] = useState(["MERN FULL Stack", "Java FULL Stack", "Android Development", "C Language", "Java Core"]);


  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

 
    const userMessage = { text: inputMessage, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Call OpenAI API
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "You are a helpful AI assistant. Provide concise and accurate responses."
            },
            ...messages.map(msg => ({
              role: msg.sender === 'user' ? 'user' : 'assistant',
              content: msg.text
            })),
            { role: "user", content: inputMessage }
          ],
          temperature: 0.7
        })
      });

      const data = await response.json();
      const aiResponse = data.choices[0].message.content;
      
      // Add AI response to chat
      setMessages(prev => [...prev, { text: aiResponse, sender: 'ai' }]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      setMessages(prev => [...prev, { 
        text: "Sorry, I'm having trouble responding right now. Please try again later.", 
        sender: 'ai' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  //dashboard analysis

  const localSalaryData = {
  'MERN FULL Stack': {
    2021: '20 LPA',
    2022: '28 LPA',
    2023: '35 LPA',
    2024: '42 LPA',
  },
  'Java FULL Stack': {
    2021: '18 LPA',
    2022: '25 LPA',
    2023: '32 LPA',
    2024: '38 LPA',
  },
  'Android Development': {
    2021: '15 LPA',
    2022: '22 LPA',
    2023: '30 LPA',
    2024: '36 LPA',
  },
  'C Language': {
    2021: '10 LPA',
    2022: '14 LPA',
    2023: '17 LPA',
    2024: '20 LPA',
  },
  'Java Core': {
    2021: '12 LPA',
    2022: '18 LPA',
    2023: '25 LPA',
    2024: '31 LPA',
  },
  }

  const transformData = rawData => {
    const years = Object.keys(Object.values(rawData)[0])
    return years.map(year => {
      const entry = {year}
      Object.entries(rawData).forEach(([course, yearData]) => {
        entry[course] = parseInt(yearData[year])
      })
      return entry
    })
  }

  useEffect(() => {
    const formatted = transformData(localSalaryData)
    setChartData(formatted)
  }, [])

  const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#00C49F']
  const allCourses = Object.keys(localSalaryData)

  const handleCourseToggle = course => {
    setSelectedCourses(prev =>
      prev.includes(course) ? prev.filter(c => c !== course) : [...prev, course]
    );
  };

  return (
    <div>
      
      <div style={{padding: '20px', fontFamily: 'Arial'}}>
      <h3 style={{marginLeft:'600px'}}>Top 5 Courses📊</h3>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px', gap: '10px', flexWrap: 'wrap' }}>
          {allCourses.map(course => (
            <Button
              key={course}
              variant={selectedCourses.includes(course) ? 'primary' : 'outline-primary'}
              onClick={() => handleCourseToggle(course)}
              size="sm"
            >
              {course}
            </Button>
          ))}
        </div>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis label={{value: 'LPA', angle: -90, position: 'insideLeft'}} />
          <Tooltip />
          <Legend />
          {selectedCourses.map((course, index) => (
            <Bar
              key={course}
              dataKey={course}
              fill={colors[index % colors.length]}
              name={course}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
      </div>

      {/* Chat button */}
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

      {/* Chat modal */}
      <Modal
        show={showChat}
        onHide={() => setShowChat(false)}
        dialogClassName="chat-modal"
        backdropClassName="chat-backdrop"
      >
        <Modal.Header closeButton>
          <Modal.Title>AI Assistant</Modal.Title>
        </Modal.Header>
        <Modal.Body className="chat-body">
          <div className="messages-container">
            {messages.length === 0 ? (
              <div className="welcome-message">
                <p>Hello! I'm your AI assistant. How can I help you today?</p>
              </div>
            ) : (
              messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`message ${message.sender}`}
                >
                  {message.text}
                </div>
              ))
            )}
            {isLoading && (
              <div className="message ai">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Form onSubmit={handleSendMessage} className="w-100">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                disabled={isLoading}
              />
              <Button 
                variant="primary" 
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
              >
                <BsSend />
              </Button>
            </InputGroup>
          </Form>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Dashboard;