import React, {useEffect} from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from "../../utilities/Animations"
import './AboutMe.css';

export default function AboutMe(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    
    const SCREEN_CONSTANTS = {
        description: "I am a Software Engineer specializing in FrontEnd Design & Development. I love a good puzzle and I thrive in environments that require problem solving, long-term learning and good old-fashioned trial-and-error. Looking forward to putting those skills to work for you!",
        highlights: {
            bullets: [
                "UI/UX Design",
                "Branding (Logo, Typography, & Color)",
                "HTML/CSS & JavaScript",
                "React JS",
            ],
        heading: "My specialties include:",
        }
    }

    const renderHighlight = () => {
        return(
            SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }

    useEffect(() => {
        return () => { fadeInSubscription.unsubscribe();
        };
    }, [fadeInSubscription]);

    return (
        <div className='about-me-container screen-container' id={props.id || ""}>
            <div className='about-me-parent'>
                <ScreenHeading title={'About Me'} subHeading={'Why Should You Choose Me?'} />
                <div className='about-me-card'>
                    <div className='about-me-profile'></div>
                    <div className='about-me-details'>
                        <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                        <div className='about-me-highlights'>
                            <div className='highlights-heading'>
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                    <div className='about-me-options'>
                        <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                            {""}
                            Hire Me{" "}
                        </button>
                        <a href="resume.pdf" download="PattyManecci resume.pdf">
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}