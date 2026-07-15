import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLightbox } from '../context/LightboxContext';
import { ExternalLink, Calendar, Award, CheckCircle2 } from 'lucide-react';

const CREDLY_BADGE_IDS = [
    '917a930d-a814-4684-b6a0-390ca5ff0ec9',
    '2b58edc7-d7af-416b-87be-2122ade2baf5',
    '43e6fbd7-3901-48dc-a882-1e02b0900aef',
    'ca4c0d0d-6095-4aed-907c-3aa74c1a3a0f',
    'ae2ebdcd-ac08-4f66-87af-030fcd5204f2',
    '4b294454-649f-4568-9db1-74ed9fc38ca0'
];

const experiences = [
    {
        title: 'Backend Development Intern',
        organization: 'InnerWhispers Mental Health Services',
        date: 'May 2026 — August 2026',
        description: 'Supporting server-side development for InnerWhispers digital platforms, focused on reliable APIs, database management, and clean backend architecture for mental health services.',
        keyTakeaways: [
            'Build and maintain REST APIs and backend logic',
            'Design and manage SQL/NoSQL databases',
            'Integrate frontend components with backend services',
            'Debug, optimize, and document backend modules',
            'Deliver weekly progress updates and API documentation'
        ],
        image: '/assets/OfferLetter-1.png',
        badges: [
            '/assets/OfferLetter-2.png'
        ],
        link: null,
        type: 'Internship'
    },
    {
        title: 'AWS AI Practitioner Challenge 2026',
        organization: 'Udacity x AWS',
        date: 'May 2026',
        description: 'Completed an applied program covering core AI/ML concepts, generative AI technologies, real-world use cases, and hands-on exploration of AWS AI/ML services and tools. Focused on selecting appropriate AI/ML solutions and implementing them inside the AWS ecosystem.',
        keyTakeaways: [
            'AI/ML Fundamentals & Strategy on AWS',
            'Generative AI (NLP, Computer Vision) Use Cases',
            'Service Selection Across AWS AI/ML Stack',
            'Project: Study Session Planner Pro (PartyRock)',
            'Project: Delhi AQI Data Analysis (PartyRock)'
        ],
        image: '/assets/AWS-AI-Practitioner.png',
        badges: [
            '/assets/AWS-AI-Practitioner-Badge.png',
            '/assets/Project-2-Completion-Badge.jpg'
        ],
        link: 'https://www.udacity.com/certificate/e/6acb0338-280f-11f1-81d3-17a753beb8d6',
        type: 'Certification'
    },
    {
        title: 'AWS AI & ML Scholar',
        organization: 'Amazon Web Services (AWS)',
        date: 'August 2025 — November 2025',
        description: 'Selected for the prestigious AWS AI & ML Scholarship program. Gained foundational knowledge in AI/ML within the AWS ecosystem, covering model selection, deployment strategies, and ethical AI implementation. Acquired hands-on experience by building solutions using Amazon SageMaker, Lambda, and other core AI services.',
        keyTakeaways: [
            'Model Building & Deployment with Amazon SageMaker',
            'Serverless AI Pipelines using AWS Lambda',
            'Computer Vision & NLP (Rekognition, Comprehend)',
            'Data Integration & Management (S3, AWS Glue)',
            'Ethical AI, Bias Detection & Responsible Practices'
        ],
        image: '/assets/AWS-AI-Engineer.png',
        link: 'https://www.udacity.com/certificate/e/ad62845a-8152-11f0-b893-775bcb74b483',
        type: 'Scholarship / Training'
    },
    {
        title: 'Foundation of Generative AI Nanodegree',
        organization: 'Udacity',
        date: 'February 2025',
        description: 'A comprehensive program exploring the fundamental principles of Generative AI, Deep Learning, and Foundation Models. The curriculum covered practical applications of cutting-edge techniques, including parameter-efficient fine-tuning (PEFT), enabling the adaptation of massive foundation models for specific, real-world use cases.',
        keyTakeaways: [
            'Generative AI Fundamentals & Deep Learning',
            'Advanced Parameter-Efficient Fine-Tuning (PEFT)',
            'Building & Adapting Massive Foundation Models',
            'Real-world AI Application Development'
        ],
        image: '/assets/udacity-genai-cert.png',
        link: 'https://www.udacity.com/certificate/e/e6a78158-b7bc-11ef-9923-77485672cd17',
        type: 'Certification / Nanodegree'
    },
    {
        title: 'Introducing Generative AI with AWS',
        organization: 'Udacity',
        date: 'July 2025',
        description: 'An in-depth exploration of generative AI focused on foundational concepts and real-world applications. Covered Large Language Models (LLMs), transformer architectures, and ethical AI deployment, with hands-on practice using AWS tools.',
        keyTakeaways: [
            'Generative AI & LLM Foundations',
            'Transformer Architectures & Prompt Engineering',
            'AWS Generative AI Tools & Applications',
            'Ethical AI & Responsible Deployment'
        ],
        image: '/assets/udacity-genai-aws-cert.png',
        link: 'https://www.udacity.com/certificate/e/ad8ffe4a-3c3c-11f0-9c0d-23be28a9dd3f',
        type: 'Course / Certification'
    },
    {
        title: 'AI & Cloud Internship',
        organization: 'Edunet Foundation (IBM Cloud)',
        date: 'July 2025 — August 2025',
        description: 'An intensive one-month internship centered on AI technologies and IBM Cloud infrastructure. The program provided hands-on experience with cloud computing architectures, AI service integration, and enterprise-level development best practices.',
        keyTakeaways: [
            'IBM Cloud Architecture Integration',
            'Enterprise AI Service Implementation',
            'Full Stack Cloud Solutions',
            'Agile Development & DevOps Practices'
        ],
        image: '/assets/certificate.png',
        link: null,
        type: 'Internship'
    }
];

