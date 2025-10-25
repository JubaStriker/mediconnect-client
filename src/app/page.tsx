import { Navbar } from "@/components/nav/Navbar"
import { Hero } from "@/components/home/Hero"
import { Features } from "@/components/home/Features"
import { RegistrationOptions } from "@/components/home/RegistrationOptions"
import { Footer } from "@/components/footer/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <RegistrationOptions />
      <Footer />
    </main>
  )
}
