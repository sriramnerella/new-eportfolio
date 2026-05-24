export const portfolioData = {
  personalInfo: {
    name: "Nerella Venkata Sriram",
    title: "Full-Stack Developer",
    location: "Guntur, Andhra Pradesh, India 522003",
    phone: "+91-9121231831",
    email: "venkatasriram.n23@iiits.in",
    github: "https://github.com/sriramnerella",
    linkedin: "https://linkedin.com/in/venkata-sri-ram-nerella",
    resumeUrl: "/Nerella_Venkata_Sriram_Resume.pdf",
    profileImageUrl: "/profile.png",
    web3FormsKey: "55985f8f-3c82-4412-9dc9-7fb7b87cf670", // Set your key here or in env
    summary: "I'm a final-year Computer Science student at IIIT Sri City building full-stack web applications with the MERN stack. I enjoy creating responsive user interfaces with React and designing clean backend APIs using Node.js and Express with MongoDB. Strong in Java, C, and Python with competitive programming experience (300+ problems on LeetCode and on other coding platforms, rating 1550 in Leetcode contests). I build complete web applications from frontend to backend, handle databases, and deploy on cloud platforms like Vercel and Render. I also explore machine learning, deep learning, and other technologies through projects."
  },
  education: [
    {
      institution: "Indian Institute of Information Technology, Sri City",
      location: "Chittoor, Andhra Pradesh",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      duration: "06/2023 – 05/2027",
      grade: "CGPA: 9.24 / 10.0"
    },
    {
      institution: "Sri Chaitanya College",
      location: "Vijayawada, Andhra Pradesh",
      degree: "Intermediate (Class 12, MPC)",
      duration: "06/2021 – 06/2023",
      grade: "Percentage: 98.4%"
    },
    {
      institution: "Montessori English Medium School",
      location: "Guntur, Andhra Pradesh",
      degree: "High School (Class 10)",
      duration: "06/2020 – 05/2021",
      grade: "CGPA: 10.0 / 10.0"
    }
  ],
  skills: [
    {
      category: "Languages",
      items: ["Java", "C", "Python", "JavaScript (ES6)"]
    },
    {
      category: "Web & Frameworks",
      items: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "REST APIs", "Tailwind CSS", "Bootstrap", "HTML5 & CSS3"]
    },
    {
      category: "AI / Machine Learning",
      items: ["Deep Learning", "CNNs", "OpenCV", "Computer Vision", "Siamese Networks", "PyTorch", "Image Classification"]
    },
    {
      category: "Cloud, IoT & Databases",
      items: ["AWS", "Arduino", "Sensors & Microcontrollers", "MongoDB", "MySQL", "Load Balancing"]
    },
    {
      category: "Tools & DevOps",
      items: ["Git & GitHub", "Docker", "Swagger API Docs", "Linux", "VS Code"]
    }
  ],
  projects: [
    {
      title: "Nutri Connect Web Application",
      subtitle: "Full-Stack Healthcare Booking Platform",
      techStack: ["MERN Stack", "Render", "MVC Architecture", "Redux Toolkit", "Tailwind CSS", "Docker", "Swagger"],
      duration: "Jan 2025 – Apr 2026",
      description: "Developed a MERN-based healthcare platform featuring a 30-minute slot booking system with 2-week advance scheduling support.",
      highlights: [
        "Implemented backend architecture using MVC design principles and built responsive interfaces using React, Redux Toolkit, and Tailwind CSS.",
        "Integrated authentication, appointment scheduling, and REST APIs for seamless user interactions.",
        "Configured Docker containerization, Swagger API documentation, and CI/CD deployment workflows using Render."
      ],
      githubUrl: "https://github.com/sriramnerella/nutri-connect"
    },
    {
      title: "Image Copy Detection for E-Commerce",
      subtitle: "Computer Vision & Siamese Networks",
      techStack: ["CNN", "ConvNeXt", "Siamese Network", "OpenCV", "Deep Learning", "Python"],
      duration: "Dec 2025 – Apr 2026",
      description: "Built an image plagiarism detection system using ConvNeXt Siamese architecture and Computer Vision techniques to identify duplicate or edited listings.",
      highlights: [
        "Trained a Siamese neural network model using CIFAR, UCID, Flickr, and custom datasets for duplicate image identification.",
        "Achieved over 85% accuracy in detecting counterfeit product listings and edited images.",
        "Applied feature extraction and similarity learning methods to improve detection robustness."
      ],
      githubUrl: "" // Generic fallback or direct link if added
    },
    {
      title: "Nexus Platform - Local Service Booking",
      subtitle: "Service Marketplace & Fraud Detection",
      techStack: ["React", "Node.js", "MongoDB", "Service Booking", "Real-time", "Payment Integration"],
      duration: "Nov 2024 – Dec 2024",
      description: "A web platform for booking local services featuring service provider verification, real-time tracking, and payment processing.",
      highlights: [
        "Built a complete service-provider matching engine using React for frontend booking screens and Node.js for backend APIs.",
        "Implemented merchant verification workflow and integrated basic fraud detection filters for review protection.",
        "Created real-time booking trackers and structured MongoDB schemas for booking states and payment transactions."
      ],
      githubUrl: "" 
    },
    {
      title: "Food Ripeness Classification using CNN",
      subtitle: "Deep Learning & Computer Vision",
      techStack: ["PyTorch", "CNN", "Image Classification", "Food Safety", "Deep Learning", "Python"],
      duration: "Jan 2025 – Mar 2025",
      description: "Developed a deep learning model to classify food freshness status using convolutional neural networks and image analysis.",
      highlights: [
        "Designed and trained a custom CNN model on multiple food categories to detect fresh vs spoiled items with high accuracy.",
        "Built using PyTorch for high-fidelity model training, image augmentations, and evaluation pipelines.",
        "Aimed at helping e-commerce grocery apps and food safety systems automate product freshness checks."
      ],
      githubUrl: "https://github.com/sriramnerella/Food-Ripeness-Classification"
    },
    {
      title: "IoT-Based Smart Jacket with ML Analytics",
      subtitle: "Wearable IoT & Health Monitoring",
      techStack: ["IoT", "Machine Learning", "Sensors", "Real-Time Analytics", "Python", "Cloud Alerts"],
      duration: "Aug 2024 – Dec 2024",
      description: "Integrated 6 sensors into a wearable smart jacket to monitor environmental and physiological vitals in real-time.",
      highlights: [
        "Calibrated 6 physical sensors to feed real-time vitals streams into predictive ML models.",
        "Trained anomaly detection models using Kaggle datasets, achieving 95% accuracy in distress classification.",
        "Linked sensor alerts to cloud infrastructure and mobile notification APIs for emergency response."
      ],
      githubUrl: "https://github.com/sriramnerella/IOTBasedSmartJacket"
    },
    {
      title: "Hybrid Load Balancing for QoS in Cloud",
      subtitle: "AWS Systems & Heuristic Scheduling",
      techStack: ["AWS", "Load Balancing", "ACO Algorithm", "Python", "40% Efficiency Gain", "QoS"],
      duration: "Oct 2024 – Dec 2024",
      description: "Created a hybrid load balancing algorithm combining Round Robin and Ant Colony Optimization (ACO) algorithms on AWS.",
      highlights: [
        "Tested scheduling scalability from 20 to 50 cloud servers handling loads from 100 to 2,000 parallel tasks.",
        "Improved task-scheduling efficiency by 40% while preserving high QoS, low response latency, and system reliability.",
        "Built and simulated using AWS cloud infrastructure configurations and Python scripting."
      ],
      githubUrl: "https://github.com/sriramnerella/Hybrid_load_balancer" 
    }
  ],
  certifications: [
    {
      name: "Data Science Course",
      issuer: "CodeWithHarry",
      description: "Completed comprehensive training in Python programming, Machine Learning fundamentals, and Artificial Intelligence techniques."
    },
    {
      name: "OutSkill AI Workshop",
      issuer: "OutSkill",
      description: "Participated in hands-on application building utilizing Large Language Models (LLMs), AI Agents, and backend automation workflows."
    },
    {
      name: "Web3 and Blockchain Summer School",
      issuer: "Web3SSH, IIIT Sri City",
      duration: "05/2025",
      description: "Explored decentralized apps (dApps), smart contracts development, and blockchain cryptographic systems."
    }
  ],
  achievements: [
    {
      title: "Competitive Programming Problem Solving",
      detail: "Solved 300+ algorithmic and data structure problems on LeetCode and on other competitive coding platforms."
    },
   
    {
      title: "Code Clash Arena Finalist",
      detail: "Ranked as a finalist out of 300+ competitive participants in the Code Clash Arena programming tournament."
    }
  ],
  languages: [
    { name: "Telugu", proficiency: "Native" },
    { name: "English", proficiency: "Fluent" },
    { name: "Hindi", proficiency: "Proficient" }
  ]
};
