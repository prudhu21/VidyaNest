import React, { useState } from 'react'
import './Courses.css'
import { useNavigate } from 'react-router-dom';

const Courses = ({baseUrl,setActiveKey}) => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');

  const coursesData = [
    {
      id: 1,
      title: "Mern Full Stack",
      description: "Build powerful web apps using MongoDB, Express, React, and Node.js...",
      image: "https://img.freepik.com/free-photo/programming-background-collage_23-2149901771.jpg",
      days: "120–150 days",
      technologies: "HTML | CSS | JS |React.js | Node.js + Express.js| MongoDB",
      techCount: "We have 6 Technologies in this course"
    },
    {
      id: 2,
      title: "Python Full Stack",
      description: "Learn how to build websites using Python...",
      image: "https://img.freepik.com/free-photo/programming-background-collage_23-2149901789.jpg",
      days: "120–150 days",
      technologies: "HTML | CSS | JS | Python + Django | mySql",
      techCount: "We have 5 Technologies in this course"
    },
    {
      id: 3,
      title: "Java Full Stack",
      description: "This course teaches full website development using Java. You will learn Java, Spring Boot, and how to connect front-end and back-end with databases",
      image: "https://img.freepik.com/free-vector/programming-concept-it-education-student-writing-software-coding-application-java-script-it-project-digital-technology-development-website-interface-vector-illustration_613284-1712.jpg?uid=R163686062&ga=GA1.1.761964938.1707574847&semt=ais_hybrid&w=740",
      days: "150–180 days",
      technologies: "HTML | CSS | JS | Python + SpringBoot | mySql",
      techCount: "We have 5 Technologies in this course"
    },
    {
      id:4,
      title:"Android",
      description:"Learn how to create Android apps using Java or Kotlin.",
      image:"https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?uid=R163686062&ga=GA1.1.761964938.1707574847&semt=ais_hybrid&w=740",
      days:"90–120 days",
      technologies:"XML (UI Design)|Java/Kotlin (with Firebase or SQLite)",
      techCount:""
    },
    {
      id:5,
      title:"Cyber Security",
      description:"Understand how to protect data and systems from hacking.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwaOmpUMreDnHg12VV95_IoEfqWdGrlyoC_w&s",
      days:"90–120 days",
      technologies:"Tools like firewalls|Kali Linux| AWS Security| SIEM platforms.",
      techCount:""
    },
    {
      id:6,
      title:"Data Science (Python)",
      description:"Learn how to work with data to find useful insights.You'll study Python, statistics, machine learning, and data visualization.",
      image:"https://img.freepik.com/premium-photo/graph-diagram-finance-technology-dashboard-screen_441990-24153.jpg?",
      days:"150–180 days",
      technologies:"Jupyter Notebook| Python (with Pandas, NumPy)| SQL / MongoDB ",
      techCount:"We have 3 Technologies in this course"
    },
    {
      id:7,
      title:"IOT",
      description:"Learn how smart devices work together using the internet.Build projects that connect sensors, Arduino, and Raspberry Pi.",
      image:"https://img.freepik.com/premium-vector/iot-internet-things-concept-abstract-3d-sphere-globe-with-surface-hexagons-wireframe-hand_127544-632.jpg?uid=R163686062&ga=GA1.1.761964938.1707574847&semt=ais_hybrid&w=740",
      days:"90–120 days",
      technologies:"Arduino IDE | Python |Firebase / Cloud / Local Storage ",
      techCount:"We have 3 Technologies in this course"
    },
    {
      id:8,
      title:".net",
      description:"Build web and desktop applications using C# and ASP.NET.This course helps you create software with the Microsoft stack.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2FhDrkR1trAlFesO7imfQoTMnvRF9f0rbw&s",
      days:"120–150 days",
      technologies:"HTML| CSS| JavaScript|C# with ASP.NET| CoreSQL Server",
      techCount:"We have 5 Technologies in this course"
    },
    {
      id:9,
      title:"C",
      description:"Learn the basics of programming using the C language. Great for beginners to understand how code and memory work.",
      image:"https://img.freepik.com/premium-photo/laptop-with-letter-c-it-is-table-with-letters-c-c-it_1083272-700.jpg?uid=R163686062&ga=GA1.1.761964938.1707574847&semt=ais_hybrid&w=740",
      days:"45–60 days",
      technologies:"Course Focus: Core Programming",
      techCount:""
    },
    {
      id:10,
      title:"Python",
      description:"Learn one of the most popular and easy-to-use programming languages.Great for beginners, automation, and AI projects.",
      image:"https://img.freepik.com/premium-photo/blue-snake-with-yellow-tail-is-black-background-with-text-blue-snake_1348187-22919.jpg?uid=R163686062&ga=GA1.1.761964938.1707574847&semt=ais_hybrid&w=740",
      days:" 45–60 days",
      technologies:"Focus: Scripting & Automation",
      techCount:""
    },
    {
      id:11,
      title:"AWS",
      description:"Learn how to use cloud services to host websites and apps.Explore EC2, S3, Lambda, and other AWS tools.",
      image:"https://img.freepik.com/premium-photo/person-sits-front-computer-with-words-macbook-screen_1274915-424.jpg?uid=R163686062&ga=GA1.1.761964938.1707574847&semt=ais_hybrid&w=740",
      days:" 90-120 days",
      technologies:"Focus: Cloud Computing & Deployment",
      techCount:""
    },
    {
      id:12,
      title:"C++",
      description:"Learn object-oriented programming with C++.Build apps and understand how games and system software are created.",
      image:"https://img.freepik.com/premium-photo/programming-code-abstract-technology-background_272306-158.jpg?uid=R163686062&ga=GA1.1.761964938.1707574847&semt=ais_hybrid&w=740",
      days:"60–75 days",
      technologies:"Focus: OOPs & Logic Building",
      techCount:""
    },
    {
      id:13,
      title:"Java",
      description:"Learn Java from scratch.Use it to build web apps, mobile apps, or prepare for job interviews with strong logic skills.",
      image:"https://img.freepik.com/premium-photo/java-programming-code-abstract-technology-background_272306-149.jpg?uid=R163686062&ga=GA1.1.761964938.1707574847&semt=ais_hybrid&w=740",
      days:"75–90  days",
      technologies:"Focus: OOPs & Core Development",
      techCount:""
    },
    {
      id:14,
      title:"MySQL",
      description:"Understand how to store, manage, and retrieve data using databases. Learn to write SQL queries using MySQL.",
      image:"https://img.freepik.com/free-vector/gradient-sql-illustration_23-2149247491.jpg?uid=R163686062&ga=GA1.1.761964938.1707574847&semt=ais_hybrid&w=740",
      days:"30–45 days",
      technologies:"Focus: Relational Databases & SQL Queries",
      techCount:""
    },
    {
      id:15,
      title:"Angular",
      description:"Build fast and dynamic websites using Angular.Learn components, routing, and real-time data updates.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjTx8WM6wr6WG5vVaL9UY0apmcesDRrJfDuA&s",
      days:"60–75 days",
      technologies:"Focus: Frontend Development & SPA (Single Page Apps)",
      techCount:""
    },
    {
      id:16,
      title:"GIT&GITHUB",
      description:"Learn version control with Git.Understand how developers track changes and work together using GitHub.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ_VEeJaVk9D5w5YY-thaYU6Hdk1b_9KcW-Q&s",
      days:"10–15 days",
      technologies:"",
      techCount:""
    },
    {
      id:17,
      title:"PowerBi",
      description:"Learn how to turn data into dashboards and reports.Use Power BI to create visual insights for business decisions.",
      image:"https://img.freepik.com/free-photo/analytics-plan-strategy-insight-concept_53876-124214.jpg?uid=R163686062&ga=GA1.1.761964938.1707574847&semt=ais_hybrid&w=740",
      days:"45-60 days",
      technologies:"Power BI Dashboards| Transformation with Power Query |Excel / SQL ",
      techCount:"We have 3 Technologies in this course"
    },
    {
      id:18,
      title:"Excel",
      description:"Master Excel for data entry, formulas, charts, and analysis. Very useful for office work, students, and business users.",
      image:"https://img.freepik.com/premium-photo/woman-working-with-data-graphs-spreadsheet-document-desktop-computer_746318-1044.jpg?uid=R163686062&ga=GA1.1.761964938.1707574847&semt=ais_hybrid&w=740",
      days:" 45-60 days",
      technologies:"Focus: Data Analysis & Reporting",
      techCount:""
    }
    
  ];

  const filteredCourses = coursesData.filter(course =>
    course.title.toLowerCase().includes(searchInput.toLowerCase()) ||
    course.technologies.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <div className="search-container mb-4 d-flex">
        <button className='btn-outline-success search-btn'>Search</button>
        <input
          type="text"
          placeholder="Search courses..."
          className="form-control"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredCourses.map((course) => (
          <div className="col" key={course.id}>
            <div className="card h-100">
              <img src={course.image} className="card-img-top" alt={course.title} />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <div className='d-flex flex-row'>
                  <button 
                    className='btn-outline-success start-btn' 
                    onClick={() => setActiveKey("mernfs")}
                  >
                    Start
                  </button>
                  <button 
                    className='btn-outline-success' 
                    onClick={() => setActiveKey("quiz")}
                  >
                    Quiz
                  </button>
                </div>
              </div>
              <div className="card-footer">
                <p className='days'>{course.days}</p>
                <small className="text-muted">{course.technologies}</small><br/>
                <small className="text-muted">{course.techCount}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses;