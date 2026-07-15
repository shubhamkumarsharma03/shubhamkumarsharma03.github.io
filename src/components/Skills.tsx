import { motion } from 'framer-motion';

interface SkillItem {
  name: string;
  conf: string;
  cls: string;
  use: string;
}

const skillsData: Record<string, { label: string; items: SkillItem[] }> = {
    Frontend: {
        label: 'FRONTEND_ASSETS',
        items: [
            { name: 'React', conf: '74%', cls: 'LEARNING', use: 'Web-Based Data Structures & Algorithms Visualizer & AI Email Writer' },
            { name: 'TypeScript', conf: '70%', cls: 'LEARNING', use: 'Web-Based Data Structures & Algorithms Visualizer' },
            { name: 'HTML5', conf: '90%', cls: 'CORE', use: 'Portfolio Website & frontend web projects structure' },
            { name: 'CSS3', conf: '85%', cls: 'CORE', use: 'Portfolio Website styling & layout configuration' },
        ]
    },
    Backend: {
        label: 'BACKEND_LOGIC',
        items: [
            { name: 'Node.js', conf: '70%', cls: 'LEARNING', use: 'Backend Development Intern (InnerWhispers) server routing' },
            { name: 'Spring Boot', conf: '40%', cls: 'BASICS', use: 'AI Email Writer & Backend Development Intern (InnerWhispers) API logic' },
            { name: 'Python', conf: '75%', cls: 'LEARNING', use: 'Intelligent Document Querying System, Quantum Circuit Simulator & AWS AI Scholar' },
        ]
    },
    Database: {
        label: 'DATA_WAREHOUSE',
        items: [
            { name: 'MySQL', conf: '80%', cls: 'INTERMEDIATE', use: 'Backend Development Intern (InnerWhispers) query designs' },
            { name: 'PostgreSQL', conf: '73%', cls: 'LEARNING', use: 'Intelligent Document Querying System (Aurora Postgres)' },
        ]
    },
    Cloud: {
        label: 'CLOUD_&_IAC_INFRA',
        items: [
            { name: 'AWS', conf: '45%', cls: 'BASICS', use: 'AWS AI Practitioner Challenge, AWS AI Scholar & Intelligent Document Querying System' },
            { name: 'IBM Cloud', conf: '40%', cls: 'BASICS', use: 'AI & Cloud Internship (Edunet Foundation)' },
            { name: 'Terraform', conf: '40%', cls: 'BASICS', use: 'Intelligent Document Querying System infrastructure provisioning' },
            { name: 'Git', conf: '78%', cls: 'LEARNING', use: 'Project version control & repository branch management' },
            { name: 'GitHub', conf: '86%', cls: 'INTERMEDIATE', use: 'Project codebases version control & deployment automation' },
        ]
    },
    'AWS Services': {
        label: 'AWS_SPECIALIZED_SERVICES',
        items: [
            { name: 'Amazon Bedrock', conf: '78%', cls: 'LEARNING', use: 'Intelligent Document Querying System (GenAI RAG pipeline)' },
            { name: 'PartyRock', conf: '95%', cls: 'CORE', use: 'Study Session Planner Pro & Delhi AQI Data Analysis apps' },
            { name: 'Amazon Aurora', conf: '67%', cls: 'LEARNING', use: 'Intelligent Document Querying System (Serverless Postgres database)' },
            { name: 'Amazon S3', conf: '82%', cls: 'INTERMEDIATE', use: 'Intelligent Document Querying System & AWS AI Scholar object storage' },
            { name: 'AWS Lambda', conf: '56%', cls: 'BASICS', use: 'AWS AI Scholar (Serverless AI analytics pipeline)' },
            { name: 'Amazon SageMaker', conf: '67%', cls: 'LEARNING', use: 'AWS AI Scholar (Model training & deployment)' },
            { name: 'Amazon Rekognition', conf: '47%', cls: 'BASICS', use: 'AWS AI Scholar (Computer Vision pipeline components)' },
        ]
    },
};

