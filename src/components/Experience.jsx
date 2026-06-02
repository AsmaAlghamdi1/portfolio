import "../styles/experience.css";
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      year: "2026",
      title: "Google Developer Student Club",
      role: "Full Stack & UI/UX Developer",
      description:
        "Participated in technical projects, UI/UX design, and full stack development within collaborative student initiatives.",
      website:"https://gdguj.azurewebsites.net/"
    },
    {
      year: "2025",
      title: "Development Data Center",
      role: "Full Stack & UI/UX Developer",
      description:
        "Contributed to the UI/UX design and full stack development of an interactive geographic platform for exploring Hadith stories through audio and text experiences.",
        website:null,
        status: "Coming Soon"
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-header">
        <span>MY JOURNEY</span>
        <h2>Experience</h2>
      </div>

      <div className="timeline">
        {experiences.map((item, index) => (
        <motion.div className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            key={index}

            initial={{
                opacity: 0,
                y: 80,
            }}

            whileInView={{
                opacity: 1,
                y: 0,
            }}

            transition={{
                duration: 0.7,
                delay: index * 0.2,
            }}

            viewport={{
                once: true,
                amount: 0.3,
            }}
>
      <div className="timeline-dot"></div>

      <div className="timeline-card">
        <span className="timeline-year">{item.year}</span>
        <h3>{item.title}</h3>
        <h4>{item.role}</h4>
        <p>{item.description}</p>
{item.website ? (
  <a
    href={item.website}
    target="_blank"
    rel="noopener noreferrer"
    className="experience-link"
  >
    Website
  </a>
) : item.status ? (
  <span className="experience-link disabled">
    {item.status}
  </span>
) : null}
        
      </div>
    </motion.div>
  ))}
</div>
    </section>
  );
}

export default Experience;