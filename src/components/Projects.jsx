import { useState } from "react";
import AnimatedCards from "./AnimatedCards";
import "../styles/projects.css";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { FaFigma } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiAndroid } from "react-icons/si";
import { DiFirebase } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiGooglegemini } from "react-icons/si";
import { SiI18Next } from "react-icons/si";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { FaBehance } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
const projectsData = [
  {
    title: "Rafah",
    type: "Neighborhood Insights Platform",
    description:
"A neighborhood insights platform for citizens and government entities.",
    stack: [
      { name: "html",icon:<FaHtml5 />},
      { name: "css",icon:<IoLogoCss3 />},
      { name: "js", icon: <IoLogoJavascript /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "mongoDB", icon: <SiMongodb /> },
      { name: "I18next",icon:<SiI18Next />},
      { name: "Gemini",icon:<SiGooglegemini />}
    ],
    links: [
      {
        name: "GitHub",
        icon: <IoLogoGithub />,
        link: "https://github.com/SWELeen/Senior-Project",
      },
      {
        name: "Demo",
        icon: <FaExternalLinkAlt />,
        link:"https://drive.google.com/file/d/1HMltJcx3aclYUODCsCsBfZfut1lbLVW5/view?usp=drivesdk",
      }
    ],
  },

  {
    title: "AI Analysis",
    type: "AI Analysis Tool",
    description: "An AI-powered tool that gives design feedback and usability insights.",
    stack: [
      { name: "html",icon:<FaHtml5 />},
      { name: "css",icon:<IoLogoCss3 />},
      { name: "js", icon: <IoLogoJavascript /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MySQL", icon: <SiMysql/>  },
      { name: "Gemini",icon:<SiGooglegemini />}
    ],
    links: [
      {
        name: "GitHub",
        icon: <IoLogoGithub />,
        link: "https://github.com/AsmaAlghamdi1/AI-analysis",
      },
      {
        name: "Website",
        icon: <FaExternalLinkAlt />,
        link: "https://ai-analysis-4n6p.onrender.com",
      },
    ],
  },
    {
    title: "Rafah Redesign",
    type: "UI/UX Redesign",
    description:
      "A redesign project focused on enhancing the Rafah platform through cleaner interfaces and improved user experience.",
    stack: [{ name: "Figma", icon: <FaFigma /> }],
    links: [
      {
        name: "behance",
        icon: <FaBehance />,
        link: "https://www.behance.net/gallery/249789339/Redesign",
      },
    ],
  },
  {
    title: "Sakeena",
    type: "UI/UX Design",
    description:
      "A sensory-friendly Quran learning app design for children with autism.",
    stack: [{ name: "Figma", icon: <FaFigma /> }],
    links: [
      {
        name: "behance",
        icon: <FaBehance />,
        link: "https://www.behance.net/gallery/249857201/Quran-learning-app-%28ASD%29?platform=direct",
      },
    ],
  },
  {
    title: "Marwiyat",
    type: "Interactive Educational Platform",
    description:
      "An interactive Hadith storytelling platform powered by maps and bilingual user experience design.",
    stack: [
      { name: "React", icon: <FaReact /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "i18next",icon: <SiI18Next />},
      { name: "node.js",icon: <FaNodeJs />},
      { name: "PostgreSQL",icon:<BiLogoPostgresql />},
      { name: "Figma",icon:<FaFigma /> }
    ],
    links: [
      { name: "GitHub", icon: <IoLogoGithub />, link: "https://github.com/SWELeen/DDC-project" },
      { name: "Demo", icon: <FaExternalLinkAlt />, link: "https://drive.google.com/file/d/16nwqbB811DrMg67lARdTqT3Pqcdl60PT/view?usp=drivesdk" },
    ],
  },
];

function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedProject =
    selectedIndex !== null ? projectsData[selectedIndex] : null;

  const openProject = (index) => {
    setSelectedIndex(index);
  };

  const closeProject = () => {
    setSelectedIndex(null);
  };

  const nextProject = () => {
    setSelectedIndex((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? projectsData.length - 1 : prev - 1
    );
  };

  return (
    <div className="projects-wrapper">
      <div className="projects-header">
        {/* <span>SELECTED WORK</span> */}
        <h2>Projects</h2>
      </div>

      {selectedIndex === null ? (
        <AnimatedCards projects={projectsData} onSelect={openProject} />
      ) : (
        <div className="project-viewer">
          <button className="close-btn" onClick={closeProject}>
            <IoIosClose />
          </button>

          <button className="arrow-btn left" onClick={prevProject}>
            <FaArrowLeft />
          </button>

          <div className="viewer-card">
            <span>{selectedProject.type}</span>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>

           <div className="tech-list">
  {selectedProject.links.map((item) => (
    <a
        key={item.name}
        href={item.link}
        target="_blank"
        rel="noreferrer"
    >
  {item.icon}
  {item.name}
</a>
  ))}
</div>
          </div>

          <button className="arrow-btn right" onClick={nextProject}>
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
}

export default Projects;