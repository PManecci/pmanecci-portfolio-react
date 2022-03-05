import React, { useState } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import './Resume.css'

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    const ResumeHeading = (props) => {
        return (
        <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'></div>
                <span>{props.heading ? props.heading : ''}</span>
                {props.fromDate && props.toDate ? (
                    <div className='heading-date'>
                        {props.fromDate + "_" + props.toDate}
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
            <div className='resume-sub-heading'>
                <span>{props.subHeading ? props.subHeading : ''}</span>
            </div>
            <div className='resume-heading-description'>
                <span>{props.description ? props.description : ''}</span>
            </div>
        </div>
    )};

    const resumeBullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Work History", logoSrc: "work-history.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Projects", logoSrc: "projects.svg" },
        { label: "Interests", logoSrc: "interests.svg" }
    ];

    const programmingSkillsDetails = [
        { skill: "HTML", ratingPercentage: 95 },
        { skill: "CSS", ratingPercentage: 90 },
        { skill: "JavaScript", ratingPercentage: 80 },
        { skill: "APIs", ratingPercentage: 70 },
        { skill: "Mongo Db", ratingPercentage: 70 },
        { skill: "Express JS", ratingPercentage: 60 },
        { skill: "React JS", ratingPercentage: 90 },
        { skill: "Node JS", ratingPercentage: 80 },
    ];

    const projectDetails = [
        { 
            title: "React Personal Portfolio", 
            duration: {fromDate: "2021", toDate: "2022"}, 
            subHeading: "Link to Github Repo: ",
            description: "My first React JS project updating my personal portfolio"
        },
        { 
            title: "React Personal Portfolio", 
            duration: {fromDate: "2021", toDate: "2022"}, 
            subHeading: "Link to Github Repo: ",
            description: "My first React JS project updating my personal portfolio"
        },
        { 
            title: "React Personal Portfolio", 
            duration: {fromDate: "2021", toDate: "2022"}, 
            subHeading: "Link to Github Repo: ",
            description: "My first React JS project updating my personal portfolio"
        }
    ];

    const resumeDetails = [
        <div className='resume-screen-container' key="education">
            <ResumeHeading
            heading={"University of Central Florida"}
            subHeading={"Full Stack Coding Bootcamp"}
            fromDate={"2021"}
            toDate={"2022"}
            />
            <ResumeHeading
            heading={"Valencia College"}
            subHeading={"Educator Preparation Institute"}
            fromDate={"2016"}
            toDate={"2017"}
            />
            <ResumeHeading
            heading={"University of Central Florida"}
            subHeading={"Bachelor of Science in Event and Hospitality Management"}
            fromDate={"2006"}
            toDate={"2010"}
            />
        </div>,

        <div className='resume-screen-container' key="work-experience">
            <ResumeHeading
            heading={"Florida Virtual School"}
            subHeading={"Mathematics Instructor"}
            fromDate={"2020"}
            toDate={"Present"}
            />
            <div className='experience-description'>
                <span className='resume-description-text'>
                    FLVS Details Here! 
                </span>
            </div>
            <div className='experience-description'>
                <span className='resume-description-text'>
                    -Link to Linked In?! 
                </span>
            </div>
        </div>,

        <div className='resume-screen-container programming-skills-container' key="programming-skills">
            {programmingSkillsDetails.map((skill, index) => (
                <div className='skill-parent' key={index}>
                    <div className='heading-bullet'></div>
                    <span>{skill.skill}</span>
                    <div className='skill-percentage'>
                        <div style={{width: skill.ratingPercentage + "%"}}
                        className='active-percentage'>
                        </div>
                    </div>
                </div>
            ))}
        </div>,

        <div className='resume-screen-container' key="projects">
            {projectDetails.map((projectDetails, index) => (
                <ResumeHeading 
                    key={index}
                    heading={projectDetails.title}
                    subHeading={projectDetails.subHeading}
                    description={projectDetails.description}
                    fromDate={projectDetails.duration.fromDate}
                    toDate={projectDetails.duration.toDate}
                />
            ))}
        </div>,

        <div className='resume-screen-container' key="interests">
            <ResumeHeading 
                heading='Traveling'
                description='Why I love it - favorite places'
            />
            <ResumeHeading 
                heading='Cooking and Baking'
                description='Love a good meal'
            />
            <ResumeHeading 
                heading='Table Top Games'
                description='Pandemic Dungeons and Dragons!'
            />
        </div>,
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;
        let newCarousalOffset = {
            style: {transform: "translateY(" + index * offsetHeight *-1 + "px)"}
        };
        setCarousalOffSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div 
            onClick={() => handleCarousal(index)}
            className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
            key={index}
            >
                <img className='bullet-logo' 
                    src={require (`../../assets/Resume/${bullet.logoSrc}`)}
                    alt='Icon'
                />
                <span className='bullet-label'>{bullet.label}</span>
            </div>
        ))
    }

    const getResumeScreen = () => {
        return(
            <div
            style = {carousalOffSetStyle.style}
            className='resume-details-carousal'
            >
                {resumeDetails.map((resumeDetail) => resumeDetail)}
            </div>
        )
    };

    return (
        <div className='resume-container screen-container' id={props.id || ""}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={"I've Got The Skills"}/>
                <div className='resume-card'>
                    <div className='resume-bullets'>
                        <div className='bullet-container'>
                            <div className='bullet-icons'>
                                <div className='bullets'>{getBullets()}</div>
                            </div>
                        </div>
                    </div>
                    <div className='resume-bullet-details'>
                        {getResumeScreen()}
                    </div>
                </div>
            </div>

        </div>
    )
}

