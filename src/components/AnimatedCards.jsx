function AnimatedCards({ projects, onSelect }) {
  return (
    <div className="projects-stack">
      {projects.map((project, index) => (
        <button
          className={`project-card stack-card stack-card-${index}`}
          key={project.title}
          onClick={() => onSelect(index)}
        >
          <span>{project.type}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="stack-list">
            {project.stack.map((item) => (
            <span key={item.name}>
            {item.icon}
            {item.name}
      </span>
    ))}
  </div>
        </button>
      ))}
    </div>
    
  );
}

export default AnimatedCards;