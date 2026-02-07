"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Users, Award, Clock } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const reasons = [
    {
        icon: Users,
        title: "Experienced Doctors",
        description: "Our team of skilled dentists brings decades of combined expertise"
    },
    {
        icon: Award,
        title: "Advanced Equipment",
        description: "State-of-the-art technology for precise and comfortable treatments"
    },
    {
        icon: CheckCircle2,
        title: "Hygiene & Safety",
        description: "Highest standards of sterilization and infection control"
    },
    {
        icon: Clock,
        title: "Patient-Centric Care",
        description: "Personalized treatment plans and compassionate service"
    }
];

const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "10,000+", label: "Happy Patients" },
    { value: "50+", label: "Treatments" },
    { value: "4.9", label: "Google Rating" }
];

function AnimatedCounter({ value, label }: { value: string; label: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center"
        >
            <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
                {value}
            </div>
            <div className="text-muted-foreground">{label}</div>
        </motion.div>
    );
}

export function WhyChoose() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
    const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <section ref={ref} id="why-choose" className="py-20 sm:py-32 relative overflow-hidden">
            {/* Animated Background Layers */}
            <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

            <motion.div
                style={{ y: y1 }}
                className="absolute inset-0"
            >
                <motion.div
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-50"
                    style={{ backgroundSize: "200% 200%" }}
                />
            </motion.div>

            <motion.div
                style={{ y: y2, rotate }}
                className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
            />

            <motion.div
                style={{ y: y1 }}
                className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
            />

            {/* Floating particles */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 5 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                    }}
                    className="absolute w-2 h-2 bg-primary/40 rounded-full blur-sm"
                    style={{
                        top: `${20 + i * 15}%`,
                        left: `${10 + i * 20}%`,
                    }}
                />
            ))}

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionWrapper>
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="font-heading text-4xl sm:text-5xl font-bold mb-4"
                        >
                            Why Choose <span className="gradient-text">GRACE Dental</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
                        >
                            Your trusted partner for exceptional dental care in South Bopal
                        </motion.p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {stats.map((stat, index) => (
                            <AnimatedCounter key={index} value={stat.value} label={stat.label} />
                        ))}
                    </div>

                    {/* Reasons Timeline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex gap-4 items-start"
                            >
                                <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10">
                                    <reason.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-xl font-semibold mb-2">
                                        {reason.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {reason.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </SectionWrapper>
            </div>
        </section>
    );
}
