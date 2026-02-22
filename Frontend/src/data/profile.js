// src/data/profile.js

export const profileData = {
  profile: {
    id: "alex-sharma-001",
    name: "Alex Sharma",
    headline:
      "Full Stack Developer | Software Engineer | Cloud & Web Technologies",

    followers: 1850,
    connections: 500,

    coverImage: "https://wallpaperaccess.com/full/1132478.jpg",
    avatar: "https://media.istockphoto.com/id/1399788030/photo/portrait-of-young-confident-indian-woman-pose-on-background.webp?b=1&s=612x612&w=0&k=20&c=_VfWQI2t_aONL0FEFJ1Eki3QQkRwgxkAve0_z53oeKY=",

    location: {
      city: "Bangalore",
      region: "Karnataka",
      country: "India",
    },

    industry: "Information Technology",

    professionalSummary:
      "Results-driven Full Stack Developer with 6+ years of experience building scalable web applications and cloud-based solutions.",
  },

  skills: [
    "JavaScript",
    "Node.js",
    "React.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "AWS",
    "Docker",
    "Git",
  ],

  experience: [
    {
      title: "Senior Software Engineer",
      company: "TechNova Solutions",
      startDate: "2022-04",
      endDate: null,
      description:
        "Leading development of enterprise-level web applications.",
    },
    {
      title: "Software Developer",
      company: "Innovatech Pvt Ltd",
      startDate: "2019-01",
      endDate: "2022-03",
      description:
        "Developed dynamic frontend applications and backend services.",
    },
  ],

  education: {
    college: [
      {
        institution: "Indian Institute of Technology (IIT)",
        degree: "B.Tech",
        fieldOfStudy: "Computer Science",
        startYear: 2015,
        endYear: 2019,
      },
    ],
  },

  projects: [
    {
      id: 1,
      name: "E-Commerce Web Application",
      description:
        "Developed a full-stack e-commerce platform.",
      technologies: ["React", "Node.js", "MongoDB"],
      duration: "6 months",
      link: "https://github.com/alexsharma/ecommerce-app",
      thumbnail: "https://miro.medium.com/v2/resize:fit:1400/1*S9-bHXxzaDxQGW3bJfHO-Q.png",
    },
    {
      id: 2,
      name: "Cloud-Based Task Manager",
      description:
        "Built a scalable task management system hosted on AWS.",
      technologies: ["AWS", "Node.js"],
      duration: "4 months",
      link: "https://github.com/alexsharma/task-manager",
      thumbnail: "https://www.portfoliogen.com/images/portfolioSections.png",
    },
  ],

  certifications: [
    {
      name: "AWS Certified Developer – Associate",
      issueDate: "2023-05",
    },
  ],

  languages: [
    { language: "English", proficiency: "Professional" },
    { language: "Hindi", proficiency: "Native" },
  ],
};
