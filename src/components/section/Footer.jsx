import sx from './Footer.module.css';
import { FaFigma, FaLinkedin, FaGithub } from "react-icons/fa";
// import dayjs from 'dayjs';
// import { useState, useEffect } from 'react';

function Footer(){
    return(
        <div className={sx.footer}>
            <div className={sx.contacts}>
            <p>Meu contato:<br/>47 99600-5026</p>
            <p>Email:<br/>leoorieg@gmail.com</p> 
            </div>

        <div>
            <ul>
                <li><a href='https://github.com/RiegL' target='_blank'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/l%C3%A9o-rieg-58b64514a/' target='_blank'><FaLinkedin size={30}/></a></li>
                <li><a target='_blank'><FaFigma size={30}/></a></li> 
            </ul>
        </div>
      </div>
    )
}

export default Footer