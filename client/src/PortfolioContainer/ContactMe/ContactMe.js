import React, {useState} from 'react';
import Typical from 'react-typical';
import axios from 'axios';
import {toast} from 'react-toastify';

import imgBack from '../../assets/ContactMe/contact.png';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './ContactMe.css';

export default function ContactMe(props) {

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeiIn.subscribe(fadeInScreenHandler)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [banner, setBanner] = useState("")
    
    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    console.log(name);
        const submitForm = async(e) => {
            e.preventDefault();
            try {
                let data = {
                    name,
                    email,
                    message
                };
                const res = await axios.post(`/contact`, data);
                if(name.length === 0 || email.length === 0 || message.length === 0 ) {
                    setBanner(res.data.msg)
                    toast.error(res.data.msg)
                } else if (res.status === 200) {
                    setBanner(res.data.msg)
                    toast.success(res.data.msg)
                }
            } catch (e) {
            } console.log(e);
            debugger;
        };

    return (
        <div className='main-container' id={props.id || ""}>
            <ScreenHeading 
            title="Contact Me"
            subHeading="Let's Get To Work!"/>
            <div className='central-form'>
                <div className='col'>
                    <span className='primary-text'>
                    <h1 className='title'>
                    <Typical
                    loop={Infinity}
                    steps={[
                        "Send Me An Email &",
                        1000,
                        "Let's Get To Work!",
                        1000,
                    ]}
                    />
                    </h1>
                    </span>
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
                <div className='back-form'>
                    <div className='img-back'>
                        <h4>Send Your Email Here!</h4>
                        <img src={imgBack} alt='image not found'/>
                    </div>
                    <form onSubmit={submitForm}>
                        <p>{banner}</p>
                        <label htmlFor='name'>Name</label>
                        <input type='text' onChange={handleName} value={name} />

                        <label htmlFor='name'>Email</label>
                        <input type='email' onChange={handleEmail} value={email} />

                        <label htmlFor='name'>Message</label>
                        <textarea type='text' onChange={handleMessage} value={message} />
                        
                        <div className='send-btn'>
                            <button type='submit'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}