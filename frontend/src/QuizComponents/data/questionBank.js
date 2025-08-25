// Utility function to get random questions for a domain
export const getRandomQuestions = (domain, count = 20) => {
  const domainQuestions = questionBank.filter(q => q.domain === domain);
  const shuffled = [...domainQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

// Utility function to get all domains
export const getAllDomains = () => {
  return quizDomains;
};

// Domains list
export const quizDomains = [
  {
    id: 'mern',
    name: 'MERN Stack',
    description: 'MongoDB, Express.js, React, Node.js',
    icon: '⚛️',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'java',
    name: 'Java Full Stack',
    description: 'Spring Boot, Hibernate, Java, REST APIs',
    icon: '☕',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'analytics',
    name: 'Data Analytics',
    description: 'Python, SQL, Machine Learning, Statistics',
    icon: '📊',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'dotnet',
    name: '.NET Full Stack',
    description: 'C#, ASP.NET Core, Entity Framework',
    icon: '🔷',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 'mobile',
    name: 'App Development',
    description: 'React Native, Flutter, Mobile UI/UX',
    icon: '📱',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 'python',
    name: 'Python/Django',
    description: 'Python, Django, Flask, FastAPI',
    icon: '🐍',
    color: 'from-yellow-500 to-green-500'
  },
  {
    id: 'devops',
    name: 'DevOps & Cloud',
    description: 'AWS, Docker, Kubernetes, CI/CD',
    icon: '☁️',
    color: 'from-blue-500 to-purple-500'
  },
  {
    id: 'security',
    name: 'Cybersecurity',
    description: 'Web Security, Penetration Testing, OWASP',
    icon: '🔒',
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 'ai',
    name: 'AI & Machine Learning',
    description: 'Machine Learning, Deep Learning, AI',
    icon: '🤖',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'database',
    name: 'Database Management',
    description: 'SQL, NoSQL, Database Design, Optimization',
    icon: '🗄️',
    color: 'from-green-500 to-blue-500'
  },
  {
    id: 'design',
    name: 'UI/UX Design',
    description: 'User Interface, User Experience, Design Systems',
    icon: '🎨',
    color: 'from-pink-500 to-purple-500'
  }
];

// Question Bank
export const questionBank = [
  // MERN Stack Questions
  {
    id: 'mern_1',
    question: 'What does the M in MERN stack stand for?',
    options: ['MySQL', 'MongoDB', 'MariaDB', 'Microsoft SQL'],
    correctAnswer: 1,
    explanation: 'MongoDB is a NoSQL document database that stores data in flexible, JSON-like documents.',
    domain: 'mern'
  },
  {
    id: 'mern_2',
    question: 'Which React hook is used to manage component state?',
    options: ['useEffect', 'useState', 'useContext', 'useReducer'],
    correctAnswer: 1,
    explanation: 'useState is the fundamental hook for managing local component state in functional components.',
    domain: 'mern'
  },
  {
    id: 'mern_3',
    question: 'What is the purpose of Express.js middleware?',
    options: ['Database connection', 'Request processing', 'File compression', 'Error handling'],
    correctAnswer: 1,
    explanation: 'Express.js middleware functions execute during the request-response cycle and can modify request/response objects.',
    domain: 'mern'
  },
  {
    id: 'mern_4',
    question: 'Which method is used to make HTTP requests in Node.js?',
    options: ['fetch()', 'axios.get()', 'http.request()', 'All of the above'],
    correctAnswer: 3,
    explanation: 'Node.js supports multiple ways to make HTTP requests including native http module, fetch API, and third-party libraries like axios.',
    domain: 'mern'
  },
  {
    id: 'mern_5',
    question: 'What is JSX in React?',
    options: ['JavaScript XML', 'Java Syntax Extension', 'JSON Extension', 'JavaScript eXtension'],
    correctAnswer: 0,
    explanation: 'JSX stands for JavaScript XML and allows you to write HTML-like syntax in JavaScript.',
    domain: 'mern'
  },
  {
    id: 'mern_6',
    question: 'Which database operation is NOT part of CRUD?',
    options: ['Create', 'Read', 'Update', 'Index'],
    correctAnswer: 3,
    explanation: 'CRUD stands for Create, Read, Update, and Delete. Index is a database optimization technique, not a CRUD operation.',
    domain: 'mern'
  },
  {
    id: 'mern_7',
    question: 'What is the virtual DOM in React?',
    options: ['Real DOM copy', 'Memory representation', 'Server-side DOM', 'Browser cache'],
    correctAnswer: 1,
    explanation: 'Virtual DOM is a lightweight JavaScript representation of the real DOM kept in memory and synced with the real DOM.',
    domain: 'mern'
  },
  {
    id: 'mern_8',
    question: 'Which Express.js method handles POST requests?',
    options: ['app.post()', 'app.get()', 'app.put()', 'app.patch()'],
    correctAnswer: 0,
    explanation: 'app.post() method in Express.js is specifically designed to handle HTTP POST requests.',
    domain: 'mern'
  },
  {
    id: 'mern_9',
    question: 'What is npm in Node.js?',
    options: ['Node Package Manager', 'New Project Module', 'Network Protocol Manager', 'Node Process Monitor'],
    correctAnswer: 0,
    explanation: 'npm stands for Node Package Manager and is used to install, share, and manage JavaScript packages.',
    domain: 'mern'
  },
  {
    id: 'mern_10',
    question: 'Which React lifecycle method runs after component mount?',
    options: ['componentDidMount', 'componentWillMount', 'componentDidUpdate', 'componentWillUnmount'],
    correctAnswer: 0,
    explanation: 'componentDidMount runs immediately after a component is mounted and is commonly used for API calls.',
    domain: 'mern'
  },
  {
    id: 'mern_11',
    question: 'What is MongoDB Atlas?',
    options: ['Local database', 'Cloud database service', 'Query language', 'Database driver'],
    correctAnswer: 1,
    explanation: 'MongoDB Atlas is a cloud-based database service that provides managed MongoDB hosting.',
    domain: 'mern'
  },
  {
    id: 'mern_12',
    question: 'Which command creates a new React app?',
    options: ['create-react-app', 'npx create-react-app', 'npm create-react-app', 'react-create-app'],
    correctAnswer: 1,
    explanation: 'npx create-react-app is the recommended way to create a new React application with all necessary configurations.',
    domain: 'mern'
  },
  {
    id: 'mern_13',
    question: 'What is the purpose of useEffect hook?',
    options: ['State management', 'Side effects', 'Event handling', 'Component creation'],
    correctAnswer: 1,
    explanation: 'useEffect hook is used to perform side effects in functional components like API calls, subscriptions, or manual DOM manipulation.',
    domain: 'mern'
  },
  {
    id: 'mern_14',
    question: 'Which method is used to connect to MongoDB?',
    options: ['mongoose.connect()', 'mongodb.connect()', 'db.connect()', 'mongo.connect()'],
    correctAnswer: 0,
    explanation: 'mongoose.connect() is the method used to establish a connection to MongoDB database using Mongoose ODM.',
    domain: 'mern'
  },
  {
    id: 'mern_15',
    question: 'What is React Router used for?',
    options: ['State management', 'API requests', 'Navigation', 'Database queries'],
    correctAnswer: 2,
    explanation: 'React Router is a library used for handling navigation and routing in React applications.',
    domain: 'mern'
  },
  {
    id: 'mern_16',
    question: 'Which Express.js method serves static files?',
    options: ['express.static()', 'app.static()', 'static.serve()', 'serve.static()'],
    correctAnswer: 0,
    explanation: 'express.static() is a built-in middleware function that serves static files like images, CSS, and JavaScript.',
    domain: 'mern'
  },
  {
    id: 'mern_17',
    question: 'What is the default port for MongoDB?',
    options: ['3000', '8080', '27017', '5432'],
    correctAnswer: 2,
    explanation: 'MongoDB runs on port 27017 by default, though this can be configured to use different ports.',
    domain: 'mern'
  },
  {
    id: 'mern_18',
    question: 'Which React feature allows sharing state between components?',
    options: ['Props', 'Context API', 'Local storage', 'Cookies'],
    correctAnswer: 1,
    explanation: 'Context API provides a way to pass data through the component tree without having to pass props down manually.',
    domain: 'mern'
  },
  {
    id: 'mern_19',
    question: 'What is the purpose of package.json?',
    options: ['Store code', 'Manage dependencies', 'Database config', 'Server settings'],
    correctAnswer: 1,
    explanation: 'package.json file contains metadata about the project and manages project dependencies, scripts, and configurations.',
    domain: 'mern'
  },
  {
    id: 'mern_20',
    question: 'Which HTTP status code indicates successful resource creation?',
    options: ['200', '201', '204', '301'],
    correctAnswer: 1,
    explanation: 'HTTP status code 201 (Created) indicates that a new resource has been successfully created.',
    domain: 'mern'
  },
  {
    id: 'mern_21',
    question: 'What is Mongoose in MERN stack?',
    options: ['HTTP client', 'MongoDB ODM', 'React library', 'Express middleware'],
    correctAnswer: 1,
    explanation: 'Mongoose is an Object Document Mapper (ODM) for MongoDB and Node.js that provides schema validation and query building.',
    domain: 'mern'
  },
  {
    id: 'mern_22',
    question: 'Which React hook replaces componentDidMount?',
    options: ['useState', 'useEffect', 'useContext', 'useCallback'],
    correctAnswer: 1,
    explanation: 'useEffect with an empty dependency array [] behaves similarly to componentDidMount in class components.',
    domain: 'mern'
  },
  {
    id: 'mern_23',
    question: 'What is CORS in web development?',
    options: ['Code Organization', 'Cross-Origin Resource Sharing', 'Component State', 'Database Connection'],
    correctAnswer: 1,
    explanation: 'CORS (Cross-Origin Resource Sharing) is a security feature that allows or restricts web applications running at one domain to access resources from another domain.',
    domain: 'mern'
  },
  {
    id: 'mern_24',
    question: 'Which method is used to define routes in Express.js?',
    options: ['app.route()', 'app.get()', 'Both A and B', 'express.route()'],
    correctAnswer: 2,
    explanation: 'Both app.route() and HTTP method functions like app.get(), app.post() can be used to define routes in Express.js.',
    domain: 'mern'
  },
  {
    id: 'mern_25',
    question: 'What is the purpose of React keys?',
    options: ['Security', 'Performance optimization', 'Data encryption', 'API authentication'],
    correctAnswer: 1,
    explanation: 'React keys help identify which items have changed, are added, or removed, enabling efficient re-rendering of lists.',
    domain: 'mern'
  },

  // Java Full Stack Questions
  {
    id: 'java_1',
    question: 'What is Spring Boot?',
    options: ['Java framework', 'Database', 'Web server', 'IDE'],
    correctAnswer: 0,
    explanation: 'Spring Boot is a Java framework that simplifies the development of production-ready applications with minimal configuration.',
    domain: 'java'
  },
  {
    id: 'java_2',
    question: 'Which annotation is used to mark a Spring Boot main class?',
    options: ['@SpringApplication', '@SpringBootApplication', '@Application', '@Main'],
    correctAnswer: 1,
    explanation: '@SpringBootApplication is a composite annotation that includes @Configuration, @EnableAutoConfiguration, and @ComponentScan.',
    domain: 'java'
  },
  {
    id: 'java_3',
    question: 'What is JPA in Java?',
    options: ['Java Persistence API', 'Java Programming Architecture', 'Java Platform API', 'Java Performance API'],
    correctAnswer: 0,
    explanation: 'JPA (Java Persistence API) is a specification for managing relational data in Java applications.',
    domain: 'java'
  },
  {
    id: 'java_4',
    question: 'Which HTTP method is idempotent?',
    options: ['POST', 'GET', 'PATCH', 'All of the above'],
    correctAnswer: 1,
    explanation: 'GET requests are idempotent, meaning multiple identical requests should have the same effect as a single request.',
    domain: 'java'
  },
  {
    id: 'java_5',
    question: 'What is Hibernate?',
    options: ['Web framework', 'ORM framework', 'Testing framework', 'Security framework'],
    correctAnswer: 1,
    explanation: 'Hibernate is an Object-Relational Mapping (ORM) framework that simplifies database operations in Java.',
    domain: 'java'
  },
  {
    id: 'java_6',
    question: 'Which annotation creates a REST controller in Spring?',
    options: ['@Controller', '@RestController', '@Service', '@Component'],
    correctAnswer: 1,
    explanation: '@RestController combines @Controller and @ResponseBody, making it perfect for REST APIs.',
    domain: 'java'
  },
  {
    id: 'java_7',
    question: 'What is Maven?',
    options: ['Build tool', 'Database', 'Web server', 'IDE'],
    correctAnswer: 0,
    explanation: 'Maven is a build automation and project management tool used primarily for Java projects.',
    domain: 'java'
  },
  {
    id: 'java_8',
    question: 'Which annotation enables JPA repositories?',
    options: ['@EnableJpa', '@EnableJpaRepositories', '@JpaRepository', '@Repository'],
    correctAnswer: 1,
    explanation: '@EnableJpaRepositories enables JPA repository interfaces to be automatically implemented by Spring.',
    domain: 'java'
  },
  {
    id: 'java_9',
    question: 'What is dependency injection?',
    options: ['Design pattern', 'Database concept', 'Security feature', 'Performance optimization'],
    correctAnswer: 0,
    explanation: 'Dependency injection is a design pattern where dependencies are provided to an object rather than created by the object itself.',
    domain: 'java'
  },
  {
    id: 'java_10',
    question: 'Which annotation injects dependencies in Spring?',
    options: ['@Inject', '@Autowired', '@Resource', 'All of the above'],
    correctAnswer: 3,
    explanation: 'Spring supports multiple dependency injection annotations including @Autowired, @Inject, and @Resource.',
    domain: 'java'
  },
  {
    id: 'java_11',
    question: 'What is the default scope of Spring beans?',
    options: ['Prototype', 'Singleton', 'Request', 'Session'],
    correctAnswer: 1,
    explanation: 'Singleton is the default scope for Spring beans, meaning one instance per Spring container.',
    domain: 'java'
  },
  {
    id: 'java_12',
    question: 'Which HTTP status code indicates resource not found?',
    options: ['400', '401', '404', '500'],
    correctAnswer: 2,
    explanation: 'HTTP status code 404 indicates that the requested resource could not be found on the server.',
    domain: 'java'
  },
  {
    id: 'java_13',
    question: 'What is Spring Data JPA?',
    options: ['Database driver', 'ORM framework', 'Repository abstraction', 'Query language'],
    correctAnswer: 2,
    explanation: 'Spring Data JPA provides repository abstraction over JPA, reducing boilerplate code for data access.',
    domain: 'java'
  },
  {
    id: 'java_14',
    question: 'Which annotation validates request body?',
    options: ['@Valid', '@Validated', '@RequestBody', 'Both A and B'],
    correctAnswer: 3,
    explanation: 'Both @Valid and @Validated can be used for validation, with @Validated providing additional features like validation groups.',
    domain: 'java'
  },
  {
    id: 'java_15',
    question: 'What is Spring Security?',
    options: ['Authentication framework', 'Encryption library', 'Database security', 'Network security'],
    correctAnswer: 0,
    explanation: 'Spring Security is a comprehensive authentication and authorization framework for Java applications.',
    domain: 'java'
  },
  {
    id: 'java_16',
    question: 'Which file configures Spring Boot application?',
    options: ['application.xml', 'application.properties', 'config.properties', 'spring.properties'],
    correctAnswer: 1,
    explanation: 'application.properties (or application.yml) is the main configuration file for Spring Boot applications.',
    domain: 'java'
  },
  {
    id: 'java_17',
    question: 'What is @Entity annotation used for?',
    options: ['REST endpoint', 'Database table mapping', 'Service class', 'Configuration'],
    correctAnswer: 1,
    explanation: '@Entity marks a Java class as a JPA entity, representing a table in the database.',
    domain: 'java'
  },
  {
    id: 'java_18',
    question: 'Which testing framework is commonly used with Spring Boot?',
    options: ['JUnit', 'TestNG', 'Mockito', 'All of the above'],
    correctAnswer: 3,
    explanation: 'Spring Boot supports various testing frameworks including JUnit, TestNG, and Mockito for comprehensive testing.',
    domain: 'java'
  },
  {
    id: 'java_19',
    question: 'What is @RequestMapping used for?',
    options: ['Database mapping', 'URL mapping', 'Object mapping', 'Field mapping'],
    correctAnswer: 1,
    explanation: '@RequestMapping maps HTTP requests to handler methods in Spring MVC controllers.',
    domain: 'java'
  },
  {
    id: 'java_20',
    question: 'Which annotation creates a Spring service?',
    options: ['@Component', '@Service', '@Repository', 'Both A and B'],
    correctAnswer: 3,
    explanation: 'Both @Component and @Service can create Spring beans, with @Service being a specialized @Component for service layer.',
    domain: 'java'
  },
  {
    id: 'java_21',
    question: 'What is Spring Boot Actuator?',
    options: ['Security module', 'Monitoring and management', 'Database connector', 'Web framework'],
    correctAnswer: 1,
    explanation: 'Spring Boot Actuator provides production-ready features like monitoring, metrics, and health checks.',
    domain: 'java'
  },
  {
    id: 'java_22',
    question: 'Which annotation configures JPA entity primary key?',
    options: ['@PrimaryKey', '@Id', '@Key', '@Identity'],
    correctAnswer: 1,
    explanation: '@Id annotation marks a field as the primary key of a JPA entity.',
    domain: 'java'
  },
  {
    id: 'java_23',
    question: 'What is the purpose of @Transactional?',
    options: ['Database connection', 'Transaction management', 'Data validation', 'Security'],
    correctAnswer: 1,
    explanation: '@Transactional provides declarative transaction management, ensuring data consistency across operations.',
    domain: 'java'
  },
  {
    id: 'java_24',
    question: 'Which HTTP method is used to update resources?',
    options: ['GET', 'POST', 'PUT', 'DELETE'],
    correctAnswer: 2,
    explanation: 'PUT HTTP method is typically used to update existing resources or create resources at specific URIs.',
    domain: 'java'
  },
  {
    id: 'java_25',
    question: 'What is Spring Boot DevTools?',
    options: ['IDE plugin', 'Development utilities', 'Testing framework', 'Security tool'],
    correctAnswer: 1,
    explanation: 'Spring Boot DevTools provides development-time features like automatic restart, live reload, and enhanced development experience.',
    domain: 'java'
  },

  // Data Analytics Questions
  {
    id: 'analytics_1',
    question: 'What is Python primarily used for in data analytics?',
    options: ['Web development', 'Data analysis and ML', 'Mobile apps', 'Game development'],
    correctAnswer: 1,
    explanation: 'Python is widely used in data analytics for data analysis, machine learning, and statistical computing due to its rich ecosystem of libraries.',
    domain: 'analytics'
  },
  {
    id: 'analytics_2',
    question: 'Which library is most commonly used for data manipulation in Python?',
    options: ['NumPy', 'Pandas', 'Matplotlib', 'SciPy'],
    correctAnswer: 1,
    explanation: 'Pandas is the most popular library for data manipulation and analysis, providing data structures like DataFrame.',
    domain: 'analytics'
  },
  {
    id: 'analytics_3',
    question: 'What does SQL stand for?',
    options: ['Structured Query Language', 'Standard Query Language', 'Simple Query Language', 'System Query Language'],
    correctAnswer: 0,
    explanation: 'SQL stands for Structured Query Language and is used for managing and querying relational databases.',
    domain: 'analytics'
  },
  {
    id: 'analytics_4',
    question: 'Which SQL command is used to retrieve data?',
    options: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
    correctAnswer: 2,
    explanation: 'SELECT command is used to retrieve data from one or more tables in a database.',
    domain: 'analytics'
  },
  {
    id: 'analytics_5',
    question: 'What is machine learning?',
    options: ['Manual programming', 'Automated learning from data', 'Hardware optimization', 'Database management'],
    correctAnswer: 1,
    explanation: 'Machine learning is a subset of AI that enables systems to automatically learn and improve from experience without being explicitly programmed.',
    domain: 'analytics'
  },
  {
    id: 'analytics_6',
    question: 'Which type of ML algorithm is used for prediction?',
    options: ['Clustering', 'Classification', 'Regression', 'Both B and C'],
    correctAnswer: 3,
    explanation: 'Both classification (predicting categories) and regression (predicting continuous values) are used for prediction tasks.',
    domain: 'analytics'
  },
  {
    id: 'analytics_7',
    question: 'What is a DataFrame in Pandas?',
    options: ['Image format', '2D data structure', 'Database type', 'File format'],
    correctAnswer: 1,
    explanation: 'DataFrame is a 2-dimensional labeled data structure in Pandas, similar to a spreadsheet or SQL table.',
    domain: 'analytics'
  },
  {
    id: 'analytics_8',
    question: 'Which visualization library is popular in Python?',
    options: ['Pandas', 'NumPy', 'Matplotlib', 'SciPy'],
    correctAnswer: 2,
    explanation: 'Matplotlib is a comprehensive library for creating static, animated, and interactive visualizations in Python.',
    domain: 'analytics'
  },
  {
    id: 'analytics_9',
    question: 'What is the purpose of data cleaning?',
    options: ['Data storage', 'Removing inconsistencies', 'Data visualization', 'Data modeling'],
    correctAnswer: 1,
    explanation: 'Data cleaning involves identifying and correcting errors, inconsistencies, and inaccuracies in data to improve quality.',
    domain: 'analytics'
  },
  {
    id: 'analytics_10',
    question: 'Which measure represents the middle value in a dataset?',
    options: ['Mean', 'Median', 'Mode', 'Range'],
    correctAnswer: 1,
    explanation: 'Median is the middle value in a sorted dataset, which divides the dataset into two equal halves.',
    domain: 'analytics'
  },
  {
    id: 'analytics_11',
    question: 'What is supervised learning?',
    options: ['Learning without labels', 'Learning with labeled data', 'Unsupervised clustering', 'Random learning'],
    correctAnswer: 1,
    explanation: 'Supervised learning uses labeled training data to learn a mapping from inputs to outputs.',
    domain: 'analytics'
  },
  {
    id: 'analytics_12',
    question: 'Which algorithm is used for clustering?',
    options: ['Linear Regression', 'Decision Tree', 'K-Means', 'Logistic Regression'],
    correctAnswer: 2,
    explanation: 'K-Means is a popular unsupervised learning algorithm used for clustering data into k clusters.',
    domain: 'analytics'
  },
  {
    id: 'analytics_13',
    question: 'What is overfitting in machine learning?',
    options: ['Model too simple', 'Model too complex', 'Perfect model', 'Data shortage'],
    correctAnswer: 1,
    explanation: 'Overfitting occurs when a model learns the training data too well, including noise, resulting in poor generalization.',
    domain: 'analytics'
  },
  {
    id: 'analytics_14',
    question: 'Which Python library is used for scientific computing?',
    options: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    correctAnswer: 1,
    explanation: 'NumPy is the fundamental package for scientific computing in Python, providing support for arrays and mathematical functions.',
    domain: 'analytics'
  },
  {
    id: 'analytics_15',
    question: 'What is a correlation coefficient?',
    options: ['Causation measure', 'Relationship strength', 'Data size', 'Error rate'],
    correctAnswer: 1,
    explanation: 'Correlation coefficient measures the strength and direction of a linear relationship between two variables.',
    domain: 'analytics'
  },
  {
    id: 'analytics_16',
    question: 'Which SQL function calculates average?',
    options: ['SUM()', 'COUNT()', 'AVG()', 'MAX()'],
    correctAnswer: 2,
    explanation: 'AVG() function calculates the average (arithmetic mean) of a set of values in SQL.',
    domain: 'analytics'
  },
  {
    id: 'analytics_17',
    question: 'What is feature engineering?',
    options: ['Creating new features', 'Removing features', 'Scaling features', 'All of the above'],
    correctAnswer: 3,
    explanation: 'Feature engineering encompasses creating, removing, transforming, and scaling features to improve model performance.',
    domain: 'analytics'
  },
  {
    id: 'analytics_18',
    question: 'Which chart type shows distribution of a single variable?',
    options: ['Scatter plot', 'Histogram', 'Line chart', 'Bar chart'],
    correctAnswer: 1,
    explanation: 'Histogram displays the distribution of a single continuous variable by showing frequency of values in ranges.',
    domain: 'analytics'
  },
  {
    id: 'analytics_19',
    question: 'What is cross-validation?',
    options: ['Data splitting technique', 'Feature selection', 'Model deployment', 'Data cleaning'],
    correctAnswer: 0,
    explanation: 'Cross-validation is a technique for assessing model performance by splitting data into training and validation sets multiple times.',
    domain: 'analytics'
  },
  {
    id: 'analytics_20',
    question: 'Which method handles missing data?',
    options: ['Imputation', 'Deletion', 'Interpolation', 'All of the above'],
    correctAnswer: 3,
    explanation: 'Missing data can be handled through various methods including imputation, deletion, and interpolation depending on the context.',
    domain: 'analytics'
  },
  {
    id: 'analytics_21',
    question: 'What is A/B testing?',
    options: ['Database testing', 'User interface testing', 'Statistical hypothesis testing', 'Performance testing'],
    correctAnswer: 2,
    explanation: 'A/B testing is a statistical method for comparing two versions to determine which performs better.',
    domain: 'analytics'
  },
  {
    id: 'analytics_22',
    question: 'Which library is used for deep learning in Python?',
    options: ['Pandas', 'TensorFlow', 'Matplotlib', 'NumPy'],
    correctAnswer: 1,
    explanation: 'TensorFlow is a popular open-source library for machine learning and deep learning applications.',
    domain: 'analytics'
  },
  {
    id: 'analytics_23',
    question: 'What is the purpose of normalization?',
    options: ['Data backup', 'Scaling features', 'Data visualization', 'Model selection'],
    correctAnswer: 1,
    explanation: 'Normalization scales features to a similar range, preventing features with larger scales from dominating the model.',
    domain: 'analytics'
  },
  {
    id: 'analytics_24',
    question: 'Which metric evaluates classification model accuracy?',
    options: ['MSE', 'RMSE', 'Precision', 'R-squared'],
    correctAnswer: 2,
    explanation: 'Precision measures the ratio of correctly predicted positive observations to total predicted positive observations.',
    domain: 'analytics'
  },
  {
    id: 'analytics_25',
    question: 'What is time series analysis?',
    options: ['Static data analysis', 'Sequential data analysis', 'Image analysis', 'Text analysis'],
    correctAnswer: 1,
    explanation: 'Time series analysis involves analyzing data points collected over time to identify trends, patterns, and make predictions.',
    domain: 'analytics'
  },

  // .NET Full Stack Questions
  {
    id: 'dotnet_1',
    question: 'What is ASP.NET Core?',
    options: ['Database', 'Web framework', 'IDE', 'Operating system'],
    correctAnswer: 1,
    explanation: 'ASP.NET Core is a cross-platform, high-performance framework for building modern web applications and APIs.',
    domain: 'dotnet'
  },
  {
    id: 'dotnet_2',
    question: 'Which language is primarily used in .NET development?',
    options: ['Java', 'Python', 'C#', 'JavaScript'],
    correctAnswer: 2,
    explanation: 'C# is the primary programming language used in .NET development, though .NET supports multiple languages.',
    domain: 'dotnet'
  },
  {
    id: 'dotnet_3',
    question: 'What is Entity Framework?',
    options: ['Web server', 'ORM framework', 'Database', 'IDE'],
    correctAnswer: 1,
    explanation: 'Entity Framework is an Object-Relational Mapping (ORM) framework that simplifies data access in .NET applications.',
    domain: 'dotnet'
  },
  {
    id: 'dotnet_4',
    question: 'Which attribute creates a REST API controller?',
    options: ['[Controller]', '[ApiController]', '[RestController]', '[WebApi]'],
    correctAnswer: 1,
    explanation: '[ApiController] attribute enables API-specific behaviors like automatic model validation and binding source inference.',
    domain: 'dotnet'
  },
  {
    id: 'dotnet_5',
    question: 'What is dependency injection in .NET Core?',
    options: ['Design pattern', 'Database feature', 'Security mechanism', 'Performance optimization'],
    correctAnswer: 0,
    explanation: 'Dependency injection is a design pattern built into .NET Core for achieving loose coupling between classes.',
    domain: 'dotnet'
  },
  {
    id: 'dotnet_6',
    question: 'Which method configures services in .NET Core?',
    options: ['Configure()', 'ConfigureServices()', 'Setup()', 'Initialize()'],
    correctAnswer: 1,
    explanation: 'ConfigureServices() method in Startup class is used to register services with the dependency injection container.',
    domain: 'dotnet'
  },
  {
    id: 'dotnet_7',
    question: 'What is Razor Pages?',
    options: ['Database tool', 'Page-based programming model', 'Security feature', 'Deployment tool'],
    correctAnswer: 1,
    explanation: 'Razor Pages is a page-based programming model in ASP.NET Core that makes building web UI easier and more productive.',
    domain: 'dotnet'
  },
  {
    id: 'dotnet_8',
    question: 'Which file contains .NET Core application configuration?',
    options: ['web.config', 'appsettings.json', 'config.xml', 'settings.ini'],
    correctAnswer: 1,
    explanation: 'appsettings.json is the primary configuration file for .NET Core applications, replacing web.config.',
    domain: 'dotnet'
  },
  {
    id: 'dotnet_9',
    question: 'What is middleware in ASP.NET Core?',
    options: ['Database layer', 'Request pipeline component', 'Security feature', 'UI component'],
    correctAnswer: 1,
    explanation: 'Middleware components form a pipeline that handles HTTP requests and responses in ASP.NET Core.',
    domain: 'dotnet'
  },
  {
    id: 'dotnet_10',
    question: 'Which NuGet package manager command installs packages?',
    options: ['nuget add', 'dotnet add package', 'install-package', 'add-package'],
    correctAnswer: 1,
    explanation: '"dotnet add package" is the .NET CLI command to add NuGet packages to a project.',
    domain: 'dotnet'
  },
  {
    id: 'dotnet_11',
    question: 'What is SignalR?',
    options: ['Database connector', 'Real-time web functionality', 'Security protocol', 'Testing framework'],
    correctAnswer: 1,
    explanation: 'SignalR enables real-time web functionality, allowing server code to push content to clients instantly.',
    domain: 'dotnet'
  },
  {
    id: 'dotnet_12',
    question: 'Which attribute specifies HTTP GET method?',
    options: ['[Get]', '[HttpGet]', '[GetMethod]', '[HttpGET]'],
    correctAnswer: 1,
    explanation: '[HttpGet] attribute specifies that an action method responds to HTTP GET requests.',
    domain: 'dotnet'
  },
  {
    id: 'dotnet_13',
    question: 'What is Entity Framework Code First?',
    options: ['Database design approach', 'Programming paradigm', 'Testing methodology', 'Deployment strategy'],
    correctAnswer: 0,
    explanation: 'Code First allows developers to define the model using C# classes, and EF creates the database from these models.',
    domain: 'dotnet'
  },
  {
    id: 'dotnet_14',
    question: 'Which interface is used for dependency injection?',
    options: ['IService', 'IServiceCollection', 'IDependency', 'IContainer'],
    correctAnswer: 1,
    explanation: 'IServiceCollection interface is used to register services for dependency injection in .NET Core.',
    domain: 'dotnet'
  },
  {
    id: 'dotnet_15',
    question: 'What is the purpose of [Authorize] attribute?',
    options: ['Database access', 'Authentication/Authorization', 'Data validation', 'API documentation'],
    correctAnswer: 1,
    explanation: '[Authorize] attribute restricts access to controllers or actions to authenticated and authorized users.',
    domain: 'dotnet'
  },
  {
    id: 'dotnet_16',
    question: 'Which method creates database migrations?',
    options: ['add-migration', 'create-migration', 'new-migration', 'make-migration'],
    correctAnswer: 0,
    explanation: '"add-migration" command creates a new Entity Framework migration file for database changes.',
    domain: 'dotnet'
  },
  {
    id: 'dotnet_17',
    question: 'What is Blazor?',
    options: ['Database tool', 'Web UI framework', 'Testing framework', 'Deployment tool'],
    correctAnswer: 1,
    explanation: 'Blazor is a framework for building interactive web UIs using C# instead of JavaScript.',
    domain: 'dotnet'
  },
  {
    id: 'dotnet_18',
    question: 'Which logging interface is built into .NET Core?',
    options: ['ILog', 'ILogger', 'ILogging', 'ILogService'],
    correctAnswer: 1,
    explanation: 'ILogger interface is the built-in logging abstraction in .NET Core for structured logging.',
    domain: 'dotnet'
  },
  {
    id: 'dotnet_19',
    question: 'What is the default HTTP port for .NET Core development?',
    options: ['80', '443', '5000', '8080'],
    correctAnswer: 2,
    explanation: '.NET Core development server typically runs on port 5000 for HTTP and 5001 for HTTPS by default.',
    domain: 'dotnet'
  },
  {
    id: 'dotnet_20',
    question: 'Which method validates model state?',
    options: ['IsValid()', 'ModelState.IsValid', 'ValidateModel()', 'CheckModel()'],
    correctAnswer: 1,
    explanation: 'ModelState.IsValid property checks if the model passed validation rules defined by data annotations.',
    domain: 'dotnet'
  },
  {
    id: 'dotnet_21',
    question: 'What is Identity in ASP.NET Core?',
    options: ['Database system', 'Authentication system', 'Logging system', 'Caching system'],
    correctAnswer: 1,
    explanation: 'ASP.NET Core Identity is a membership system that provides authentication and authorization functionality.',
    domain: 'dotnet'
  },
  {
    id: 'dotnet_22',
    question: 'Which attribute validates required fields?',
    options: ['[Mandatory]', '[Required]', '[NotNull]', '[MustHave]'],
    correctAnswer: 1,
    explanation: '[Required] attribute specifies that a property value is required for model binding validation.',
    domain: 'dotnet'
  },
  {
    id: 'dotnet_23',
    question: 'What is the purpose of Program.cs in .NET Core?',
    options: ['Configuration', 'Application entry point', 'Database setup', 'UI design'],
    correctAnswer: 1,
    explanation: 'Program.cs contains the Main method which serves as the entry point for .NET Core applications.',
    domain: 'dotnet'
  },
  {
    id: 'dotnet_24',
    question: 'Which ORM command updates the database schema?',
    options: ['update-database', 'migrate-database', 'sync-database', 'refresh-database'],
    correctAnswer: 0,
    explanation: '"update-database" command applies pending migrations to update the database schema.',
    domain: 'dotnet'
  },
  {
    id: 'dotnet_25',
    question: 'What is Web API in .NET Core?',
    options: ['Web pages framework', 'RESTful services framework', 'Database framework', 'Security framework'],
    correctAnswer: 1,
    explanation: 'Web API in .NET Core is used to build HTTP-based services (RESTful APIs) that can be consumed by various clients.',
    domain: 'dotnet'
  },

  // App Development Questions
  {
    id: 'mobile_1',
    question: 'What is React Native?',
    options: ['Web framework', 'Mobile app framework', 'Database', 'Testing tool'],
    correctAnswer: 1,
    explanation: 'React Native is a framework for building mobile applications using React and JavaScript that compile to native mobile code.',
    domain: 'mobile'
  },
  {
    id: 'mobile_2',
    question: 'Which company developed Flutter?',
    options: ['Facebook', 'Google', 'Microsoft', 'Apple'],
    correctAnswer: 1,
    explanation: 'Flutter is an open-source mobile application development framework created by Google.',
    domain: 'mobile'
  },
  {
    id: 'mobile_3',
    question: 'What language is used in Flutter development?',
    options: ['Java', 'Swift', 'Dart', 'Kotlin'],
    correctAnswer: 2,
    explanation: 'Dart is the programming language used for Flutter app development, created by Google.',
    domain: 'mobile'
  },
  {
    id: 'mobile_4',
    question: 'Which is the primary IDE for Android development?',
    options: ['Eclipse', 'Android Studio', 'Visual Studio', 'IntelliJ'],
    correctAnswer: 1,
    explanation: 'Android Studio is the official Integrated Development Environment (IDE) for Android app development.',
    domain: 'mobile'
  },
  {
    id: 'mobile_5',
    question: 'What is Xcode used for?',
    options: ['Android development', 'iOS development', 'Web development', 'Desktop development'],
    correctAnswer: 1,
    explanation: 'Xcode is Apple\'s integrated development environment for developing software for macOS, iOS, watchOS, and tvOS.',
    domain: 'mobile'
  },
  {
    id: 'mobile_6',
    question: 'Which component manages app state in React Native?',
    options: ['Props', 'State', 'Context', 'All of the above'],
    correctAnswer: 3,
    explanation: 'React Native uses props, state, and context for managing component and application state, similar to React.',
    domain: 'mobile'
  },
  {
    id: 'mobile_7',
    question: 'What is the main advantage of cross-platform development?',
    options: ['Better performance', 'Code reusability', 'Native look', 'Platform-specific features'],
    correctAnswer: 1,
    explanation: 'Cross-platform development allows code reusability across multiple platforms, reducing development time and cost.',
    domain: 'mobile'
  },
  {
    id: 'mobile_8',
    question: 'Which file defines app permissions in Android?',
    options: ['config.xml', 'AndroidManifest.xml', 'permissions.xml', 'app.xml'],
    correctAnswer: 1,
    explanation: 'AndroidManifest.xml file declares app permissions, activities, services, and other essential app information.',
    domain: 'mobile'
  },
  {
    id: 'mobile_9',
    question: 'What is a Widget in Flutter?',
    options: ['Function', 'UI component', 'Database', 'Network call'],
    correctAnswer: 1,
    explanation: 'In Flutter, everything is a widget - they are the basic building blocks for creating user interfaces.',
    domain: 'mobile'
  },
  {
    id: 'mobile_10',
    question: 'Which navigation pattern is common in mobile apps?',
    options: ['Tab navigation', 'Stack navigation', 'Drawer navigation', 'All of the above'],
    correctAnswer: 3,
    explanation: 'Mobile apps commonly use tab navigation, stack navigation, and drawer navigation patterns for user experience.',
    domain: 'mobile'
  },
  {
    id: 'mobile_11',
    question: 'What is hot reload in mobile development?',
    options: ['App restart', 'Live code updates', 'Data refresh', 'UI reset'],
    correctAnswer: 1,
    explanation: 'Hot reload allows developers to see changes instantly without losing app state, speeding up development.',
    domain: 'mobile'
  },
  {
    id: 'mobile_12',
    question: 'Which database is commonly used for local storage in mobile apps?',
    options: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB'],
    correctAnswer: 2,
    explanation: 'SQLite is a lightweight database commonly used for local data storage in mobile applications.',
    domain: 'mobile'
  },
  {
    id: 'mobile_13',
    question: 'What is responsive design in mobile development?',
    options: ['Fast loading', 'Adaptive layout', 'Quick responses', 'Efficient code'],
    correctAnswer: 1,
    explanation: 'Responsive design ensures the app layout adapts to different screen sizes and orientations.',
    domain: 'mobile'
  },
  {
    id: 'mobile_14',
    question: 'Which HTTP client is popular in Flutter?',
    options: ['http', 'dio', 'retrofit', 'Both A and B'],
    correctAnswer: 3,
    explanation: 'Both http (built-in) and dio (third-party) are popular HTTP clients used in Flutter for API calls.',
    domain: 'mobile'
  },
  {
    id: 'mobile_15',
    question: 'What is the purpose of AsyncStorage in React Native?',
    options: ['Network requests', 'Local data storage', 'Image caching', 'State management'],
    correctAnswer: 1,
    explanation: 'AsyncStorage provides asynchronous, persistent, key-value storage for React Native applications.',
    domain: 'mobile'
  },
  {
    id: 'mobile_16',
    question: 'Which lifecycle method is called when an app becomes active?',
    options: ['onCreate', 'onStart', 'onResume', 'onDestroy'],
    correctAnswer: 2,
    explanation: 'onResume() is called when an Android app becomes active and starts interacting with the user.',
    domain: 'mobile'
  },
  {
    id: 'mobile_17',
    question: 'What is Material Design?',
    options: ['iOS design system', 'Android design system', 'Web design system', 'Cross-platform design'],
    correctAnswer: 1,
    explanation: 'Material Design is Google\'s design language that provides guidelines for Android app design and user experience.',
    domain: 'mobile'
  },
  {
    id: 'mobile_18',
    question: 'Which command creates a new React Native project?',
    options: ['react-native init', 'npx react-native init', 'create-react-native', 'new-react-native'],
    correctAnswer: 1,
    explanation: '"npx react-native init" is the command to create a new React Native project with the latest CLI.',
    domain: 'mobile'
  },
  {
    id: 'mobile_19',
    question: 'What is the purpose of Gradle in Android development?',
    options: ['UI design', 'Build automation', 'Database management', 'Network handling'],
    correctAnswer: 1,
    explanation: 'Gradle is the build automation system used in Android development for compiling, testing, and packaging apps.',
    domain: 'mobile'
  },
  {
    id: 'mobile_20',
    question: 'Which pattern is commonly used for state management in Flutter?',
    options: ['MVC', 'MVVM', 'BLoC', 'All of the above'],
    correctAnswer: 3,
    explanation: 'Flutter supports various architectural patterns including MVC, MVVM, and BLoC for state management.',
    domain: 'mobile'
  },
  {
    id: 'mobile_21',
    question: 'What is the App Store Connect?',
    options: ['Development tool', 'App distribution platform', 'Testing framework', 'Analytics tool'],
    correctAnswer: 1,
    explanation: 'App Store Connect is Apple\'s platform for managing and distributing iOS apps on the App Store.',
    domain: 'mobile'
  },
  {
    id: 'mobile_22',
    question: 'Which component handles touch events in React Native?',
    options: ['TouchableOpacity', 'TouchableHighlight', 'TouchableWithoutFeedback', 'All of the above'],
    correctAnswer: 3,
    explanation: 'React Native provides multiple touchable components for handling different types of touch interactions.',
    domain: 'mobile'
  },
  {
    id: 'mobile_23',
    question: 'What is CocoaPods in iOS development?',
    options: ['IDE', 'Dependency manager', 'Testing tool', 'Database'],
    correctAnswer: 1,
    explanation: 'CocoaPods is a dependency manager for iOS projects, similar to npm for JavaScript or pip for Python.',
    domain: 'mobile'
  },
  {
    id: 'mobile_24',
    question: 'Which file format is used for iOS app icons?',
    options: ['.jpg', '.png', '.svg', '.gif'],
    correctAnswer: 1,
    explanation: 'PNG format is required for iOS app icons, providing transparency support and high quality.',
    domain: 'mobile'
  },
  {
    id: 'mobile_25',
    question: 'What is the purpose of ProGuard in Android?',
    options: ['UI testing', 'Code obfuscation', 'Database management', 'Network security'],
    correctAnswer: 1,
    explanation: 'ProGuard is used for code shrinking, obfuscation, and optimization in Android apps to reduce size and improve security.',
    domain: 'mobile'
  },

  // Python/Django Questions
  {
    id: 'python_1',
    question: 'What is Django?',
    options: ['Database', 'Web framework', 'Testing tool', 'Code editor'],
    correctAnswer: 1,
    explanation: 'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.',
    domain: 'python'
  },
  {
    id: 'python_2',
    question: 'Which command creates a new Django project?',
    options: ['django-admin startproject', 'python manage.py startproject', 'create-django-project', 'django create'],
    correctAnswer: 0,
    explanation: 'django-admin startproject is the command to create a new Django project with the necessary directory structure.',
    domain: 'python'
  },
  {
    id: 'python_3',
    question: 'What is a virtual environment in Python?',
    options: ['Cloud environment', 'Isolated Python environment', 'Database environment', 'Testing environment'],
    correctAnswer: 1,
    explanation: 'A virtual environment is an isolated Python environment that allows you to install packages without affecting the global Python installation.',
    domain: 'python'
  },
  {
    id: 'python_4',
    question: 'Which file defines URL patterns in Django?',
    options: ['views.py', 'models.py', 'urls.py', 'settings.py'],
    correctAnswer: 2,
    explanation: 'urls.py file defines URL patterns and maps them to corresponding view functions in Django.',
    domain: 'python'
  },
  {
    id: 'python_5',
    question: 'What is pip in Python?',
    options: ['Package installer', 'Code formatter', 'Test runner', 'Web server'],
    correctAnswer: 0,
    explanation: 'pip is the standard package installer for Python, used to install and manage Python packages from PyPI.',
    domain: 'python'
  },

  // DevOps & Cloud Questions
  {
    id: 'devops_1',
    question: 'What is Docker?',
    options: ['Database', 'Containerization platform', 'Code editor', 'Testing tool'],
    correctAnswer: 1,
    explanation: 'Docker is a containerization platform that allows you to package applications and their dependencies into lightweight containers.',
    domain: 'devops'
  },
  {
    id: 'devops_2',
    question: 'What does CI/CD stand for?',
    options: ['Code Integration/Code Deployment', 'Continuous Integration/Continuous Deployment', 'Computer Integration/Computer Deployment', 'Cloud Integration/Cloud Deployment'],
    correctAnswer: 1,
    explanation: 'CI/CD stands for Continuous Integration/Continuous Deployment, a practice of automating code integration and deployment.',
    domain: 'devops'
  },
  {
    id: 'devops_3',
    question: 'Which AWS service is used for computing?',
    options: ['S3', 'RDS', 'EC2', 'Lambda'],
    correctAnswer: 2,
    explanation: 'EC2 (Elastic Compute Cloud) is Amazon\'s primary computing service that provides resizable compute capacity.',
    domain: 'devops'
  },
  {
    id: 'devops_4',
    question: 'What is Kubernetes?',
    options: ['Database', 'Container orchestration platform', 'Code repository', 'Monitoring tool'],
    correctAnswer: 1,
    explanation: 'Kubernetes is an open-source container orchestration platform for automating deployment, scaling, and management of containerized applications.',
    domain: 'devops'
  },
  {
    id: 'devops_5',
    question: 'Which tool is used for infrastructure as code?',
    options: ['Terraform', 'Docker', 'Jenkins', 'Git'],
    correctAnswer: 0,
    explanation: 'Terraform is a popular infrastructure as code tool that allows you to define and provision infrastructure using declarative configuration files.',
    domain: 'devops'
  },

  // Cybersecurity Questions
  {
    id: 'security_1',
    question: 'What does OWASP stand for?',
    options: ['Open Web Application Security Project', 'Online Web Application Security Protocol', 'Open Website Application Security Platform', 'Online Website Application Security Project'],
    correctAnswer: 0,
    explanation: 'OWASP stands for Open Web Application Security Project, a nonprofit foundation that works to improve software security.',
    domain: 'security'
  },
  {
    id: 'security_2',
    question: 'What is SQL injection?',
    options: ['Database optimization', 'Security vulnerability', 'Query enhancement', 'Data encryption'],
    correctAnswer: 1,
    explanation: 'SQL injection is a security vulnerability that allows attackers to interfere with database queries by injecting malicious SQL code.',
    domain: 'security'
  },
  {
    id: 'security_3',
    question: 'What is XSS?',
    options: ['Cross-Site Scripting', 'eXternal Style Sheets', 'eXtended Security System', 'Cross-System Synchronization'],
    correctAnswer: 0,
    explanation: 'XSS (Cross-Site Scripting) is a security vulnerability that allows attackers to inject malicious scripts into web pages.',
    domain: 'security'
  },
  {
    id: 'security_4',
    question: 'What is HTTPS?',
    options: ['HyperText Transfer Protocol Secure', 'HyperText Transfer Protocol System', 'HyperText Transfer Protocol Server', 'HyperText Transfer Protocol Service'],
    correctAnswer: 0,
    explanation: 'HTTPS (HyperText Transfer Protocol Secure) is the secure version of HTTP that uses SSL/TLS encryption.',
    domain: 'security'
  },
  {
    id: 'security_5',
    question: 'What is two-factor authentication?',
    options: ['Double password', 'Two-step verification process', 'Dual database access', 'Two-user authorization'],
    correctAnswer: 1,
    explanation: 'Two-factor authentication (2FA) is a security process that requires two different authentication factors to verify identity.',
    domain: 'security'
  },

  // AI & Machine Learning Questions
  {
    id: 'ai_1',
    question: 'What is machine learning?',
    options: ['Computer programming', 'Artificial intelligence subset', 'Database management', 'Web development'],
    correctAnswer: 1,
    explanation: 'Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed.',
    domain: 'ai'
  },
  {
    id: 'ai_2',
    question: 'Which Python library is popular for machine learning?',
    options: ['Django', 'Flask', 'Scikit-learn', 'Requests'],
    correctAnswer: 2,
    explanation: 'Scikit-learn is a popular Python library for machine learning that provides simple and efficient tools for data analysis.',
    domain: 'ai'
  },
  {
    id: 'ai_3',
    question: 'What is supervised learning?',
    options: ['Learning with labeled data', 'Learning without data', 'Learning with unlabeled data', 'Learning with partial data'],
    correctAnswer: 0,
    explanation: 'Supervised learning is a machine learning approach where the algorithm learns from labeled training data to make predictions.',
    domain: 'ai'
  },
  {
    id: 'ai_4',
    question: 'What is a neural network?',
    options: ['Database structure', 'Computing system inspired by biological neural networks', 'Network protocol', 'Programming language'],
    correctAnswer: 1,
    explanation: 'A neural network is a computing system inspired by biological neural networks that can learn to perform tasks by considering examples.',
    domain: 'ai'
  },
  {
    id: 'ai_5',
    question: 'What is deep learning?',
    options: ['Advanced programming', 'Subset of machine learning', 'Database technique', 'Web framework'],
    correctAnswer: 1,
    explanation: 'Deep learning is a subset of machine learning that uses artificial neural networks with multiple layers to model complex patterns.',
    domain: 'ai'
  },

  // Database Management Questions
  {
    id: 'database_1',
    question: 'What does ACID stand for in databases?',
    options: ['Atomicity Consistency Isolation Durability', 'Advanced Computer Integration Database', 'Automatic Consistency Integration Database', 'Advanced Consistency Isolation Database'],
    correctAnswer: 0,
    explanation: 'ACID stands for Atomicity, Consistency, Isolation, and Durability - the key properties that guarantee reliable database transactions.',
    domain: 'database'
  },
  {
    id: 'database_2',
    question: 'What is normalization in databases?',
    options: ['Data encryption', 'Organizing data to reduce redundancy', 'Data compression', 'Data backup'],
    correctAnswer: 1,
    explanation: 'Database normalization is the process of organizing data to minimize redundancy and dependency by dividing large tables into smaller ones.',
    domain: 'database'
  },
  {
    id: 'database_3',
    question: 'Which SQL command is used to retrieve data?',
    options: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
    correctAnswer: 2,
    explanation: 'SELECT is the SQL command used to retrieve data from one or more tables in a database.',
    domain: 'database'
  },
  {
    id: 'database_4',
    question: 'What is a primary key?',
    options: ['First column in table', 'Unique identifier for records', 'Password for database', 'Main database file'],
    correctAnswer: 1,
    explanation: 'A primary key is a unique identifier for each record in a database table, ensuring no duplicate records exist.',
    domain: 'database'
  },
  {
    id: 'database_5',
    question: 'What is the difference between SQL and NoSQL?',
    options: ['No difference', 'SQL is relational, NoSQL is non-relational', 'SQL is newer', 'NoSQL is slower'],
    correctAnswer: 1,
    explanation: 'SQL databases are relational with structured data and ACID compliance, while NoSQL databases are non-relational and designed for flexible, scalable data storage.',
    domain: 'database'
  },

  // UI/UX Design Questions
  {
    id: 'design_1',
    question: 'What does UX stand for?',
    options: ['User eXperience', 'User eXtension', 'Universal eXperience', 'Unified eXperience'],
    correctAnswer: 0,
    explanation: 'UX stands for User Experience, which encompasses all aspects of the end-user\'s interaction with a company and its products.',
    domain: 'design'
  },
  {
    id: 'design_2',
    question: 'What is a wireframe?',
    options: ['Final design', 'Low-fidelity structural blueprint', 'Color scheme', 'Typography guide'],
    correctAnswer: 1,
    explanation: 'A wireframe is a low-fidelity structural blueprint that shows the basic layout and functionality of a web page or app screen.',
    domain: 'design'
  },
  {
    id: 'design_3',
    question: 'What is the purpose of a design system?',
    options: ['Create animations', 'Ensure consistency across products', 'Optimize performance', 'Manage databases'],
    correctAnswer: 1,
    explanation: 'A design system is a collection of reusable components and guidelines that ensure consistency across products and teams.',
    domain: 'design'
  },
  {
    id: 'design_4',
    question: 'What is responsive design?',
    options: ['Fast loading websites', 'Design that adapts to different screen sizes', 'Interactive animations', 'Voice-controlled interfaces'],
    correctAnswer: 1,
    explanation: 'Responsive design is an approach that makes web pages render well on different devices and window sizes.',
    domain: 'design'
  },
  {
    id: 'design_5',
    question: 'What is accessibility in web design?',
    options: ['Website speed', 'Making websites usable for people with disabilities', 'Mobile optimization', 'Search engine optimization'],
    correctAnswer: 1,
    explanation: 'Web accessibility means designing websites that can be used by people with disabilities, ensuring equal access to information and functionality.',
    domain: 'design'
  }
];
