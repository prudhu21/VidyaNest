import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './InterviewQuestions.css'
import Accordion from 'react-bootstrap/Accordion';

const InterviewQuestions = ({baseUrl}) => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3 mt-3"
      justify
    >
      <Tab eventKey="home" title="Google">
        <Accordion defaultActiveKey="0" alwaysOpen>
            <Accordion.Item eventKey="01">
              <Accordion.Header>Python Full Stack</Accordion.Header>
              <Accordion.Body>
                <Accordion.Item eventKey="011">
                  <Accordion.Header>Python Programming</Accordion.Header>
                  <Accordion.Body>
                      What are Python’s key features?<br/><br/>

                      Difference between list, tuple, and set.<br/><br/>

                      What is a generator? How is it different from a function?<br/><br/>

                      Explain decorators and use cases.<br/><br/>

                      What is the GIL (Global Interpreter Lock)?<br/><br/>

                      What are *args and **kwargs?<br/><br/>

                      How does memory management work in Python?<br/><br/>

                      How do you handle exceptions and create custom exceptions?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="012">
                  <Accordion.Header> OOP in Python</Accordion.Header>
                  <Accordion.Body>
                    Explain the four pillars of OOP with Python examples.<br/><br/>

                    Difference between @staticmethod, @classmethod, and instance method.<br/><br/>

                    What is method overriding vs method overloading?<br/><br/>

                    What is multiple inheritance and MRO?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="013">
                  <Accordion.Header> Django / Flask</Accordion.Header>
                  <Accordion.Body>
                    Difference between Django and Flask?<br/><br/>

                    Explain Django’s MVT architecture.<br/><br/>

                    How is routing handled in Flask?<br/><br/>

                    What are middleware in Django?<br/><br/>

                    How does Django ORM work?<br/><br/>

                    How do you use Django forms and model forms?<br/><br/>

                    How do you manage migrations in Django?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="014">
                  <Accordion.Header>Frontend</Accordion.Header>
                  <Accordion.Body>
                    How does React differ from plain JS?<br/><br/>

                    Explain the virtual DOM.<br/><br/>

                    What is the use of useState and useEffect hooks?<br/><br/>

                    Difference between props and state.<br/><br/>

                    How do you pass data from child to parent in React?<br/><br/>

                    What is the purpose of keys in React?<br/><br/>

                    What are flexbox and grid layouts in CSS?<br/><br/>

                    Explain box model in CSS.<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="015">
                  <Accordion.Header> REST APIs</Accordion.Header>
                  <Accordion.Body>
                    What is REST? What are its principles?<br/><br/>

                    How do you handle authentication and authorization?<br/><br/>

                    What is CORS and how do you handle it?<br/><br/>

                    Difference between PUT and PATCH.<br/><br/>

                    How do you structure a full stack app?<br/><br/>

                    How do you consume a REST API in React?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="016">
                  <Accordion.Header> Database</Accordion.Header>
                  <Accordion.Body>
                    How do joins work in SQL?<br/><br/>

                    Difference between SQL and NoSQL.<br/><br/>

                    What are indexes in a database?<br/><br/>

                    How do you prevent SQL injection in Django?<br/><br/>

                    How to connect Django with PostgreSQL/MongoDB?<br/><br/>

                    ce and MRO?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="02">
              <Accordion.Header>Java Full Stack</Accordion.Header>
              <Accordion.Body>
                <Accordion.Item eventKey="021">
                  <Accordion.Header>Java Programming</Accordion.Header>
                  <Accordion.Body>
                      What are the key differences between abstract classes and interfaces in Java?<br/><br/>

                      Explain Java Memory Management (heap, stack, garbage collection).<br/><br/>

                      What is the JVM and how does it work?<br/><br/>

                      Difference between HashMap, LinkedHashMap, and TreeMap?<br/><br/>

                      What is multithreading? How is it implemented in Java?<br/><br/>

                      Explain the use of synchronized, volatile, and ConcurrentHashMap.<br/><br/>

                      What is Java Stream API and how do you use it?<br/><br/>

                      What is the difference between checked and unchecked exceptions?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="022">
                  <Accordion.Header>Spring Boot</Accordion.Header>
                  <Accordion.Body>
                    What is the difference between Spring and Spring Boot?<br/><br/>

                    How does dependency injection work in Spring?<br/><br/>

                    What are annotations like @Component, @Service, @Repository, @Autowired, @Qualifier?<br/><br/>

                    What is Spring Data JPA? How does it simplify persistence?<br/><br/>

                    How do you create and consume REST APIs in Spring Boot?<br/><br/>

                    What is Spring Security? How do you implement JWT-based authentication?<br/><br/>

                    How do you handle exception handling globally using @ControllerAdvice?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="023">
                  <Accordion.Header>Frontend</Accordion.Header>
                  <Accordion.Body>
                    How does React/Angular work? Which do you prefer and why?<br/><br/>

                    Difference between state and props in React.<br/><br/>

                    Explain React hooks: useState, useEffect, and custom hooks.<br/><br/>

                    How do you handle API calls in frontend?<br/><br/>

                    What is the Virtual DOM?<br/><br/>

                    Explain component lifecycle in React.<br/><br/>

                    How do you handle form validation and user authentication on frontend?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="024">
                  <Accordion.Header> REST APIs</Accordion.Header>
                  <Accordion.Body>
                    What is REST architecture? What are REST principles?<br/><br/>

                    Difference between PUT, POST, and PATCH.<br/><br/>

                    How do you implement versioning in REST APIs?<br/><br/>

                    What are microservices and how are they different from monolithic architecture?<br/><br/>

                    How do you handle inter-service communication? (e.g., Feign, RESTTemplate, gRPC)<br/><br/>

                    What are circuit breakers, service discovery, and load balancing (Spring Cloud / Netflix OSS)?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="025">
                  <Accordion.Header> Database</Accordion.Header>
                  <Accordion.Body>
                    Difference between SQL and NoSQL databases.<br/><br/>

                    What are joins, indexes, and transactions in SQL?<br/><br/>

                    How do you implement pagination and sorting with Spring Data?<br/><br/>

                    What are best practices to prevent SQL injection?<br/><br/>

                    How do you handle ORM with Hibernate and JPA?<br/><br/>

                    ce and MRO?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="03">
              <Accordion.Header>Mern Full Stack</Accordion.Header>
              <Accordion.Body>
                <Accordion.Item eventKey="031">
                  <Accordion.Header>MongoDB</Accordion.Header>
                  <Accordion.Body>
                      What is NoSQL and how does MongoDB differ from SQL databases?<br/><br/>
                      What are documents and collections in MongoDB?<br/><br/>
                      How do you model relationships in MongoDB (embedding vs referencing)?<br/><br/>
                      What are indexes and how do they improve performance?<br/><br/>
                      How do you perform CRUD operations in MongoDB using Mongoose?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="032">
                  <Accordion.Header>ExpressJs</Accordion.Header>
                  <Accordion.Body>
                    What is Express.js and why is it used?<br/><br/>
                    How do you set up middleware in Express?<br/><br/>
                    How do you handle errors in Express?<br/><br/>
                    What are routes and how are they created in Express?<br/><br/>
                    How do you protect routes using middleware (e.g., authentication)?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="033">
                  <Accordion.Header>ReactJs</Accordion.Header>
                  <Accordion.Body>
                    What is the difference between a functional component and a class component?<br/><br/>
                    What are hooks? Explain useState and useEffect.<br/><br/>
                    How do you lift state up in React?<br/><br/>
                    How do you manage global state? (Redux, Context API)<br/><br/>
                    What is React Router and how do you implement navigation?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="034">
                  <Accordion.Header> NodeJs</Accordion.Header>
                  <Accordion.Body>
                    What is Node.js and how does it handle asynchronous code?<br/><br/>
                    Explain the event loop and non-blocking I/O.<br/><br/>
                    How do you create a REST API with Node and Express?<br/><br/>
                    What is the difference between require() and import?<br/><br/>
                    How do you handle file uploads or read/write to a file in Node.js?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion.Body>
            </Accordion.Item>
        </Accordion>
      </Tab>
      
      <Tab eventKey="Amazon" title="Amazon">
          <Accordion defaultActiveKey="0" alwaysOpen>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Python Full Stack</Accordion.Header>
              <Accordion.Body>
                <Accordion.Item eventKey="11">
                  <Accordion.Header>Python Programming</Accordion.Header>
                  <Accordion.Body>
                    What is the difference between deep copy and shallow copy?<br/><br/>
                    How does Python's memory management work?<br/><br/>
                    Explain list comprehension with examples.<br/><br/>
                    How do you handle large datasets in Python efficiently?<br/><br/>
                    What is the difference between @staticmethod and @classmethod?<br/><br/>
                    How do you manage packages and environments in Python (pip, venv)?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="12">
                  <Accordion.Header>Django/Flask</Accordion.Header>
                  <Accordion.Body>
                    What is the difference between Django and Flask?<br/><br/>
                    How does Django ORM work?<br/><br/>
                    How do you manage user authentication in Django?<br/><br/>
                    Explain middleware in Django and its lifecycle.<br/><br/>
                    How do you scale Django apps for large traffic?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="13">
                  <Accordion.Header>Frontend</Accordion.Header>
                  <Accordion.Body>
                    How do you optimize React apps for performance?<br/><br/>
                    Explain lazy loading and code splitting in React.<br/><br/>
                    What are common accessibility practices in frontend development?<br/><br/>
                    How do you handle responsive design across devices?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="14">
                  <Accordion.Header>REST APIs</Accordion.Header>
                  <Accordion.Body>
                    What are the main REST principles?<br/><br/>
                    How do you implement rate limiting and throttling?<br/><br/>
                    How do you ensure security in APIs (CORS, Auth)?<br/><br/>
                    Difference between PUT, PATCH, and POST?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="15">
                  <Accordion.Header>Database</Accordion.Header>
                  <Accordion.Body>
                    What is an index and how does it affect performance?<br/><br/>
                    How do transactions and isolation levels work?<br/><br/>
                    Explain query optimization techniques.<br/><br/>
                    How do you connect Django with PostgreSQL?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Java Full Stack</Accordion.Header>
              <Accordion.Body>
                <Accordion.Item eventKey="21">
                  <Accordion.Header>Java Core</Accordion.Header>
                  <Accordion.Body>
                    Explain the Java memory model (heap, stack, permgen).<br/><br/>
                    What is the use of volatile and synchronized?<br/><br/>
                    Difference between HashMap and ConcurrentHashMap?<br/><br/>
                    Explain exception handling hierarchy in Java.<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="22">
                  <Accordion.Header>Spring Boot</Accordion.Header>
                  <Accordion.Body>
                    How does Spring Dependency Injection work?<br/><br/>
                    What are common annotations used in Spring Boot?<br/><br/>
                    How do you handle security with Spring Security and JWT?<br/><br/>
                    Explain how to implement exception handling globally.<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="23">
                  <Accordion.Header>Frontend</Accordion.Header>
                  <Accordion.Body>
                    How do you fetch and display API data in React?<br/><br/>
                    What is the difference between controlled and uncontrolled components?<br/><br/>
                    How do you handle component lifecycle events?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="24">
                  <Accordion.Header>REST APIs</Accordion.Header>
                  <Accordion.Body>
                    What are HTTP status codes and their use?<br/><br/>
                    How do you version APIs in Spring Boot?<br/><br/>
                    Explain microservices vs monoliths.<br/><br/>
                    What is service discovery and circuit breaker in microservices?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="25">
                  <Accordion.Header>Database</Accordion.Header>
                  <Accordion.Body>
                    Explain JPA and Hibernate difference.<br/><br/>
                    How do you manage schema migrations in Spring?<br/><br/>
                    What is the N+1 problem and how to fix it?<br/><br/>
                    Difference between SQL joins.<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>MERN Full Stack</Accordion.Header>
              <Accordion.Body>
                <Accordion.Item eventKey="31">
                  <Accordion.Header>MongoDB</Accordion.Header>
                  <Accordion.Body>
                    What are indexes in MongoDB?<br/><br/>
                    How do you optimize queries?<br/><br/>
                    Difference between embedded vs referenced documents?<br/><br/>
                    Explain MongoDB aggregation pipeline.<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="32">
                  <Accordion.Header>Express.js</Accordion.Header>
                  <Accordion.Body>
                    How do you structure middleware?<br/><br/>
                    How do you handle route-level error handling?<br/><br/>
                    How do you secure APIs with Express?<br/><br/>
                    What are best practices for RESTful Express APIs?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="33">
                  <Accordion.Header>React.js</Accordion.Header>
                  <Accordion.Body>
                    How do you handle state management in large apps?<br/><br/>
                    What is the Context API and when should you use it?<br/><br/>
                    What is useCallback and useMemo?<br/><br/>
                    Explain dynamic routing using React Router.<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="34">
                  <Accordion.Header>Node.js</Accordion.Header>
                  <Accordion.Body>
                    Explain the event loop.<br/><br/>
                    How do you implement asynchronous programming (async/await)?<br/><br/>
                    How do you handle file uploads in Node?<br/><br/>
                    How do you handle performance bottlenecks in Node?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
      </Tab>

      <Tab eventKey="Microsoft" title="Microsoft">
        <Accordion defaultActiveKey="0" alwaysOpen>
        
          <Accordion.Item eventKey="1">
            <Accordion.Header>Python Full Stack</Accordion.Header>
            <Accordion.Body>
              <Accordion.Item eventKey="11">
                <Accordion.Header>Python Programming</Accordion.Header>
                <Accordion.Body>
                  How is memory managed in Python?<br/><br/>
                  Explain generators vs. iterators.<br/><br/>
                  What are decorators in Python?<br/><br/>
                  How does GIL (Global Interpreter Lock) affect threading?<br/><br/>
                  Explain Python's dynamic typing.<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="12">
                <Accordion.Header>Django/Flask</Accordion.Header>
                <Accordion.Body>
                  Difference between Django ORM and raw SQL?<br/><br/>
                  How do signals work in Django?<br/><br/>
                  Explain Django middleware flow.<br/><br/>
                  How to optimize Django for high performance?<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="13">
                <Accordion.Header>Frontend</Accordion.Header>
                <Accordion.Body>
                  What is React's virtual DOM and why is it fast?<br/><br/>
                  How do you structure a scalable React project?<br/><br/>
                  Explain controlled vs uncontrolled components.<br/><br/>
                  How do you handle authentication flows in React apps?<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="14">
                <Accordion.Header>REST APIs</Accordion.Header>
                <Accordion.Body>
                  How do you design RESTful endpoints?<br/><br/>
                  How do you handle pagination in APIs?<br/><br/>
                  Explain JWT token structure and validation.<br/><br/>
                  How do you test APIs (Postman, pytest, etc.)?<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="15">
                <Accordion.Header>Database</Accordion.Header>
                <Accordion.Body>
                  Difference between relational and document DBs?<br/><br/>
                  How do transactions work in PostgreSQL?<br/><br/>
                  What is normalization and denormalization?<br/><br/>
                  Explain database indexing strategies.<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Java Full Stack</Accordion.Header>
            <Accordion.Body>

              <Accordion.Item eventKey="21">
                <Accordion.Header>Java Core</Accordion.Header>
                <Accordion.Body>
                  Explain the difference between interface and abstract class.<br/><br/>
                  What is the role of JVM, JRE, and JDK?<br/><br/>
                  How do you handle concurrency in Java?<br/><br/>
                  What are functional interfaces and lambda expressions?<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="22">
                <Accordion.Header>Spring Boot</Accordion.Header>
                <Accordion.Body>
                  What is dependency injection?<br/><br/>
                  Difference between @Component, @Service, and @Repository?<br/><br/>
                  How do you configure properties in Spring Boot?<br/><br/>
                  How to build and consume REST APIs in Spring Boot?<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="23">
                <Accordion.Header>Frontend</Accordion.Header>
                <Accordion.Body>
                  What are React hooks and why are they used?<br/><br/>
                  How do you implement role-based routing in React?<br/><br/>
                  How do you optimize rendering of large lists?<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="24">
                <Accordion.Header>REST APIs</Accordion.Header>
                <Accordion.Body>
                  How do you secure APIs in Spring (OAuth, JWT)?<br/><br/>
                  Difference between monolith and microservices?<br/><br/>
                  What is OpenAPI / Swagger?<br/><br/>
                  How do you log and monitor production APIs?<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="25">
                <Accordion.Header>Database</Accordion.Header>
                <Accordion.Body>
                  Explain Hibernate lazy loading vs eager loading.<br/><br/>
                  How do you use JPA repositories?<br/><br/>
                  How do you perform batch inserts?<br/><br/>
                  What’s the purpose of Flyway or Liquibase?<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>MERN Full Stack</Accordion.Header>
            <Accordion.Body>

              <Accordion.Item eventKey="31">
                <Accordion.Header>MongoDB</Accordion.Header>
                <Accordion.Body>
                  Explain MongoDB data modeling strategies.<br/><br/>
                  What are MongoDB transactions and when to use them?<br/><br/>
                  How do you handle schema design in NoSQL?<br/><br/>
                  Difference between aggregation and map-reduce?<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="32">
                <Accordion.Header>Express.js</Accordion.Header>
                <Accordion.Body>
                  How to write middleware functions?<br/><br/>
                  How do you use async/await with Express routes?<br/><br/>
                  How do you validate user input in Express?<br/><br/>
                  How to structure large-scale Express applications?<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="33">
                <Accordion.Header>React.js</Accordion.Header>
                <Accordion.Body>
                  How do you manage global state in React (Context vs Redux)?<br/><br/>
                  How do you handle React performance issues?<br/><br/>
                  Explain SSR vs CSR in React apps.<br/><br/>
                  How to secure frontend routes in React?<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="34">
                <Accordion.Header>Node.js</Accordion.Header>
                <Accordion.Body>
                  How does Node handle non-blocking I/O?<br/><br/>
                  Explain cluster module in Node.js.<br/><br/>
                  How do you handle exceptions and logging?<br/><br/>
                  What are Node.js best practices for scalability?<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </Tab>

      <Tab eventKey="Accenture" title="Accenture">
        <Accordion defaultActiveKey="0" alwaysOpen>

          {/* Python Full Stack */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>Python Full Stack</Accordion.Header>
            <Accordion.Body>

              <Accordion.Item eventKey="11">
                <Accordion.Header>Python Programming</Accordion.Header>
                <Accordion.Body>
                  What are Python's key features for enterprise apps?<br/><br/>
                  Difference between mutable and immutable types?<br/><br/>
                  How does exception handling work in Python?<br/><br/>
                  What are Python's memory management techniques?<br/><br/>
                  How do you improve performance in Python scripts?<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="12">
                <Accordion.Header>Django/Flask</Accordion.Header>
                <Accordion.Body>
                  How do you handle session management in Django?<br/><br/>
                  Explain Django MVT architecture.<br/><br/>
                  How to implement file upload in Django?<br/><br/>
                  Difference between Flask and Django for microservices?<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="13">
                <Accordion.Header>Frontend</Accordion.Header>
                <Accordion.Body>
                  How do you integrate Django with React?<br/><br/>
                  What are best practices for writing reusable React components?<br/><br/>
                  Explain CSS-in-JS solutions and advantages.<br/><br/>
                  How do you manage forms in React (Formik or React Hook Form)?<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="14">
                <Accordion.Header>REST APIs</Accordion.Header>
                <Accordion.Body>
                  How do you test Django REST APIs?<br/><br/>
                  What are serializers in Django REST Framework?<br/><br/>
                  How do you handle file downloads via APIs?<br/><br/>
                  How do you handle error responses consistently?<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="15">
                <Accordion.Header>Database</Accordion.Header>
                <Accordion.Body>
                  What is the use of PostgreSQL in real-time apps?<br/><br/>
                  How do you handle migrations in Django?<br/><br/>
                  What is a database deadlock and how to resolve it?<br/><br/>
                  How do you tune SQL queries for performance?<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

            </Accordion.Body>
          </Accordion.Item>

          {/* Java Full Stack */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>Java Full Stack</Accordion.Header>
            <Accordion.Body>

              <Accordion.Item eventKey="21">
                <Accordion.Header>Java Core</Accordion.Header>
                <Accordion.Body>
                  Explain exception hierarchy in Java.<br/><br/>
                  What is a Java Stream and when to use it?<br/><br/>
                  How does garbage collection work?<br/><br/>
                  Difference between HashMap and ConcurrentHashMap?<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="22">
                <Accordion.Header>Spring Boot</Accordion.Header>
                <Accordion.Body>
                  How do you secure Spring Boot APIs?<br/><br/>
                  What is Spring Data JPA and how is it used?<br/><br/>
                  How do you handle externalized config (YAML)?<br/><br/>
                  How to implement exception handling in Spring Boot?<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="23">
                <Accordion.Header>Frontend</Accordion.Header>
                <Accordion.Body>
                  How to connect a Spring Boot backend with React frontend?<br/><br/>
                  What is lazy loading in React?<br/><br/>
                  How do you handle environment-based configurations in React?<br/><br/>
                  What’s the difference between props and state?<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="24">
                <Accordion.Header>REST APIs</Accordion.Header>
                <Accordion.Body>
                  How do you version APIs in Spring Boot?<br/><br/>
                  How to validate input using Hibernate Validator?<br/><br/>
                  How do you implement pagination in Spring Boot APIs?<br/><br/>
                  What is CORS and how to configure it?<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="25">
                <Accordion.Header>Database</Accordion.Header>
                <Accordion.Body>
                  Explain usage of joins in SQL with examples.<br/><br/>
                  How to handle schema migrations in production?<br/><br/>
                  How does JPA manage object-relational mapping?<br/><br/>
                  Difference between native query and JPQL?<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

            </Accordion.Body>
          </Accordion.Item>

          {/* MERN Full Stack */}
          <Accordion.Item eventKey="3">
            <Accordion.Header>MERN Full Stack</Accordion.Header>
            <Accordion.Body>

              <Accordion.Item eventKey="31">
                <Accordion.Header>MongoDB</Accordion.Header>
                <Accordion.Body>
                  What is a replica set in MongoDB?<br/><br/>
                  How to perform data aggregation in MongoDB?<br/><br/>
                  What are indexes in MongoDB and when to use them?<br/><br/>
                  How does MongoDB handle scaling?<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="32">
                <Accordion.Header>Express.js</Accordion.Header>
                <Accordion.Body>
                  How do you set up middleware for logging?<br/><br/>
                  How do you structure routes and controllers?<br/><br/>
                  How do you manage error handling in Express?<br/><br/>
                  How to integrate Express with MongoDB using Mongoose?<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="33">
                <Accordion.Header>React.js</Accordion.Header>
                <Accordion.Body>
                  What is the use of useMemo and useCallback?<br/><br/>
                  How do you perform API calls using Axios?<br/><br/>
                  How do you persist login sessions in React?<br/><br/>
                  What are React keys and why are they important?<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="34">
                <Accordion.Header>Node.js</Accordion.Header>
                <Accordion.Body>
                  What is event loop in Node.js?<br/><br/>
                  How do you handle CPU-intensive tasks?<br/><br/>
                  How to set up logging (e.g., with Winston)?<br/><br/>
                  How to deploy Node.js applications securely?<br/><br/>
                </Accordion.Body>
              </Accordion.Item>

            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </Tab>

      <Tab eventKey="Tcs" title="TCS">
        <Accordion defaultActiveKey="0" alwaysOpen>

            {/* Python Full Stack */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Python Full Stack</Accordion.Header>
              <Accordion.Body>

                <Accordion.Item eventKey="11">
                  <Accordion.Header>Python Programming</Accordion.Header>
                  <Accordion.Body>
                    What are the key differences between Python 2 and 3?<br/><br/>
                    What is list comprehension and how does it work?<br/><br/>
                    How does Python handle memory management?<br/><br/>
                    Explain decorators and their use cases.<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="12">
                  <Accordion.Header>Django/Flask</Accordion.Header>
                  <Accordion.Body>
                    How do you define models in Django?<br/><br/>
                    How is URL routing handled in Flask?<br/><br/>
                    What is a context processor in Django?<br/><br/>
                    How do you handle sessions in Flask securely?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="13">
                  <Accordion.Header>Frontend</Accordion.Header>
                  <Accordion.Body>
                    How do you pass data between React components?<br/><br/>
                    Explain the use of virtual DOM in React.<br/><br/>
                    How does two-way data binding work in React?<br/><br/>
                    What is the role of props drilling and how do you avoid it?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="14">
                  <Accordion.Header>REST APIs</Accordion.Header>
                  <Accordion.Body>
                    How do you secure APIs in Django?<br/><br/>
                    What are the common status codes and their meanings?<br/><br/>
                    How do you serialize data in Django REST Framework?<br/><br/>
                    Explain how token-based authentication works.<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="15">
                  <Accordion.Header>Database</Accordion.Header>
                  <Accordion.Body>
                    What is the difference between SQL and NoSQL?<br/><br/>
                    How do you use ORM in Django?<br/><br/>
                    How do you optimize Django queries?<br/><br/>
                    What is indexing and how does it help performance?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>

              </Accordion.Body>
            </Accordion.Item>

            {/* Java Full Stack */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>Java Full Stack</Accordion.Header>
              <Accordion.Body>

                <Accordion.Item eventKey="21">
                  <Accordion.Header>Java Core</Accordion.Header>
                  <Accordion.Body>
                    Difference between interface and abstract class?<br/><br/>
                    What are the new features of Java 8?<br/><br/>
                    How does Java handle memory leaks?<br/><br/>
                    What is multithreading and how is it implemented?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="22">
                  <Accordion.Header>Spring Boot</Accordion.Header>
                  <Accordion.Body>
                    How do you create REST APIs using Spring Boot?<br/><br/>
                    What is dependency injection?<br/><br/>
                    Explain the concept of autowiring in Spring.<br/><br/>
                    How do you handle validations in Spring Boot?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="23">
                  <Accordion.Header>Frontend</Accordion.Header>
                  <Accordion.Body>
                    How to connect Java backend with React frontend?<br/><br/>
                    What is JSX and how does it compile?<br/><br/>
                    How do you manage global state in React?<br/><br/>
                    Difference between controlled and uncontrolled components?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="24">
                  <Accordion.Header>REST APIs</Accordion.Header>
                  <Accordion.Body>
                    What is the use of Postman in API testing?<br/><br/>
                    How to consume APIs using Fetch or Axios?<br/><br/>
                    Explain request and response lifecycle in Spring Boot.<br/><br/>
                    How do you handle HTTP exceptions globally?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="25">
                  <Accordion.Header>Database</Accordion.Header>
                  <Accordion.Body>
                    What is JDBC and how is it used in Java?<br/><br/>
                    Explain CRUD operations using Spring Data JPA.<br/><br/>
                    What is the use of @Entity annotation?<br/><br/>
                    Difference between save() and persist()?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>

              </Accordion.Body>
            </Accordion.Item>

            {/* MERN Full Stack */}
            <Accordion.Item eventKey="3">
              <Accordion.Header>MERN Full Stack</Accordion.Header>
              <Accordion.Body>

                <Accordion.Item eventKey="31">
                  <Accordion.Header>MongoDB</Accordion.Header>
                  <Accordion.Body>
                    How to perform CRUD operations in MongoDB?<br/><br/>
                    What is aggregation pipeline?<br/><br/>
                    Explain the concept of schema-less database.<br/><br/>
                    Difference between embedded and referenced documents?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="32">
                  <Accordion.Header>Express.js</Accordion.Header>
                  <Accordion.Body>
                    How do you handle routes in Express?<br/><br/>
                    What is middleware in Express?<br/><br/>
                    How do you manage error handling?<br/><br/>
                    How do you organize an Express project?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="33">
                  <Accordion.Header>React.js</Accordion.Header>
                  <Accordion.Body>
                    What are lifecycle methods in React?<br/><br/>
                    How do you handle API calls in React?<br/><br/>
                    What is React Router and how is it used?<br/><br/>
                    Explain conditional rendering in React.<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="34">
                  <Accordion.Header>Node.js</Accordion.Header>
                  <Accordion.Body>
                    What is the role of the event loop in Node?<br/><br/>
                    How do you handle asynchronous code?<br/><br/>
                    What is the use of npm modules?<br/><br/>
                    How to create and consume custom modules?<br/><br/>
                  </Accordion.Body>
                </Accordion.Item>

              </Accordion.Body>
            </Accordion.Item>

        </Accordion>
      </Tab>


    </Tabs>
  );
}


export default InterviewQuestions


