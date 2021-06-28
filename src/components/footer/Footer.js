import React from "react";

import './Footer.css';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => (
    <>
        {/* <h2>This is Footer component</h2>; */}
        <div className='footer-container'>
            <div className='footer-left'>
                <span className='footer-name'>Daniel</span>
                <a href='https://github.com/danielaucarpro' target='_blank'>
                    <AiFillGithub className='footer-icon' />
                </a>
                <a href='https://www.linkedin.com/in/daniel-aucar-felipe-2a922291/' target='_blank'>
                    <AiFillLinkedin className='footer-icon' />
                </a>
            </div>
            <div>
                All Rights Reserved
            </div>
            <div className='footer-right'>
                <span>Miyabi</span>
                <a href='https://github.com/miyabitanimchi' target='_blank'>
                    <AiFillGithub className='footer-icon' />
                </a>
                <a href='https://www.linkedin.com/in/daniel-aucar-felipe-2a922291/' target='_blank'>
                    <AiFillLinkedin className='footer-icon' />
                </a>
            </div>
        </div>
    </>
);

export default Footer;