const ExperienceCard = ({ item, index }: { item: any; index: number }) => {
    const { openLightbox } = useLightbox();
    const isEven = index % 2 === 0;

    return (
        <motion.div
            className={`experience-row ${isEven ? 'row-normal' : 'row-reverse'} glass`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            {/* Media Section */}
            <div className="experience-media">
                <div className="media-container" onClick={() => openLightbox(item.image)}>
                    <img
                        src={item.image}
                        alt={item.title}
                        className="experience-img"
                    />
                    <div className="media-overlay">
                        <span>ZOOM_IMAGE</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="experience-info">
                <div className="info-header">
                    <span className="experience-type">
                        <Award size={14} style={{ display: 'inline', marginRight: '5px' }} />
                        [{item.type.toUpperCase()}]
                    </span>
                    <h3 className="experience-title">{item.title}</h3>
                    <h4 className="experience-org">{item.organization}</h4>
                </div>

                <div className="date-badge">
                    <Calendar size={13} />
                    <span>{item.date.toUpperCase().replace(' — ', ' // ')}</span>
                </div>

                <p className="experience-desc">{item.description}</p>

                <div className="features-list">
                    {item.keyTakeaways.map((takeaway: string, i: number) => (
                        <div key={i} className="feature-item">
                            <CheckCircle2 size={15} className="feature-icon" />
                            <span>{takeaway}</span>
                        </div>
                    ))}
                </div>

                {item.badges?.length > 0 && (
                    <div className="experience-badges">
                        {item.badges.map((badge: string, i: number) => (
                            <button
                                key={i}
                                className="badge-thumb"
                                type="button"
                                onClick={() => openLightbox(badge)}
                                aria-label={`Open badge ${i + 1}`}
                            >
                                <img src={badge} alt="Award badge" loading="lazy" />
                            </button>
                        ))}
                    </div>
                )}

                {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="verify-btn">
                        <ExternalLink size={15} /> VERIFY_CREDENTIAL
                    </a>
                )}
            </div>
        </motion.div>
    );
};

