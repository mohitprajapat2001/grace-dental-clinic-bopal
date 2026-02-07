"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Smile, Sparkles, Zap, Scissors, Braces, Syringe, X } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { staggerContainer, staggerItem } from "@/lib/animation-variants";

const services = [
    {
        icon: Smile,
        title: "General Dentistry",
        description: "Comprehensive dental care including check-ups, cleanings, and preventive treatments.",
        details: "Regular dental examinations, professional cleanings, cavity fillings, root canal therapy, and preventive care to maintain optimal oral health."
    },
    {
        icon: Sparkles,
        title: "Cosmetic Dentistry",
        description: "Transform your smile with our aesthetic dental procedures.",
        details: "Veneers, bonding, smile makeovers, and gum contouring to enhance the appearance of your teeth and boost your confidence."
    },
    {
        icon: Zap,
        title: "Teeth Whitening",
        description: "Professional whitening treatments for a brighter, more confident smile.",
        details: "In-office and take-home whitening solutions using advanced technology to safely lighten your teeth several shades."
    },
    {
        icon: Syringe,
        title: "Dental Implants",
        description: "Permanent solution for missing teeth with natural-looking results.",
        details: "Titanium implants surgically placed to replace missing teeth, providing a stable foundation for crowns, bridges, or dentures."
    },
    {
        icon: Braces,
        title: "Braces & Aligners",
        description: "Straighten your teeth with traditional braces or clear aligners.",
        details: "Orthodontic treatments including metal braces, ceramic braces, and invisible aligners to correct misalignment and bite issues."
    },
    {
        icon: Scissors,
        title: "Aesthetic Treatments",
        description: "Facial aesthetic procedures to complement your beautiful smile.",
        details: "Botox, dermal fillers, and other non-surgical cosmetic treatments to enhance your facial features and reduce signs of aging."
    }
];

export function Services() {
    const [selectedService, setSelectedService] = useState<number | null>(null);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

    return (
        <section ref={ref} id="services" className="py-20 sm:py-32 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-background" />
            <motion.div
                style={{ y }}
                className="absolute inset-0 -z-10"
            >
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
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
                    style={{ backgroundSize: "200% 200%" }}
                />
                <motion.div
                    style={{ rotate }}
                    className="absolute top-1/3 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
                />
            </motion.div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionWrapper>
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="font-heading text-4xl sm:text-5xl font-bold mb-4"
                        >
                            Our <span className="gradient-text">Services</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
                        >
                            Comprehensive dental and aesthetic solutions tailored to your unique needs
                        </motion.p>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        style={{ perspective: "1000px" }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                whileHover={{
                                    scale: 1.03,
                                    y: -12,
                                    rotateY: 5,
                                    rotateX: 5,
                                }}
                                onClick={() => setSelectedService(index)}
                                className="group relative bg-card p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-border overflow-hidden"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                {/* Enhanced glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-secondary/10 group-hover:to-accent/10 transition-all duration-700" />
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(30,136,168,0.15), transparent 50%)"
                                    }}
                                />

                                <div className="relative z-10">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                        className="mb-4 inline-block p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all"
                                    >
                                        <service.icon className="w-10 h-10 text-primary" />
                                    </motion.div>
                                    <h3 className="font-heading text-2xl font-semibold mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        {service.description}
                                    </p>
                                    <motion.span
                                        className="text-primary font-medium group-hover:underline inline-flex items-center gap-2"
                                        whileHover={{ x: 5 }}
                                    >
                                        Learn more →
                                    </motion.span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </SectionWrapper>
            </div>

            {/* Service Details Modal */}
            <AnimatePresence>
                {selectedService !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedService(null)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-card p-8 rounded-2xl max-w-2xl w-full shadow-2xl border border-border relative"
                        >
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="mb-6 inline-block p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10">
                                {(() => {
                                    const Icon = services[selectedService].icon;
                                    return <Icon className="w-12 h-12 text-primary" />;
                                })()}
                            </div>

                            <h3 className="font-heading text-3xl font-bold mb-4">
                                {services[selectedService].title}
                            </h3>
                            <p className="text-lg text-muted-foreground mb-6">
                                {services[selectedService].details}
                            </p>
                            <button
                                onClick={() => {
                                    setSelectedService(null);
                                    const appointmentSection = document.getElementById('appointment');
                                    appointmentSection?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                            >
                                Book This Service
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
