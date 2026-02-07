"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Phone, MessageCircle, User, Mail, FileText } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";

export function AppointmentCTA() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });

        setTimeout(() => setShowSuccess(false), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="appointment" className="py-20 sm:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,136,168,0.1),transparent_70%)] animate-pulse" style={{ animationDuration: '3s' }} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionWrapper>
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="font-heading text-4xl sm:text-5xl font-bold mb-4"
                        >
                            Book Your <span className="gradient-text">Appointment</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
                        >
                            Take the first step towards a healthier, more beautiful smile
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Quick Contact Options */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <h3 className="font-heading text-2xl font-semibold mb-6">
                                Quick Contact
                            </h3>

                            <motion.a
                                href="tel:+919876543210"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center gap-4 p-6 bg-card rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all group"
                            >
                                <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                    <Phone className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <p className="font-semibold text-lg mb-1">Call Us Now</p>
                                    <p className="text-muted-foreground">+91 98765 43210</p>
                                </div>
                            </motion.a>

                            <motion.a
                                href="https://wa.me/919876543210?text=Hi, I would like to book an appointment"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center gap-4 p-6 bg-card rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all group"
                            >
                                <div className="p-4 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                                    <MessageCircle className="w-8 h-8 text-secondary" />
                                </div>
                                <div>
                                    <p className="font-semibold text-lg mb-1">WhatsApp Us</p>
                                    <p className="text-muted-foreground">Quick response guaranteed</p>
                                </div>
                            </motion.a>

                            <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
                                <h4 className="font-semibold text-lg mb-4">Why Book with Us?</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground">Flexible scheduling</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground">Instant confirmation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <MessageCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground">24/7 support</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Appointment Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-xl border border-border space-y-6">
                                <h3 className="font-heading text-2xl font-semibold mb-6">
                                    Request Appointment
                                </h3>

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Full Name *
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                        Phone Number *
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                                        Service Required
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="general">General Dentistry</option>
                                        <option value="cosmetic">Cosmetic Dentistry</option>
                                        <option value="whitening">Teeth Whitening</option>
                                        <option value="implants">Dental Implants</option>
                                        <option value="braces">Braces & Aligners</option>
                                        <option value="aesthetic">Aesthetic Treatments</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message
                                    </label>
                                    <div className="relative">
                                        <FileText className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                                            placeholder="Any specific concerns or preferred time?"
                                        />
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    className="w-full"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>Processing...</>
                                    ) : (
                                        <>
                                            <Calendar className="w-5 h-5 mr-2" />
                                            Request Appointment
                                        </>
                                    )}
                                </Button>

                                {showSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-secondary/10 border border-secondary rounded-xl text-center"
                                    >
                                        <p className="text-secondary font-medium">
                                            ✓ Request submitted! We&apos;ll contact you shortly.
                                        </p>
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </SectionWrapper>
            </div>
        </section>
    );
}
