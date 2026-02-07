"use client";

import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { WhyChoose } from "@/components/sections/why-choose";
import { Testimonials } from "@/components/sections/testimonials";
import { AppointmentCTA } from "@/components/sections/appointment-cta";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <main className="min-h-screen">
            {/* Floating Theme Toggle */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="fixed top-6 right-6 z-50"
            >
                <ThemeToggle />
            </motion.div>

            {/* All Sections */}
            <Hero />
            <About />
            <Services />
            <WhyChoose />
            <Testimonials />
            <AppointmentCTA />
            <Contact />
            <Footer />
        </main>
    );
}
