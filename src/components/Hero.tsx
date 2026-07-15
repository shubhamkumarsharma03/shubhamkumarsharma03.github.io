import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { ChevronRight, ArrowDown } from 'lucide-react';

const Typewriter = ({ text }: { text: string[]; delay: number }) => {
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % text.length;
            const fullText = text[i];

            setCurrentText(isDeleting ? fullText.substring(0, currentText.length - 1) : fullText.substring(0, currentText.length + 1));

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && currentText === fullText) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, loopNum, text, typingSpeed]);

    return <span>{currentText}<span className="cursor">|</span></span>;
};

const Hero = () => {
    return (
        <section id="hero" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '120px 0 60px' }}>
            {/* Top corner drawing crosshairs to frame the section */}
            <div style={{ position: 'absolute', top: '40px', left: '40px', width: '20px', height: '20px', borderTop: '1px solid var(--border-color)', borderLeft: '1px solid var(--border-color)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: '40px', right: '40px', width: '20px', height: '20px', borderTop: '1px solid var(--border-color)', borderRight: '1px solid var(--border-color)', pointerEvents: 'none' }} />
            
            <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                <div style={{ maxWidth: '800px' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: '800', marginBottom: '1rem', lineHeight: '1.1', fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)' }}>
                            Hi, I'm <span className="gradient-text">Shubham</span>
                        </h1>
                        <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)', color: 'var(--text-secondary)', marginBottom: '1.5rem', height: '3rem', fontFamily: 'Space Grotesk, sans-serif' }}>
                            I am a <span style={{ color: 'var(--accent-color)' }}>
                                <Typewriter text={['Full Stack Developer', 'AWS AI & ML Scholar', 'Problem Solver']} delay={150} />
                            </span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '650px', lineHeight: '1.6' }}
                    >
                        Specializing in building scalable applications with cloud architecture and AI/ML, collaborating with innovative teams and leading-edge technologies.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                    >
                        <Link to="projects" smooth={true} duration={500}>
                            <button
                                style={{
                                    padding: '0.85rem 1.8rem',
                                    backgroundColor: 'var(--text-primary)',
                                    color: 'var(--bg-color)',
                                    border: '1.5px solid var(--text-primary)',
                                    borderRadius: '4px',
                                    fontSize: '0.95rem',
                                    fontWeight: 'bold',
                                    fontFamily: 'IBM Plex Mono, monospace',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    transition: 'all 0.2s',
                                    boxShadow: '3px 3px 0px rgba(15, 45, 89, 0.15)'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translate(-2px, -2px)';
                                    e.currentTarget.style.boxShadow = '5px 5px 0px rgba(15, 45, 89, 0.2)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translate(0, 0)';
                                    e.currentTarget.style.boxShadow = '3px 3px 0px rgba(15, 45, 89, 0.15)';
                                }}
                            >
                                PROCEED_TO_PROJECTS <ChevronRight size={18} />
                            </button>
                        </Link>
                        <Link to="contact" smooth={true} duration={500}>
                            <button
                                style={{
                                    padding: '0.85rem 1.8rem',
                                    backgroundColor: 'transparent',
                                    color: 'var(--text-primary)',
                                    border: '1.5px solid var(--text-primary)',
                                    borderRadius: '4px',
                                    fontSize: '0.95rem',
                                    fontWeight: 'bold',
                                    fontFamily: 'IBM Plex Mono, monospace',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    boxShadow: '3px 3px 0px rgba(15, 45, 89, 0.08)'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.backgroundColor = 'var(--text-primary)';
                                    e.currentTarget.style.color = 'var(--bg-color)';
                                    e.currentTarget.style.transform = 'translate(-2px, -2px)';
                                    e.currentTarget.style.boxShadow = '5px 5px 0px rgba(15, 45, 89, 0.15)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = 'var(--text-primary)';
                                    e.currentTarget.style.transform = 'translate(0, 0)';
                                    e.currentTarget.style.boxShadow = '3px 3px 0px rgba(15, 45, 89, 0.08)';
                                }}
                            >
                                ESTABLISH_CONTACT
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}
            >
                <ArrowDown className="animate-bounce" size={24} style={{ color: 'var(--text-secondary)' }} />
            </motion.div>
            
            <style>{`
                .cursor { animation: blink 1s infinite; }
                @keyframes blink { 50% { opacity: 0; } }
                .animate-bounce { animation: bounce 2s infinite; }
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {transform: translateY(0) translateX(-50%);}
                    40% {transform: translateY(-10px) translateX(-50%);}
                    60% {transform: translateY(-5px) translateX(-50%);}
                }
            `}</style>
        </section>
    );
};

export default Hero;
