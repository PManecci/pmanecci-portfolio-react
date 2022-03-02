import React from 'react';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <a href='https://www.linkedin.com/in/pmanecci/' target="_blank">
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='https://github.com/PManecci' target="_blank">
                            <i className='fa fa-github-square'></i>
                        </a>
                        <a href='https://www.facebook.com/patty.manecci' target="_blank">
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://www.instagram.com/pattymanecci/' target="_blank">
                            <i className='fa fa-instagram'></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}