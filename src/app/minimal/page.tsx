'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import './minimal.css';

const experiences = [
    {
        id: 'visa',
        company: "Visa",
        logo: "/VISA_logo.png",
        role: "Software Engineer",
        duration: "June 2025 – Present",
        desc: "Orchestrating high-scale mission critical systems. Reduced latency from days to seconds using Kafka & Spring Boot.",
        skills: ["Java", "Spring Boot", "Kafka", "SQL", "Angular", "WCAG"],
        details: [
            "Reduced latency from 3 days to seconds by engineering a scalable event-driven pipeline using Kafka and Spring Boot.",
            "Deconstructed and mapped complex ETL logic from 15,000+ lines of legacy code using SQL and Stored Procedures.",
            "Verified data consistency across 40+ tables with a custom full-stack reconciliation dashboard (Angular, React, MySQL).",
            "Designed and implemented a decoupled Audit service for reliable system event capture.",
            "Enhanced accessibility for critical user flows to meet WCAG 2.2 standards."
        ]
    },
    {
        id: 'cred',
        company: "CRED",
        logo: "/CRED_logo.png",
        role: "Backend Engineer Intern",
        duration: "Jan 2025 – June 2025",
        desc: "Streamlined developer workflows, reducing instrumentation effort by 87% through automated tooling.",
        skills: ["Java", "Spring Boot", "Python", "MySQL", "Datadog", "AWS"],
        details: [
            "Reduced developer instrumentation effort from 8h to 1h with a standardized Metric Publishing Library.",
            "Fixed interest-calculation mismatches for 10,000+ users via Python orchestration scripts.",
            "Prevented 2,000+ incorrect loan status transitions monthly with robust runtime checks.",
            "Implemented compliance checks and AML data requirements for loan workflows."
        ]
    }
];

const skillCategories = [
    {
        title: "Systems & Backend",
        skills: ["Java / Spring Boot", "Python", "Distributed Systems", "SQL / NoSQL", "Kafka", "System Design", "Node.js"]
    },
    {
        title: "Mobile & Frontend",
        skills: ["Kotlin / Android", "Flutter", "React / Next.js", "TypeScript", "React Native", "Angular", "Accessibility (WCAG)"]
    },
    {
        title: "Tools & DevOps",
        skills: ["Docker", "Kubernetes", "AWS", "Datadog / Grafana", "CI/CD (Jenkins)", "Git / GitHub"]
    }
];

const projects = [
    { title: 'Gemini Clone', cat: 'AI / Multi-Modal', img: '/projects/geminiClone.png', link: 'https://github.com/gourabsingha1/Gemini-Clone' },
    { title: 'List Maker', cat: 'Android / Productivity', img: '/projects/listmaker.png', link: 'https://github.com/gourabsingha1/ListMaker' },
    { title: 'Find It', cat: 'Location Intelligence', img: '/projects/findit.png', link: 'https://github.com/gourabsingha1/Find-It' },
    { title: 'FD_CARE', cat: 'IoT / Healthcare', img: '/projects/fdcare.png', link: 'https://github.com/gourabsingha1/FD-Care' }
];

const codingStats = [
    { platform: 'LeetCode', rank: 'Guardian', solved: '1800+', color: '#4facfe', link: 'https://leetcode.com/gourabsingha1' },
    { platform: 'CodeChef', rank: '5-Star', solved: '400+', color: '#f8d030', link: 'https://www.codechef.com/users/gourabsingha2' },
    { platform: 'Codeforces', rank: 'Expert', solved: '500+', color: '#8b5cf6', link: 'https://codeforces.com/profile/gourabsingha1' }
];

