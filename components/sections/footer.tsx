"use client";

import { motion } from "framer-motion";
import { Heart, Facebook, Instagram, Twitter, Mail } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-muted/50 to-background border-t border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Heart className="w-8 h-8 text-primary fill-primary" />
                            <span className="font-heading text-2xl font-bold gradient-text">
                                GRACE Dental
                            </span>
                        </div>
                        <p className="text-muted-foreground mb-4">
                            Your trusted partner for exceptional dental care in South Bopal, Ahmedabad.
                        </p>
                        <div className="flex gap-3">
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5 text-primary" />
                            </motion.a>
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5 text-primary" />
                            </motion.a>
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5 text-primary" />
                            </motion.a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {["About", "Services", "Testimonials", "Contact"].map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-heading text-lg font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            {[
                                "General Dentistry",
                                "Cosmetic Dentistry",
                                "Teeth Whitening",
                                "Dental Implants",
                                "Braces & Aligners"
                            ].map((service) => (
                                <li key={service}>
                                    <a
                                        href="#services"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-heading text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-muted-foreground">
                            <li>
                                South Bopal, Ahmedabad<br />
                                Gujarat, India
                            </li>
                            <li>
                                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                                    +91 98765 43210
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@gracedental.com" className="hover:text-primary transition-colors flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    info@gracedental.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border pt-8 text-center">
                    <p className="text-muted-foreground">
                        © {currentYear} GRACE Dental and Aesthetic Clinic. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                        Trusted Dental Clinic in South Bopal | Best Dentist in Bopal, Ahmedabad
                    </p>
                </div>
            </div>
        </footer>
    );
}
