import pythonLogo from '../assets/python-logo.svg';
import rLogo from '../assets/r-logo.svg';
import pandasLogo from '../assets/pandas-logo.svg';
import neurologyBrochure from '../assets/Neurology.pdf';
import tableauLogo from '../assets/tableau-logo.png';
import powerbiLogo from '../assets/powerbi-logo.svg';
import sqlLogo from '../assets/sql-logo.png';
import jupyterLogo from '../assets/jupyter-logo.svg';
import excelLogo from '../assets/excel-logo.svg';
import html5Logo from '../assets/html5-logo.svg';
import css3Logo from '../assets/css3-logo.svg';
import jsLogo from '../assets/javascript-logo.svg';
import reactLogo from '../assets/react-logo.svg';
import nodeLogo from '../assets/nodejs-logo.svg';
import mongoLogo from '../assets/mongodb-logo.svg';
import expressLogo from '../assets/express-logo.png';
import gitLogo from '../assets/git-logo.svg';
import kotlinLogo from '../assets/kotlin-logo.png';
import androidStudioLogo from '../assets/android-studio-logo.svg';
import javaLogo from '../assets/java-logo.svg';
import firebaseLogo from '../assets/firebase-logo.svg';
import sqliteLogo from '../assets/sqlite-logo.svg';
import eclipseLogo from '../assets/eclipse-logo.svg';
import intellijLogo from '../assets/intellij-logo.svg';
import springLogo from '../assets/spring-logo.svg';
import mavenLogo from '../assets/maven-logo.svg';
import kaliLinuxLogo from '../assets/kali-linux-logo.svg';
import awsLogo from '../assets/aws-logo.svg';
import azureLogo from '../assets/azure-logo.svg';
import gcpLogo from '../assets/gcp-logo.svg';
import dockerLogo from '../assets/docker-logo.svg';
import kubernetesLogo from '../assets/kubernetes-logo.svg';
import terraformLogo from '../assets/terraform-logo.svg';
import linuxLogo from '../assets/linux-logo.svg';
import jenkinsLogo from '../assets/jenkins-logo.svg';
import wiresharkLogo from '../assets/wireshark-logo.png';
import metasploitLogo from '../assets/metasploit-logo.png';
import nmapLogo from '../assets/nmap-logo.png';
import burpSuiteLogo from '../assets/burp-suite-logo.png';
import pycharmLogo from '../assets/pycharm-logo.svg';
import vscodeLogo from '../assets/vscode-logo.svg';
import djangoLogo from '../assets/django-logo.svg';
import flaskLogo from '../assets/flask-logo.svg';
// Engineering logos
import arduinoLogo from '../assets/arduino-logo.svg';
import raspberryPiLogo from '../assets/raspberry-pi-logo.svg';
import rosLogo from '../assets/ros-logo.svg';
import cppLogo from '../assets/cpp-logo.svg';
import opencvLogo from '../assets/opencv-logo.svg';
import solidworksLogo from '../assets/solidworks-logo.svg';
import matlabLogo from '../assets/matlab-logo.png';
import noderedLogo from '../assets/nodered-logo.svg';
import cLogo from '../assets/c-logo.svg';
import autodeskLogo from '../assets/autodesk-logo.svg';
// Business & Finance logos
import linkedinLogo from '../assets/linkedin-logo.svg';
import salesforceLogo from '../assets/salesforce-logo.svg';
import hubspotLogo from '../assets/hubspot-logo.svg';
import zoomLogo from '../assets/zoom-logo.svg';
import mailchimpLogo from '../assets/mailchimp-logo.svg';
import wordpressLogo from '../assets/wordpress-logo.svg';
import googleAdsLogo from '../assets/google-ads-logo.svg';
import facebookLogo from '../assets/facebook-logo.svg';
import instagramLogo from '../assets/instagram-logo.svg';
import powerpointLogo from '../assets/powerpoint-logo.svg';
import outlookLogo from '../assets/outlook-logo.svg';
import sapLogo from '../assets/sap-logo.svg';
import tallyLogo from '../assets/tally-logo.png';
import tradingviewLogo from '../assets/tradingview-logo.png';
import canvaLogo from '../assets/canva-logo.png';
import semrushLogo from '../assets/semrush-logo.png';
import analyticsLogo from '../assets/google-analytics-logo.svg';
import screenerLogo from '../assets/screener-logo.webp';
import zerodhaLogo from '../assets/zerodha-logo.svg';

