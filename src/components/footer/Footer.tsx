import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-muted/50 border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-primary-foreground font-bold">H</span>
                            </div>
                            <span className="font-bold text-lg text-foreground">HealthHub</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Connecting patients with healthcare professionals for better health outcomes.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Contact</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2 text-muted-foreground">
                                <span>📧</span>
                                <a href="mailto:info@healthhub.com" className="hover:text-primary transition">
                                    info@healthhub.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-muted-foreground">
                                <span>📞</span>
                                <a href="tel:+1234567890" className="hover:text-primary transition">
                                    +1 (234) 567-890
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-muted-foreground">
                                <span>📍</span>
                                <span>123 Health Street, Medical City, MC 12345</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">© 2025 HealthHub. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-muted-foreground hover:text-primary transition text-sm">
                            Twitter
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition text-sm">
                            Facebook
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition text-sm">
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
