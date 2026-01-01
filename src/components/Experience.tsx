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
        type: 'Certification'
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
                        <span>Click to Zoom</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="experience-info">
                <div className="info-header">
                    <span className="experience-type">
                        <Award size={14} style={{ display: 'inline', marginRight: '4px' }} />
                        {item.type}
                    </span>
                    <h3 className="experience-title">{item.title}</h3>
                    <h4 className="experience-org">{item.organization}</h4>
                </div>

                <div className="date-badge">
                    <Calendar size={14} />
                    <span>{item.date}</span>
                </div>

                <p className="experience-desc">{item.description}</p>

                <div className="features-list">
                    {item.keyTakeaways.map((takeaway: string, i: number) => (
                        <div key={i} className="feature-item">
                            <CheckCircle2 size={16} className="feature-icon" />
                            <span>{takeaway}</span>
                        </div>
                    ))}
                </div>

                {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="verify-btn">
                        <ExternalLink size={16} /> Verify Certificate
                    </a>
                )}
            </div>
        </motion.div>
    );
};

const Experience = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//cdn.credly.com/assets/utilities/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            try {
                document.body.removeChild(script);
            } catch (e) { console.log(e) }
        }
    }, []);

    return (
        <section id="experience" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="section-title">Experience & Certifications</h3>

                    <div className="experience-container">
                        {experiences.map((item, index) => (
                            <ExperienceCard key={index} item={item} index={index} />
                        ))}
                    </div>

                    <div className="badges-section glass">
                        <div className="badges-header">
                            <h4 className="category-title">Verified Credentials</h4>
                            <p className="badges-subtitle">Digital badges & certifications awarded by industry leaders</p>
                        </div>

                        <div className="badge-grid">
                            {CREDLY_BADGE_IDS.map(id => (
                                <div key={id} className="badge-card">
                                    <div
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
                    padding: 2rem;
                    margin-bottom: 3rem;
                    border-radius: 20px;
                    border: 1px solid var(--glass-border);
                    background: rgba(255, 255, 255, 0.03);
                    transition: transform 0.3s, border-color 0.3s;
                }
                
                .experience-row:hover {
                    border-color: rgba(124, 58, 237, 0.3);
                    background: rgba(255, 255, 255, 0.05);
                }

                @media (min-width: 992px) {
                    .experience-row {
                        flex-direction: row;
                        align-items: center;
                        gap: 3rem;
                        padding: 2.5rem;
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
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                    cursor: pointer;
                    aspect-ratio: 16/10;
                    border: 1px solid rgba(255,255,255,0.05);
                }

                .experience-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }

                .media-container:hover .experience-img {
                    transform: scale(1.05);
                }
                
                .media-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0,0,0,0.4);
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
                    color: white;
                    font-weight: 600;
                    background: rgba(0,0,0,0.6);
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                }

                .experience-type {
                    color: var(--accent-color);
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    display: flex;
                    align-items: center;
                    margin-bottom: 0.5rem;
                }

                .experience-title {
                    font-size: 1.75rem;
                    margin: 0;
                    color: white;
                    line-height: 1.2;
                }
                
                .experience-org {
                    font-size: 1.1rem;
                    color: var(--text-primary);
                    margin: 0.25rem 0 1rem;
                    font-weight: 500;
                    opacity: 0.9;
                }

                .date-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: rgba(255,255,255,0.05);
                    padding: 0.3rem 0.8rem;
                    border-radius: 8px;
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                    margin-bottom: 1.5rem;
                    border: 1px solid rgba(255,255,255,0.1);
                }

                .experience-desc {
                    color: var(--text-secondary);
                    line-height: 1.7;
                    margin-bottom: 1.5rem;
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

                .verify-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: white;
                    background: var(--accent-color);
                    padding: 0.6rem 1.2rem;
                    border-radius: 30px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 0.9rem;
                    transition: all 0.2s;
                    box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
                }
                .verify-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(124, 58, 237, 0.5);
                }

                .badges-section {
                    margin-top: 4rem;
                    padding: 2rem 1.5rem;
                    text-align: center;
                    border-radius: 20px;
                }
                
                .badges-header {
                    margin-bottom: 2rem;
                }

                .category-title {
                    font-size: 1.75rem;
                    margin-bottom: 0.5rem;
                    color: white;
                }
                
                .badges-subtitle {
                    color: var(--text-secondary);
                    font-size: 1rem;
                }

                .badge-grid {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1.5rem;
                    justify-content: center;
                }
                .badge-card {
                    background: rgba(255,255,255,0.02);
                    border-radius: 12px;
                    padding: 8px;
                    border: 1px solid transparent;
                    transition: all 0.3s ease;
                }
                .badge-card:hover {
                    transform: translateY(-4px);
                    background: rgba(255,255,255,0.05);
                    border-color: rgba(255,255,255,0.1);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                }
            `}</style>
        </section>
    );
};

export default Experience;
