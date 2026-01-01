import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, CheckCircle2, Layers, Image as ImageIcon } from 'lucide-react';
import { useLightbox } from '../context/LightboxContext';

const projects = [
    {
        title: 'Intelligent Document Querying System',
        description: 'A robust GenAI RAG solution allowing users to query vast document repositories via natural language. Leverages AWS Bedrock for LLMs, Aurora Postgres Serverless for vector indexing, and S3 for storage. Built with Terraform (IaC) and Python, it simulates a real-world enterprise pipeline secured for sensitive data.',
        features: [
            'GenAI RAG pipeline using AWS Bedrock',
            'Serverless Vector Search with Aurora Postgres',
            'Full Infrastructure as Code (IaC) with Terraform',
            'Secure document ingestion & indexing flow'
        ],
        tags: ['AWS Bedrock', 'Aurora Serverless', 'Terraform', 'Python', 'RAG'],
        image: '/assets/Document-querying-system.png',
        diagram: '/assets/arch-doc-query-real.jpg',
        link: 'https://github.com/shubhamkumarsharma03/Intelligent-Document-Querying-System',
        featured: true
    },
    {
        title: 'AI Email Writer',
        description: 'A productivity tool utilizing Google\'s Gemini API to draft professional emails. It features a React frontend for real-time preview and a Spring Boot backend that orchestrates prompt engineering and API communication.',
        features: [
            'Context-aware email generation via Gemini',
            'Spring Boot REST API architecture',
            'Customizable tone and length settings',
            'Modern React UI with instant feedback'
        ],
        tags: ['React', 'Spring Boot', 'Gemini API', 'Java'],
        image: '/assets/ai-email-writer.png',
        diagram: '/assets/arch-email-writer.png',
        link: 'https://github.com/shubhamkumarsharma03/AI-email-writer',
        featured: false
    },
    {
        title: 'Expense Tracker',
        description: 'An upcoming cross-platform mobile financial manager currently in the initial development phase. The project foundation has been established using React Native and Expo, with a roadmap to implement real-time tracking and visual analytics.',
        features: [
            'Initial Setup: React Native & Expo environment',
            'Planned: Real-time Firebase synchronization',
            'Planned: Interactive financial charting',
            'Planned: Secure user authentication'
        ],
        tags: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
        image: '/assets/expense-tracker.png',
        diagram: null,
        link: 'https://github.com/shubhamkumarsharma03/expanse-tracker',
        featured: false,
        status: 'In Development'
    }
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    const [showDiagram, setShowDiagram] = useState(false);
    const { openLightbox } = useLightbox();
    const isEven = index % 2 === 0;

    return (
        <motion.div
            className={`project-row ${isEven ? 'row-normal' : 'row-reverse'} glass`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            {/* Media Section */}
            <div className="project-media">
                <div className="media-container">
                    <AnimatePresence mode='wait'>
                        <motion.img
                            key={showDiagram ? 'diagram' : 'image'}
                            src={showDiagram && project.diagram ? project.diagram : project.image}
                            alt={project.title}
                            className="project-img"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => openLightbox(showDiagram && project.diagram ? project.diagram : project.image)}
                            style={{ cursor: 'pointer' }}
                        />
                    </AnimatePresence>

                    {project.diagram && (
                        <div className="media-controls">
                            <button
                                className={`control-btn ${!showDiagram ? 'active' : ''}`}
                                onClick={() => setShowDiagram(false)}
                                aria-label="Show Screenshot"
                            >
                                <ImageIcon size={16} /> UI
                            </button>
                            <button
                                className={`control-btn ${showDiagram ? 'active' : ''}`}
                                onClick={() => setShowDiagram(true)}
                                aria-label="Show Architecture"
                            >
                                <Layers size={16} /> Arch
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className="project-info">
                <div className="info-header">
                    <span className="project-type">
                        {project.status === 'In Development' ? '🚧 In Development' : (project.featured ? 'Featured Architecture' : 'Full Stack Application')}
                    </span>
                    <h3 className="project-title">{project.title}</h3>
                </div>

                <p className="project-desc">{project.description}</p>

                <div className="features-list">
                    {project.features.map((feature: string, i: number) => (
                        <div key={i} className="feature-item">
                            <CheckCircle2 size={16} className="feature-icon" />
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>

                <div className="tech-stack">
                    {project.tags.map((tag: string) => (
                        <span key={tag} className="tech-pill">{tag}</span>
                    ))}
                </div>

                <a href={project.link} target="_blank" rel="noopener noreferrer" className="source-btn">
                    <Github size={18} /> Source Code
                </a>
            </div>

            <style>{`
                .project-row {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                    padding: 2rem;
                    margin-bottom: 4rem;
                    border-radius: 20px;
                    border: 1px solid var(--glass-border);
                    background: rgba(255, 255, 255, 0.03);
                }

                @media (min-width: 992px) {
                    .project-row {
                        flex-direction: row;
                        align-items: center;
                        gap: 4rem;
                        padding: 3rem;
                    }
                    .row-reverse {
                        flex-direction: row-reverse;
                    }
                    .project-media, .project-info {
                        flex: 1;
                    }
                }

                .media-container {
                    position: relative;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                    aspect-ratio: 16/9;
                    background: #111;
                }

                .project-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .media-controls {
                    position: absolute;
                    bottom: 1rem;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    background: rgba(0,0,0,0.8);
                    padding: 4px;
                    border-radius: 30px;
                    gap: 4px;
                    border: 1px solid rgba(255,255,255,0.1);
                }

                .control-btn {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    padding: 6px 12px;
                    border-radius: 20px;
                    border: none;
                    background: transparent;
                    color: #888;
                    font-size: 0.75rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s;
                }

                .control-btn.active {
                    background: var(--accent-color);
                    color: white;
                }

                .control-btn:hover:not(.active) {
                    color: white;
                }

                .project-type {
                    color: var(--accent-color);
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .project-title {
                    font-size: 2rem;
                    margin: 0.5rem 0 1.5rem;
                    color: white;
                }

                .project-desc {
                    color: var(--text-secondary);
                    line-height: 1.7;
                    margin-bottom: 2rem;
                    font-size: 1.05rem;
                }

                .features-list {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1rem;
                    margin-bottom: 2rem;
                }

                .feature-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    font-size: 0.95rem;
                    color: #ddd;
                }

                .feature-icon {
                    color: var(--accent-color);
                    margin-top: 4px;
                    flex-shrink: 0;
                }

                .tech-stack {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                    margin-bottom: 2rem;
                }

                .tech-pill {
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    padding: 0.4rem 1rem;
                    border-radius: 20px;
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                }

                .source-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: white;
                    text-decoration: none;
                    font-weight: 600;
                    padding-bottom: 4px;
                    border-bottom: 2px solid var(--accent-color);
                    transition: opacity 0.3s;
                }
                .source-btn:hover {
                    opacity: 0.8;
                }
            `}</style>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="section bg-dark">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="section-title">Featured Projects</h3>
                    <div className="projects-container">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
