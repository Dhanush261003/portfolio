import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
    return(
        <div className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>Hi, I'm Dhanush,</span> Web Developer & MSc IT Student.</h1>
            <p>I'm a beginner web developer passionate about creating engaging web experiences. Currently pursuing MSc in Information Technology at SRM Institute of Science and Technology.</p>
            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero