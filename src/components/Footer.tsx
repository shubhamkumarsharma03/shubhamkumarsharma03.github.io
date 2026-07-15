const Footer = () => {
    return (
        <footer style={{ 
            padding: '3rem 0', 
            borderTop: '1px dashed var(--border-color)', 
            textAlign: 'center', 
            color: 'var(--text-secondary)',
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '0.75rem',
            letterSpacing: '0.05em'
        }}>
            <div className="container">
                <p>© {new Date().getFullYear()} SHUBHAM KUMAR SHARMA // [ENG_DIR_PROD_STATUS: ACTIVE]</p>
            </div>
        </footer>
    );
};

export default Footer;
