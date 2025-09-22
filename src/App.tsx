import React, { useState } from "react";
import { Share2, Copy, Briefcase, GraduationCap, Linkedin, Youtube, Activity } from "lucide-react";

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
    const [copied, setCopied] = useState(false);

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
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (_) {
            alert("Could not copy link");
        }
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
                        <Button onClick={handleShare} variant="secondary">
                            <Copy className="w-4 h-4" />
                            <span>{copied ? "Copied!" : "Copy link"}</span>
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
                                href="https://www.udemy.com/user/christoph-linse/"
                                Icon={GraduationCap}
                                label="Udemy – Instructor"
                                hint="Course author profile"
                            />
                            <LinkCard
                                href="https://www.linkedin.com/in/christoph-linse-a29662221/"
                                Icon={Linkedin}
                                label="LinkedIn"
                                hint="/christoph-linse"
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
                                href="https://www.strava.com/athletes/christoph_linse"
                                Icon={Activity}
                                label="Strava"
                                hint="Athlete christoph_linse"
                            />
                            <LinkCard
                                href="https://www.youtube.com/@christophlinse1811"
                                Icon={Youtube}
                                label="YouTube"
                                hint="@christophlinse1811"
                            />
                        </CardContent>
                    </Card>
                </section>

                <footer className="mt-10 text-center text-xs opacity-70">
                    <p>© {new Date().getFullYear()} Christoph Linse • All rights reserved</p>
                </footer>
            </div>
        </div>
    );
}
