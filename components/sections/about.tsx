"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Shield, Users, Sparkles } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { staggerContainer, staggerItem } from "@/lib/animation-variants";
import { useRef } from "react";

const features = [
    {
        icon: Heart,
        title: "Patient-Centric Care",
        description: "Your comfort and well-being are our top priorities. We provide personalized treatment plans tailored to your needs."
    },
    {
        icon: Shield,
        title: "Advanced Technology",
        description: "State-of-the-art equipment and modern techniques ensure precise, comfortable, and effective treatments."
    },
    {
        icon: Users,
        title: "Experienced Team",
        description: "Our skilled dentists and staff bring years of expertise and a gentle touch to every procedure."
    },
    {
        icon: Sparkles,
        title: "Hygiene & Safety",
        description: "We maintain the highest standards of sterilization and infection control for your safety."
    }
];

export function About() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={ref} id="about" className="py-20 sm:py-32 relative overflow-hidden">
            {/* Animated Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 -z-10"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [90, 0, 90],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-1/4 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
                />
            </motion.div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionWrapper>
                    <motion.div style={{ opacity }} className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="font-heading text-4xl sm:text-5xl font-bold mb-4"
                        >
                            Welcome to <span className="gradient-text">GRACE Dental</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
                        >
                            South Bopal's trusted destination for comprehensive dental care and aesthetic treatments.
                            We combine medical excellence with a warm, caring approach.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                whileHover={{
                                    y: -12,
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                                className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-border relative overflow-hidden group"
                            >
                                {/* Card hover glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-secondary/5 group-hover:to-transparent transition-all duration-500" />

                                <div className="relative z-10">
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        className="mb-4 inline-block p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10"
                                    >
                                        <feature.icon className="w-8 h-8 text-primary" />
                                    </motion.div>
                                    <h3 className="font-heading text-xl font-semibold mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </SectionWrapper>
            </div>
        </section>
    );
}
