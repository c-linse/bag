import React from "react";
import { Share2, Briefcase, GraduationCap, Activity, CalendarDays, Award, Terminal } from "lucide-react";

function LinkedinIcon({ className = "", ...props }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

function YoutubeIcon({ className = "", ...props }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
    );
}

// Simple Card primitives (no external UI library required)
function Card({ children, className = "" }) {
    return <div className={`bg-white border border-gray-200 rounded-2xl ${className}`}>{children}</div>;
}
function CardHeader({ children, className = "" }) {
    return <div className={`px-4 pt-4 pb-2 border-b border-gray-200 ${className}`}>{children}</div>;
}
function CardTitle({ children, className = "" }) {
    return <div className={`font-semibold flex items-center gap-2 ${className}`}>{children}</div>;
}
function CardContent({ children, className = "" }) {
    return <div className={`p-4 ${className}`}>{children}</div>;
}

function Button({ children, onClick, variant = "primary", className = "" }) {
    const base = "inline-flex items-center gap-2 rounded-2xl px-4 py-2 border text-sm transition-shadow";
    const styles = variant === "secondary"
        ? "border border-gray-300 bg-white text-gray-800 hover:shadow-lg"
        : "border-transparent bg-gray-800 text-white hover:shadow-lg";
    return (
        <button onClick={onClick} className={`${base} ${styles} ${className}`}>
            {children}
        </button>
    );
}

function LinkCard({ href, Icon, label, hint }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
            <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="flex items-center gap-3">
          <span className="p-2 rounded-xl bg-white/5">
            <Icon className="w-5 h-5" aria-hidden />
          </span>
                    <div className="flex flex-col">
                        <span className="font-medium">{label}</span>
                        {hint ? <span className="text-xs opacity-70">{hint}</span> : null}
                    </div>
                </CardContent>
            </Card>
        </a>
    );
}

export default function ChristophLanding() {

    const CALENDLY_URL = "https://calendly.com/christophlinse";
    const handleShare = async () => {
        const url = window.location.href;
        if (navigator.share) {
            try {
                await navigator.share({ title: "Christoph Linse – Links", text: "Check out Christoph Linse's landing page:", url });
                return;
            } catch (_) { /* user canceled */ }
        }
        try {
            await navigator.clipboard.writeText(url);
        } catch (_) {
            alert("Could not copy link");
        }
    };

    const handleSchedule = () => {
        window.open(CALENDLY_URL, "_blank");
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            <div className="max-w-4xl mx-auto px-4 py-10 sm:py-14">
                {/* Header */}
                <header className="text-center mb-10">
                    <h1 className="mt-2 text-3xl sm:text-5xl font-semibold tracking-tight">Christoph Linse</h1>
                    <p className="mt-3 text-base sm:text-lg opacity-80">Engineer • Educator • Endurance Athlete</p>

                    <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
                        <Button onClick={handleShare}>
                            <Share2 className="w-4 h-4" />
                            <span>Share this page</span>
                        </Button>
                        <Button onClick={handleSchedule} variant="secondary">
                            <CalendarDays className="w-4 h-4" />
                            <span>Schedule meeting</span>
                        </Button>
                    </div>
                </header>

                {/* Sections */}
                <section className="grid gap-7">
                    {/* Professional */}
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <Briefcase className="w-5 h-5" /> Professional
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="grid sm:grid-cols-2 gap-4">
                            <LinkCard
                                href="https://onlu.ch/berater/christoph-linse/"
                                Icon={Briefcase}
                                label="ONLU – Technical Experience"
                                hint="Consulting profile"
                            />
                            <LinkCard
                                href="https://www.credly.com/users/christoph-linse"
                                Icon={Award}
                                label="Certifications"
                                hint="View of obtained certifications"
                            />
                            <LinkCard
                                href="https://www.udemy.com/user/christoph-linse/"
                                Icon={GraduationCap}
                                label="Udemy – Instructor"
                                hint="Course author profile"
                            />
                            <LinkCard
                                href="https://profile.hackthebox.com/profile/019d5e22-ba31-70c0-b419-b518840b005c"
                                Icon={Terminal}
                                label="Hack The Box"
                                hint="Public profile"
                            />
                        </CardContent>
                    </Card>

                    {/* Social, Media & Fitness */}
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <Share2 className="w-5 h-5" /> Social, Media & Fitness
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="grid sm:grid-cols-2 gap-4">
                            <LinkCard
                                href="https://www.strava.com/athletes/christoph-linse"
                                Icon={Activity}
                                label="Strava"
                                hint="Athlete christoph-linse"
                            />
                            <LinkCard
                                href="https://www.youtube.com/@christophlinse1811"
                                Icon={YoutubeIcon}
                                label="YouTube"
                                hint="@christophlinse1811"
                            />
                            <LinkCard
                                href="https://www.linkedin.com/in/christoph-linse"
                                Icon={LinkedinIcon}
                                label="LinkedIn"
                                hint="/christoph-linse"
                            />
                        </CardContent>
                    </Card>
                </section>

                <footer className="mt-10 text-center text-xs opacity-70">
                    <p>
                        © {new Date().getFullYear()} Christoph Linse • All rights reserved{' '}
                        <a
                            href="https://github.com/c-linse/bag"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block ml-1"
                        >
                            <svg className="w-4 h-4 inline" viewBox="0 0 24 24" fill="currentColor" aria-label="GitHub">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </a>
                    </p>
                </footer>
            </div>
        </div>
    );
}
