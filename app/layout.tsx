import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap"
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap"
});

export const metadata: Metadata = {
    title: "GRACE Dental and Aesthetic Clinic - Trusted Dental Clinic in South Bopal, Ahmedabad",
    description: "Experience world-class dental care at GRACE Dental and Aesthetic Clinic in South Bopal, Ahmedabad. Offering general dentistry, cosmetic dentistry, teeth whitening, dental implants, braces, and aesthetic treatments with advanced technology and compassionate care.",
    keywords: [
        "dental clinic South Bopal",
        "best dentist South Bopal",
        "dentist in Bopal Ahmedabad",
        "teeth whitening Ahmedabad",
        "dental implants Bopal",
        "cosmetic dentistry Ahmedabad",
        "GRACE Dental Clinic",
        "aesthetic dentistry South Bopal"
    ],
    authors: [{ name: "GRACE Dental and Aesthetic Clinic" }],
    openGraph: {
        title: "GRACE Dental and Aesthetic Clinic - South Bopal, Ahmedabad",
        description: "Your trusted partner for exceptional dental care. Advanced treatments, experienced doctors, and patient-centric care in South Bopal.",
        url: "https://gracedental.com",
        siteName: "GRACE Dental Clinic",
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "GRACE Dental and Aesthetic Clinic",
        description: "Trusted dental clinic in South Bopal, Ahmedabad",
    },
    robots: {
        index: true,
        follow: true,
    },
    verification: {
        google: "your-google-verification-code",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Dentist",
                            "name": "GRACE Dental and Aesthetic Clinic",
                            "image": "https://gracedental.com/logo.png",
                            "description": "Trusted dental clinic in South Bopal, Ahmedabad offering comprehensive dental and aesthetic treatments",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "South Bopal",
                                "addressLocality": "Ahmedabad",
                                "addressRegion": "Gujarat",
                                "addressCountry": "IN"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": 23.0225,
                                "longitude": 72.4567
                            },
                            "telephone": "+919876543210",
                            "email": "info@gracedental.com",
                            "openingHoursSpecification": [
                                {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                    "opens": "10:00",
                                    "closes": "20:00"
                                },
                                {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": "Sunday",
                                    "opens": "10:00",
                                    "closes": "14:00"
                                }
                            ],
                            "priceRange": "₹₹",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.9",
                                "reviewCount": "200"
                            }
                        })
                    }}
                />
            </head>
            <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange={false}
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
