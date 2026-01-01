import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLightbox } from '../context/LightboxContext';
import { useEffect } from 'react';

const Lightbox = () => {
    const { currentImage, closeLightbox } = useLightbox();

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [closeLightbox]);

    return (
        <AnimatePresence>
            {currentImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="lightbox-overlay"
                    onClick={closeLightbox}
                >
                    <motion.div
                        className="lightbox-content glass"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()} // Prevent close on image click
                    >
                        <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
                            <X size={32} />
                        </button>
                        <img src={currentImage} alt="Fullscreen view" className="lightbox-img" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Lightbox;