const Skills = () => {
    return (
        <section id="skills" className="section" style={{ borderBottom: '1px dashed var(--border-color)' }}>
            {/* Corner crosshairs for section drafting border */}
            <div style={{ position: 'absolute', bottom: '0', left: '40px', width: '20px', height: '20px', borderBottom: '1px solid var(--border-color)', borderLeft: '1px solid var(--border-color)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '0', right: '40px', width: '20px', height: '20px', borderBottom: '1px solid var(--border-color)', borderRight: '1px solid var(--border-color)', pointerEvents: 'none' }} />

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-annotation">[ SEC-03 // TECHNICAL_ASSET_REGISTER ]</span>
                    <h3 className="section-title">Technical Skills</h3>

                    <div className="datasheet-grid">
                        {/* Column 1: Frontend, Backend, Database */}
                        <div className="datasheet-column">
                            {Object.entries(skillsData).slice(0, 3).map(([category, data]) => (
                                <div key={category} className="datasheet-panel glass circuit-trace-bg">
                                    <div className="panel-header">
                                        <span className="panel-label">[ CATEGORY // {data.label} ]</span>
                                        <h4 className="panel-title">{category}</h4>
                                    </div>
                                    <div className="panel-body">
                                        {data.items.map((skill, idx) => (
                                            <div key={idx} className="spec-row-group">
                                                <div className="spec-row">
                                                    <span className="spec-name">{skill.name}</span>
                                                    <span className="spec-dots"></span>
                                                    <span className="spec-value">[ {skill.conf} // {skill.cls} ]</span>
                                                </div>
                                                <div className="spec-usecase">
                                                    LEARNED/USED IN: {skill.use}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Column 2: Cloud, AWS Specialized Services */}
                        <div className="datasheet-column">
                            {Object.entries(skillsData).slice(3).map(([category, data]) => (
                                <div key={category} className="datasheet-panel glass circuit-trace-bg">
                                    <div className="panel-header">
                                        <span className="panel-label">[ CATEGORY // {data.label} ]</span>
                                        <h4 className="panel-title">{category}</h4>
                                    </div>
                                    <div className="panel-body">
                                        {data.items.map((skill, idx) => (
                                            <div key={idx} className="spec-row-group">
                                                <div className="spec-row">
                                                    <span className="spec-name">{skill.name}</span>
                                                    <span className="spec-dots"></span>
                                                    <span className="spec-value">[ {skill.conf} // {skill.cls} ]</span>
                                                </div>
                                                <div className="spec-usecase">
                                                    LEARNED/USED IN: {skill.use}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
            
            <style>{`
                .datasheet-grid {
                  display: grid;
                  grid-template-columns: 1fr;
                  gap: 2rem;
                }
                
                @media (min-width: 992px) {
                  .datasheet-grid {
                    grid-template-columns: repeat(2, 1fr);
                    align-items: start;
                  }
                }
                
                .datasheet-column {
                  display: flex;
                  flex-direction: column;
                  gap: 2rem;
                }

                .datasheet-panel {
                  border: 1px solid var(--border-color);
                  border-radius: 4px;
                  padding: 1.8rem;
                  background: rgba(255, 255, 255, 0.7);
                  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
                  position: relative;
                }

                .datasheet-panel:hover {
                  transform: translateY(-2px);
                  border-color: var(--accent-color);
                  box-shadow: 4px 4px 12px rgba(15, 45, 89, 0.08);
                }

                .panel-header {
                  margin-bottom: 1.5rem;
                  border-bottom: 1.5px dashed var(--border-color);
                  padding-bottom: 0.75rem;
                }

                .panel-label {
                  font-family: 'IBM Plex Mono', monospace;
                  font-size: 0.65rem;
                  color: var(--accent-color);
                  font-weight: bold;
                  display: block;
                  letter-spacing: 0.05em;
                  margin-bottom: 0.25rem;
                }

                .panel-title {
                  font-family: 'Space Grotesk', sans-serif;
                  font-size: 1.3rem;
                  font-weight: 700;
                  color: var(--text-primary);
                  margin: 0;
                }

                .panel-body {
                  display: flex;
                  flex-direction: column;
                  gap: 1rem;
                }

                .spec-row-group {
                  display: flex;
                  flex-direction: column;
                }

                .spec-row {
                  display: flex;
                  align-items: baseline;
                  justify-content: space-between;
                  font-family: 'IBM Plex Mono', monospace;
                  font-size: 0.82rem;
                  cursor: default;
                }

                .spec-name {
                  font-weight: 700;
                  color: var(--text-primary);
                  transition: color 0.2s ease;
                }

                .spec-dots {
                  flex-grow: 1;
                  border-bottom: 1px dotted rgba(15, 45, 89, 0.15);
                  margin: 0 8px;
                }

                .spec-value {
                  color: var(--text-secondary);
                  font-weight: bold;
                  transition: color 0.2s ease;
                }

                .spec-usecase {
                  font-family: 'IBM Plex Mono', monospace;
                  font-size: 0.68rem;
                  color: var(--text-secondary);
                  margin-top: 0.2rem;
                  padding-left: 0.5rem;
                  border-left: 1.5px solid rgba(15, 45, 89, 0.2);
                  opacity: 0.65;
                  transition: opacity 0.2s ease, border-left-color 0.2s ease;
                }

                /* Hover interaction details */
                .spec-row-group:hover .spec-name {
                  color: var(--accent-color);
                }
                
                .spec-row-group:hover .spec-value {
                  color: var(--text-primary);
                }

                .spec-row-group:hover .spec-usecase {
                  opacity: 1;
                  border-left-color: var(--accent-color);
                }
            `}</style>
        </section>
    );
};

export default Skills;
