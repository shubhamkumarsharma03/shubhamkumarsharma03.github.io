const Footer = () => {
    return (
        <footer style={{ padding: '2rem 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center', color: 'var(--text-secondary)' }}>
            <div className="container">
                <p>© {new Date().getFullYear()} Shubham Kumar Sharma</p>
            </div>
        </footer>
    );
};

export default Footer;
