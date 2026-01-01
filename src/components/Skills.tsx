import { motion } from 'framer-motion';

const skillsData = {
    Frontend: [
        { name: 'React', icon: 'React.png' },
        { name: 'React Native', icon: 'React.png' }, // Note: React Native usually shares React logo or has slightly different one. Using reused one as per original.
        { name: 'JavaScript', icon: 'JavaScript.png' },
        { name: 'TypeScript', icon: 'TypeScript.png' },
        { name: 'HTML5', icon: 'HTML5.png' },
        { name: 'CSS3', icon: 'CSS3.png' },
    ],
    Backend: [
        { name: 'Node.js', icon: 'Node.js.png' },
        { name: 'Spring Boot', icon: 'Spring.png' },
        { name: 'Java', icon: 'Java.png' },
        { name: 'Python', icon: 'Python.png' },
    ],
    Database: [
        { name: 'MongoDB', icon: 'MongoDB.png' },
        { name: 'MySQL', icon: 'MySQL.png' },
        { name: 'PostgreSQL', icon: 'PostgresSQL.png' },
    ],
    Cloud: [
        { name: 'AWS', icon: 'AWS.png' },
        { name: 'IBM Cloud', icon: 'IBM-Cloud.png' },
        { name: 'Docker', icon: 'Docker.png' },
        { name: 'Git', icon: 'Git.png' },
        { name: 'GitHub', icon: 'GitHub.png' },
    ],
    Tools: [
        { name: 'VS Code', icon: 'Visual-Studio-Code-(VS-Code).png' },
        { name: 'Postman', icon: 'Postman.png' },
        { name: 'LeetCode', icon: 'LeetCode.png' },
    ]
};

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="section-title">Technical Skills</h3>

                    <div className="skills-container">
                        {Object.entries(skillsData).map(([category, skills], index) => (
                            <div key={category} className="skill-category">
                                <h4 className="category-title">{category}</h4>
                                <div className="skills-grid">
                                    {skills.map((skill, idx) => (
                                        <motion.div
                                            key={skill.name}
                                            className="skill-card glass"
                                            whileHover={{ scale: 1.1, borderColor: 'var(--accent-color)' }}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 + idx * 0.05 }}
                                            viewport={{ once: true }}
                                        >
                                            <img
                                                src={`/tech-stack-icons/${skill.icon}`}
                                                alt={skill.name}
                                                style={{ width: '48px', height: '48px', objectFit: 'contain', marginBottom: '0.5rem' }}
                                            />
                                            <span>{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
            <style>{`
        .skills-container {
          display: grid;
          gap: 2rem;
        }
        .category-title {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: var(--text-secondary);
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 0.5rem;
          display: inline-block;
        }
        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .skill-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
          min-width: 100px;
          cursor: pointer;
        }
      `}</style>
        </section>
    );
};

export default Skills;
