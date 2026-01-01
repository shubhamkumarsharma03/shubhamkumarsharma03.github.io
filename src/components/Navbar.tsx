import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'
                }`}
            style={{
                width: '100%',
                backgroundColor: scrolled ? 'var(--card-bg)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
                padding: scrolled ? '1rem 0' : '1.5rem 0',
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link
                    to="hero"
                    smooth={true}
                    duration={300}
                    className="brand-logo"
                    style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '1.5rem' }}
                >
                    <img src="/assets/logo.png" alt="Logo" style={{ height: '40px' }} />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8" style={{ display: 'flex', gap: '2rem' }} id="desktop-menu">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={300}
                            className="nav-link"
                            style={{ cursor: 'pointer', fontWeight: '500' }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="/assets/Shubham_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                        style={{
                            padding: '0.5rem 1rem',
                            border: '1px solid var(--accent-color)',
                            borderRadius: '8px',
                            color: 'var(--accent-color)',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'none' }} // Hidden by default, shown via media query in css if I had tailwind, but doing inline style for logic
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass"
                        style={{
                            overflow: 'hidden',
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            width: '100%',
                            flexDirection: 'column',
                            padding: '1rem',
                            gap: '1rem',
                            // display: 'flex' set in styles or dynamically
                        }}
                    >
                        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={300}
                                    onClick={() => setIsOpen(false)}
                                    style={{ cursor: 'pointer', fontSize: '1.1rem', padding: '0.5rem 0' }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="/assets/Shubham_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: 'var(--accent-color)',
                                    fontWeight: 'bold',
                                    padding: '0.5rem 0'
                                }}
                            >
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <style>{`
        @media (max-width: 768px) {
            #desktop-menu { display: none !important; }
            button[aria-label="Toggle menu"] { display: block !important; }
        }
      `}</style>
        </motion.nav>
    );
};

export default Navbar;
