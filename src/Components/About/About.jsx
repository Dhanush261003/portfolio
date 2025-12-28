import React from 'react';
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'


const About = () => {
    return(
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I'm Dhanush, a beginner web developer currently pursuing MSc in Information Technology at SRM Institute of Science and Technology. With a strong foundation in frontend development and a passion for creating user-friendly web solutions, I'm constantly expanding my skillset and taking on new challenges.</p>
                        <p>My journey began with a BCA in Computer Application, where I developed a solid understanding of programming fundamentals. Since then, I've been building projects that solve real-world problems, always focusing on clean code and great user experiences.</p>
                        <p>I'm a fast learner with strong attention to detail, and I enjoy collaborating with teams to bring ideas to life. When I'm not coding, I explore new web technologies and design trends.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"65%"}} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                        <div className="about-skill"><p>Python</p><hr style={{width:"50%"}} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>Certification</h1>
                    <p>Python Programming</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>3</h1>
                    <p>Projects Completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>2</h1>
                    <p>Happy Clients</p>
                </div>
            </div>
        </div>
    )
}

export default About