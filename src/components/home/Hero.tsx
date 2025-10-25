import { Button } from "@/components/ui/Button"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                            <span className="text-primary font-semibold text-sm">Welcome to HealthHub</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                            Your Health, Our Priority
                        </h1>

                        <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                            Connect with qualified healthcare professionals and manage your health journey with ease. Whether you're a
                            patient seeking care or a doctor expanding your practice, HealthHub is your trusted platform.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                                <Link href="#register" className="flex items-center gap-2">
                                    Get Started
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="#features">Learn More</Link>
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-8">
                            <div>
                                <p className="text-2xl md:text-3xl font-bold text-primary">10K+</p>
                                <p className="text-sm text-muted-foreground">Active Users</p>
                            </div>
                            <div>
                                <p className="text-2xl md:text-3xl font-bold text-primary">500+</p>
                                <p className="text-sm text-muted-foreground">Doctors</p>
                            </div>
                            <div>
                                <p className="text-2xl md:text-3xl font-bold text-primary">98%</p>
                                <p className="text-sm text-muted-foreground">Satisfaction</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative h-96 md:h-full min-h-96">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl" />
                        <div className="absolute inset-4 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl flex items-center justify-center">
                            <div className="text-center space-y-4">
                                <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                                    <div className="w-16 h-16 bg-primary/30 rounded-full flex items-center justify-center">
                                        <span className="text-3xl">💚</span>
                                    </div>
                                </div>
                                <p className="text-foreground font-semibold">Healthcare Made Simple</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
