import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
    return (
        <section id="testimonials" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="section-title">Reviewer Feedback</h3>
                    <p className="section-subtitle">Direct words from Udacity's project reviewer for my Intelligent Document Querying System</p>

                    <div className="testimonial-card glass">
                        <div className="quote-icon">
                            <Quote size={40} />
                        </div>

                        <div className="testimonial-header">
                            <span className="source-badge">UDACITY NANODEGREE • AI</span>
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
                                <span>Intelligent Document Querying System</span>
                            </div>
                            <div className="rating">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="var(--accent-color)" color="var(--accent-color)" />
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
                    font-size: 1.1rem;
                }

                .testimonial-card {
                    position: relative;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 2.5rem;
                    border-radius: 20px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid var(--glass-border);
                }

                .quote-icon {
                    position: absolute;
                    top: -20px;
                    left: 2rem;
                    background: var(--bg-color);
                    padding: 10px;
                    border-radius: 50%;
                    color: var(--accent-color);
                    border: 1px solid var(--glass-border);
                }

                .source-badge {
                    color: var(--accent-color);
                    font-size: 0.8rem;
                    font-weight: 700;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }

                .testimonial-title {
                    font-size: 2rem;
                    margin: 0.5rem 0 2rem;
                    color: white;
                    font-weight: 700;
                }

                .testimonial-content {
                    font-size: 1.1rem;
                    color: var(--text-primary);
                    line-height: 1.8;
                }

                .testimonial-content p {
                    margin-bottom: 1.5rem;
                }

                .highlight {
                    font-weight: 600;
                    color: var(--accent-color);
                    font-size: 1.2rem;
                    font-style: italic;
                }

                .testimonial-author {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 2rem;
                    padding-top: 2rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }

                .author-info h5 {
                    margin: 0;
                    font-size: 1.1rem;
                    color: white;
                }

                .author-info span {
                    font-size: 0.9rem;
                    color: var(--text-secondary);
                }

                .rating {
                    display: flex;
                    gap: 4px;
                }

                @media (max-width: 768px) {
                    .testimonial-card {
                        padding: 2rem;
                    }
                    .testimonial-title {
                        font-size: 1.5rem;
                    }
                    .testimonial-author {
                        flex-direction: column;
                        gap: 1rem;
                        text-align: center;
                    }
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
