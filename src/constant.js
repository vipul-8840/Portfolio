import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';



// Experience Section Logo's
import chegglogo from './assets/company_logo/chegglogo.jpg';
import CodeAlphalogo from './assets/company_logo/codeAlpha.jpeg';


// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import netflixLogo from './assets/work_logo/netflix.png';
import brainlyLogo from './assets/work_logo/brainly.png';



export const SkillsInfo = [
    {
       title: 'Frontend',
       skills: [
        { name: 'HTML', logo: htmlLogo },
        { name: 'CSS', logo: cssLogo },
        { name: 'JavaScript', logo: javascriptLogo },
        { name: 'React JS', logo: reactjsLogo },
        { name: 'Redux', logo: reduxLogo },
        { name: 'Next JS', logo: nextjsLogo },
        { name: 'Tailwind CSS', logo: tailwindcssLogo },
        { name: 'Material UI', logo: materialuiLogo },
        { name: 'Bootstrap', logo: bootstrapLogo },
      ],
    },
    {
      title: 'Backend',
      skills: [
        
        { name: 'Node JS', logo: nodejsLogo },
        { name: 'Express JS', logo: expressjsLogo },
        { name: 'MySQL', logo: mysqlLogo },
        { name: 'MongoDB', logo: mongodbLogo },
        { name: 'Firebase', logo: firebaseLogo },
       
      ],
    },
    {
      title: 'Languages',
      skills: [
        { name: 'C', logo: cLogo },
        { name: 'C++', logo: cppLogo },
        { name: 'Java', logo: javaLogo },
        { name: 'JavaScript', logo: javascriptLogo },
        { name: 'TypeScript', logo: typescriptLogo },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', logo: gitLogo },
        { name: 'GitHub', logo: githubLogo },
        { name: 'VS Code', logo: vscodeLogo },
        { name: 'Postman', logo: postmanLogo },
        { name: 'Vercel', logo: vercelLogo },
        { name: 'Netlify', logo: netlifyLogo },
        { name: 'Figma', logo: figmaLogo },
      ],
    },
  ];
  
  export const experiences = [
    {
      id: 0,
      img: CodeAlphalogo,
      role: "Web Developer",
      company: "CodeAlpha",
      date: "Oct 2024 - Nov 2023",
      desc: "Worked as a Frontend Developer Intern, building scalable UI components and responsive web applications using HTML, CSS, JavaScript, React, and Tailwind CSS. Focused on developing clean, user-friendly interfaces and enhancing website performance through modern frontend practices. ",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Tailwind CSS"
      ],
    },
    {
      id: 1,
      img: chegglogo,
      role: "Tutor",
      company: "CheggIndia",
      date: "Aug 2024 - Feb 2025",
      desc: "Worked as a Subject Matter Expert (Tutor) at Chegg, actively solving over 300–400 academic doubts in various subjects. Delivered accurate, well-explained solutions to support students' learning and conceptual understanding. Consistently maintained high-quality standards while managing a large volume of queries within tight deadlines.",
      skills: [
        "Programming Skills",
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    
  ];

  // project section 

  export const projects = [
    {
      id: 0,
      title: "Netflix-Clone",
      description:
        "This project is a replica of Netflix built using modern web technologies. The frontend is developed with React and Tailwind CSS, while the backend uses Node.js, Express, and MongoDB. Users can browse movies, view trailers, log in/sign up, and manage their profiles. It also includes authentication using JWT and has a responsive design for all devices",
      image: netflixLogo,
      tags: ["React", "Tailwind CSS,", "Node.js", "Express.js,", "MongoDB"],
      github: "https://github.com/vipul-8840/Netflix-Project",
      webapp: "https://netflix-project-vu87.onrender.com/",
    },
    {
      id: 1,
      title: "Brainly - Digital Knowledge Management System",
      description:
        "This project acts like a second brain, helping users save and manage important information digitally. For example, if you're watching a lecture on YouTube but have to leave it midway due to urgent work, you can save the video link, add a title, write a short note, and categorize it (like 'DBMS'or 'React') on this platform. Later, you can easily search and revisit it anytime.",
      image: brainlyLogo,
      tags: ["React", "Typescript" , "Tailwind CSS,", "Node.js", "Express.js,", "MongoDB" ],
      github: "https://github.com/vipul-8840/Brainly/tree/main/src",
      webapp: "#",
    },
    
    
    
  ];  
  