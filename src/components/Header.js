import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';


const Header = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        const sectionForm=document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
      }
      else if (sectionForm) {
        sectionForm.scrollIntoView({ behavior: 'smooth' });
                }
      };
    return (
        <header className="Head">
             <nav >
        <a className="link" href="https://github.com/Hammad112"> <FontAwesomeIcon icon={faFacebook}  /></a>
        <a className="link" href="https://github.com/Hammad112"> <FontAwesomeIcon icon={faGithub}  /> </a>
        <a className="link" href="https://github.com/Hammad112"> <FontAwesomeIcon icon={faInstagram}/></a>
        <a className="link" href="https://github.com/Hammad112"> <FontAwesomeIcon icon={faStackOverflow}  /></a>
        <a className="link" href="https://github.com/Hammad112"> <FontAwesomeIcon icon={faLinkedin}  /></a>       
            </nav>
            <div className="nav-items">
        <div className="nav-items-menue" onClick={() => scrollToSection('Container-project')}>Projects</div>
                <div className="nav-items-menue" onClick={() => scrollToSection('Formmain')}>Contact Me</div>
      </div>
        </header>
    );
}
export default Header;