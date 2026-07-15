import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, CheckCircle2, ExternalLink, Image as ImageIcon, Layers } from 'lucide-react';
import { useLightbox } from '../context/LightboxContext';

const projects = [
    {
        title: 'Web-Based Data Structures & Algorithms Visualizer',
        description: 'An interactive educational web application designed to help students and developers understand the internal working of fundamental data structures and algorithms through step-by-step visual animations. Built with React and TypeScript, it features a clean modular architecture that strictly separates algorithm logic from the visualization layer.',
        features: [
            'Step-by-step visual animations of algorithms',
            'Interactive playback controls (play, pause, step, speed)',
            'Modular architecture separating logic from visualization',
            'Support for Arrays, Linked Lists, Sorting, Trees, and Graphs'
        ],
        tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Algorithms', 'Education'],
        image: '/assets/data-structures-visualizer.png',
        diagram: '/assets/arch-dsvisualizer.png',
        link: 'https://github.com/dsviz/Data-Structures-Visualizer',
        demo: 'https://dsviz.app/',
        featured: true
    },
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
        title: 'Study Session Planner Pro (PartyRock)',
        description: 'A smart study session planner that builds personalized schedules based on subject, study time, difficulty, and learning goals. It generates a structured plan, time management strategies, and productivity tips for focused study sessions.',
        features: [
            'Personalized study plans based on time and difficulty',
            'Goal-driven session structure and checkpoints',
            'Built with PartyRock input/output widgets',
            'Reusable, shareable planning workflow'
        ],
        tags: ['PartyRock', 'AWS', 'Generative AI', 'Productivity'],
        image: '/assets/Study-Session-Planner-Pro.png',
        diagram: null,
        link: 'https://partyrock.aws/u/shubhamsharma/m4pPY1lDz/Study-Session-Planner-Pro',
        linkIsExternal: true,
        sourceLabel: 'Open App',
        featured: false
    },
    {
        title: 'Quantum Circuit Simulator using Qiskit',
        description: 'An educational and scalable quantum circuit simulator built with a professional 5-layer architecture. It separates presentation, application logic, and quantum execution, supporting both CLI and GUI modes. The system leverages Qiskit for execution and Matplotlib for visualization, offering extended gate support and built-in algorithm presets.',
        features: [
            'Professional 5-Layer Architecture (SOLID principles)',
            'Dual Interface: CLI and Enhanced Tkinter GUI',
            'Extended Gate Library (S, T, RX, RY, RZ, SWAP)',
            'Built-in Algorithm Presets (Bell State, GHZ, Teleportation)',
            'Embedded Matplotlib visualizations for circuits and results'
        ],
        tags: ['Python', 'Qiskit', 'Tkinter', 'Quantum Computing', 'Simulation'],
        image: '/assets/Quantum-Circuit-Simulator.png',
        diagram: '/assets/arch-quantum-sim.png',
        link: 'https://github.com/shubhamkumarsharma03/Quantum-Circuit-Simulator-using-Qiskit',
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
        featured: false
    }
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    const [showDiagram, setShowDiagram] = useState(false);
    const { openLightbox } = useLightbox();
    const isEven = index % 2 === 0;

    const currentImage = showDiagram && project.diagram ? project.diagram : project.image;

    return (
        <div className={`project-row ${isEven ? 'row-normal' : 'row-reverse'} glass`}>
            {/* Media Section */}
            <div className="project-media">
                <div className="media-container" style={{ position: 'relative' }}>
                    <img
                        src={currentImage}
                        alt={project.title}
                        className="project-img"
                        onClick={() => openLightbox(currentImage)}
                        style={{ cursor: 'pointer' }}
                    />

                    {project.diagram && (
                        <div className="media-controls no-print">
                            <button
                                className={`control-btn ${!showDiagram ? 'active' : ''}`}
                                onClick={() => setShowDiagram(false)}
                                aria-label="Show Screenshot"
                            >
                                <ImageIcon size={14} /> UI
                            </button>
                            <button
                                className={`control-btn ${showDiagram ? 'active' : ''}`}
                                onClick={() => setShowDiagram(true)}
                                aria-label="Show Architecture"
                            >
                                <Layers size={14} /> ARCH
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className="project-info">
                <div className="info-header">
                    <span className="project-type">
                        {project.status === 'In Development' ? '[ 🚧 IN_DEVELOPMENT ]' : (project.featured ? '[ FEATURED_ARCHITECTURE ]' : '[ FULL_STACK_SYSTEM ]')}
                    </span>
                    <h3 className="project-title">{project.title}</h3>
                </div>

                <p className="project-desc">{project.description}</p>

                <div className="features-list">
                    {project.features.map((feature: string, i: number) => (
                        <div key={i} className="feature-item">
                            <CheckCircle2 size={15} className="feature-icon" />
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>

                <div className="tech-stack">
                    {project.tags.map((tag: string) => (
                        <span key={tag} className="tech-pill">[{tag}]</span>
                    ))}
                </div>

                <div className="project-links">
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="live-btn"
                        >
                            <ExternalLink size={16} /> LIVE_DEMO
                        </a>
                    )}
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="source-btn">
                        {project.linkIsExternal ? <ExternalLink size={16} /> : <Github size={16} />}
                        {project.sourceLabel ? project.sourceLabel.toUpperCase().replace(' ', '_') : 'SOURCE_CODE'}
                    </a>
                </div>
            </div>

            <style>{`
                .project-row {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                    padding: 2.2rem;
                    margin-bottom: 4.5rem;
                    border-radius: 4px;
                    background: rgba(255, 255, 255, 0.7);
                    transition: border-color 0.3s;
                }
                
                .project-row:hover {
                    border-color: var(--accent-color);
                }

                @media (min-width: 992px) {
                    .project-row {
                        flex-direction: row;
                        align-items: center;
                        gap: 3.5rem;
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
                    border-radius: 2px;
                    overflow: hidden;
                    box-shadow: 4px 4px 15px rgba(15, 45, 89, 0.08);
                    aspect-ratio: 16/9;
                    background: #fdfbf7;
                    border: 1px solid var(--border-color);
                }

                .project-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .media-controls {
                    position: absolute;
                    bottom: 0.75rem;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    background: rgba(255, 255, 255, 0.95);
                    padding: 3px;
                    border-radius: 4px;
                    gap: 4px;
                    border: 1px solid var(--border-color);
                    box-shadow: 2px 2px 5px rgba(15, 45, 89, 0.15);
                    z-index: 10;
                }

                .control-btn {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    padding: 5px 10px;
                    border-radius: 2px;
                    border: none;
                    background: transparent;
                    color: var(--text-secondary);
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 0.7rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .control-btn.active {
                    background: var(--text-primary);
                    color: var(--bg-color);
                }

                .control-btn:hover:not(.active) {
                    color: var(--accent-color);
                }

                .project-type {
                    color: var(--accent-color);
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 0.75rem;
                    font-weight: bold;
                    letter-spacing: 0.05em;
                }

                .project-title {
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 1.8rem;
                    margin: 0.4rem 0 1.2rem;
                    color: var(--text-primary);
                    font-weight: 700;
                }

                .project-desc {
                    color: var(--text-secondary);
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                    font-size: 0.95rem;
                }

                .features-list {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 0.75rem;
                    margin-bottom: 1.5rem;
                }

                .feature-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 8px;
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                }

                .feature-icon {
                    color: var(--text-primary);
                    margin-top: 2px;
                    flex-shrink: 0;
                }

                .tech-stack {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    margin-bottom: 2rem;
                }

                .tech-pill {
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 0.75rem;
                    color: var(--text-secondary);
                    font-weight: 600;
                }

                .project-links {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 1.25rem;
                }

                .live-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: var(--text-primary);
                    color: var(--bg-color);
                    text-decoration: none;
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 0.8rem;
                    font-weight: 700;
                    padding: 0.6rem 1.2rem;
                    border-radius: 4px;
                    border: 1px solid var(--text-primary);
                    box-shadow: 2px 2px 0px rgba(15, 45, 89, 0.15);
                    transition: all 0.2s;
                }

                .live-btn:hover {
                    transform: translate(-1px, -1px);
                    box-shadow: 3px 3px 0px rgba(15, 45, 89, 0.2);
                }

                .source-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    color: var(--text-primary);
                    text-decoration: none;
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 0.8rem;
                    font-weight: 700;
                    padding-bottom: 3px;
                    border-bottom: 1.5px solid var(--text-primary);
                    transition: all 0.2s;
                }
                
                .source-btn:hover {
                    color: var(--accent-color);
                    border-bottom-color: var(--accent-color);
                }
            `}</style>
        </div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="section" style={{ borderBottom: '1px dashed var(--border-color)' }}>
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
                    <span className="section-annotation">[ SEC-04 // PRODUCTION_ARCHITECTURES ]</span>
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
