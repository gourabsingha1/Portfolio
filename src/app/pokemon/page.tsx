'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './pokemon.css';

const projects = [
    { name: 'Gemini Clone', type: 'Psychic', hp: 90, img: '/projects/geminiClone.png', desc: 'A mysterious AI clone that mimics human thought.', skills: ['Next.js', 'Google AI', 'Tailwind'], link: 'https://github.com/gourabsingha1/Gemini-Clone' },
    { name: 'List Maker', type: 'Normal', hp: 70, img: '/projects/listmaker.png', desc: 'Organizes tasks with efficient, simple strikes.', skills: ['Android', 'Java', 'Room'], link: 'https://github.com/gourabsingha1/ListMaker' },
    { name: 'Find It', type: 'Electric', hp: 85, img: '/projects/findit.png', desc: 'Locates targets lightning-fast using GPS currents.', skills: ['Kotlin', 'Firebase', 'Google Maps'], link: 'https://github.com/gourabsingha1/Find-It' },
    { name: 'FD_CARE', type: 'Grass', hp: 95, img: '/projects/fdcare.png', desc: 'Nurtures users with smart care and IoT growth.', skills: ['Flutter', 'Node.js', 'Arduino'], link: 'https://github.com/gourabsingha1/FD-Care' }
];

const experiences = [
    {
        id: 'visa',
        company: "Visa",
        icon: "/pokemon/items/master-ball.png",
        role: "Software Engineer",
        duration: "2025 - Present",
        task: "Used Master Ball to capture latency! Engineered a Kafka pipeline reducing 3 days to seconds.",
        details: [
            "Deconstructed and mapped complex ETL logic from 15,000+ lines of legacy code using SQL and Stored Procedures.",
            "Verified data consistency across 40+ tables between legacy ETL and new streams by building a custom reconciliation dashboard.",
            "Designed and implemented a decoupled Audit service using Kafka and Relational Databases.",
            "Enhanced accessibility for critical user flows to meet WCAG 2.2 standards using HTML, CSS, and JavaScript."
        ]
    },
    {
        id: 'cred',
        company: "CRED",
        icon: "/pokemon/items/ultra-ball.png",
        role: "Backend Intern",
        duration: "2025",
        task: "Standardized counters/timers with a common Metric Publishing Library. Fixed interest mismatches.",
        details: [
            "Reduced developer instrumentation effort from 8 hours to 1 hour by building a common Metric Publishing Library.",
            "Fixed interest-calculation mismatches for 10,000+ users by authoring automation tooling using Python.",
            "Prevented 2,000+ incorrect loan status transitions monthly by implementing robust runtime checks.",
            "Implemented compliance checks in loan workflows by defining AML data requirements."
        ]
    }
];

const skills = [
    { name: 'Android', id: 'pikachu', icon: '/pokemon/sprites/25.gif', level: 'Master' },
    { name: 'Java/Spring', id: 'mewtwo', icon: '/pokemon/sprites/150.gif', level: 'Elite' },
    { name: 'Kotlin', id: 'dragonite', icon: '/pokemon/sprites/149.gif', level: 'Expert' },
    { name: 'React/Next', id: 'lapras', icon: '/pokemon/sprites/131.gif', level: 'Expert' },
    { name: 'TypeScript', id: 'alakazam', icon: '/pokemon/sprites/65.gif', level: 'Master' },
    { name: 'Distributed', id: 'magneton', icon: '/pokemon/sprites/82.gif', level: 'Pro' },
    { name: 'Python', id: 'lucario', icon: '/pokemon/sprites/448.gif', level: 'Elite' },
    { name: 'Flutter', id: 'blaziken', icon: '/pokemon/sprites/257.gif', level: 'Ace' },
    { name: 'C++', id: 'scizor', icon: '/pokemon/sprites/212.gif', level: 'Master' },
    { name: 'SQL/DB', id: 'tyranitar', icon: '/pokemon/sprites/248.gif', level: 'Solid' },
    { name: 'Supabase', id: 'kyogre', icon: '/pokemon/sprites/382.gif', level: 'Elite' },
    { name: 'Firebase', id: 'chandelure', icon: '/pokemon/sprites/609.gif', level: 'Master' },
    { name: 'AWS/Cloud', id: 'rayquaza', icon: '/pokemon/sprites/384.gif', level: 'Ace' },
    { name: 'Sys Design', id: 'metagross', icon: '/pokemon/sprites/376.gif', level: 'Elite' },
    { name: 'Monitoring', id: 'noctowl', icon: '/pokemon/sprites/164.gif', level: 'Pro' },
    { name: 'Accessibility', id: 'togekiss', icon: '/pokemon/sprites/468.gif', level: 'Ace' },
    { name: 'Docker', id: 'blastoise', icon: '/pokemon/sprites/9.gif', level: 'Expert' },
    { name: 'Redis', id: 'arcanine', icon: '/pokemon/sprites/59.gif', level: 'Master' },
    { name: 'Kafka', id: 'genesect', icon: '/pokemon/sprites/649.gif', level: 'Elite' },
    { name: 'CI/CD', id: 'porygon', icon: '/pokemon/sprites/137.gif', level: 'Pro' }
];

