import "../styles/TechMarquee.css"
import reactIcon from "../assets/icons/react.png";
import figmaIcon from "../assets/icons/figma.png";
import jsIcon from "../assets/icons/js.png";
import nodeIcon from "../assets/icons/nodejs.png";
import mongoIcon from "../assets/icons/mongoDB.png";
import mySQLIcon from "../assets/icons/mySQL.png";
import cssIcon from "../assets/icons/css.png";
import htmlIcon from "../assets/icons/html.png";
import javaIcon from "../assets/icons/java.png";

function TechMarquee() {
  const skills = [
   mySQLIcon,reactIcon,figmaIcon,jsIcon,nodeIcon,mongoIcon,cssIcon,htmlIcon,javaIcon
  ];

  return (
    <div className="tech-marquee">
      <div className="marquee-track">
          {[...skills, ...skills].map((icon, index) => (
              <span className={`skills-icon icon-${index}`} key={index}>
                <img src={icon} alt="skills icon" />
              </span>
            ))}
      </div>
    </div>
  );
}

export default TechMarquee;