export default function MinimalPortfolio() {
    const [hoveredExp, setHoveredExp] = useState<string | null>(null);

    return (
        <div className="minimal-theme">
            {/* Liquid Background */}
            <div className="liquid-bg">
                <div className="blob blob-1" />
                <div className="blob blob-2" />
                <div className="blob blob-3" />
            </div>

            {/* Sticky Navigation */}
            <nav style={{ position: 'fixed', top: '2rem', left: '0', right: '0', padding: '0 2rem', zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" className="glass-card interactive-card glass-pill" style={{ textDecoration: 'none', color: 'white', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    ← Back Home
                </Link>
            </nav>

            <main className="container">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                    style={{ textAlign: 'center', maxWidth: '900px' }}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        style={{ width: '140px', height: '140px', borderRadius: '50%', margin: '0 auto 3rem', padding: '8px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}
                    >
                        <img src="/profile.png" alt="Gourab" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                    </motion.div>

                    <span className="hero-subtitle">Software Engineer</span>
                    <h1 style={{ marginTop: '0.5rem' }}>Gourab <br /> Singha</h1>

                    <p className="hero-description">
                        Specializing in building high-performance backend systems and crafting fluid digital interfaces that push the boundaries of modern engineering.
                    </p>
                </motion.div>

                {/* About Section */}
                <section style={{ width: '100%' }}>
                    <div className="glass-card section-padding" style={{ position: 'relative' }}>
                        <h2 style={{ marginBottom: '2rem' }}>About Me</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)', maxWidth: '800px' }}>
                            I am a Software Engineer driven by the challenge of building scalable, reliable, and efficient systems. With a strong foundation in backend engineering and a passion for interactive design, I bridge the gap between robust infrastructure and delightful user experiences.
                            Currently, I'm focusing on distributed systems and high-performance Android applications.
                        </p>
                    </div>
                </section>

                {/* Technical Arsenal */}
                <section style={{ width: '100%' }}>
                    <h2 className="section-title">Technical Arsenal</h2>
                    <div className="skills-grid-container">
                        {skillCategories.map((cat, i) => (
                            <div key={i} className="glass-card skills-cat-card">
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.4)' }}>{cat.title}</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                    {cat.skills.map((skill, si) => (
                                        <span key={si} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experience Cards */}
                <section style={{ width: '100%' }}>
                    <h2 className="section-title">Professional Journey</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                className="glass-card interactive-card experience-card"
                                style={{ cursor: 'pointer' }}
                                onPointerEnter={(e) => e.pointerType === 'mouse' && setHoveredExp(exp.id)}
                                onPointerLeave={(e) => e.pointerType === 'mouse' && setHoveredExp(null)}
                                onClick={() => setHoveredExp(hoveredExp === exp.id ? null : exp.id)}
                                layout
                            >
                                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
                                    <div style={{ width: '80px', height: '80px', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', background: 'rgba(255,255,255,0.03)' }}>
                                        <img src={exp.logo} alt={exp.company} style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'scale(1.2)' }} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                                            <h3 style={{ margin: 0, fontSize: '2rem', fontWeight: '700' }}>{exp.company}</h3>
                                            <span style={{ fontSize: '0.9rem', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{exp.duration}</span>
                                        </div>
                                        <h4 style={{ color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem', fontWeight: '600', fontSize: '1.1rem' }}>{exp.role}</h4>
                                    </div>
                                </div>

                                <p style={{ opacity: 0.7, lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '800px' }}>{exp.desc}</p>

                                <AnimatePresence>
                                    {hoveredExp === exp.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                            style={{ overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2.5rem' }}
                                        >
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                                {exp.details.map((detail, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: idx * 0.05 }}
                                                        style={{ display: 'flex', gap: '1rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: '1.6' }}
                                                    >
                                                        <span style={{ color: '#4facfe' }}>—</span>
                                                        <span>{detail}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '2.5rem' }}>
                                                {exp.skills.map((s, idx) => (
                                                    <span key={idx} style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.05)', padding: '0.4rem 1rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)' }}>{s}</span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Captured Works */}
                <section style={{ width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
                        <h2 style={{ margin: 0 }}>Selected Works</h2>
                    </div>
                    <div className="gallery-grid">
                        {projects.map((project, i) => (
                            <Link href={project.link} key={i} target="_blank" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="gallery-item glass-card interactive-card"
                                    style={{ borderRadius: '2rem', border: 'none' }}
                                >
                                    <img src={project.img} alt={project.title} className="gallery-img" />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2rem' }}>
                                        <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{project.cat}</span>
                                        <h3 style={{ margin: '0.5rem 0 0', fontSize: '1.8rem', fontWeight: '700', color: 'white' }}>{project.title}</h3>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Performance Metrics */}
                <section style={{ width: '100%' }}>
                    <h2 className="section-title">Coding Performance</h2>
                    <div className="stats-grid">
                        {codingStats.map((stat, i) => (
                            <Link key={i} href={stat.link} target="_blank" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="glass-card interactive-card stat-card"
                                >
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', opacity: 0.6, color: 'white' }}>{stat.platform}</h3>
                                    <div style={{ fontSize: '3rem', fontWeight: '900', color: stat.color, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                                        {stat.rank}
                                    </div>
                                    <div style={{ background: 'rgba(255,255,255,0.05)', display: 'inline-block', padding: '0.5rem 1.5rem', borderRadius: '100px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
                                        Solved: <span style={{ color: 'white', fontWeight: '700' }}>{stat.solved}</span>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Contact Modal */}
                <section style={{ width: '100%' }}>
                    <motion.div
                        className="glass-card interactive-card contact-card"
                    >
                        <h2 className="contact-title">Let's Build.</h2>
                        <p style={{ fontSize: '1.2rem', opacity: 0.6, marginBottom: '3rem' }}>Ready to engineer the next big thing?</p>
                        <a
                            href="mailto:gaurabsingha16@gmail.com"
                            style={{
                                textDecoration: 'none',
                                padding: '1.5rem 4rem',
                                background: 'white',
                                color: 'black',
                                borderRadius: '100px',
                                fontWeight: '700',
                                fontSize: '1.1rem',
                                display: 'inline-block'
                            }}
                        >
                            Get In Touch
                        </a>
                    </motion.div>
                </section>

                <footer className="footer-container">
                    <span>© 2026 GOURAB SINGHA</span>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <Link href="https://github.com/gourabsingha1" target="_blank" style={{ color: 'inherit', textDecoration: 'none' }}>GITHUB</Link>
                        <Link href="https://linkedin.com/in/gourabsingha/" target="_blank" style={{ color: 'inherit', textDecoration: 'none' }}>LINKEDIN</Link>
                    </div>
                </footer>
            </main>
        </div>
    );
}
