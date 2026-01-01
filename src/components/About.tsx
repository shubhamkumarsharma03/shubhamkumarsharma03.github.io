import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section bg-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="section-title">About Me</h3>

          <div className="bento-grid">
            {/* Main About Card */}
            <div className="bento-card main-card glass">
              <span className="card-label">MORE ABOUT ME</span>
              <h4 className="card-title">My Journey</h4>
              <p>
                I'm a passionate Full Stack Developer focused on building real-world, scalable solutions using modern technologies.
                Currently pursuing my B.Tech in Information Technology, I combine academic knowledge with hands-on experience to create impactful digital products.
              </p>
              <p style={{ marginTop: '1rem' }}>
                My technical journey spans full-stack development, cloud computing, and artificial intelligence.
                I specialize in building end-to-end applications—from designing intuitive user interfaces with React to architecting robust backends.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="bento-card stat-card glass">
              <div className="stat-number gradient-text">6</div>
              <div className="stat-label">MONTHS<br />EXPERIENCE</div>
            </div>

            <div className="bento-card stat-card glass">
              <div className="stat-number gradient-text">5+</div>
              <div className="stat-label">PROJECTS<br />COMPLETED</div>
            </div>

            <div className="bento-card stat-card glass">
              <div className="stat-number gradient-text">10+</div>
              <div className="stat-label">TECHNOLOGIES<br />MASTERED</div>
            </div>


          </div>
        </motion.div>
      </div>
      <style>{`
        .section-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 2rem;
          position: relative;
          display: inline-block;
        }
        .section-title::after {
          content: '';
          position: absolute;
          width: 50%;
          height: 4px;
          bottom: -10px;
          left: 0;
          background: var(--accent-color);
          border-radius: 2px;
        }
        
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 20px;
        }
        
        @media (min-width: 768px) {
          .bento-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: auto auto;
          }
          .main-card {
            grid-column: span 2;
            grid-row: span 2;
          }
        }

        .bento-card {
          padding: 2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .bento-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          border-color: var(--accent-color);
        }

        .card-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-color);
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
          display: block;
        }

        .card-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        .stat-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 600;
        }
      `}</style>
    </section>
  );
};

export default About;
