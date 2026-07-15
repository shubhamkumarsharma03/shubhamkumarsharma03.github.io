import { motion } from 'framer-motion';

const About = () => {
  // Static calibrated skill metrics matching project & certification averages
  const levels = {
    frontend: 0.80, // Average: React 74%, TS 70%, HTML 90%, CSS 85%
    backend: 0.62,  // Average: Node 70%, Spring Boot 40%, Python 75%
    cloud: 0.58,    // Average: AWS 45%, IBM Cloud 40%, Terraform 40%, Git 78%, GitHub 86%
    logic: 0.70,    // General average for computational logic
    aiml: 0.72,     // Average: Bedrock 78%, PartyRock 95%, SageMaker 67%, Rekognition 47%
  };

  // Center: 100, 105. Radius: 70
  const r = 70;
  const cx = 100;
  const cy = 105;

  // Vertex math
  const getX = (val: number, angleDegrees: number) => {
    const angleRadians = (angleDegrees - 90) * (Math.PI / 180);
    return cx + r * val * Math.cos(angleRadians);
  };
  const getY = (val: number, angleDegrees: number) => {
    const angleRadians = (angleDegrees - 90) * (Math.PI / 180);
    return cy + r * val * Math.sin(angleRadians);
  };

  const points = [
    `${getX(levels.frontend, 0)},${getY(levels.frontend, 0)}`,
    `${getX(levels.backend, 72)},${getY(levels.backend, 72)}`,
    `${getX(levels.cloud, 144)},${getY(levels.cloud, 144)}`,
    `${getX(levels.logic, 216)},${getY(levels.logic, 216)}`,
    `${getX(levels.aiml, 288)},${getY(levels.aiml, 288)}`,
  ].join(' ');

  return (
    <section id="about" className="section" style={{ borderBottom: '1px dashed var(--border-color)' }}>
      {/* Corner crosshairs for section drafting border */}
      <div style={{ position: 'absolute', bottom: '0', left: '40px', width: '20px', height: '20px', borderBottom: '1px solid var(--border-color)', borderLeft: '1px solid var(--border-color)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '0', right: '40px', width: '20px', height: '20px', borderBottom: '1px solid var(--border-color)', borderRight: '1px solid var(--border-color)', pointerEvents: 'none' }} />
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-annotation">[ SEC-02 // BIOGRAPHICAL_DOSSIER ]</span>
          <h3 className="section-title">About Me</h3>

          <div className="bento-grid">
            {/* Main About Card */}
            <div className="bento-card main-card glass circuit-trace-bg">
              <span className="card-label">[ PARAM: MAIN_JOURNEY // LOG_02 ]</span>
              <h4 className="card-title" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>My Journey</h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                I’m a developer focused on building practical products with cloud and AI. I’m pursuing a B.Tech in Information Technology and recently completed the Udacity x AWS AI Practitioner Nanodegree, where I built GenAI apps using PartyRock and AWS.
              </p>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
                Currently, I am actively expanding my capabilities in backend engineering and cloud architecture practices to design and deploy robust, scalable server-side systems.
              </p>
              
              <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', borderTop: '1px dashed var(--border-color)', paddingTop: '1rem', fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.75rem', color: 'var(--text-secondary)', flexWrap: 'wrap' }}>
                <div>STATUS: FOCUSING_ON_CLOUD_&_BACKEND</div>
                <div>LANG: TS // PY // JAVA</div>
              </div>
            </div>

            {/* Radar Plotted Graph Card */}
            <div className="bento-card radar-card glass circuit-trace-bg">
              <span className="card-label">[ CHART: COMP_RADAR // SKILL_VECTORS ]</span>
              <div className="radar-chart-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                <svg width="200" height="210" style={{ overflow: 'visible' }}>
                  {/* Grid Concentric Rings */}
                  {[0.3, 0.6, 1.0].map((scale, i) => {
                    const scalePts = [
                      `${getX(scale, 0)},${getY(scale, 0)}`,
                      `${getX(scale, 72)},${getY(scale, 72)}`,
                      `${getX(scale, 144)},${getY(scale, 144)}`,
                      `${getX(scale, 216)},${getY(scale, 216)}`,
                      `${getX(scale, 288)},${getY(scale, 288)}`,
                    ].join(' ');
                    return (
                      <polygon
                        key={i}
                        points={scalePts}
                        fill="none"
                        stroke="rgba(15, 45, 89, 0.12)"
                        strokeWidth="1"
                        strokeDasharray={scale === 1.0 ? '0' : '2 2'}
                      />
                    );
                  })}

                  {/* Axis lines */}
                  {[0, 72, 144, 216, 288].map((angle, i) => (
                    <line
                      key={i}
                      x1={cx}
                      y1={cy}
                      x2={getX(1.0, angle)}
                      y2={getY(1.0, angle)}
                      stroke="rgba(15, 45, 89, 0.12)"
                      strokeWidth="1"
                    />
                  ))}

                  {/* Competency fill polygon */}
                  <polygon
                    points={points}
                    fill="rgba(37, 99, 235, 0.15)"
                    stroke="var(--accent-color)"
                    strokeWidth="1.8"
                  />

                  {/* Plotted vertex dots */}
                  {[0, 72, 144, 216, 288].map((angle, i) => {
                    const val = Object.values(levels)[i];
                    return (
                      <circle
                        key={i}
                        cx={getX(val, angle)}
                        cy={getY(val, angle)}
                        r="3.5"
                        fill="var(--text-primary)"
                        stroke="var(--bg-color)"
                        strokeWidth="1"
                      />
                    );
                  })}

                  {/* Vertex Labels with static calibrated percentage indicators */}
                  <text x={getX(1.18, 0)} y={getY(1.18, 0) + 2} textAnchor="middle" fontSize="8" fontFamily="IBM Plex Mono" fill="var(--text-primary)" fontWeight="bold">
                    FE [{(levels.frontend * 100).toFixed(0)}%]
                  </text>
                  <text x={getX(1.18, 72)} y={getY(1.18, 72) + 2} textAnchor="start" fontSize="8" fontFamily="IBM Plex Mono" fill="var(--text-primary)" fontWeight="bold">
                    BE [{(levels.backend * 100).toFixed(0)}%]
                  </text>
                  <text x={getX(1.18, 144)} y={getY(1.18, 144) + 6} textAnchor="start" fontSize="8" fontFamily="IBM Plex Mono" fill="var(--text-primary)" fontWeight="bold">
                    CLOUD [{(levels.cloud * 100).toFixed(0)}%]
                  </text>
                  <text x={getX(1.18, 216)} y={getY(1.18, 216) + 6} textAnchor="end" fontSize="8" fontFamily="IBM Plex Mono" fill="var(--text-primary)" fontWeight="bold">
                    ALGO [{(levels.logic * 100).toFixed(0)}%]
                  </text>
                  <text x={getX(1.18, 288)} y={getY(1.18, 288) + 2} textAnchor="end" fontSize="8" fontFamily="IBM Plex Mono" fill="var(--text-primary)" fontWeight="bold">
                    AI/ML [{(levels.aiml * 100).toFixed(0)}%]
                  </text>
                </svg>
              </div>
            </div>

            {/* Stats Cards Row */}
            <div className="bento-card stat-card glass">
              <span className="card-label">[ STAT_01 // ACTIVE_TIME ]</span>
              <div className="stat-number">1.5</div>
              <div className="stat-label">YEARS<br />EXPERIENCE</div>
            </div>

            <div className="bento-card stat-card glass">
              <span className="card-label">[ STAT_02 // SYSTEM_BUILD ]</span>
              <div className="stat-number">5</div>
              <div className="stat-label">PROJECTS<br />COMPLETED</div>
            </div>

            <div className="bento-card stat-card glass">
              <span className="card-label">[ STAT_03 // CORE_STACK ]</span>
              <div className="stat-number">10+</div>
              <div className="stat-label">TECHNOLOGIES<br />MASTERED</div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 24px;
        }
        
        @media (min-width: 992px) {
          .bento-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: auto auto auto;
          }
          .main-card {
            grid-column: span 2;
            grid-row: span 2;
          }
          .radar-card {
            grid-column: span 1;
            grid-row: span 2;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
        }

        .bento-card {
          padding: 2.2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .main-card {
          justify-content: flex-start;
        }
        
        .bento-card:hover {
          transform: translateY(-4px);
          box-shadow: 4px 4px 12px rgba(15, 45, 89, 0.08);
          border-color: var(--accent-color);
        }

        .card-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--accent-color);
          letter-spacing: 0.05em;
          margin-bottom: 0.75rem;
          display: block;
        }

        .card-title {
          font-size: 1.6rem;
          margin-bottom: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stat-number {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }
        .stat-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-weight: bold;
          line-height: 1.3;
        }
      `}</style>
    </section>
  );
};

export default About;