const Experience = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.credly.com/assets/utilities/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            try {
                document.body.removeChild(script);
            } catch (e) { console.log(e) }
        }
    }, []);

    return (
        <section id="experience" className="section" style={{ borderBottom: '1px dashed var(--border-color)' }}>
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
                    <span className="section-annotation">[ SEC-05 // CAREER_TIMELINE_&_ACCREDITATIONS ]</span>
                    <h3 className="section-title">Experience & Certifications</h3>

                    <div className="experience-container">
                        {experiences.map((item, index) => (
                            <ExperienceCard key={index} item={item} index={index} />
                        ))}
                    </div>

                    <div className="badges-section glass">
                        <div className="badges-header">
                            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.7rem', color: 'var(--accent-color)', display: 'block', marginBottom: '0.5rem' }}>
                                [ DATABASE_QUERY // CREDLY_VERIFIED ]
                            </span>
                            <h4 className="category-title" style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: '0.5rem' }}>Verified Credentials</h4>
                            <p className="badges-subtitle">Digital badges & certifications awarded by industry partners</p>
                        </div>

                        <div className="badge-grid">
                            {CREDLY_BADGE_IDS.map(id => (
                                <div key={id} className="badge-card">
                                    <div
                                        className="credly-badge"
                                        data-iframe-width="150"
                                        data-iframe-height="270"
                                        data-share-badge-id={id}
                                        data-share-badge-host="https://www.credly.com"
                                    ></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
            <style>{`
                .experience-row {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                    padding: 2.2rem;
                    margin-bottom: 3.5rem;
                    border-radius: 4px;
                    background: rgba(255, 255, 255, 0.7);
                    transition: border-color 0.3s;
                }
                
                .experience-row:hover {
                    border-color: var(--accent-color);
                }

                @media (min-width: 992px) {
                    .experience-row {
                        flex-direction: row;
                        align-items: center;
                        gap: 3.5rem;
                        padding: 3rem;
                    }
                    .row-reverse {
                        flex-direction: row-reverse;
                    }
                    .experience-media {
                        flex: 0 0 45%;
                    }
                    .experience-info {
                        flex: 1;
                    }
                }

                .media-container {
                    position: relative;
                    border-radius: 2px;
                    overflow: hidden;
                    box-shadow: 4px 4px 15px rgba(15, 45, 89, 0.08);
                    cursor: pointer;
                    aspect-ratio: 16/10;
                    border: 1px solid var(--border-color);
                    background: #fdfbf7;
                }

                .experience-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }

                .media-container:hover .experience-img {
                    transform: scale(1.03);
                }
                
                .media-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(15, 45, 89, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s;
                }
                .media-container:hover .media-overlay {
                    opacity: 1;
                }
                .media-overlay span {
                    color: var(--bg-color);
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 0.75rem;
                    font-weight: bold;
                    background: var(--text-primary);
                    padding: 0.5rem 1rem;
                    border-radius: 4px;
                    box-shadow: 2px 2px 5px rgba(15, 45, 89, 0.2);
                }

                .experience-type {
                    color: var(--accent-color);
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.05em;
                    display: flex;
                    align-items: center;
                    margin-bottom: 0.5rem;
                }

                .experience-title {
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 1.6rem;
                    margin: 0;
                    color: var(--text-primary);
                    line-height: 1.25;
                    font-weight: 700;
                }
                
                .experience-org {
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 1.15rem;
                    color: var(--text-secondary);
                    margin: 0.25rem 0 1rem;
                    font-weight: 600;
                }

                .date-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: transparent;
                    padding: 0.3rem 0.75rem;
                    border-radius: 4px;
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: var(--text-secondary);
                    margin-bottom: 1.5rem;
                    border: 1.5px solid var(--border-color);
                }

                .experience-desc {
                    color: var(--text-secondary);
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                    font-size: 0.95rem;
                }

                .features-list {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 0.75rem;
                    margin-bottom: 2rem;
                }
                
                .experience-badges {
                    display: flex;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                    margin-bottom: 1.75rem;
                }

                .badge-thumb {
                    border: 1px solid var(--border-color);
                    border-radius: 4px;
                    background: rgba(255, 255, 255, 0.8);
                    padding: 4px;
                    cursor: pointer;
                    transition: transform 0.2s, border-color 0.2s;
                    position: relative;
                    overflow: hidden;
                }

                .badge-thumb img {
                    width: 72px;
                    height: 72px;
                    object-fit: cover;
                    border-radius: 2px;
                    display: block;
                }

                .badge-thumb:hover {
                    transform: translateY(-2px);
                    border-color: var(--accent-color);
                }

                /* Holographic scanner effect line */
                .badge-thumb::before {
                  content: '';
                  position: absolute;
                  top: -100%;
                  left: 0;
                  right: 0;
                  height: 3px;
                  background: var(--accent-color);
                  box-shadow: 0 0 6px var(--accent-color);
                  opacity: 0;
                  transition: opacity 0.2s;
                  pointer-events: none;
                  z-index: 5;
                }
                
                .badge-thumb:hover::before {
                  opacity: 1;
                  animation: holographic-scan 1.8s linear infinite;
                }

                @keyframes holographic-scan {
                  0% { top: -5%; }
                  50% { top: 105%; }
                  100% { top: -5%; }
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

                .verify-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--bg-color);
                    background: var(--text-primary);
                    padding: 0.6rem 1.2rem;
                    border-radius: 4px;
                    border: 1px solid var(--text-primary);
                    text-decoration: none;
                    font-family: 'IBM Plex Mono', monospace;
                    font-weight: 700;
                    font-size: 0.8rem;
                    transition: all 0.2s;
                    box-shadow: 2px 2px 0px rgba(15, 45, 89, 0.15);
                }
                .verify-btn:hover {
                    transform: translate(-1px, -1px);
                    box-shadow: 3px 3px 0px rgba(15, 45, 89, 0.2);
                }

                .badges-section {
                    margin-top: 4.5rem;
                    padding: 3rem 2rem;
                    text-align: center;
                    border-radius: 4px;
                    background: rgba(255, 255, 255, 0.7);
                    border: 1px solid var(--border-color);
                }
                
                .badges-header {
                    margin-bottom: 2.5rem;
                }
                
                .badges-subtitle {
                    color: var(--text-secondary);
                    font-size: 0.95rem;
                    margin-top: 0.4rem;
                }

                .badge-grid {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1.5rem;
                    justify-content: center;
                }
                .badge-card {
                    background: rgba(255, 255, 255, 0.8);
                    border-radius: 4px;
                    padding: 10px;
                    border: 1px solid var(--border-color);
                    transition: all 0.2s;
                    box-shadow: 2px 2px 0px rgba(15, 45, 89, 0.05);
                    position: relative;
                    overflow: hidden;
                }
                .badge-card:hover {
                    transform: translateY(-3px);
                    border-color: var(--accent-color);
                    box-shadow: 4px 4px 8px rgba(15, 45, 89, 0.08);
                }
            `}</style>
        </section>
    );
};

export default Experience;
