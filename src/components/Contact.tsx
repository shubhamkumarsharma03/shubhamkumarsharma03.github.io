import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Code } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="glass"
                    style={{ padding: '3rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
                >
                    <h3 className="section-title" style={{ marginBottom: '1rem' }}>Get In Touch</h3>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                        Looking for collaboration, internship opportunities, or just want to connect? Reach out!
                    </p>

                    <div className="contact-links" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        <a href="mailto:shubhamsharma86900@gmail.com" className="contact-item">
                            <div className="icon-box"><Mail size={24} /></div>
                            <span>Email</span>
                        </a>
                        <a href="https://www.linkedin.com/in/shubhamkumarsharma03/" target="_blank" rel="noopener noreferrer" className="contact-item">
                            <div className="icon-box"><Linkedin size={24} /></div>
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://github.com/shubhamkumarsharma03/" target="_blank" rel="noopener noreferrer" className="contact-item">
                            <div className="icon-box"><Github size={24} /></div>
                            <span>GitHub</span>
                        </a>
                        <a href="https://leetcode.com/u/shubhamkumarsharma/" target="_blank" rel="noopener noreferrer" className="contact-item">
                            <div className="icon-box"><Code size={24} /></div>
                            <span>LeetCode</span>
                        </a>
                    </div>
                </motion.div>
            </div>
            <style>{`
                .contact-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--text-primary);
                    transition: transform 0.2s, color 0.2s;
                }
                .contact-item:hover {
                    transform: translateY(-5px);
                    color: var(--accent-color);
                }
                .icon-box {
                    width: 60px;
                    height: 60px;
                    background: rgba(255,255,255,0.05);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid var(--glass-border);
                    transition: all 0.3s;
                }
                .contact-item:hover .icon-box {
                    background: var(--accent-color);
                    border-color: var(--accent-color);
                    box-shadow: 0 0 20px var(--accent-glow);
                }
            `}</style>
        </section>
    );
};

export default Contact;
