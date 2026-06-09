import "../styles/footer.css";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedinIn, FaEnvelope} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>Designed & Developed by Asma Alghamdi</p>

      <div className="footer-icons">
        <a href="https://github.com/AsmaAlghamdi1" aria-label="GitHub"><IoLogoGithub /></a>
        <a href="https://www.linkedin.com/in/asma-alghamdi-885a332b6?utm_source=share_via&utm_content=profile&utm_medium=member_ios" aria-label="LinkedIn"><FaLinkedinIn /></a>
        <a href="mailto:Asmaa.sa1357@gmail.com" aria-label="Email"><FaEnvelope /></a>
      </div>
    </footer>
  );
}

export default Footer;