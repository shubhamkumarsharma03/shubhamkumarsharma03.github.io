import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HistoryItem {
  input: string;
  output: string | React.ReactNode;
}

const Contact = () => {
    const [history, setHistory] = useState<HistoryItem[]>([
      {
        input: '',
        output: (
          <div>
            WELCOME TO SHUBHAM SHARMA'S TECHNICAL SHELL (v2.4.1-PROD)
            <br />
            * Active Workspace: shubhamkumarsharma03.github.io
            <br />
            * Host Connection: SECURE // Ping: 12ms // Status: OK
            <br />
            * Type 'help' or '/help' to query available shell commands.
          </div>
        )
      }
    ]);
    const [input, setInput] = useState('');
    const terminalEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
      scrollToBottom();
    }, [history]);

    const handleTerminalClick = () => {
      inputRef.current?.focus();
    };

    const handleCommandSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = input.trim();
        if (!cmd) return;

        let output: string | React.ReactNode = '';
        const cmdLower = cmd.toLowerCase();
        const commandClean = cmdLower.startsWith('/') ? cmdLower.substring(1) : cmdLower;

        switch (commandClean) {
            case 'help':
                output = (
                  <div style={{ paddingLeft: '0.5rem', color: '#93c5fd' }}>
                    AVAILABLE SCHEMATIC PORT COMMANDS:
                    <br />
                    - <span style={{ color: '#60a5fa' }}>/email</span> : Execute mail compose trigger to shubhamsharma86900@gmail.com
                    <br />
                    - <span style={{ color: '#60a5fa' }}>/linkedin</span> : Open LinkedIn career page profile
                    <br />
                    - <span style={{ color: '#60a5fa' }}>/github</span> : Open GitHub source repository dashboard
                    <br />
                    - <span style={{ color: '#60a5fa' }}>/leetcode</span> : Open LeetCode algorithmic profile page
                    <br />
                    - <span style={{ color: '#60a5fa' }}>/resume</span> : Display and print active Resume dossier
                    <br />
                    - <span style={{ color: '#60a5fa' }}>/ping</span> : Run connection diagnostics test latency
                    <br />
                    - <span style={{ color: '#60a5fa' }}>/clear</span> : Reset current terminal buffer records
                  </div>
                );
                break;
            case 'email':
                window.open('mailto:shubhamsharma86900@gmail.com');
                output = '[OK] Handshaking mail user agent... Opening mail compose client to shubhamsharma86900@gmail.com';
                break;
            case 'linkedin':
                window.open('https://www.linkedin.com/in/shubhamkumarsharma03/', '_blank');
                output = '[OK] Redirecting to LinkedIn routing endpoint...';
                break;
            case 'github':
                window.open('https://github.com/shubhamkumarsharma03/', '_blank');
                output = '[OK] Fetching repository index... Opening GitHub profile...';
                break;
            case 'leetcode':
                window.open('https://leetcode.com/u/shubhamkumarsharma/', '_blank');
                output = '[OK] Fetching algorithmic logs... Opening LeetCode metrics...';
                break;
            case 'resume':
                window.open('/assets/Shubham_resume.pdf', '_blank');
                output = '[OK] Rendering Active Resume PDF folder...';
                break;
            case 'ping':
                const ping1 = (Math.random() * 6 + 6).toFixed(1);
                const ping2 = (Math.random() * 6 + 6).toFixed(1);
                output = (
                  <div style={{ color: '#93c5fd' }}>
                    PING shubham.net (185.199.108.153) 56(84) bytes of data.
                    <br />
                    64 bytes from shubham.net: icmp_seq=1 ttl=56 time={ping1} ms
                    <br />
                    64 bytes from shubham.net: icmp_seq=2 ttl=56 time={ping2} ms
                    <br />
                    --- shubham.net ping statistics ---
                    <br />
                    2 packets transmitted, 2 received, 0% packet loss, time 1003ms
                    <br />
                    rtt min/avg/max = {Math.min(Number(ping1), Number(ping2))}/{( (Number(ping1) + Number(ping2)) / 2 ).toFixed(1)}/{Math.max(Number(ping1), Number(ping2))} ms
                  </div>
                );
                break;
            case 'clear':
                setHistory([]);
                setInput('');
                return;
            default:
                output = `Shell error: Command unrecognized: "${cmd}". Type "/help" for details.`;
                break;
        }

        setHistory(prev => [...prev, { input: `guest@shubham.net:~$ ${cmd}`, output }]);
        setInput('');
    };

    return (
        <section id="contact" className="section" style={{ paddingBottom: '140px' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="glass"
                    style={{ padding: '3.5rem 2rem 2.5rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto', background: 'rgba(255, 255, 255, 0.7)' }}
                >
                    <span className="section-annotation">[ SEC-06 // COMMUNICATIONS_PORT ]</span>
                    <h3 className="section-title" style={{ marginBottom: '1.25rem' }}>Get In Touch</h3>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '550px', marginLeft: 'auto', marginRight: 'auto' }}>
                        Looking for collaboration, internship opportunities, or just want to connect? Execute commands inside the shell or use the quick links below.
                    </p>

                    {/* LCD Terminal Console */}
                    <div
                        className="terminal-shell"
                        onClick={handleTerminalClick}
                        style={{
                            background: '#071a33',
                            border: '1.5px solid var(--border-color)',
                            borderRadius: '4px',
                            textAlign: 'left',
                            overflow: 'hidden',
                            boxShadow: '4px 4px 15px rgba(15, 45, 89, 0.15)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        {/* Terminal Header Bar */}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                background: '#0a2345',
                                padding: '0.5rem 1rem',
                                borderBottom: '1px solid var(--border-color)',
                                fontFamily: 'IBM Plex Mono, monospace',
                                fontSize: '0.65rem',
                                color: 'rgba(147, 197, 253, 0.7)',
                                fontWeight: 'bold'
                            }}
                        >
                            <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#eab308' }} />
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }} />
                                <span style={{ marginLeft: '10px' }}>guest@shubham.net:~/workspace</span>
                            </div>
                            <div>PORT_22 // SSH</div>
                        </div>

                        {/* Terminal Logs Output Area */}
                        <div
                            style={{
                                padding: '1.2rem',
                                fontFamily: 'IBM Plex Mono, monospace',
                                fontSize: '0.75rem',
                                color: '#a3e635',
                                minHeight: '220px',
                                maxHeight: '350px',
                                overflowY: 'auto',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.6rem',
                                scrollbarWidth: 'thin'
                            }}
                        >
                            {history.map((item, index) => (
                                <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                                    {item.input && (
                                        <div style={{ color: '#e2e8f0', fontWeight: 'bold' }}>{item.input}</div>
                                    )}
                                    {item.output && (
                                        <div style={{ whiteSpace: 'pre-wrap', color: '#c084fc' }}>{item.output}</div>
                                    )}
                                </div>
                            ))}
                            <div ref={terminalEndRef} />
                        </div>

                        {/* Terminal Command Input form */}
                        <form
                            onSubmit={handleCommandSubmit}
                            style={{
                                borderTop: '1px dashed rgba(147, 197, 253, 0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0.6rem 1.2rem',
                                background: '#0a2345',
                                gap: '8px'
                            }}
                        >
                            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.75rem', color: '#e2e8f0', fontWeight: 'bold' }}>
                                guest@shubham.net:~$
                            </span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                style={{
                                    flex: 1,
                                    background: 'transparent',
                                    border: 'none',
                                    outline: 'none',
                                    fontFamily: 'IBM Plex Mono, monospace',
                                    fontSize: '0.75rem',
                                    color: '#e2e8f0',
                                    caretColor: '#a3e635'
                                }}
                                placeholder="Type command here..."
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                spellCheck="false"
                            />
                        </form>
                    </div>

                    {/* Accessible quick connections fallback */}
                    <div style={{ marginTop: '2rem' }}>
                        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.7rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.75rem' }}>
                            [ OR_DIRECT_ACCESS_LINKS ]
                        </span>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                            <a href="mailto:shubhamsharma86900@gmail.com" className="fallback-btn">EMAIL</a>
                            <a href="https://www.linkedin.com/in/shubhamkumarsharma03/" target="_blank" rel="noopener noreferrer" className="fallback-btn">LINKEDIN</a>
                            <a href="https://github.com/shubhamkumarsharma03/" target="_blank" rel="noopener noreferrer" className="fallback-btn">GITHUB</a>
                            <a href="https://leetcode.com/u/shubhamkumarsharma/" target="_blank" rel="noopener noreferrer" className="fallback-btn">LEETCODE</a>
                        </div>
                    </div>
                </motion.div>
            </div>
            <style>{`
                .fallback-btn {
                    display: inline-flex;
                    align-items: center;
                    background: transparent;
                    color: var(--text-primary);
                    text-decoration: none;
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 0.75rem;
                    font-weight: 700;
                    padding: 0.4rem 1rem;
                    border-radius: 4px;
                    border: 1.5px solid var(--border-color);
                    transition: all 0.2s;
                    box-shadow: 2px 2px 0px rgba(15, 45, 89, 0.05);
                }
                .fallback-btn:hover {
                    background: var(--text-primary);
                    color: var(--bg-color);
                    border-color: var(--text-primary);
                    box-shadow: 3px 3px 0px rgba(15, 45, 89, 0.12);
                    transform: translate(-1px, -1px);
                }
            `}</style>
        </section>
    );
};

export default Contact;
