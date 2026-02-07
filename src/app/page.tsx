'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import './home.css';

export default function HomeSelection() {
    const [hovered, setHovered] = useState<string | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const meshColors = ['#ff4b2b', '#8e54e9', '#4776e6', '#000000'];

    return (
        <main className="home-container">
            {/* Mesh Gradient Background */}
            <div className="mesh-gradient">
                <motion.div
                    className="mesh-item"
                    animate={{
                        x: mousePos.x * 2,
                        y: mousePos.y * 2,
                        background: meshColors[0],
                        width: '60vw',
                        height: '60vw',
                        top: '-10%',
                        left: '-10%',
                    }}
                    transition={{ type: 'spring', damping: 25, stiffness: 40 }}
                />
                <motion.div
                    className="mesh-item"
                    animate={{
                        x: -mousePos.x * 1.5,
                        y: -mousePos.y * 1.5,
                        background: meshColors[1],
                        width: '50vw',
                        height: '50vw',
                        bottom: '-5%',
                        right: '-5%',
                    }}
                    transition={{ type: 'spring', damping: 20, stiffness: 35 }}
                />
                <motion.div
                    className="mesh-item"
                    animate={{
                        background: meshColors[2],
                        width: '40vw',
                        height: '40vw',
                        top: '20%',
                        right: '10%',
                    }}
                />
            </div>

            {/* Grain Overlay */}
            <div className="noise-overlay" />

            {/* Content */}
            <div className="options-wrapper">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="selection-subtitle-container"
                >
                    <span className="selection-subtitle">Select your realm</span>
                </motion.div>

                <div className="options-grid">
                    <Link href="/minimal" className="option-btn"
                        onMouseEnter={() => setHovered('minimal')}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <div className="option-content">
                            <motion.h1
                                className="selection-title"
                                animate={{
                                    x: hovered === 'minimal' ? 20 : 0,
                                    opacity: hovered === 'pokemon' ? 0.2 : 1
                                }}
                            >
                                Minimalist
                            </motion.h1>
                            <motion.div
                                className="enter-label"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: hovered === 'minimal' ? 1 : 0, y: hovered === 'minimal' ? 0 : 10 }}
                            >
                                Enter Portfolio <span className="arrow">→</span>
                            </motion.div>
                        </div>
                    </Link>

                    <Link href="/pokemon" className="option-btn"
                        onMouseEnter={() => setHovered('pokemon')}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <div className="option-content">
                            <motion.h1
                                className="selection-title"
                                animate={{
                                    x: hovered === 'pokemon' ? 20 : 0,
                                    opacity: hovered === 'minimal' ? 0.2 : 1
                                }}
                            >
                                Pokémon
                            </motion.h1>
                            <motion.div
                                className="enter-label"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: hovered === 'pokemon' ? 1 : 0, y: hovered === 'pokemon' ? 0 : 10 }}
                            >
                                Start Adventure <span className="arrow">→</span>
                            </motion.div>
                        </div>
                    </Link>
                </div>
            </div>

            <footer style={{ position: 'absolute', bottom: '2rem', opacity: 0.4, fontSize: '0.7rem', letterSpacing: '0.1em' }} className="pixel-font">
                DESIGNED BY GOURAB • 2026 • THE CHOSEN ONE
            </footer>
        </main>
    );
}