const tools = [
    { name: 'Docker', icon: '/pokemon/items/poke-ball.png' },
    { name: 'K8s', icon: '/pokemon/items/great-ball.png' },
    { name: 'Kafka', icon: '/pokemon/items/ultra-ball.png' },
    { name: 'AWS', icon: '/pokemon/items/master-ball.png' },
    { name: 'Datadog', icon: '/pokemon/items/rare-candy.png' },
    { name: 'MySQL', icon: '/pokemon/items/everstone.png' },
    { name: 'Firebase', icon: '/pokemon/items/sun-stone.png' },
    { name: 'Jenkins', icon: '/pokemon/items/thunder-stone.png' }
];

const openSource = [
    { name: 'OneBusAway-Android', role: 'Contributor', icon: '/pokemon/items/escape-rope.png' },
    { name: 'Anki-Android', role: 'Contributor', icon: '/pokemon/items/exp-share.png' }
];

const accomplishments = [
    { title: "LEETCODE GUARDIAN", badge: "/pokemon/badges/tm-electric.png", rank: "1800+ Solved", subrank: "Global #376", link: "https://leetcode.com/gourabsingha1" },
    { title: "CODECHEF 5\u2011STAR", badge: "/pokemon/badges/tm-fire.png", rank: "400+ Solved", subrank: "Global #3, #27", link: "https://www.codechef.com/users/gourabsingha2" },
    { title: "CODEFORCES EXPERT", badge: "/pokemon/badges/tm-water.png", rank: "500+ Solved", subrank: "Expert Rank", link: "https://codeforces.com/profile/gourabsingha1" },
    { title: "GEEKSFORGEEKS PRO", badge: "/pokemon/badges/tm-grass.png", rank: "500+ Solved", subrank: "Top Coder", link: "https://www.geeksforgeeks.org/user/gourabsingha1/" }
];

type Project = typeof projects[0];

