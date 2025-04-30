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
import KNITLogo from './assets/education_logo/KNITLogo.jpeg';
import OxfordLogo from './assets/education_logo/OxfordLogo.jpg';
import SarswatiLogo from './assets/education_logo/SarswatiLogo.avif';

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
      date: "Oct 2024 - Nov 2024",
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
  
  //Education Section 

  export const education = [
    {
      id: 0,
      img: KNITLogo,
      school: "KNIT Sultanpur, Uttar Pradesh",
      date: "Nov 2020 - June 2024",
      grade: "83% ",
      desc: "I have completed my Bachelor's degree (B.Tech) in Computer Science and Engineering from KNIT Sultanpur. During my time at KNIT, I gained a strong foundation in programming, software development, and computer science principles. I studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at KNIT Sultanpur has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Computer Science & Engineering- CSE",
    },
    {
      id: 1,
      img: OxfordLogo,
      school: "Oxford Public School, Gorakhpur",
      date: "Apr 2017 - Mar 2020",
      grade: "81.2%",
      desc: "I completed my Class 12 education from Oxford Public School, Gorakhpur under the CBSE board, with Physics, Chemistry, and Mathematics (PCM) as my main subjects. I secured an aggregate of 81.2%, demonstrating consistent academic performance.",
      degree: "CBSE(XII) - PCM .",
    },
    {
      id: 2,
      img: SarswatiLogo,
      school: "Sarswati Shishu Mandir Sr. Hr. Sec. School , Gorakhpur",
      date: "Apr 2015 - Mar 2017",
      grade: "95%",
      desc: "I completed my Class 10 education from Saraswati Shishu Mandir Sr. Hr. Sec. School, Gorakhpur under the CBSE board, where I studied core subjects including Physics, Chemistry, and Mathematics (PCM). I achieved a perfect CGPA of 10, reflecting my strong academic performance.",
      degree: "CBSE (X) – High School",
    },
   
  ];
  