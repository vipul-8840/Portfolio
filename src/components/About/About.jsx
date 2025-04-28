import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/vipul.png';
const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
       <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
        
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
       
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
           Vipul Kumar
          </h2>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
                      <span className="text-white">I am a </span>
                      <span className="text-[#8245ec]">
                        <Typewriter
                          words={['Fullstack Developer', 'UI/UX Designer', ' Competitive Programmer']}
                          loop={0} // 0 = infinite
                          cursor
                          cursorStyle="|"
                          typeSpeed={100}
                          deleteSpeed={50}
                          delaySpeed={2000}
                        />
                      </span>
                  </h3>
                  <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
                    I'm Vipul, a Fullstack Developer with a passion 
                    for building modern, scalable web applications. I specialize in React.js, Next.js, Tailwind CSS, TypeScript, and Redux for efficient state management. 
                    I leverage MongoDB for database solutions and design intuitive UI/UX experiences with Figma.
                  
                    I bring analytical thinking into development, solving 600+ problem on LeetCode, and ensuring high performance and scalability through Vercel deployment. Always eager to learn, grow, and create seamless digital experiences, I strive to craft modern web applications.
                 </p>
                 <a
                  href="https://drive.google.com/file/d/1CZvq5BO6aonJ675p3fMXpS_jXitdlIkJ/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white py-3 px-10 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
                  style={{
                    background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                    boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                  }}
                >
                  RESUME
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
                  <Tilt
                    className="w-32 h-32 sm:w-48 sm:h-48 md:w-90 md:h-90 border-4 border-purple-700 rounded-full"
                    tiltMaxAngleX={20}
                    tiltMaxAngleY={20}
                    perspective={1000}
                    scale={1.05}
                    transitionSpeed={1000}
                    gyroscope={true}
                  >
                    <img
                      src={profileImage}
                      alt="Tarun Kaushik"
                      className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                    />
                  </Tilt>
                </div>
            </div>
    </section>
  )
}

export default About
