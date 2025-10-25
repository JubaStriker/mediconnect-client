import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import Link from "next/link"

export function RegistrationOptions() {
    return (
        <section id="register" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                        Join HealthHub Today
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Choose your role and start your journey with us
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Patient Registration */}
                    <Card className="border-2 border-border hover:border-primary/50 transition relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
                        <CardHeader className="relative z-10">
                            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-4xl">
                                👤
                            </div>
                            <CardTitle className="text-2xl text-foreground">Patient</CardTitle>
                            <CardDescription>Access healthcare services and manage your health</CardDescription>
                        </CardHeader>
                        <CardContent className="relative z-10 space-y-4">
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                    Find qualified doctors
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                    Book appointments
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                    Access medical records
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                    Get prescriptions online
                                </li>
                            </ul>
                            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                                <Link href="/register/patient">Register as Patient</Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Doctor Registration */}
                    <Card className="border-2 border-border hover:border-primary/50 transition relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
                        <CardHeader className="relative z-10">
                            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-4xl">
                                🩺
                            </div>
                            <CardTitle className="text-2xl text-foreground">Doctor</CardTitle>
                            <CardDescription>Expand your practice and reach more patients</CardDescription>
                        </CardHeader>
                        <CardContent className="relative z-10 space-y-4">
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                    Build your profile
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                    Manage appointments
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                    Reach more patients
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                    Grow your practice
                                </li>
                            </ul>
                            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                                <Link href="/register/doctor">Register as Doctor</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
