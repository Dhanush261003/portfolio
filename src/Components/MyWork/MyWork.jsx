import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      
      {/* Title Section */}
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>

      {/* Work Items */}
      <div className="mywork-container">
        {mywork_data.map((work) => (
          <a
            key={work.w_no}
            href={work.w_link}
            target="_blank"
            rel="noopener noreferrer"
            className="mywork-item"
          >
            <img src={work.w_img} alt={work.w_name} />
          </a>
        ))}
      </div>

      {/* Show More */}
      <a href="https://github.com/Dhanush261003" target="_blank" className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="arrow icon" />
      </a>

    </div>
  )
}

export default MyWork
