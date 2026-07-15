import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
    return (
        <section id="testimonials" className="section" style={{ borderBottom: '1px dashed var(--border-color)' }}>
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
                    <span className="section-annotation">[ SEC-05a // QUALITY_ASSURANCE_LOG ]</span>
                    <h3 className="section-title" style={{ marginBottom: '1rem' }}>Reviewer Feedback</h3>
                    <p className="section-subtitle">Direct words from Udacity's project reviewer for my Intelligent Document Querying System</p>

                    <div className="testimonial-card glass">
                        <div className="quote-icon">
                            <Quote size={28} />
                        </div>

                        <div className="testimonial-header">
                            <span className="source-badge">[ UDACITY_NANODEGREE // GENAI_RAG_PIPELINE ]</span>
                            <h4 className="testimonial-title">Flawless Victory</h4>
                        </div>

                        <div className="testimonial-content">
                            <p>
                                "Superb job on the first submission! 🍾 The fact that you have submitted a flawless piece of work is in itself commendable, but to have done it on the first attempt is quite exceptional. You seem to have an instinctive sense of what is essential here. You've mastered the material quickly and applied it perfectly, so I think you'll have an easy (or at least easier) job in the future. Just keep doing what you're doing."
                            </p>
                            <p className="highlight">
                                "How did they say it in Mortal Kombat? FLAWLESS VICTORY!"
                            </p>
                            <p>
                                "The clarity and accuracy in your explanation are truly outstanding, well done! 🏆 It was great to review such a nice project; thank you! ⭐️ We can't wait to see your future projects! Never stop learning and stay Udacious."
                            </p>
                        </div>

                        <div className="testimonial-author">
                            <div className="author-info">
                                <h5>Udacity Project Reviewer</h5>
                                <span className="author-title">Intelligent Document Querying System</span>
                            </div>
                            <div className="rating">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={15} fill="var(--accent-color)" color="var(--accent-color)" />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style>{`
                .section-subtitle {
                    text-align: center;
                    color: var(--text-secondary);
                    margin-bottom: 3rem;
                    font-size: 1.05rem;
                }

                .testimonial-card {
                    position: relative;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 3rem 2.5rem 2.5rem;
                    border-radius: 4px;
                    background: rgba(255, 255, 255, 0.7);
                    border: 1px solid var(--border-color);
                }

                .quote-icon {
                    position: absolute;
                    top: -20px;
                    left: 2rem;
                    background: var(--text-primary);
                    padding: 8px;
                    border-radius: 4px;
                    color: var(--bg-color);
                    border: 1px solid var(--border-color);
                    box-shadow: 2px 2px 0px rgba(15, 45, 89, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .source-badge {
                    color: var(--accent-color);
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.05em;
                }

                .testimonial-title {
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 1.8rem;
                    margin: 0.5rem 0 1.5rem;
                    color: var(--text-primary);
                    font-weight: 700;
                }

                .testimonial-content {
                    font-size: 1.05rem;
                    color: var(--text-secondary);
                    line-height: 1.7;
                }

                .testimonial-content p {
                    margin-bottom: 1.25rem;
                }

                .highlight {
                    font-weight: 700;
                    color: var(--text-primary);
                    font-size: 1.15rem;
                    font-style: italic;
                    background: rgba(37, 99, 235, 0.05);
                    padding: 0.5rem 1rem;
                    border-left: 3px solid var(--accent-color);
                }

                .testimonial-author {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 2rem;
                    padding-top: 1.5rem;
                    border-top: 1px dashed var(--border-color);
                }

                .author-info h5 {
                    margin: 0;
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 1.1rem;
                    color: var(--text-primary);
                    font-weight: 700;
                }

                .author-title {
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 0.75rem;
                    color: var(--text-secondary);
                    font-weight: 600;
                    margin-top: 0.1rem;
                    display: block;
                }

                .rating {
                    display: flex;
                    gap: 4px;
                }

                @media (max-width: 768px) {
                    .testimonial-card {
                        padding: 2.5rem 1.5rem 1.5rem;
                    }
                    .testimonial-title {
                        font-size: 1.5rem;
                    }
                    .testimonial-author {
                        flex-direction: column;
                        gap: 1.25rem;
                        text-align: center;
                        align-items: center;
                    }
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
