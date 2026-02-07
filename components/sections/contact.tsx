"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function Contact() {
    return (
        <section id="contact" className="py-20 sm:py-32 bg-background">
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
                            Visit <span className="gradient-text">Our Clinic</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
                        >
                            We're here to help you achieve your perfect smile
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <div className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-primary/10">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Location</h3>
                                        <p className="text-muted-foreground">
                                            GRACE Dental and Aesthetic Clinic<br />
                                            South Bopal, Ahmedabad<br />
                                            Gujarat, India
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-primary/10">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Phone</h3>
                                        <a
                                            href="tel:+919876543210"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            +91 98765 43210
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-primary/10">
                                        <MessageCircle className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                                        <a
                                            href="https://wa.me/919876543210"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            Chat with us on WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-primary/10">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                                        <a
                                            href="mailto:info@gracedental.com"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            info@gracedental.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-primary/10">
                                        <Clock className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Clinic Hours</h3>
                                        <div className="text-muted-foreground space-y-1">
                                            <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                                            <p>Sunday: 10:00 AM - 2:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden h-full min-h-[500px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.3!2d72.4567!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzIxLjAiTiA3MsKwMjcnMjQuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full"
                                />
                            </div>
                        </motion.div>
                    </div>
                </SectionWrapper>
            </div>
        </section>
    );
}
