"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Calendar, Star, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/lib/animation-variants";
import { useRef } from "react";

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Multiple parallax layers with different speeds
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 400]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 600]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

    return (
        <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
                <motion.div
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"
                    style={{ backgroundSize: "200% 200%" }}
                />
            </div>

            {/* Parallax Background Layers */}
            <motion.div
                style={{ y: y1, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            </motion.div>

            <motion.div
                style={{ y: y2 }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute top-40 right-20 w-64 h-64 bg-accent/10 rounded-full blur-2xl" />
                <div className="absolute bottom-40 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
            </motion.div>

            {/* Floating Animated Shapes */}
            <motion.div
                animate={{
                    y: [0, -30, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-primary/20 rounded-3xl blur-sm"
                style={{ y: y3 }}
            />

            <motion.div
                animate={{
                    y: [0, 40, 0],
                    rotate: [0, -5, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-1/4 right-1/4 w-40 h-40 border-2 border-secondary/20 rounded-full blur-sm"
                style={{ y: y3 }}
            />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(30,136,168,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(30,136,168,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    style={{ scale, opacity }}
                    className="text-center max-w-5xl mx-auto"
                >
                    {/* Trust Badges */}
                    <motion.div
                        variants={staggerItem}
                        className="flex flex-wrap justify-center gap-4 mb-8"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="glass-effect px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-xl"
                        >
                            <Star className="w-5 h-5 text-accent fill-accent" />
                            <span className="text-sm font-medium">4.9 Google Rating</span>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="glass-effect px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-xl"
                        >
                            <Award className="w-5 h-5 text-accent" />
                            <span className="text-sm font-medium">Trusted Dental Clinic</span>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="glass-effect px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-xl"
                        >
                            <MapPin className="w-5 h-5 text-accent" />
                            <span className="text-sm font-medium">South Bopal</span>
                        </motion.div>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        variants={staggerItem}
                        className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                    >
                        Your Smile, Our{" "}
                        <motion.span
                            className="gradient-text inline-block"
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{ backgroundSize: "200% auto" }}
                        >
                            Passion
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        variants={staggerItem}
                        className="text-xl sm:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto font-semibold"
                    >
                        GRACE Dental and Aesthetic Clinic
                    </motion.p>

                    <motion.p
                        variants={staggerItem}
                        className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
                    >
                        Experience world-class dental care with advanced technology and compassionate service in South Bopal, Ahmedabad.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={staggerItem}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Button
                            variant="primary"
                            size="lg"
                            className="w-full sm:w-auto"
                            onClick={() => {
                                const appointmentSection = document.getElementById('appointment');
                                appointmentSection?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <Calendar className="w-5 h-5 mr-2" />
                            Book Appointment
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto"
                            onClick={() => window.open('tel:+919876543210', '_self')}
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            Call Now
                        </Button>
                    </motion.div>

                    {/* Floating Animation */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="mt-16"
                    >
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="inline-block p-4 rounded-full bg-primary/10 backdrop-blur-sm cursor-pointer"
                        >
                            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
