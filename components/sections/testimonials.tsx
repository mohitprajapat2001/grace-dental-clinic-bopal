"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { useState, useEffect } from "react";

const testimonials = [
    {
        name: "Priya Patel",
        location: "South Bopal",
        rating: 5,
        text: "Excellent dental care! The team at GRACE Dental made me feel comfortable throughout my treatment. Highly recommend for anyone in South Bopal."
    },
    {
        name: "Rahul Shah",
        location: "Bopal",
        rating: 5,
        text: "Best dental clinic in the area. Professional staff, modern equipment, and painless procedures. My entire family goes here now."
    },
    {
        name: "Anjali Desai",
        location: "South Bopal",
        rating: 5,
        text: "I was nervous about getting dental implants, but Dr. at GRACE Dental explained everything clearly and the results are amazing!"
    },
    {
        name: "Karan Mehta",
        location: "Bopal",
        rating: 5,
        text: "Very clean and hygienic clinic. The doctors are experienced and caring. Great experience with teeth whitening treatment."
    },
    {
        name: "Sneha Joshi",
        location: "South Bopal",
        rating: 5,
        text: "Outstanding service! From booking to treatment, everything was smooth. The staff is friendly and the clinic has a calming atmosphere."
    }
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="testimonials" className="py-20 sm:py-32 bg-muted/30">
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
                            What Our <span className="gradient-text">Patients Say</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
                        >
                            Trusted by families in South Bopal
                        </motion.p>
                    </div>

                    {/* Testimonial Slider */}
                    <div className="max-w-4xl mx-auto relative">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="bg-card p-8 sm:p-12 rounded-2xl shadow-xl border border-border relative"
                        >
                            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />

                            <div className="relative z-10">
                                <div className="flex gap-1 mb-4 justify-center">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                                    ))}
                                </div>

                                <p className="text-lg sm:text-xl text-center mb-6 italic">
                                    "{testimonials[currentIndex].text}"
                                </p>

                                <div className="text-center">
                                    <p className="font-semibold text-lg">
                                        {testimonials[currentIndex].name}
                                    </p>
                                    <p className="text-muted-foreground">
                                        {testimonials[currentIndex].location}
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Dots Navigation */}
                        <div className="flex justify-center gap-2 mt-8">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                            ? "bg-primary w-8"
                                            : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Google Reviews Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-center mt-12"
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full shadow-lg border border-border">
                            <Star className="w-5 h-5 fill-accent text-accent" />
                            <span className="font-semibold">4.9 Rating on Google</span>
                            <span className="text-muted-foreground">• 200+ Reviews</span>
                        </div>
                    </motion.div>
                </SectionWrapper>
            </div>
        </section>
    );
}
