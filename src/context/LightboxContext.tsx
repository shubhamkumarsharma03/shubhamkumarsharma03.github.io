import { createContext, useContext, useState, type ReactNode } from 'react';

interface LightboxContextType {
    openLightbox: (imageSrc: string) => void;
    closeLightbox: () => void;
    currentImage: string | null;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export const LightboxProvider = ({ children }: { children: ReactNode }) => {
    const [currentImage, setCurrentImage] = useState<string | null>(null);

    const openLightbox = (imageSrc: string) => setCurrentImage(imageSrc);
    const closeLightbox = () => setCurrentImage(null);

    return (
        <LightboxContext.Provider value={{ openLightbox, closeLightbox, currentImage }}>
            {children}
        </LightboxContext.Provider>
    );
};

export const useLightbox = () => {
    const context = useContext(LightboxContext);
    if (!context) {
        throw new Error('useLightbox must be used within a LightboxProvider');
    }
    return context;
};