export const programDetails = {
    "data-science": {
        title: "Data Science",
        subtitle: "Career Starter Program",
        description: "Uncover hidden patterns and derive actionable insights from complex data. Master the art of statistical analysis, visualization, and predictive modeling.",
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2600&auto=format&fit=crop",
        stats: { salary: "₹7-14 LPA", growth: "28%", marketSize: "$140B+" },
        overview: "Became a data wizard. This program covers the full data science lifecycle, from data wrangling and exploration to advanced statistical modeling and storytelling with data.",
        tools: [
            { name: "Python", color: "text-yellow-400", code: "Py", logo: pythonLogo },
            { name: "R", color: "text-blue-500", code: "R", logo: rLogo },
            { name: "Pandas", color: "text-purple-400", code: "Pd", logo: pandasLogo },
            { name: "Tableau", color: "text-orange-500", code: "Tb", logo: tableauLogo },
            { name: "PowerBI", color: "text-yellow-600", code: "Pb", logo: powerbiLogo },
            { name: "SQL", color: "text-blue-300", code: "Sq", logo: sqlLogo },
            { name: "Jupyter", color: "text-orange-600", code: "Jp", logo: jupyterLogo },
            { name: "Excel", color: "text-green-500", code: "Ex", logo: excelLogo }
        ],
        projects: [
            { type: "Mini Project", title: "EDA on Sales Data", desc: "Perform exploratory data analysis on retail sales data to identify trends.", icon: "TrendingUp", color: "blue", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "Customer Churn Prediction", desc: "Build a predictive model to identify customers likely to cancel their subscription.", icon: "Users", color: "purple", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "Credit Risk Analysis", desc: "Develop a robust system to assess credit risk using financial data.", icon: "Shield", color: "orange", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "Intro to Data Science & Python", description: "Basics of Python programming and the data science ecosystem." },
            { title: "Statistics & Probability", description: "Core statistical concepts, hypothesis testing, and probability distributions." },
            { title: "Data Manipulation with Pandas", description: "Cleaning, transforming, and inspecting data frames." },
            { title: "Data Visualization", description: "Creating charts and dashboards using Matplotlib, Seaborn, and Tableau." },
            { title: "SQL for Data Science", description: "Querying databases, joins, aggregations, and subqueries." },
            { title: "Machine Learning Basics", description: "Introduction to supervised and unsupervised learning algorithms." },
            { title: "Model Evaluation", description: "Metrics for performance, cross-validation, and bias-variance tradeoff." },
            { title: "Big Data Essentials", description: "Overview of Big Data technologies like Spark and Hadoop." },
            { title: "Capstone Project", description: "End-to-end data science project implementation." }
        ]
    },
    "web-development": {
        title: "Web Development",
        subtitle: "Career Starter Program",
        description: "Build dynamic, responsive, and scalable web applications. Master both front-end and back-end technologies to become a complete developer.",
        heroImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2600&auto=format&fit=crop",
        stats: { salary: "₹5-12 LPA", growth: "25%", marketSize: "$85B+" },
        overview: "From HTML/CSS to the MERN stack. This program ensures you can build modern websites and web apps from scratch with industry-standard practices.",
        tools: [
            { name: "HTML5", color: "text-orange-500", code: "H5", logo: html5Logo },
            { name: "CSS3", color: "text-blue-500", code: "C3", logo: css3Logo },
            { name: "JavaScript", color: "text-yellow-400", code: "Js", logo: jsLogo },
            { name: "React", color: "text-cyan-400", code: "Rc", logo: reactLogo },
            { name: "Node.js", color: "text-green-500", code: "Nd", logo: nodeLogo },
            { name: "MongoDB", color: "text-green-600", code: "Mg", logo: mongoLogo },
            { name: "Express", color: "text-gray-400", code: "Ex", logo: expressLogo },
            { name: "Git", color: "text-red-500", code: "Gt", logo: gitLogo }
        ],
        projects: [
            { type: "Mini Project", title: "Portfolio Website", desc: "Design and build a personal portfolio to showcase your skills.", icon: "Globe", color: "blue", image: "https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "E-commerce Store", desc: "A functional online store with cart, checkout, and product management.", icon: "TrendingUp", color: "purple", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "Social Media App", desc: "A real-time social platform with posts, likes, and chat functionality.", icon: "MessageSquare", color: "orange", image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "HTML5 & CSS3 Mastery", description: "Semantic HTML, responsive design, Flexbox, and Grid." },
            { title: "JavaScript ES6+", description: "Modern JS features, DOM manipulation, and async programming." },
            { title: "React.js Fundamentals", description: "Components, state, props, hooks, and routing." },
            { title: "Backend with Node.js", description: "Building REST APIs, handling requests, and file systems." },
            { title: "Express.js Framework", description: "Middleware, routing, and error handling." },
            { title: "Database with MongoDB", description: "NoSQL schema design, CRUD operations, and aggregation." },
            { title: "Authentication & Security", description: "JWT, hashing, and securing API endpoints." },
            { title: "Deployment & CI/CD", description: "Deploying apps to Vercel/Heroku and setting up pipelines." }
        ]
    },
    "android-development": {
        title: "Android Development",
        subtitle: "Career Starter Program",
        description: "Create powerful mobile applications for the world's most popular operating system. Learn Kotlin and build apps that reach billions of users.",
        heroImage: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2600&auto=format&fit=crop",
        stats: { salary: "₹6-14 LPA", growth: "22%", marketSize: "$150B+" },
        overview: "Master the art of Android App Development using Kotlin. From basic UI layouts to complex networking and database integration.",
        tools: [
            { name: "Kotlin", color: "text-purple-500", code: "Kt", logo: kotlinLogo },
            { name: "Android Studio", color: "text-green-400", code: "As", logo: androidStudioLogo },
            { name: "Java", color: "text-red-500", code: "Jv", logo: javaLogo },
            { name: "Firebase", color: "text-yellow-500", code: "Fb", logo: firebaseLogo },
            { name: "XML", color: "text-orange-400", code: "Xm" },
            { name: "SQLite", color: "text-blue-400", code: "Sl", logo: sqliteLogo },
            { name: "Git", color: "text-red-400", code: "Gt", logo: gitLogo },
            { name: "Gradle", color: "text-gray-400", code: "Gd" }
        ],
        projects: [
            { type: "Mini Project", title: "To-Do List App", desc: "A simple task management app with local storage.", icon: "CheckSquare", color: "blue", image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "Weather Forecast App", desc: "Fetch real-time weather data using APIs and display it beautifully.", icon: "Sun", color: "purple", image: "https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "Chat Application", desc: "Real-time messaging app with Firebase backend and notifications.", icon: "MessageCircle", color: "orange", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "Intro to Kotlin & OOP", description: "Variables, functions, classes, and object-oriented programming in Kotlin." },
            { title: "Android Studio & UI Basics", description: "Setting up environment, layouts, and views (TextView, Button, RecyclerView)." },
            { title: "Activity Javascript & Lifecycle", description: "Understanding Android lifecycle, intents, and navigation." },
            { title: "Networking & APIs", description: "Fetching data from the internet using Retrofit and parsing JSON." },
            { title: "Local Database (Room)", description: "Storing data locally on the device effectively." },
            { title: "Firebase Integration", description: "Auth, Firestore, and Cloud Messaging." },
            { title: "MVVM Architecture", description: "Writing clean, maintainable, and testable code." },
            { title: "App Deployment", description: "Publishing your app to the Google Play Store." }
        ]
    },
    "cyber-security": {
        title: "Cyber Security",
        subtitle: "Career Starter Program",
        description: "Defend the digital world. Learn to identify vulnerabilities, protect systems from attacks, and ensure data privacy in an interconnected era.",
        heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2600&auto=format&fit=crop",
        stats: { salary: "₹6-15 LPA", growth: "35%", marketSize: "$200B+" },
        overview: "Become a digital defender. This program covers ethical hacking, network security, cryptography, and risk assessment.",
        tools: [
            { name: "Kali Linux", color: "text-blue-500", code: "Kl", logo: kaliLinuxLogo },
            { name: "Wireshark", color: "text-blue-400", code: "Ws", logo: wiresharkLogo },
            { name: "Metasploit", color: "text-gray-400", code: "Ms", logo: metasploitLogo },
            { name: "Nmap", color: "text-green-500", code: "Nm", logo: nmapLogo },
            { name: "Python", color: "text-yellow-400", code: "Py", logo: pythonLogo },
            { name: "Burp Suite", color: "text-orange-500", code: "Bs", logo: burpSuiteLogo },
            { name: "Snort", color: "text-red-500", code: "Sn" },
            { name: "Git", color: "text-gray-300", code: "Gt", logo: gitLogo }
        ],
        projects: [
            { type: "Mini Project", title: "Network Scanner", desc: "Build a tool to discover devices and open ports on a network.", icon: "Server", color: "blue", image: "https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "Vulnerability Assessment", desc: "Conduct a full audit of a web server to find security flaws.", icon: "ShieldAlert", color: "red", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "Secure Chat System", desc: "Implement end-to-end encryption for a messaging application.", icon: "Lock", color: "green", image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "Networking Fundamentals", description: "TCP/IP, OSI Model, IP addressing, and common protocols." },
            { title: "Linux Essentials", description: "Command line, file permissions, and scripting." },
            { title: "Ethical Hacking Basics", description: "Footprinting, reconnaissance, and scanning." },
            { title: "Web App Security", description: "OWASP Top 10, SQL Injection, XSS, and CSRF." },
            { title: "Network Security", description: "Firewalls, IDS/IPS, and packet analysis." },
            { title: "Cryptography", description: "Encryption, hashing, and digital signatures." },
            { title: "Penetration Testing", description: "Simulating attacks to find weaknesses." },
            { title: "Cyber Forensics", description: "Investigating cyber crimes and evidence handling." }
        ]
    },
    // Adding more domains...
    "java-programming": {
        title: "Java Programming",
        subtitle: "Career Starter Program",
        description: "Master one of the most robust and widely used programming languages. Build enterprise-grade applications and strong back-end systems.",
        heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2600&auto=format&fit=crop",
        stats: { salary: "₹4-10 LPA", growth: "15%", marketSize: "Huge" },
        overview: "From syntax to Spring Boot. Deep dive into Object Oriented Programming, Data Structures, and building scalable backends.",
        tools: [
            { name: "Java", color: "text-red-500", code: "Jv", logo: javaLogo },
            { name: "Eclipse", color: "text-blue-500", code: "Ec", logo: eclipseLogo },
            { name: "IntelliJ", color: "text-purple-500", code: "Ij", logo: intellijLogo },
            { name: "Spring", color: "text-green-500", code: "Sp", logo: springLogo },
            { name: "Hibernate", color: "text-gray-400", code: "Hb" },
            { name: "Maven", color: "text-orange-500", code: "Mv", logo: mavenLogo },
            { name: "SQL", color: "text-blue-300", code: "Sq", logo: sqlLogo },
            { name: "Git", color: "text-red-400", code: "Gt", logo: gitLogo }
        ],
        projects: [
            { type: "Mini Project", title: "Student Mgmt System", desc: "Console based app to manage student records.", icon: "Database", color: "blue", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "Library Management", desc: "Full desktop/web app to tracking books and borrowing.", icon: "Book", color: "purple", image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "Banking System", desc: "Secure transaction processing system with Spring Boot.", icon: "CreditCard", color: "orange", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "Java Basics", description: "Variables, loops, operators, and control flow." },
            { title: "OOP Concepts", description: "Classes, Objects, Inheritance, Polymorphism, Abstraction." },
            { title: "Collections Framework", description: "Lists, Sets, Maps, and Generics." },
            { title: "Exception Handling", description: "Try-catch blocks and custom exceptions." },
            { title: "Multithreading", description: "Creating threads and synchronization." },
            { title: "JDBC", description: "Connecting Java applications to databases." },
            { title: "Spring Boot Basics", description: "Building RESTful APIs." },
            { title: "Unit Testing", description: "Writing tests with JUnit." }
        ]
    },
    "python-programming": {
        title: "Python Programming",
        subtitle: "Career Starter Program",
        description: "Learn the most versatile language of today. From automation scripting to web backends and data analysis.",
        heroImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2600&auto=format&fit=crop",
        stats: { salary: "₹5-12 LPA", growth: "30%", marketSize: "High" },
        overview: "A complete journey through Python. Master the syntax, libraries, and best practices to build scripts, web apps, and more.",
        tools: [
            { name: "Python", color: "text-yellow-400", code: "Py", logo: pythonLogo },
            { name: "PyCharm", color: "text-green-500", code: "Pc", logo: pycharmLogo },
            { name: "VS Code", color: "text-blue-500", code: "Vs", logo: vscodeLogo },
            { name: "Django", color: "text-green-700", code: "Dj", logo: djangoLogo },
            { name: "Flask", color: "text-gray-400", code: "Fl", logo: flaskLogo },
            { name: "Requests", color: "text-orange-500", code: "Rq" },
            { name: "PyTest", color: "text-blue-400", code: "Pt" },
            { name: "Git", color: "text-red-500", code: "Gt", logo: gitLogo }
        ],
        projects: [
            { type: "Mini Project", title: "Web Scraper", desc: "Extract data from websites automatically.", icon: "Search", color: "blue", image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "Blog Website", desc: "Full featured blog using Django framework.", icon: "Layout", color: "purple", image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "Automation Bot", desc: "Bot to automate emails and file organization tasks.", icon: "Bot", color: "orange", image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "Python Syntax", description: "Variables, data types, and operators." },
            { title: "Control Structures", description: "Loops, conditionals, and functions." },
            { title: "Data Structures", description: "Lists, tuples, dictionaries, and sets." },
            { title: "File Handling", description: "Reading and writing to files." },
            { title: "OOP in Python", description: "Classes and objects." },
            { title: "Web Development", description: "Intro to Flask/Django." },
            { title: "API Interaction", description: "Consuming REST services." },
            { title: "Scripting & Automation", description: "Automating boring tasks." }
        ]
    },
    "embedded-systems": {
        title: "Embedded Systems",
        subtitle: "Career Starter Program",
        description: "Design the brain of smart devices. Interface hardware with software to control machinery, sensors, and consumer electronics.",
        heroImage: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2600&auto=format&fit=crop",
        stats: { salary: "₹4-10 LPA", growth: "18%", marketSize: "$100B+" },
        overview: "Dive into microcontroller programming. Learn C/C++, ARM architecture, and communication protocols like I2C and SPI.",
        tools: [
            { name: "C/C++", color: "text-blue-600", code: "C", logo: cLogo },
            { name: "Arduino", color: "text-teal-500", code: "Ar", logo: arduinoLogo },
            { name: "Raspberry Pi", color: "text-red-600", code: "Rp", logo: raspberryPiLogo },
            { name: "STM32", color: "text-blue-400", code: "St" },
            { name: "Keil", color: "text-green-600", code: "Kl" },
            { name: "Proteus", color: "text-purple-500", code: "Pr" },
            { name: "Sensing", color: "text-yellow-500", code: "Sn" },
            { name: "Actuators", color: "text-orange-500", code: "Ac" }
        ],
        projects: [
            { type: "Mini Project", title: "Home Automation", desc: "Control lights and fans using relay modules.", icon: "Home", color: "blue", image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "Smart Weather Station", desc: "Monitor temp/humidity and display on LCD.", icon: "Cloud", color: "purple", image: "https://images.unsplash.com/photo-1530906358829-e84b2769270f?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "Robot Car", desc: "Obstacle avoiding robot with motor drivers.", icon: "Cpu", color: "orange", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "Intro to Embedded Systems", description: "Microprocessors vs Microcontrollers." },
            { title: "C Programming for Embedded", description: "Bit manipulation, pointers, and memory management." },
            { title: "Arduino Programming", description: "Digital/Analog I/O, Interrupts." },
            { title: "Sensors & Modules", description: "Interfacing ultrasonic, IR, DHT sensors." },
            { title: "Communication Protocols", description: "UART, SPI, I2C." },
            { title: "ARM Cortex Basics", description: "Intro to 32-bit architecture." },
            { title: "RTOS Concepts", description: "Real-time task scheduling." },
            { title: "PCB Basics", description: "Designing simple circuit boards." }
        ]
    },
    "internet-of-things": {
        title: "Internet of Things",
        subtitle: "Career Starter Program",
        description: "Connect the physical world to the internet. Build smart networks where devices communicate, share data, and take intelligent actions.",
        heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2600&auto=format&fit=crop",
        stats: { salary: "₹5-12 LPA", growth: "32%", marketSize: "$500B+" },
        overview: "The future is connected. Learn to build IoT solutions using ESP8266/32, Cloud platforms (AWS IoT), and MQTT protocol.",
        tools: [
            { name: "Arduino", color: "text-teal-500", code: "Ar", logo: arduinoLogo },
            { name: "ESP32", color: "text-gray-300", code: "Es" },
            { name: "Python", color: "text-yellow-400", code: "Py", logo: pythonLogo },
            { name: "AWS IoT", color: "text-orange-500", code: "Aw", logo: awsLogo },
            { name: "Node-RED", color: "text-red-500", code: "Nr", logo: noderedLogo },
            { name: "MQTT", color: "text-purple-500", code: "Mq" },
            { name: "Raspberry Pi", color: "text-red-600", code: "Rp", logo: raspberryPiLogo },
            { name: "Blink App", color: "text-green-400", code: "Bk" }
        ],
        projects: [
            { type: "Mini Project", title: "Smart Switch", desc: "Control appliances via WiFi mobile app.", icon: "Smartphone", color: "blue", image: "https://images.unsplash.com/photo-1598460555317-0b1a0e0be9a0?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "Health Monitor", desc: "Remote patient monitoring system for heart rate.", icon: "Activity", color: "purple", image: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "Smart Agriculture", desc: "Automated irrigation system based on soil moisture.", icon: "Sun", color: "orange", image: "https://images.unsplash.com/photo-1628352081506-83c43143df6a?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "IoT Architecture", description: "Sensors, Gateways, Cloud, and App." },
            { title: "Networking for IoT", description: "WiFi, Bluetooth, Zigbee, LoRa." },
            { title: "Microcontrollers", description: "Working with NodeMCU and ESP32." },
            { title: "Cloud Platforms", description: "Sending data to ThingSpeak/AWS." },
            { title: "Protocols", description: "HTTP vs MQTT." },
            { title: "Edge Computing", description: "Processing data locally on Pi." },
            { title: "IoT Security", description: "Securing devices and data transmission." },
            { title: "Industrial IoT", description: "Applications in manufacturing (IIoT)." }
        ]
    },
    // ... HEV, Robotics, Construction, IC Engine, HR, Finance, Sales, Digital Marketing, Stock, Bio, Psychology, Medical Coding
    "hybrid-electric-vehicle": {
        title: "Hybrid Electric Vehicle",
        subtitle: "Career Starter Program",
        description: "Drive the green revolution. Master the engineering behind Electric and Hybrid vehicles, battery management systems, and electric powertrains.",
        heroImage: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2600&auto=format&fit=crop",
        stats: { salary: "₹6-15 LPA", growth: "40%", marketSize: "Rapid" },
        overview: "Specialized training in EV technology. Understand motors, batteries (Li-ion), BMS, and the integration of mechanical and electrical systems.",
        tools: [
            { name: "MATLAB", color: "text-orange-600", code: "Mt", logo: matlabLogo },
            { name: "Simulink", color: "text-blue-600", code: "Sm", logo: matlabLogo },
            { name: "Ansys", color: "text-yellow-500", code: "An" },
            { name: "AutoCAD", color: "text-red-500", code: "Au", logo: autodeskLogo },
            { name: "Catia", color: "text-blue-500", code: "Ct" },
            { name: "SolidWorks", color: "text-red-400", code: "Sw", logo: solidworksLogo },
            { name: "Motors", color: "text-gray-400", code: "Mo" },
            { name: "Batteries", color: "text-green-500", code: "Ba" }
        ],
        projects: [
            { type: "Mini Project", title: "Battery Modeling", desc: "Simulate Li-ion battery discharge characteristics.", icon: "Battery", color: "blue", image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "Motor Control", desc: "Design a controller for BLDC motor speed.", icon: "Settings", color: "purple", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "Hybrid Powertrain", desc: "Simulate a complete hybrid vehicle powertrain in Simulink.", icon: "Zap", color: "orange", image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "Intro to EVs/HEVs", description: "History, types (Series, Parallel), and trends." },
            { title: "Vehicle Dynamics", description: "Forces acting on a vehicle and performance." },
            { title: "Electric Motors", description: "BLDC, PMSM, and Induction motors." },
            { title: "Battery Technology", description: "Chemistry, Pack design, and BMS." },
            { title: "Power Electronics", description: "Inverters, Converters (DC-DC)." },
            { title: "Regenerative Braking", description: "Recovering energy during deceleration." },
            { title: "Charging Infra", description: "AC/DC charging, levels, and standards." },
            { title: "Simulation", description: "Using MATLAB/Simulink for EV modeling." }
        ]
    },
    // Adding the rest quickly to ensure completion
    "robotics": {
        title: "Robotics",
        subtitle: "Career Starter Program",
        description: "Build the machines of tomorrow. Learn kinematics, control systems, and programming to create autonomous robots.",
        heroImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2600&auto=format&fit=crop",
        stats: { salary: "₹5-12 LPA", growth: "20%", marketSize: "High" },
        overview: "From arms to drones. This program covers the mechanics, electronics, and software required to build functional robots.",
        tools: [
            { name: "ROS", color: "text-orange-500", code: "Rs", logo: rosLogo },
            { name: "Python", color: "text-blue-400", code: "Py", logo: pythonLogo },
            { name: "C++", color: "text-blue-600", code: "C+", logo: cppLogo },
            { name: "Arduino", color: "text-teal-500", code: "Ar", logo: arduinoLogo },
            { name: "Raspberry Pi", color: "text-red-500", code: "Rp", logo: raspberryPiLogo },
            { name: "Gazebo", color: "text-gray-400", code: "Gz" },
            { name: "OpenCV", color: "text-green-500", code: "Cv", logo: opencvLogo },
            { name: "SolidWorks", color: "text-red-400", code: "Sw", logo: solidworksLogo }
        ],
        projects: [
            { type: "Mini Project", title: "Line Follower", desc: "Basic autonomous robot following a path.", icon: "Navigation", color: "blue", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "Robotic Arm", desc: "3DOF arm controlled via joystick or software.", icon: "Move", color: "purple", image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "Obstacle Avoidance", desc: "Autonomous rover that navigates environments.", icon: "Map", color: "orange", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "Intro to Robotics", description: "Types, applications, and components." },
            { title: "Robot Kinematics", description: "Forward and Inverse kinematics." },
            { title: "Sensors & Perception", description: "Lidar, Cameras, IMU integration." },
            { title: "Actuators & Drives", description: "Servos, Steppers, and DC motors." },
            { title: "Control Systems", description: "PID control basics." },
            { title: "Robot Operating System (ROS)", description: "Nodes, topics, and messages." },
            { title: "Computer Vision", description: "Giving sight to robots with OpenCV." },
            { title: "Path Planning", description: "Algorithms for navigation." }
        ]
    },
    "construction-planning": {
        title: "Construction Planning",
        subtitle: "Career Starter Program",
        description: "Master the art of project management in construction. Learn estimation, scheduling, and using software to manage large infrastructures.",
        heroImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2600&auto=format&fit=crop",
        stats: { salary: "₹4-9 LPA", growth: "Steady", marketSize: "Large" },
        overview: "Plan, execute, and monitor. Learn tools like Primavera and MSP to deliver projects on time and budget.",
        tools: [
            { name: "Primavera", color: "text-green-600", code: "P6" },
            { name: "MS Project", color: "text-blue-600", code: "Mp" },
            { name: "AutoCAD", color: "text-red-500", code: "Ac", logo: autodeskLogo },
            { name: "Revit", color: "text-blue-400", code: "Rv", logo: autodeskLogo },
            { name: "Excel", color: "text-green-500", code: "Ex", logo: excelLogo },
            { name: "BIM", color: "text-yellow-500", code: "Bm" }
        ],
        projects: [
            {
                type: "Mini Project",
                title: "Cost Estimation",
                desc: "Estimate total project cost including materials.",
                icon: "Calculator",
                color: "blue",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "Major Project",
                title: "Project Scheduling",
                desc: "Create a detailed Gantt chart for timeline.",
                icon: "Calendar",
                color: "purple",
                image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "Capstone Project",
                title: "Site Management Plan",
                desc: "Comprehensive plan for resources on-site.",
                icon: "Layout",
                color: "orange",
                image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop"
            }
        ],
        curriculum: [
            { title: "Construction Mgmt Basics", description: "Project lifecycle and stakeholders." },
            { title: "Estimation & Costing", description: "Quantity takeoff and rate analysis." },
            { title: "Planning & Scheduling", description: "CPM, PERT, and Gantt charts." },
            { title: "Primavera P6", description: "Setting up projects and WBS." },
            { title: "Resource Management", description: "Allocating and leveling resources." },
            { title: "Risk Management", description: "Identifying and mitigating project risks." },
            { title: "Contracts & Tenders", description: "Understanding legal aspects." },
            { title: "Safety Management", description: "HSE standards on site." }
        ]
    },
    "ic-engine-design": {
        title: "IC Engine Design",
        subtitle: "Career Starter Program",
        description: "Deep dive into the heart of vehicles. Understand thermodynamics, combustion, and design components of Internal Combustion Engines.",
        heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2600&auto=format&fit=crop",
        stats: { salary: "₹5-10 LPA", growth: "Stable", marketSize: "Global" },
        overview: "Master thermal engineering. Analyze cycles, emission norms, and design piston-cylinder arrangements using CAD/CAE.",
        tools: [
            { name: "SolidWorks", color: "text-red-500", code: "Sw", logo: solidworksLogo },
            { name: "Ansys", color: "text-yellow-500", code: "An" },
            { name: "Catia", color: "text-blue-500", code: "Ct" },
            { name: "MATLAB", color: "text-orange-500", code: "Mt", logo: matlabLogo },
            { name: "Excel", color: "text-green-500", code: "Ex", logo: excelLogo },
            { name: "GT-Power", color: "text-blue-400", code: "Gt" }
        ],
        projects: [
            { type: "Mini Project", title: "Thermodynamic Analysis", desc: "Calculate efficiency of Otto/Diesel cycles.", icon: "Activity", color: "blue", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "Piston Design", desc: "3D model and stress analysis of a piston.", icon: "Box", color: "purple", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "Emission Control", desc: "Study and simulation of exhaust gas after-treatment.", icon: "Wind", color: "orange", image: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "Engine Fundamentals", description: "2-stroke vs 4-stroke, SI vs CI." },
            { title: "Thermodynamics", description: "Laws, cycles, and heat transfer." },
            { title: "Combustion Analysis", description: "Flame propagation, knocking, and injection." },
            { title: "Component Design", description: "Piston, rod, crankshaft design." },
            { title: "Lubrication & Cooling", description: "Systems to maintain engine health." },
            { title: "Emissions & Norms", description: "Euro/BS standards and control.", },
            { title: "Turbocharging", description: "Boosting performance." },
            { title: "Engine Testing", description: "Dyno testing and performance curves." }
        ]
    },
    "human-resources": {
        title: "Human Resource Management",
        subtitle: "Career Starter Program",
        description: "Manage the most valuable asset of any organization: People. Learn recruitment, payroll, compliance, and employee engagement.",
        heroImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2600&auto=format&fit=crop",
        stats: { salary: "₹4-10 LPA", growth: "Stable", marketSize: "Essential" },
        overview: "From hiring to retiring. Master the HR lifecycle including talent acquisition, performance appraisal, and labor laws.",
        tools: [
            { name: "Excel", color: "text-green-500", code: "Ex", logo: excelLogo },
            { name: "LinkedIn", color: "text-blue-500", code: "Li", logo: linkedinLogo },
            { name: "HRIS", color: "text-orange-500", code: "Hr" },
            { name: "Payroll", color: "text-purple-500", code: "Pa" },
            { name: "PowerPT", color: "text-red-400", code: "Pp", logo: powerpointLogo },
            { name: "Outlook", color: "text-blue-400", code: "Ou", logo: outlookLogo }
        ],
        projects: [
            { type: "Mini Project", title: "Job Description", desc: "Draft professional JDs for various tech roles.", icon: "FileText", color: "blue", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "Recruitment Plan", desc: "Create a strategy to hire 50 employees in 2 months.", icon: "Users", color: "purple", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "Performance System", desc: "Design an appraisal system for a startup.", icon: "TrendingUp", color: "orange", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "Intro to HRM", description: "Roles, responsibilities, and evolution." },
            { title: "Talent Acquisition", description: "Sourcing, interviewing, and selection." },
            { title: "Onboarding", description: "Integrating new hires effectively." },
            { title: "Performance Mgmt", description: "KPIs, appraisals, and feedback." },
            { title: "Compensation & Benefits", description: "Payroll, bonuses, and perks." },
            { title: "Labor Laws", description: "Compliance, PF, ESIC, and workplace safety." },
            { title: "Employee Engagement", description: "Motivation and culture building." },
            { title: "HR Analytics", description: "Using data to make people decisions." }
        ]
    },
    "finance": {
        title: "Financial Management",
        subtitle: "Career Starter Program",
        description: "Understand the language of business. Learn financial analysis, budgeting, investment banking, and market trends.",
        heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2600&auto=format&fit=crop",
        stats: { salary: "₹5-12 LPA", growth: "High", marketSize: "Global" },
        overview: "Master the numbers. Covers financial modeling, valuation, equity research, and risk management.",
        tools: [
            { name: "Excel", color: "text-green-500", code: "Ex", logo: excelLogo },
            { name: "PowerBI", color: "text-yellow-500", code: "Pb", logo: powerbiLogo },
            { name: "Tally", color: "text-teal-500", code: "Ty", logo: tallyLogo },
            { name: "SAP", color: "text-blue-600", code: "Sp", logo: sapLogo },
            { name: "Python", color: "text-blue-400", code: "Py", logo: pythonLogo },
            { name: "TradingView", color: "text-gray-400", code: "Tv", logo: tradingviewLogo }
        ],
        projects: [
            { type: "Mini Project", title: "Ratio Analysis", desc: "Analyze balance sheets of a company.", icon: "BarChart", color: "blue", image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "Portfolio Mgmt", desc: "Create a diversified investment portfolio.", icon: "PieChart", color: "purple", image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "Company Valuation", desc: "DCF analysis to find fair value of a stock.", icon: "DollarSign", color: "orange", image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "Financial Accounting", description: "Basics of P&L, Balance Sheet, Cash Flow." },
            { title: "Financial Analysis", description: "Ratios, trend analysis, and benchmarking." },
            { title: "Corporate Finance", description: "Capital budgeting, WACC, and leverage." },
            { title: "Investment Banking", description: "M&A, IPOs, and valuation." },
            { title: "Financial Modeling", description: "Building models in Excel." },
            { title: "Risk Management", description: "Derivatives, hedging, and options." },
            { title: "Markets", description: "Stock markets, bonds, and forex." },
            { title: "FinTech Overview", description: "Future of finance and payments." }
        ]
    },
    "digital-marketing": {
        title: "Digital Marketing",
        subtitle: "Career Starter Program",
        description: "Rule the internet. Learn strategies to reach millions using SEO, Social Media, Email, and Content Marketing.",
        heroImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2600&auto=format&fit=crop",
        stats: { salary: "₹4-10 LPA", growth: "Explosive", marketSize: "$500B+" },
        overview: "A 360-degree course. Learn to create campaigns, rank on Google, run ads on FB/Insta, and analyze traffic.",
        tools: [
            { name: "Google Ads", color: "text-blue-500", code: "Ga", logo: googleAdsLogo },
            { name: "Analytics", color: "text-orange-500", code: "An", logo: analyticsLogo },
            { name: "WordPress", color: "text-blue-600", code: "Wp", logo: wordpressLogo },
            { name: "Canva", color: "text-purple-500", code: "Cn", logo: canvaLogo },
            { name: "Mailchimp", color: "text-yellow-500", code: "Mc", logo: mailchimpLogo },
            { name: "Semrush", color: "text-orange-600", code: "Sm", logo: semrushLogo },
            { name: "Facebook", color: "text-blue-600", code: "Fb", logo: facebookLogo },
            { name: "Instagram", color: "text-pink-500", code: "Ig", logo: instagramLogo }
        ],
        projects: [
            { type: "Mini Project", title: "SEO Audit", desc: "Analyze a website and suggest SEO improvements.", icon: "Search", color: "blue", image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "Social Media Campaign", desc: "Run a mock campaign for a brand launch.", icon: "Share2", color: "purple", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "Marketing Strategy", desc: "Complete 6-month digital roadmap for a client.", icon: "Target", color: "orange", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "Intro to Digital Mkt", description: "Traditional vs Digital." },
            { title: "Website Planning", description: "UX/UI basics and WordPress." },
            { title: "SEO (Search Engine Optimization)", description: "On-page, Off-page, and Technical SEO." },
            { title: "SEM (Search Engine Marketing)", description: "Google Ads and PPC." },
            { title: "Social Media Mkt (SMM)", description: "FB, Insta, LinkedIn strategies." },
            { title: "Email Marketing", description: "Building lists and automation." },
            { title: "Content Marketing", description: "Writing copy that sells." },
            { title: "Analytics", description: "Measuring ROI with Google Analytics." }
        ]
    },
    // Adding minimal data for remaining to ensure functionality
    "sales-marketing": {
        title: "Sales & Marketing",
        subtitle: "Career Starter Program",
        description: "Master the art of persuasion, negotiation, and strategy. Learn to drive revenue and build lasting customer relationships in B2B and B2C markets.",
        heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2600&auto=format&fit=crop",
        stats: { salary: "₹4-12 LPA", growth: "High", marketSize: "Core" },
        overview: "The engine of every business. This program covers the entire sales lifecycle, from lead generation and prospecting to closing deals and CRM management.",
        tools: [
            { name: "Salesforce", color: "text-blue-500", code: "Sf", logo: salesforceLogo },
            { name: "HubSpot", color: "text-orange-500", code: "Hs", logo: hubspotLogo },
            { name: "LinkedIn", color: "text-blue-600", code: "In", logo: linkedinLogo },
            { name: "Excel", color: "text-green-500", code: "Ex", logo: excelLogo },
            { name: "Zoom", color: "text-blue-400", code: "Zm", logo: zoomLogo },
            { name: "Mailchimp", color: "text-yellow-500", code: "Mc", logo: mailchimpLogo },
            { name: "Cold Calling", color: "text-red-400", code: "Cc" },
            { name: "PowerBI", color: "text-yellow-600", code: "Pb", logo: powerbiLogo }
        ],
        projects: [
            { type: "Mini Project", title: "Sales Pitch Deck", desc: "Create a compelling pitch deck for a SaaS product.", icon: "Presentation", color: "blue", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "Lead Generation Strategy", desc: "Develop a plan to generate 100 qualified leads in 30 days.", icon: "Users", color: "purple", image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "CRM Implementation", desc: "Set up and customize a CRM pipeline for a hypothetical company.", icon: "Database", color: "orange", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "Fundamentals of Sales", description: "Understanding the sales funnel, B2B vs B2C, and buyer psychology." },
            { title: "Lead Generation", description: "Techniques for prospecting, cold calling, and email outreach." },
            { title: "Consultative Selling", description: "Needs analysis, asking the right questions, and solution selling." },
            { title: "Presentation Skills", description: "Crafting and delivering high-impact sales presentations." },
            { title: "Negotiation Tactics", description: "Handling objections, pricing discussions, and closing techniques." },
            { title: "CRM & Sales Tech", description: "Using Salesforce/HubSpot to manage relationships and data." },
            { title: "Account Management", description: "Farming strategies, up-selling, and cross-selling to existing clients." },
            { title: "Sales Strategy", description: "Territory planning, forecasting, and pipeline management." }
        ]
    },
    "stock-market": {
        title: "Stock Market & Trading",
        subtitle: "Career Starter Program",
        description: "Navigate the financial markets with confidence. Master technical analysis, fundamental evaluation, and risk management strategies.",
        heroImage: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2600&auto=format&fit=crop",
        stats: { salary: "Variable", growth: "High", marketSize: "Huge" },
        overview: "From candlestick patterns to balance sheets. Learn to read charts, analyze company health, and execute trades profitably.",
        tools: [
            { name: "TradingView", color: "text-blue-400", code: "Tv", logo: tradingviewLogo },
            { name: "Excel", color: "text-green-500", code: "Ex", logo: excelLogo },
            { name: "Screeners", color: "text-orange-500", code: "Sc", logo: screenerLogo },
            { name: "Zerodha", color: "text-blue-600", code: "Zd", logo: zerodhaLogo },
            { name: "MoneyControl", color: "text-green-600", code: "Mc" },
            { name: "NSE/BSE", color: "text-red-500", code: "Ns" },
            { name: "Sensibull", color: "text-orange-400", code: "Sb" },
            { name: "Investing.com", color: "text-blue-500", code: "Iv" }
        ],
        projects: [
            { type: "Mini Project", title: "Paper Trading", desc: "Execute virtual trades for 2 weeks and analyze performance.", icon: "TrendingUp", color: "blue", image: "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "Sector Analysis", desc: "Deep dive report on the Banking or IT sector in India.", icon: "PieChart", color: "purple", image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "Trading System", desc: "Develop and backtest a trading strategy based on technical indicators.", icon: "Cpu", color: "orange", image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "Basics of Stock Market", description: "IPO, Exchanges (NSE/BSE), Demat accounts, and indices." },
            { title: "Fundamental Analysis", description: "Reading Annual Reports, P&L, Balance Sheet, and Ratios (PE, PB, ROE)." },
            { title: "Technical Analysis", description: "Candlestick patterns, Support/Resistance, and Trends." },
            { title: "Indicators & Oscillators", description: "RSI, MACD, Bollinger Bands, and Moving Averages." },
            { title: "Derivatives (F&O)", description: "Understanding Futures and Options trading mechanics." },
            { title: "Option Strategies", description: "Hedging, Straddles, Strangles, and Spreads." },
            { title: "Risk Management", description: "Position sizing, Stop loss, and Psychology of trading." },
            { title: "Algorithmic Trading", description: "Intro to automated trading systems." }
        ]
    },
    "product-management": {
        title: "Product Management",
        subtitle: "Career Starter Program",
        description: "Guide the lifecycle of digital products from conception to launch. Learn to bridge the gap between business, engineering, and design to build products users love.",
        heroImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2670&auto=format&fit=crop",
        stats: { salary: "₹8-18 LPA", growth: "35%", marketSize: "$120B+" },
        overview: "Become the CEO of your product. This program covers product strategy, user research, agile methodologies, and data-driven decision making.",
        tools: [
            { name: "Jira", color: "text-blue-500", code: "Jr" },
            { name: "Figma", color: "text-purple-400", code: "Fg" },
            { name: "Productboard", color: "text-green-500", code: "Pb" },
            { name: "Amplitude", color: "text-blue-600", code: "Am" },
            { name: "Miro", color: "text-yellow-400", code: "Mr" },
            { name: "Excel", color: "text-green-600", code: "Ex", logo: excelLogo },
            { name: "Google Analytics", color: "text-orange-500", code: "Ga", logo: analyticsLogo },
            { name: "Notion", color: "text-gray-400", code: "Nt" }
        ],
        projects: [
            { type: "Mini Project", title: "User Persona & Journey", desc: "Develop detailed user personas and their journey maps for a new app idea.", icon: "Users", color: "blue", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "Product Requirements Document", desc: "Write a comprehensive PRD for a feature addition to an existing platform.", icon: "FileText", color: "purple", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "Product Launch Strategy", desc: "Create an end-to-end go-to-market strategy for a SaaS product launch.", icon: "Rocket", color: "orange", image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "Introduction to Product Management", description: "Role of a PM, product lifecycle, and cross-functional team collaboration." },
            { title: "User Research & Empathy", description: "Conducting user interviews, surveys, and identifying pain points." },
            { title: "Product Strategy & Vision", description: "Defining the 'Why', setting OKRs, and market analysis." },
            { title: "Agile & Scrum Methodologies", description: "Working with engineering teams, sprints, and backlog grooming." },
            { title: "Prototyping & UX Basics", description: "Wireframing, collaborating with designers, and user testing." },
            { title: "Data-Driven Decisions", description: "Understanding product metrics (AARRR), A/B testing, and analytics." },
            { title: "Go-to-Market Strategy", description: "Product positioning, pricing models, and launch planning." },
            { title: "Stakeholder Management", description: "Managing expectations, communicating roadmaps, and leadership skills." }
        ]
    },
    "industrial-biotechnology": {
        title: "Industrial Biotechnology",
        subtitle: "Career Starter Program",
        description: "Bridge the gap between biology and industrial production. Harness cellular and biomolecular processes to develop products that help improve lives.",
        heroImage: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=2600&auto=format&fit=crop",
        stats: { salary: "₹4-9 LPA", growth: "Growing", marketSize: "Niche" },
        overview: "From lab to factory. Learn about fermentation technology, downstream processing, genetics, and bioinformatics.",
        tools: [
            { name: "Fermenters", color: "text-gray-400", code: "Fm" },
            { name: "AutoCAD", color: "text-red-500", code: "Ac" },
            { name: "MATLAB", color: "text-orange-500", code: "Mt" },
            { name: "Python", color: "text-blue-400", code: "Py" },
            { name: "LIMS", color: "text-green-500", code: "Lm" },
            { name: "Bioreactors", color: "text-blue-600", code: "Br" },
            { name: "HPLC", color: "text-purple-500", code: "Hp" },
            { name: "Microscopy", color: "text-teal-400", code: "Mc" }
        ],
        projects: [
            { type: "Mini Project", title: "Enzyme Kinetics", desc: "Simulation of enzyme activity under various conditions.", icon: "Activity", color: "blue", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "Fermentation Design", desc: "Design a fermentation process for ethanol production.", icon: "Filter", color: "purple", image: "https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?auto=format&fit=crop&q=80&w=800" },
            { type: "Capstone Project", title: "Waste Treatment", desc: "Develop a biological solution for industrial effluent treatment.", icon: "RefreshCw", color: "orange", image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "Intro to Industrial Biotech", description: "Applications in Pharma, Agriculture, and Environment." },
            { title: "Microbiology & Cell Biology", description: "Structure and function of microorganisms and cells." },
            { title: "Genetic Engineering", description: "Recombinant DNA technology and gene cloning." },
            { title: "Fermentation Technology", description: "Upstream processing, media design, and bioreactor types." },
            { title: "Downstream Processing", description: "Filtration, centrifugation, chromatography, and purification." },
            { title: "Bioinformatics", description: "Analyzing biological data using software tools." },
            { title: "Quality Control (QC/QA)", description: "GMP, GLP, and regulatory affairs." },
            { title: "Bioprocess Economics", description: "Cost estimation and scalability analysis." }
        ]
    },
    "psychology": {
        title: "Psychology & Counseling",
        subtitle: "Career Starter Program",
        description: "Understand the complexities of the human mind and behavior. Learn assessment techniques, therapy modalities, and counseling skills.",
        heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2600&auto=format&fit=crop",
        stats: { salary: "₹4-10 LPA", growth: "Steady", marketSize: "Global" },
        overview: "Dive into the human psyche. Covers general, abnormal, and organizational psychology along with practical counseling frameworks.",
        tools: [
            { name: "SPSS", color: "text-blue-600", code: "Sp" },
            { name: "DSM-5", color: "text-purple-600", code: "Ds" },
            { name: "Excel", color: "text-green-500", code: "Ex" },
            { name: "Zoom", color: "text-blue-400", code: "Zm" },
            { name: "Assessments", color: "text-orange-500", code: "As" },
            { name: "CBT Tools", color: "text-yellow-500", code: "Cb" }
        ],
        projects: [
            { type: "Mini Project", title: "Case Study Analysis", desc: "Analyze a fictional patient history and suggest diagnosis.", icon: "FileText", color: "blue", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "Behavioral Survey", desc: "Design and conduct a survey on workplace stress.", icon: "Clipboard", color: "purple", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "Counseling Plan", desc: "Create a comprehensive intervention plan for anxiety management.", icon: "Smile", color: "orange", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "Intro to Psychology", description: "History, major schools of thought, and biological basis of behavior." },
            { title: "Developmental Psychology", description: "Human growth from infancy to old age." },
            { title: "Social Psychology", description: "Group dynamics, persuasion, and social perception." },
            { title: "Abnormal Psychology", description: "Understanding mental disorders and the DSM-5." },
            { title: "Counseling Skills", description: "Active listening, empathy, and rapport building." },
            { title: "Therapeutic Approaches", description: "CBT, REBT, and Person-Centered Therapy." },
            { title: "Industrial-Organizational (I/O)", description: "Psychology in the workplace, HR, and leadership." },
            { title: "Research Methods", description: "Designing experiments and statistical analysis with SPSS." }
        ]
    },
    "medical-coding": {
        title: "Medical Coding",
        subtitle: "Career Starter Program",
        description: "Become a crucial link in the healthcare system. Convert medical diagnoses and procedures into universal alphanumeric codes for billing.",
        heroImage: "/images/medical_coding_hero.png",
        stats: { salary: "₹3-7 LPA", growth: "High", marketSize: "US/Global" },
        overview: "Master the language of healthcare. Learn ICD-10-CM, CPT, and HCPCS coding standards required for insurance claims and billing.",
        tools: [
            { name: "ICD-10-CM", color: "text-blue-500", code: "I10" },
            { name: "CPT", color: "text-red-500", code: "Cp" },
            { name: "HCPCS", color: "text-green-500", code: "Hc" },
            { name: "EncoderPro", color: "text-purple-500", code: "Ep" },
            { name: "3M Coding", color: "text-orange-500", code: "3m" },
            { name: "Excel", color: "text-green-600", code: "Ex" },
            { name: "Anatomy", color: "text-pink-500", code: "An" }
        ],
        projects: [
            { type: "Mini Project", title: "Coding Audit", desc: "Audit a set of medical records for coding accuracy.", icon: "check-circle", color: "blue", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "Chart Analysis", desc: "Code 50 complex clinical charts across various specialties.", icon: "FileText", color: "purple", image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "Billing Cycle", desc: "Simulate the full revenue cycle from patient visit to claim submission.", icon: "DollarSign", color: "orange", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "Medical Terminology", description: "Roots, prefixes, suffixes, and anatomical terms." },
            { title: "Anatomy & Physiology", description: "Body systems and their functions relevant to coding." },
            { title: "ICD-10-CM Guidelines", description: "Coding diagnoses, infections, and neoplasms." },
            { title: "CPT Coding Basics", description: "Coding procedures, E&M (Evaluation and Management) services." },
            { title: "HCPCS Level II", description: "Coding supplies, drugs, and ambulance services." },
            { title: "Reimbursement Methodologies", description: "Understanding insurance plans and payment models." },
            { title: "Compliance & Ethics", description: "HIPAA regulations and medical fraud prevention." },
            { title: "Certification Prep", description: "Mock exams and strategies for CPC/CCS certification." }
        ]
    },
    "ui-ux-design": {
        title: "UI/UX Design",
        subtitle: "Creative & Design Program",
        description: "Craft beautiful, intuitive digital experiences. Master user research, wireframing, prototyping, and visual design to create products people love.",
        heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2600&auto=format&fit=crop",
        stats: { salary: "₹5-15 LPA", growth: "35%", marketSize: "$200B+" },
        overview: "Design the future of digital products. Learn the complete UX process from research and ideation to high-fidelity prototypes and usability testing.",
        tools: [
            { name: "Figma", color: "text-purple-500", code: "Fg" },
            { name: "Adobe XD", color: "text-pink-500", code: "Xd" },
            { name: "Sketch", color: "text-orange-400", code: "Sk" },
            { name: "InVision", color: "text-red-400", code: "Iv" },
            { name: "Photoshop", color: "text-blue-500", code: "Ps" },
            { name: "Illustrator", color: "text-orange-500", code: "Ai" },
            { name: "Miro", color: "text-yellow-400", code: "Mr" },
            { name: "Maze", color: "text-green-500", code: "Mz" }
        ],
        projects: [
            { type: "Mini Project", title: "Mobile App Wireframe", desc: "Design low-fidelity wireframes for a food delivery app.", icon: "Smartphone", color: "blue", image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "E-commerce Redesign", desc: "Complete UX audit and redesign of an online shopping platform.", icon: "ShoppingCart", color: "purple", image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "SaaS Dashboard", desc: "Design a comprehensive analytics dashboard with user testing.", icon: "BarChart", color: "orange", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "Design Thinking Fundamentals", description: "Understanding user-centered design and the design thinking process." },
            { title: "User Research Methods", description: "Interviews, surveys, personas, and journey mapping." },
            { title: "Information Architecture", description: "Organizing content and creating sitemaps." },
            { title: "Wireframing & Prototyping", description: "Low to high-fidelity designs and interactive prototypes." },
            { title: "Visual Design Principles", description: "Typography, color theory, and layout composition." },
            { title: "UI Design Systems", description: "Creating consistent, scalable component libraries." },
            { title: "Usability Testing", description: "Conducting tests and iterating based on feedback." },
            { title: "Responsive & Mobile Design", description: "Designing for multiple screen sizes and devices." }
        ]
    },
    "social-media-marketing": {
        title: "Social Media Marketing",
        subtitle: "Creative & Design Program",
        description: "Build brand presence and engage audiences across social platforms. Master content strategy, community management, and paid advertising.",
        heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2600&auto=format&fit=crop",
        stats: { salary: "₹4-12 LPA", growth: "40%", marketSize: "$150B+" },
        overview: "Become a social media expert. Learn to create viral content, grow communities, run campaigns, and analyze performance across all major platforms.",
        tools: [
            { name: "Meta Ads", color: "text-blue-600", code: "Fb" },
            { name: "Instagram", color: "text-pink-500", code: "Ig" },
            { name: "LinkedIn", color: "text-blue-500", code: "Li" },
            { name: "Twitter/X", color: "text-gray-400", code: "Tw" },
            { name: "Canva", color: "text-purple-500", code: "Cn" },
            { name: "Hootsuite", color: "text-orange-500", code: "Hs" },
            { name: "Buffer", color: "text-blue-400", code: "Bf" },
            { name: "Analytics", color: "text-green-500", code: "An" }
        ],
        projects: [
            { type: "Mini Project", title: "Content Calendar", desc: "Create a 30-day social media content plan for a brand.", icon: "Calendar", color: "blue", image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "Campaign Launch", desc: "Design and execute a product launch campaign across platforms.", icon: "Rocket", color: "purple", image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "Brand Growth Strategy", desc: "Develop a comprehensive 6-month social media growth plan.", icon: "TrendingUp", color: "orange", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "Social Media Landscape", description: "Understanding platforms, algorithms, and user behavior." },
            { title: "Content Strategy", description: "Planning, creating, and scheduling engaging content." },
            { title: "Community Management", description: "Building relationships and handling customer interactions." },
            { title: "Paid Advertising", description: "Facebook Ads, Instagram Ads, and LinkedIn campaigns." },
            { title: "Influencer Marketing", description: "Collaborating with creators and measuring ROI." },
            { title: "Analytics & Reporting", description: "Tracking KPIs and optimizing performance." },
            { title: "Social Listening", description: "Monitoring brand mentions and sentiment analysis." },
            { title: "Crisis Management", description: "Handling negative feedback and PR issues." }
        ]
    },
    "content-creation": {
        title: "Content Creation",
        subtitle: "Creative & Design Program",
        description: "Tell compelling stories across multiple formats. Master video production, copywriting, photography, and content strategy for digital platforms.",
        heroImage: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2600&auto=format&fit=crop",
        stats: { salary: "₹4-10 LPA", growth: "45%", marketSize: "$100B+" },
        overview: "Become a multi-skilled content creator. Learn to produce engaging videos, write persuasive copy, capture stunning visuals, and build a personal brand.",
        tools: [
            { name: "Premiere Pro", color: "text-purple-600", code: "Pr" },
            { name: "After Effects", color: "text-purple-500", code: "Ae" },
            { name: "Photoshop", color: "text-blue-500", code: "Ps" },
            { name: "Canva", color: "text-purple-400", code: "Cn" },
            { name: "CapCut", color: "text-gray-400", code: "Cc" },
            { name: "Grammarly", color: "text-green-500", code: "Gr" },
            { name: "YouTube", color: "text-red-500", code: "Yt" },
            { name: "TikTok", color: "text-gray-300", code: "Tk" }
        ],
        projects: [
            { type: "Mini Project", title: "Brand Video", desc: "Create a 60-second promotional video for a product.", icon: "Video", color: "blue", image: "https://images.unsplash.com/photo-1502209877429-d7c6df9eb3f9?q=80&w=1166&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { type: "Major Project", title: "Content Series", desc: "Produce a 5-episode educational video series.", icon: "Film", color: "purple", image: "/images/content-series.jpg" },
            { type: "Capstone Project", title: "Personal Brand", desc: "Build and launch your own content creator brand.", icon: "Star", color: "orange", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "Content Strategy Fundamentals", description: "Understanding audience, platforms, and content types." },
            { title: "Copywriting Essentials", description: "Writing for web, social media, and advertising." },
            { title: "Video Production Basics", description: "Shooting, lighting, and audio fundamentals." },
            { title: "Video Editing", description: "Mastering Premiere Pro and After Effects." },
            { title: "Photography & Visual Storytelling", description: "Composition, editing, and brand photography." },
            { title: "Content Optimization", description: "SEO, thumbnails, and platform-specific best practices." },
            { title: "Monetization Strategies", description: "Sponsorships, affiliate marketing, and brand deals." },
            { title: "Personal Branding", description: "Building your unique voice and online presence." }
        ]
    },
    "generative-ai": {
        title: "Generative AI",
        subtitle: "Creative & Design Program",
        description: "Harness the power of AI for creative work. Master AI tools like ChatGPT, Midjourney, and Stable Diffusion to revolutionize content creation.",
        heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2600&auto=format&fit=crop",
        stats: { salary: "₹6-18 LPA", growth: "200%", marketSize: "$50B+" },
        overview: "The future of creativity is here. Learn to leverage AI for text, images, video, and code generation while understanding ethics and best practices.",
        tools: [
            { name: "ChatGPT", color: "text-green-500", code: "Gpt" },
            { name: "Midjourney", color: "text-purple-500", code: "Mj" },
            { name: "DALL-E", color: "text-blue-500", code: "De" },
            { name: "Stable Diffusion", color: "text-orange-500", code: "Sd" },
            { name: "Claude", color: "text-orange-400", code: "Cl" },
            { name: "Runway ML", color: "text-green-400", code: "Rw" },
            { name: "ElevenLabs", color: "text-purple-400", code: "El" },
            { name: "GitHub Copilot", color: "text-gray-400", code: "Gh" }
        ],
        projects: [
            { type: "Mini Project", title: "AI Art Collection", desc: "Create a cohesive series of AI-generated artworks.", icon: "Palette", color: "blue", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "Content Automation", desc: "Build an AI-powered content generation workflow.", icon: "Zap", color: "purple", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "AI Product Launch", desc: "Create a complete product campaign using only AI tools.", icon: "Sparkles", color: "orange", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "Introduction to Generative AI", description: "Understanding LLMs, diffusion models, and AI capabilities." },
            { title: "Prompt Engineering", description: "Mastering the art of crafting effective AI prompts." },
            { title: "AI Text Generation", description: "Using ChatGPT, Claude, and Gemini for content creation." },
            { title: "AI Image Generation", description: "Creating visuals with Midjourney, DALL-E, and Stable Diffusion." },
            { title: "AI Video & Animation", description: "Runway ML, Pika, and video generation tools." },
            { title: "AI Audio & Voice", description: "Music generation, voice cloning, and podcasting with AI." },
            { title: "AI Workflow Integration", description: "Combining multiple AI tools for efficiency." },
            { title: "Ethics & Future of AI", description: "Copyright, bias, and responsible AI usage." }
        ]
    },
    "graphic-design": {
        title: "Graphic Design",
        subtitle: "Creative & Design Program",
        description: "Create stunning visual communications. Master design principles, typography, branding, and industry-standard tools to bring ideas to life.",
        heroImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2600&auto=format&fit=crop",
        stats: { salary: "₹4-12 LPA", growth: "30%", marketSize: "$50B+" },
        overview: "Design with purpose and impact. Learn to create logos, branding materials, marketing collateral, and digital assets that captivate audiences.",
        tools: [
            { name: "Photoshop", color: "text-blue-500", code: "Ps" },
            { name: "Illustrator", color: "text-orange-500", code: "Ai" },
            { name: "InDesign", color: "text-pink-500", code: "Id" },
            { name: "Canva", color: "text-purple-500", code: "Cn" },
            { name: "Figma", color: "text-purple-400", code: "Fg" },
            { name: "CorelDRAW", color: "text-green-500", code: "Cd" },
            { name: "Affinity", color: "text-blue-400", code: "Af" },
            { name: "Procreate", color: "text-orange-400", code: "Pc" }
        ],
        projects: [
            { type: "Mini Project", title: "Logo Design", desc: "Create a complete logo suite for a startup brand.", icon: "Hexagon", color: "blue", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "Brand Identity", desc: "Develop a full brand identity system with guidelines.", icon: "Award", color: "purple", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "Marketing Campaign", desc: "Design a multi-channel marketing campaign with all assets.", icon: "Layout", color: "orange", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "Design Fundamentals", description: "Principles of balance, contrast, hierarchy, and composition." },
            { title: "Color Theory", description: "Understanding color psychology and creating palettes." },
            { title: "Typography Mastery", description: "Font selection, pairing, and typographic hierarchy." },
            { title: "Adobe Photoshop", description: "Photo editing, manipulation, and digital art creation." },
            { title: "Adobe Illustrator", description: "Vector graphics, logos, and illustration techniques." },
            { title: "Brand Identity Design", description: "Creating cohesive visual brand systems." },
            { title: "Print & Digital Design", description: "Designing for various mediums and formats." },
            { title: "Portfolio Development", description: "Building a professional design portfolio." }
        ]
    },
    "cloud-computing": {
        title: "Cloud Computing",
        subtitle: "Career Starter Program",
        description: "Master the cloud with AWS, Azure, and Google Cloud. Learn to deploy scalable, secure, and reliable applications in the cloud environment.",
        heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        stats: { salary: "₹5-14 LPA", growth: "40%", marketSize: "$600B+" },
        overview: "Become a Cloud Architect or DevOps Engineer using industry-standard tools. Learn to build, deploy, and manage robust cloud infrastructures.",
        tools: [
            { name: "AWS", color: "text-orange-400", code: "Aws", logo: awsLogo },
            { name: "Azure", color: "text-blue-500", code: "Az", logo: azureLogo },
            { name: "GCP", color: "text-red-500", code: "Gc", logo: gcpLogo },
            { name: "Docker", color: "text-blue-400", code: "Dk", logo: dockerLogo },
            { name: "Kubernetes", color: "text-blue-600", code: "K8", logo: kubernetesLogo },
            { name: "Terraform", color: "text-purple-400", code: "Tf", logo: terraformLogo },
            { name: "Linux", color: "text-yellow-300", code: "Lx", logo: linuxLogo },
            { name: "Jenkins", color: "text-red-400", code: "Jk", logo: jenkinsLogo },
            { name: "Git", color: "text-orange-600", code: "Gt", logo: gitLogo },
            { name: "Python", color: "text-yellow-400", code: "Py", logo: pythonLogo }
        ],
        projects: [
            { type: "Mini Project", title: "Static Web Hosting", desc: "Host a high-performance static website using AWS S3, CloudFront, and Route 53 with SSL integration.", icon: "Globe", color: "blue", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "Serverless API", desc: "Build and deploy a scalable, serverless backend API using AWS Lambda, API Gateway, and DynamoDB.", icon: "Zap", color: "purple", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "Auto-Scaling Infrastructure", desc: "Design a fault-tolerant web application with Load Balancers and Auto Scaling Groups on EC2.", icon: "Cpu", color: "orange", image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "Cloud Fundamentals", description: "Understanding Cloud models (IaaS, PaaS, SaaS) and deployment types." },
            { title: "AWS Core Services", description: "Deep dive into Compute (EC2), Storage (S3), and Database (RDS) services." },
            { title: "Networking & VPC", description: "Designing secure cloud networks using VPC, Subnets, and Route Tables." },
            { title: "Identity & Access Management", description: "Managing users, groups, and roles to secure cloud resources." },
            { title: "Serverless Computing", description: "Building modern applications using AWS Lambda and API Gateway." },
            { title: "Containerization (Docker)", description: "Creating and managing containers for scalable deployments." },
            { title: "Orchestration (Kubernetes)", description: "Managing containerized applications at scale." },
            { title: "DevOps & CI/CD", description: "Implementing pipelines using Jenkins and Git." }
        ]
    },
    "neurology": {
        title: "Neurology & Neuroscience",
        subtitle: "Career Starter Program",
        description: "Understand the complexities of the human nervous system. Learn neuroanatomy, cognitive neuroscience, diagnostics like EEG/MRI, and disorder mechanisms.",
        brochure: neurologyBrochure,
        heroImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2600&auto=format&fit=crop",
        stats: { salary: "₹5-12 LPA", growth: "High", marketSize: "Global" },
        overview: "Explore the structural and functional aspects of the brain and nervous system. From basic cellular neurobiology to clinical diagnostics and treatment of neurological disorders.",
        tools: [
            { name: "EEG", color: "text-blue-500", code: "Ee" },
            { name: "MRI/CT", color: "text-purple-500", code: "Mr" },
            { name: "Neuroanatomy", color: "text-green-500", code: "Na" },
            { name: "EMG", color: "text-red-500", code: "Em" },
            { name: "Brain Mapping", color: "text-orange-500", code: "Bm" },
            { name: "Diagnostics", color: "text-yellow-500", code: "Dx" }
        ],
        projects: [
            { type: "Mini Project", title: "Brain Activity Mapping", desc: "Analyze simulated EEG signals to map brain wave patterns during different states.", icon: "Activity", color: "blue", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "Disorder Case Studies", desc: "Analyze clinical case histories of neurodegenerative disorders to propose diagnostic workflows.", icon: "FileText", color: "purple", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "Neuro-Plasticity Study", desc: "Design a research protocol investigating the effects of cognitive training on brain rehabilitation.", icon: "Award", color: "orange", image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "Neuroanatomy & Physiology", description: "Structure and function of the central and peripheral nervous system." },
            { title: "Cellular Neurobiology", description: "Neurons, synapses, action potentials, and neurochemistry." },
            { title: "Cognitive Neuroscience", description: "Brain regions, sensory systems, motor pathways, and higher cognitive functions." },
            { title: "Neurological Disorders", description: "Stroke, epilepsy, dementia, Parkinson's, and demyelinating diseases." },
            { title: "Neurodiagnostics", description: "Principles and clinical application of EEG, MRI, CT scans, and EMG." },
            { title: "Neuropharmacology", description: "Mechanisms of drugs acting on neurotransmitters and brain circuitry." },
            { title: "Neuroplasticity & Recovery", description: "Mechanisms of neural adaptation, learning, memory, and stroke rehabilitation." },
            { title: "Neuroscience Research Methods", description: "Designing cognitive experiments and interpreting neuroimaging studies." }
        ]
    },
    "genetic-engineering": {
        title: "Genetic Engineering",
        subtitle: "Career Starter Program",
        description: "Unlock the secrets of DNA. Master the tools to edit genes, manipulate DNA, and develop breakthroughs in medicine and agriculture.",
        heroImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2600&auto=format&fit=crop",
        stats: { salary: "₹5-12 LPA", growth: "High", marketSize: "Global" },
        overview: "Dive into the world of genomics. From basic molecular biology to advanced techniques like CRISPR-Cas9, learn how genetic manipulation is revolutionizing the world.",
        tools: [
            { name: "CRISPR", color: "text-blue-500", code: "Cr" },
            { name: "PCR", color: "text-red-500", code: "Pc" },
            { name: "Python", color: "text-yellow-500", code: "Py" },
            { name: "BLAST", color: "text-green-500", code: "Bl" },
            { name: "Genomics", color: "text-purple-500", code: "Ge" },
            { name: "Sequencing", color: "text-orange-500", code: "Sq" }
        ],
        projects: [
            { type: "Mini Project", title: "DNA Sequence Analysis", desc: "Use bioinformatics tools to align and analyze DNA sequences.", icon: "Activity", color: "blue", image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "Gene Editing Simulation", desc: "Design a CRISPR-Cas9 strategy for a specific gene knockout.", icon: "FileText", color: "purple", image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "Genomic Data Pipeline", desc: "Build a computational pipeline to analyze next-generation sequencing data.", icon: "Award", color: "orange", image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "Molecular Biology", description: "DNA, RNA, and protein synthesis fundamentals." },
            { title: "Recombinant DNA Tech", description: "Cloning, vectors, and restriction enzymes." },
            { title: "Gene Editing Technologies", description: "CRISPR-Cas9, TALENs, and ZFNs." },
            { title: "Genomics and Proteomics", description: "Whole genome sequencing and protein analysis." },
            { title: "Bioinformatics", description: "Data analysis tools and databases (NCBI, BLAST)." },
            { title: "Applications in Medicine", description: "Gene therapy and personalized medicine." },
            { title: "Applications in Agriculture", description: "Genetically modified organisms (GMOs)." },
            { title: "Bioethics and Biosafety", description: "Regulatory guidelines and ethical considerations." }
        ]
    },
    "medical-writing": {
        title: "Medical Writing",
        subtitle: "Career Starter Program",
        description: "Translate complex medical data into clear, concise, and compliant documents. Master clinical writing, regulatory submissions, and scientific communication.",
        heroImage: "/images/medical_writing_capstone.png",
        stats: { salary: "₹4-10 LPA", growth: "Steady", marketSize: "High" },
        overview: "Become an expert communicator in the healthcare industry. Learn the standards of writing clinical study reports, scientific publications, and regulatory documents.",
        tools: [
            { name: "MS Word", color: "text-blue-600", code: "Wd" },
            { name: "EndNote", color: "text-green-500", code: "En" },
            { name: "PubMed", color: "text-blue-500", code: "Pm" },
            { name: "Guidelines", color: "text-purple-500", code: "Gl" },
            { name: "Adobe PDF", color: "text-red-500", code: "Pdf" },
            { name: "Grammarly", color: "text-green-600", code: "Gr" }
        ],
        projects: [
            { type: "Mini Project", title: "Abstract Writing", desc: "Write a clear and concise abstract based on provided clinical data.", icon: "FileText", color: "blue", image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "Clinical Study Report", desc: "Draft key sections of a clinical study report (CSR) based on trial results.", icon: "Clipboard", color: "purple", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "Scientific Publication", desc: "Prepare a manuscript for submission to a peer-reviewed medical journal.", icon: "Award", color: "orange", image: "/images/medical_writing_capstone.png" }
        ],
        curriculum: [
            { title: "Introduction to Medical Writing", description: "Role, scope, and different types of medical documents." },
            { title: "Regulatory Writing", description: "Protocols, investigator brochures, and CSRs." },
            { title: "Scientific Writing", description: "Manuscripts, abstracts, and poster presentations." },
            { title: "Good Clinical Practice (GCP)", description: "ICH guidelines and ethical standards in research." },
            { title: "Literature Review", description: "Searching medical databases and referencing tools." },
            { title: "Data Interpretation", description: "Understanding basic biostatistics and clinical data." },
            { title: "Document Review and QC", description: "Quality control and proofreading techniques." },
            { title: "Career Pathways", description: "Freelancing vs agency vs pharma roles." }
        ]
    },
    "hospital-management": {
        title: "Hospital Management",
        subtitle: "Career Starter Program",
        description: "Lead healthcare organizations efficiently. Learn operations, healthcare policies, financial management, and quality assurance in hospital settings.",
        heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2600&auto=format&fit=crop",
        stats: { salary: "₹5-12 LPA", growth: "High", marketSize: "Essential" },
        overview: "Master the administrative side of healthcare. Understand patient care flow, hospital information systems, and strategies to improve operational efficiency and patient satisfaction.",
        tools: [
            { name: "HIS/EMR", color: "text-blue-500", code: "His" },
            { name: "Excel", color: "text-green-500", code: "Ex" },
            { name: "PowerBI", color: "text-yellow-500", code: "Pb" },
            { name: "Quality Tools", color: "text-purple-500", code: "Qt" },
            { name: "SAP", color: "text-blue-600", code: "Sap" },
            { name: "Analytics", color: "text-orange-500", code: "An" }
        ],
        projects: [
            { type: "Mini Project", title: "Patient Flow Analysis", desc: "Map and analyze the patient journey from admission to discharge.", icon: "Activity", color: "blue", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop" },
            { type: "Major Project", title: "Quality Improvement", desc: "Develop a plan to reduce wait times in the emergency department.", icon: "TrendingUp", color: "purple", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
            { type: "Capstone Project", title: "Hospital Setup Strategy", desc: "Create a comprehensive business and operational plan for a new clinic.", icon: "Award", color: "orange", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" }
        ],
        curriculum: [
            { title: "Healthcare Systems and Policies", description: "Overview of global and local healthcare structures." },
            { title: "Hospital Operations Management", description: "Outpatient, inpatient, and emergency services management." },
            { title: "Healthcare Quality Management", description: "NABH/JCI standards, patient safety, and audit processes." },
            { title: "Hospital Information Systems", description: "Managing electronic medical records and IT in healthcare." },
            { title: "Human Resource in Healthcare", description: "Managing medical and non-medical staff." },
            { title: "Financial Management", description: "Revenue cycle, insurance, and hospital budgeting." },
            { title: "Supply Chain & Inventory", description: "Managing pharmacy and medical equipment logistics." },
            { title: "Healthcare Marketing", description: "Patient engagement and hospital brand management." }
        ]
    }
};
