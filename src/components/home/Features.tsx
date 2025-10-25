import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"

const features = [
    {
        icon: "👥",
        title: "Connect with Doctors",
        description: "Find and connect with qualified healthcare professionals in your area.",
    },
    {
        icon: "⏰",
        title: "Easy Scheduling",
        description: "Book appointments at your convenience with instant confirmation.",
    },
    {
        icon: "🔒",
        title: "Secure & Private",
        description: "Your health data is encrypted and protected with industry standards.",
    },
    {
        icon: "💬",
        title: "Direct Communication",
        description: "Chat with your healthcare provider for quick consultations.",
    },
]

export function Features() {
    return (
        <section id="features" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                        Why Choose HealthHub?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Experience healthcare like never before with our innovative platform
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <Card key={index} className="border-border hover:border-primary/50 transition">
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-2xl">
                                    {feature.icon}
                                </div>
                                <CardTitle className="text-foreground">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
