import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { ChevronRight, ArrowDown } from 'lucide-react';

import CanvasBackground from './CanvasBackground';

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
        <section id="hero" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '0', position: 'relative', overflow: 'hidden' }}>
            <CanvasBackground />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '800px' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', marginBottom: '1rem', lineHeight: '1.2' }}>
                            Hi, I'm <span className="gradient-text">Shubham</span>
                        </h1>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'var(--text-secondary)', marginBottom: '1.5rem', height: '3rem' }}>
                            I am a <span style={{ color: 'var(--accent-color)' }}>
                                <Typewriter text={['Full Stack Developer', 'AWS AI & ML Scholar', 'Problem Solver']} delay={150} />
                            </span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px' }}
                    >
                        Specializing in building scalable applications with cloud architecture and AI/ML, collaborating with innovative teams and leading-edge technologies.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        style={{ display: 'flex', gap: '1rem' }}
                    >
                        <Link to="projects" smooth={true} duration={500}>
                            <button
                                style={{
                                    padding: '1rem 2rem',
                                    backgroundColor: 'var(--accent-color)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '50px',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    transition: 'transform 0.2s',
                                    boxShadow: '0 4px 15px var(--accent-glow)'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                View Projects <ChevronRight size={20} />
                            </button>
                        </Link>
                        <Link to="contact" smooth={true} duration={500}>
                            <button
                                style={{
                                    padding: '1rem 2rem',
                                    backgroundColor: 'transparent',
                                    color: 'white',
                                    border: '1px solid white',
                                    borderRadius: '50px',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.backgroundColor = 'white';
                                    e.currentTarget.style.color = 'var(--bg-color)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = 'white';
                                }}
                            >
                                Contact Me
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{ position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}
            >
                <ArrowDown className="animate-bounce" size={24} style={{ color: 'var(--text-secondary)' }} />
            </motion.div>
            <style>{`
          .cursor { animation: blink 1s infinite; }
          @keyframes blink { 50% { opacity: 0; } }
          .animate-bounce { animation: bounce 2s infinite; }
            @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
            40% {transform: translateY(-10px);}
            60% {transform: translateY(-5px);}
            }
      `}</style>
        </section>
    );
};

export default Hero;
