import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Experience', to: 'experience' },
        { name: 'Contact', to: 'contact' },
    ];

    const variants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            variants={variants}
            className={`navbar-container ${scrolled ? 'scrolled' : 'transparent'} no-print`}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <Link
                        to="hero"
                        smooth={true}
                        duration={300}
                        className="brand-logo"
                        style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '1.5rem', display: 'flex', alignItems: 'center' }}
                    >
                        <img src="/assets/logo.png" alt="Logo" style={{ height: '40px' }} />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="desktop-menu" id="desktop-menu">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={300}
                            className="nav-link"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="/assets/Shubham_resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                        style={{
                            padding: '0.5rem 1rem',
                            border: '1px solid var(--text-primary)',
                            borderRadius: '4px',
                            color: 'var(--text-primary)',
                            fontFamily: 'IBM Plex Mono, monospace',
                            fontWeight: 'bold',
                            fontSize: '0.85rem',
                            cursor: 'pointer'
                        }}
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="mobile-menu-container"
                    >
                        <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={300}
                                    onClick={() => setIsOpen(false)}
                                    className="mobile-nav-link"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="/assets/Shubham_resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mobile-nav-link"
                                style={{
                                    color: 'var(--accent-color)',
                                    fontWeight: 'bold',
                                    borderBottom: 'none'
                                }}
                            >
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
