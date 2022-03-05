import React from 'react';
import Typical from 'react-typical';
import ScrollService from '../../../utilities/ScrollService';
import './Profile.css';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href='https://www.linkedin.com/in/pmanecci/' target="_blank" rel="noopener noreferrer">
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='https://github.com/PManecci' target="_blank" rel="noopener noreferrer">
                            <i className='fa fa-github-square'></i>
                        </a>
                        <a href='https://www.facebook.com/patty.manecci' target="_blank" rel="noopener noreferrer">
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://www.instagram.com/pattymanecci/' target="_blank" rel="noopener noreferrer">
                            <i className='fa fa-instagram'></i>
                        </a>
                        </div>                    
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {""}
                            Hi, I'm Patty Manecci
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {""}
                            <h1>
                                {""}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Software Engineer ",
                                    1000,
                                    "Jill of All Trades",
                                    1000,
                                    "Coffee Addict",
                                    1000,
                                    "Avid Traveler",
                                    1000,
                                ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Specializing in FrontEnd Web Design and Development
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                            {""}
                            Hire Me{" "}
                        </button>
                        <a href="resume.pdf" download="PattyManecci resume.pdf">
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}