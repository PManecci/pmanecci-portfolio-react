import React, { useState, useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Resume.css'

const Resume = (props) => {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
        return (
        <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'></div>
                <span>{props.heading ? props.heading : ''}</span>
                {props.fromDate && props.toDate ? (
                    <div className='heading-date'>
                        {props.fromDate + "-" + props.toDate}
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
            subHeading: <a href='https://www.PattyManecci.com'>www.PattyManecci.com</a>,
            description: "My first React JS project updating my personal portfolio!"
        },
        { 
            title: "Get Social API", 
            duration: {fromDate: "2022", toDate: "2022"}, 
            subHeading: <a href='https://github.com/PManecci/get-social-18'>Get Social API</a>,
            description: "A Mongo DB based API for a simple sovial networking platform, first major Database & Routes project!"
        },
        { 
            title: "Will It Rain?", 
            duration: {fromDate: "2021", toDate: "2021"}, 
            subHeading: <a href='https://pmanecci.github.io/will-it-rain-6'>Will It Rain</a>,
            description: "My first JavaScript & API project - A Weather Dashboard utilizing OpenWeather"
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
                -Provide direct and meaningful communication, feedback, instruction and technical support for a an average of 80-155 6th Grade Math students.
                </span>
            </div>
            <div className='experience-description'>
                <span className='resume-description-text'>
                -Utilize HTML/CSS to enhance grading feedback and communication - embedding images, videos and links to maximize engagement and improve user experience.
                </span>
            </div>
            <div className='experience-description'>
                <span className='resume-description-text'>
                For my full work history please vist my <a href="https://www.linkedin.com/in/pmanecci/">Linked In</a> Profile!
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

        <div className='resume-screen-container project-container' key="projects">
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
            <div className='project-description'>
                <span className='project-github-link'>
                    To see all of my projects visit my <a href="https://github.com/PManecci">Github</a> Profile!
                </span>
            </div>
        </div>,

        <div className='resume-screen-container' key="interests">
            <ResumeHeading 
                heading='Traveling'
                description='I grew up in a miltary family so moving and experiencing new places was the norm. I love immersing myself in new cultures and eating new foods. My favorite place I have been so far is Florence, Italy!'
            />
            <ResumeHeading 
                heading='Cooking and Baking'
                description='I enjoy cooking and trying to recreate those dishes we loved while traveling in my own kitchen. My favorite part is being able to bring back and share a little part of that travel experience with our family and friends!'
            />
            <ResumeHeading 
                heading='Table Top Games'
                description='I recently started playing D&amp;D and love that it combines a version of travel with hanging out with friends. A great at home option for a quick getaway from reality!'
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
        ));
    };

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

    useEffect(() => {
        return () => { fadeInSubscription.unsubscribe();
        };
    }, [fadeInSubscription]);

    return (
        <div className='resume-container screen-container' id={props.id || ""}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={"I've Got The Skills"}/>
                <div className='resume-card'>
                    <div className='resume-bullets'>
                        <div className='bullet-container'>
                            <div className='bullet-icons'></div>
                            <div className='bullets'>{getBullets()}</div>
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

export default Resume;