// Calculate trainer level (age) dynamically based on birthdate
const getTrainerLevel = () => {
    const birthDate = new Date(2001, 10, 23); // Nov 23, 2001 (months are 0-indexed)
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

export default function PokemonPortfolio() {
    const [loading, setLoading] = useState(true);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [hoveredExp, setHoveredExp] = useState<string | null>(null);

    const personalStats = [
        { label: 'AGE', value: getTrainerLevel(), max: 100, color: '#FF5959' },
        { label: 'WEIGHT', value: 78, max: 100, color: '#F8D030' },
        { label: 'HEIGHT', value: 180, max: 200, color: '#6890F0' },
        { label: 'WPM', value: 61, max: 100, color: '#78C850' }
    ];

    // Audio refs
    const buttonSound = useRef<HTMLAudioElement | null>(null);
    const levelUpSound = useRef<HTMLAudioElement | null>(null);
    const bgMusic = useRef<HTMLAudioElement | null>(null);
    const currentCry = useRef<HTMLAudioElement | null>(null);

    // Initialize audio once
    useEffect(() => {
        buttonSound.current = new Audio('/pokemon/sfx/button-hover.mp3');
        levelUpSound.current = new Audio('/pokemon/sfx/level-up.mp3');

        bgMusic.current = new Audio('/pokemon/pokemonlittleroottown.mp3');
        if (bgMusic.current) {
            bgMusic.current.loop = true;
            bgMusic.current.volume = 0.35;

            // Listen for play/pause events to update state
            bgMusic.current.onplaying = () => setIsAudioPlaying(true);
            bgMusic.current.onpause = () => setIsAudioPlaying(false);
        }

        const handleFirstInteraction = () => {
            if (bgMusic.current && bgMusic.current.paused) {
                bgMusic.current.play().catch(() => { });
            }
            window.removeEventListener('mousedown', handleFirstInteraction);
            window.removeEventListener('scroll', handleFirstInteraction);
            window.removeEventListener('keydown', handleFirstInteraction);
            window.removeEventListener('touchstart', handleFirstInteraction);
        };

        window.addEventListener('mousedown', handleFirstInteraction);
        window.addEventListener('scroll', handleFirstInteraction);
        window.addEventListener('keydown', handleFirstInteraction);
        window.addEventListener('touchstart', handleFirstInteraction);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('mousedown', handleFirstInteraction);
            window.removeEventListener('scroll', handleFirstInteraction);
            window.removeEventListener('keydown', handleFirstInteraction);
            window.removeEventListener('touchstart', handleFirstInteraction);
            if (bgMusic.current) {
                bgMusic.current.pause();
                bgMusic.current = null;
            }
        };
    }, []);

    // Explicitly trigger play when loading is over
    useEffect(() => {
        if (!loading && bgMusic.current) {
            const playPromise = bgMusic.current.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    setIsAudioPlaying(true);
                }).catch(error => {
                    console.log("Autoplay blocked.");
                });
            }
        }
    }, [loading]);

    const playSound = (type: 'select' | 'confirm' | 'levelup' | 'heal' | 'cry', pokemonId?: string) => {
        try {
            let audio: HTMLAudioElement | null = null;

            if (type === 'cry' && pokemonId) {
                if (currentCry.current) {
                    currentCry.current.pause();
                }
                currentCry.current = new Audio(`/pokemon/cries/${pokemonId.toLowerCase()}.mp3`);
                currentCry.current.volume = 0.15;
                audio = currentCry.current;
            } else {
                // Use button-hover.mp3 for select/confirm, level-up.mp3 for levelup/heal
                audio = (type === 'select' || type === 'confirm') ? buttonSound.current : levelUpSound.current;
                if (audio) audio.volume = (type === 'levelup' || type === 'heal') ? 0.3 : 0.4;
            }

            if (audio) {
                audio.currentTime = 0;
                audio.play().catch(() => { });
            }
        } catch (e) { }
    };

    const stopCry = () => {
        if (currentCry.current) {
            currentCry.current.pause();
            currentCry.current.currentTime = 0;
        }
    };

    if (loading) {
        return (
            <div className="pokemon-theme" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#DC0A2D' }}>
                <div style={{ textAlign: 'center' }}>
                    <div className="poke-ball-loader" style={{ margin: '0 auto 2rem' }}></div>
                    <h2 className="pixel-font" style={{ color: 'white' }}>LOADING TRAINER DATA...</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="pokemon-theme">
            {/* Audio Indicator Prompt */}
            <AnimatePresence>
                {!isAudioPlaying && !loading && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="pixel-font"
                        style={{
                            position: 'fixed',
                            bottom: '2rem',
                            right: '2rem',
                            zIndex: 1000,
                            background: '#333',
                            color: 'white',
                            padding: '1rem 2rem',
                            borderRadius: '15px',
                            border: '4px solid #FFCC00',
                            boxShadow: '0 0 20px rgba(0,0,0,0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            cursor: 'pointer'
                        }}
                        onClick={() => {
                            if (bgMusic.current) bgMusic.current.play();
                        }}
                    >
                        CLICK ANYWHERE TO PLAY MUSIC
                    </motion.div>
                )}
            </AnimatePresence>
            {/* Header */}
            <nav style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" style={{ textDecoration: 'none' }} onMouseEnter={() => playSound('select')} onClick={() => playSound('confirm')}>
                    <motion.div whileHover={{ scale: 1.1 }} className="pixel-font" style={{ color: 'white', background: '#333', padding: '0.5rem 1rem', borderRadius: '10px' }}>
                        ← LOGOUT
                    </motion.div>
                </Link>
                <div className="sketch-font" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white', textShadow: '2px 2px #333' }}>
                    The Journey of Gourab
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <div style={{ width: '15px', height: '15px', background: 'red', borderRadius: '50%', border: '2px solid white' }} />
                    <div style={{ width: '15px', height: '15px', background: 'yellow', borderRadius: '50%', border: '2px solid white' }} />
                    <div style={{ width: '15px', height: '15px', background: 'green', borderRadius: '50%', border: '2px solid white' }} />
                </div>
            </nav>

            <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>

                {/* Section: Trainer Identity */}
                <section style={{ display: 'flex', gap: '4rem', marginBottom: '8rem', flexWrap: 'wrap' }}>
                    <div className="pokedex-ui trainer-card-container" style={{ flex: '1', minWidth: '350px' }}>
                        <div className="pokedex-screen">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <img src="/profile.png" alt="Trainer" style={{ width: '80px', height: '80px', borderRadius: '10px', border: '3px solid #51AD60', objectFit: 'cover' }} />
                                <div>
                                    <h2 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>GOURAB SINGHA</h2>
                                    <p style={{ fontSize: '0.5rem', opacity: 0.8 }}>BORN: AGARTALA</p>
                                    <p style={{ fontSize: '0.5rem', opacity: 0.8 }}>CLASS: CREATIVE DEVELOPER</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                {personalStats.map(s => (
                                    <div key={s.label}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem', fontSize: '0.5rem' }}>
                                            <span>{s.label}</span>
                                            <span>{s.value}/{s.max}</span>
                                        </div>
                                        <div style={{ height: '8px', background: '#000', borderRadius: '4px', overflow: 'hidden' }}>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${(s.value / s.max) * 100}%` }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                style={{ height: '100%', background: s.color }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div style={{ marginTop: '1.2rem', fontSize: '0.45rem', borderTop: '1px solid #51AD60', paddingTop: '0.8rem', lineHeight: '1.6' }}>
                                "Expertise: Robust Backend Infrastructure, <br />
                                Scalable Legendary Architecture, <br />
                                High-Performance Mobile Movesets, <br />
                                Distributed Stream Tactics, <br />
                                and Multi-Region Deployment!"
                            </div>
                        </div>
                    </div>

                    <div className="trainer-intro-container" style={{ flex: '1.2', minWidth: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h2 className="sketch-font challenger-title" style={{ fontSize: '4.5rem', marginBottom: '1.5rem', color: '#333', lineHeight: '1' }}>
                            A New <br /> Challenger Appeared!
                        </h2>
                        <p style={{ fontSize: '1.4rem', lineHeight: '1.6', color: '#333', fontWeight: '500' }}>
                            From deconstructing 15,000 lines of legacy code at <strong>Visa</strong> to securing <strong>CRED</strong> workflows.
                            Gourab is an Elite Trainer specializing in making complex systems accessible.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem' }}>
                            <a href="mailto:gaurabsingha16@gmail.com" style={{ textDecoration: 'none' }} onMouseEnter={() => playSound('select')} onClick={() => playSound('confirm')}>
                                <button className="pixel-font" style={{ background: '#FF0000', color: 'white', border: '3px solid #333', padding: '1rem 2rem', borderRadius: '10px', cursor: 'pointer' }}>
                                    BATTLE! (EMAIL)
                                </button>
                            </a>
                            <a href="https://drive.google.com/file/d/19Swe4AwPU7w7m1_vktRY_tho8P2VsaXI/view?usp=drive_link" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} onMouseEnter={() => playSound('select')} onClick={() => playSound('confirm')}>
                                <button className="pixel-font" style={{ background: 'white', color: '#333', border: '3px solid #333', padding: '1rem 2rem', borderRadius: '10px', cursor: 'pointer' }}>
                                    PK-RECON.PDX
                                </button>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Section: Badge Case (Achievements) */}
                <section style={{ marginBottom: '10rem' }}>
                    <div className="sketch-font" style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '4rem', color: '#333' }}>
                        The Badge Case
                    </div>
                    <div className="badge-case" style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                        {accomplishments.map((ach, i) => (
                            <a
                                key={i}
                                href={ach.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <motion.div
                                    onMouseEnter={() => playSound('levelup')}
                                    whileHover={{ y: -10, rotate: 5 }}
                                    style={{ textAlign: 'center', maxWidth: '200px', background: 'rgba(255,255,255,0.3)', padding: '2rem', borderRadius: '30px', border: '4px solid #333', cursor: 'pointer' }}
                                >
                                    <motion.div animate={{ rotateY: 360 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }} style={{ width: '100px', height: '100px', margin: '0 auto 1.5rem' }}>
                                        <img src={ach.badge} alt="badge" style={{ width: '80px' }} />
                                    </motion.div>
                                    <div className="pixel-font" style={{ fontSize: '0.65rem', marginBottom: '0.8rem', color: '#333' }}>{ach.title}</div>
                                    <div className="sketch-font" style={{ fontWeight: '900', fontSize: '1.2rem' }}>{ach.rank}</div>
                                    <div className="sketch-font" style={{ fontWeight: '700', fontSize: '0.9rem', opacity: 0.7, marginTop: '0.3rem' }}>{ach.subrank}</div>
                                </motion.div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Section: Skill Party (The Pokemon!) */}
                <section style={{ marginBottom: '10rem' }}>
                    <div className="sketch-font" style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '4rem', color: '#333' }}>
                        Skill Party
                    </div>
                    <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                        {skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                onMouseEnter={() => playSound('cry', skill.id)}
                                onMouseLeave={stopCry}
                                whileHover={{ scale: 1.1, rotate: 2 }}
                                style={{ background: 'white', border: '5px solid #333', borderRadius: '30px', padding: '1.5rem', textAlign: 'center', position: 'relative', boxShadow: '0 10px 0 #333', cursor: 'pointer' }}
                            >
                                <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: '#333', color: 'white', padding: '0.4rem 1.2rem', borderRadius: '20px', fontSize: '0.6rem' }} className="pixel-font">
                                    {skill.level}
                                </div>
                                <img src={skill.icon} alt={skill.name} style={{ width: '80px', height: '80px', marginBottom: '1rem', imageRendering: 'pixelated' }} />
                                <div className="sketch-font" style={{ fontSize: '1.8rem', fontWeight: '900' }}>{skill.name}</div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Section: Experience Timeline */}
                <section style={{ marginBottom: '10rem' }}>
                    <div className="sketch-font" style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '4rem', color: '#333' }}>
                        The Region Map (Experience)
                    </div>
                    <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
                        <div style={{ position: 'absolute', left: '20px', top: 0, bottom: 0, width: '6px', background: '#333', borderRadius: '3px' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                            {experiences.map((exp, i) => (
                                <div
                                    key={i}
                                    onPointerEnter={(e) => {
                                        if (e.pointerType === 'mouse') {
                                            setHoveredExp(exp.id);
                                            playSound('heal');
                                        }
                                    }}
                                    onPointerLeave={(e) => {
                                        if (e.pointerType === 'mouse') {
                                            setHoveredExp(null);
                                        }
                                    }}
                                    onClick={() => {
                                        setHoveredExp(hoveredExp === exp.id ? null : exp.id);
                                        if (hoveredExp !== exp.id) playSound('heal');
                                    }}
                                    style={{ display: 'flex', gap: '2rem', paddingLeft: '2rem', cursor: 'help' }}
                                >
                                    <div style={{ width: '40px', height: '40px', background: '#333', borderRadius: '50%', border: '4px solid #FFCC00', zIndex: 1, marginLeft: '-17px', flexShrink: 0, position: 'relative', marginTop: '20px' }}>
                                        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <div style={{ width: '10px', height: '10px', background: 'white', borderRadius: '50%' }} />
                                        </div>
                                    </div>
                                    <motion.div
                                        layout
                                        className="pokedex-ui"
                                        style={{ background: '#fff', border: '5px solid #333', flex: 1, overflow: 'hidden' }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                                            <div>
                                                <h3 className="sketch-font" style={{ fontSize: '2.5rem', lineHeight: '1' }}>{exp.company}</h3>
                                                <p className="pixel-font" style={{ fontSize: '0.7rem', color: '#666', marginTop: '0.5rem' }}>{exp.role}</p>
                                            </div>
                                            <div className="pixel-font" style={{ fontSize: '0.6rem', padding: '0.4rem 0.8rem', background: '#333', color: '#fff', borderRadius: '20px' }}>
                                                {exp.duration}
                                            </div>
                                        </div>
                                        <p style={{ fontSize: '1.1rem', lineHeight: '1.5', color: '#444', fontWeight: '500', marginBottom: '1.5rem' }}>{exp.task}</p>

                                        <AnimatePresence>
                                            {hoveredExp === exp.id && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    style={{ borderTop: '2px dashed #ccc', paddingTop: '1.5rem' }}
                                                >
                                                    <div className="pixel-font" style={{ fontSize: '0.6rem', color: '#DC0A2D', marginBottom: '1rem' }}>[ EXTRA INTEL UNLOCKED ]</div>
                                                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                                        {exp.details.map((detail, idx) => (
                                                            <motion.li
                                                                key={idx}
                                                                initial={{ x: -20, opacity: 0 }}
                                                                animate={{ x: 0, opacity: 1 }}
                                                                transition={{ delay: idx * 0.1 }}
                                                                style={{ display: 'flex', gap: '1rem', fontSize: '0.95rem', color: '#555', lineHeight: '1.4' }}
                                                            >
                                                                <span style={{ color: '#DC0A2D' }}>▸</span> {detail}
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section: Inventory (Tools & Open Source) */}
                <section style={{ marginBottom: '10rem' }}>
                    <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1, minWidth: '300px' }}>
                            <div className="sketch-font" style={{ fontSize: '3rem', marginBottom: '3rem', color: '#333' }}>Trainer's Backpack</div>
                            <div className="tools-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                                {tools.map((tool, i) => (
                                    <motion.div key={i} onMouseEnter={() => playSound('select')} whileHover={{ scale: 1.2 }} style={{ textAlign: 'center' }}>
                                        <img src={tool.icon} alt={tool.name} style={{ width: '40px', height: '40px' }} />
                                        <div className="pixel-font" style={{ fontSize: '0.45rem', marginTop: '0.5rem' }}>{tool.name}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div style={{ flex: 1, minWidth: '300px' }}>
                            <div className="sketch-font" style={{ fontSize: '3rem', marginBottom: '3rem', color: '#333' }}>Wild Encounters</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {openSource.map((os, i) => (
                                    <motion.div key={i} onMouseEnter={() => playSound('select')} whileHover={{ x: 10 }} style={{ background: 'white', border: '3px solid #333', padding: '1rem', borderRadius: '15px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <img src={os.icon} alt="item" style={{ width: '30px' }} />
                                        <div>
                                            <div className="sketch-font" style={{ fontWeight: '700', fontSize: '1.2rem' }}>{os.name}</div>
                                            <div className="pixel-font" style={{ fontSize: '0.5rem', opacity: 0.6 }}>{os.role}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section: Projects (The Collection) */}
                <section style={{ marginBottom: '8rem' }}>
                    <div className="sketch-font" style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '4rem', color: '#333' }}>
                        Captured Projects
                    </div>
                    <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                        {projects.map((project, idx) => (
                            <motion.div
                                key={project.name}
                                className="pokemon-card"
                                onMouseEnter={() => playSound('select')}
                                onClick={() => {
                                    setSelectedProject(project);
                                    playSound('confirm');
                                }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="holographic-overlay" />
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <span className="pixel-font" style={{ fontSize: '0.6rem' }}>{project.type} Type</span>
                                    <span className="pixel-font" style={{ color: '#FF0000', fontSize: '0.6rem' }}>HP {project.hp}</span>
                                </div>
                                <div style={{ background: '#333', borderRadius: '10px', padding: '1rem', marginBottom: '1.5rem' }}>
                                    <img src={project.img} alt={project.name} style={{ width: '100%', height: '180px', objectFit: 'contain', borderRadius: '5px' }} />
                                </div>
                                <h3 className="sketch-font" style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>{project.name}</h3>
                                <p style={{ fontSize: '1rem', color: '#444', lineHeight: '1.4', minHeight: '3em', fontWeight: '500' }}>{project.desc}</p>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                                    {project.skills.map(skill => (
                                        <span key={skill} style={{ fontSize: '0.6rem', color: '#fff', background: '#333', padding: '0.3rem 0.7rem', borderRadius: '20px' }} className="pixel-font">{skill}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </main>

            <footer style={{ background: '#333', padding: '6rem 2rem', textAlign: 'center' }}>
                <h2 className="sketch-font" style={{ color: 'white', fontSize: '3rem', marginBottom: '2rem' }}>Ready for a Battle?</h2>
                <p className="pixel-font" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: '2' }}>
                    Currently browsing the global region looking for legendary opportunities in Backend Infrastructure and Distributed Systems.
                    Level {getTrainerLevel()} Trainer with NIT Agartala base stats.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '4rem' }}>
                    <a href="https://linkedin.com/in/gourab-singha-6a0690245/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }} className="pixel-font" onMouseEnter={() => playSound('select')}>LINKEDIN</a>
                    <a href="https://github.com/gourabsingha1" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }} className="pixel-font" onMouseEnter={() => playSound('select')}>GITHUB</a>
                </div>
                <p className="pixel-font" style={{ color: 'white', fontSize: '0.5rem', opacity: 0.3 }}>
                    © 2026 GOURAB. POWERED BY RARE CANDIES AND LATE NIGHT KAFKA STREAMS.
                </p>
            </footer>

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 100 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 100 }}
                            onClick={e => e.stopPropagation()}
                            className="modal-content"
                            style={{ maxWidth: '900px', width: '100%', maxHeight: '90vh', overflowY: 'auto', background: 'white', borderRadius: '40px', padding: '4rem', position: 'relative', border: '15px solid #FFCC00', boxShadow: '0 0 50px rgba(255, 204, 0, 0.4)' }}
                        >
                            <button
                                onClick={() => {
                                    setSelectedProject(null);
                                    playSound('confirm');
                                }}
                                className="pixel-font modal-close"
                                style={{ position: 'absolute', top: '2rem', right: '2rem', background: '#333', color: '#fff', border: 'none', padding: '1rem', borderRadius: '15px', cursor: 'pointer', zIndex: 10 }}
                            >
                                CLOSE
                            </button>

                            <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
                                <div style={{ flex: '1', minWidth: '300px' }}>
                                    <img src={selectedProject.img} style={{ width: '100%', borderRadius: '25px', border: '8px solid #333' }} />
                                </div>
                                <div style={{ flex: '1', minWidth: '300px' }}>
                                    <div className="sketch-font" style={{ fontSize: '4rem', marginBottom: '1rem', color: '#333', lineHeight: '1' }}>{selectedProject.name}</div>
                                    <div className="pixel-font" style={{ fontSize: '0.8rem', color: '#0075BE', marginBottom: '2rem' }}>POKEDEX ENTRY #00{Math.floor(Math.random() * 9) + 1}</div>
                                    <p style={{ fontSize: '1.2rem', lineHeight: '1.7', color: '#444', marginBottom: '3rem', fontWeight: '500' }}>
                                        {selectedProject.desc} This legendary build leveraged high-level programming attacks to overcome scalability hurdles in the {selectedProject.type} Region.
                                    </p>
                                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                        {selectedProject.skills.map(s => (
                                            <div key={s} className="pixel-font" style={{ background: '#eee', padding: '0.6rem 1.2rem', borderRadius: '30px', fontSize: '0.6rem' }}>#{s}</div>
                                        ))}
                                    </div>
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pixel-font"
                                        onClick={() => playSound('confirm')}
                                        style={{ marginTop: '3rem', width: '100%', padding: '1.2rem', background: '#FF0000', color: 'white', border: 'none', borderRadius: '15px', fontSize: '1rem', cursor: 'pointer', boxShadow: '0 10px 0 #990000', display: 'block', textAlign: 'center', textDecoration: 'none' }}
                                    >
                                        START BATTLE (VIEW PROJECT)
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}
