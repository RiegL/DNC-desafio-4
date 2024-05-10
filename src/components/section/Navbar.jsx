import sx from './Navbar.module.css';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return(
        <div className={sx.navbar}>
            <ul>
                <li><Nav.Link href='#projects'>Projetos</Nav.Link></li>
                <li><Nav.Link href='#tec'>Tecnologias</Nav.Link></li>
                <li><Nav.Link href='#aboutme'>Sobre mim</Nav.Link></li>
                
            </ul>
            <ul>
                <li><a href='https://github.com/RiegL' target='_blank'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/l%C3%A9o-rieg-58b64514a/' target='_blank'><FaLinkedin size={30}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar;