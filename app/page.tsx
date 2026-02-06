import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { SplineScene } from "@/components/ui/spline-scene"
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background"
import { SparklesCore } from "@/components/ui/sparkles"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { Navbar } from "@/components/ui/navbar"
import { Pricing } from "@/components/ui/pricing"
import {
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Clock,
  DollarSign,
  BarChart3,
  Bot,
  Workflow,
  Brain,
  MessageSquare,
  Cog,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Facebook,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation Component */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="container mx-auto px-4">
          <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden border-none">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

            <div className="flex h-full">
              {/* Left content */}
              <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text">
                  Detect Tomorrow&apos;s Breakthroughs Before Everyone Else
                </h1>
                <p className="mt-4 text-neutral-300 max-w-lg">
                  SignalWeave is a temporal intelligence system that accumulates weak signals across time and uncovers emerging trends early — powered by Qdrant vector memory and autonomous multi-agent reasoning.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a href="https://signalweave.streamlit.app/" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                      Get Started →
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-neutral-600 text-neutral-300 hover:bg-neutral-800 bg-transparent"
                  >
                    View Live Dashboard
                  </Button>
                </div>

                <div className="flex items-center gap-8 text-sm text-neutral-400 mt-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Qdrant Vector Memory</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Multi-Agent Intelligence</span>
                  </div>
                </div>
              </div>

              {/* Right content */}
              <div className="flex-1 relative">
                <SplineScene
                  scene="https://prod.spline.design/UbM7F-HZcyTbZ4y3/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Why Most Trend Tracking Fails</h2>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  News is noisy and reactive
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  Trends don&apos;t appear in a single article
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  Weak signals only emerge through repetition over time
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  Traditional RAG systems lack temporal memory
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">SignalWeave Solves This With Temporal Vector Memory</h3>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Continuous Signal Ingestion — RSS + research + infrastructure feeds updated daily
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Qdrant Long-Term Memory — Persistent storage of signals and evolving clusters
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Emergence Detection — Detects rapid growth patterns before mainstream adoption
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Agentic Evaluation Layer — Critic + Controller agents ensure grounded decisions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">A Product-Grade Weak Signal Engine</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive trend intelligence features for early signal detection
            </p>
          </div>

          <BentoGrid className="lg:grid-rows-3">
            <BentoCard
              name="Emerging Cluster Dashboard"
              className="lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10" />}
              Icon={BarChart3}
              description="Visual interface to explore emerging trend clusters, track signal evolution over time, and identify breakthrough patterns before mainstream adoption."
              href="#"
              cta="Learn more"
            />
            <BentoCard
              name="Continuous Signal Ingestion"
              className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10" />}
              Icon={Workflow}
              description="RSS feeds, research papers, and infrastructure updates ingested and processed daily to capture the earliest weak signals across emerging tech."
              href="#"
              cta="Learn more"
            />
            <BentoCard
              name="Coherence & Grounding Metrics"
              className="lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10" />}
              Icon={Brain}
              description="Quantitative evaluation of cluster quality and signal validity, ensuring only credible and coherent trends surface to decision-makers."
              href="#"
              cta="Learn more"
            />
            <BentoCard
              name="Hybrid Semantic + Keyword Search"
              className="lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10" />}
              Icon={MessageSquare}
              description="Find signals by meaning or exact keywords, with temporal filtering to surface trends at the right stage of emergence."
              href="#"
              cta="Learn more"
            />
            <BentoCard
              name="Explainable AI Summaries"
              className="lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10" />}
              Icon={Bot}
              description="Clear, grounded reasoning for every trend cluster with source citations, enabling teams to understand why signals are emerging now."
              href="#"
              cta="Learn more"
            />
          </BentoGrid>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimonials" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Top 15 Finalist — Convolve 4.0 MAS Track</h2>
            <p className="text-xl text-gray-300">Pan-IIT Hackathon 2024</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black/80 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  <p className="text-gray-300">
                    "SignalWeave represents breakthrough work in temporal weak-signal detection. The integration of multi-agent systems with vector memory is genuinely innovative."
                  </p>
                  <div>
                    <p className="font-semibold text-white">Competition Judges</p>
                    <p className="text-sm text-gray-400">Pan-IIT Hackathon, Convolve 4.0</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/80 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  <p className="text-gray-300">
                    Selected from 10,000+ participants across India and invited to IIT Madras for the on-campus finale. Recognized for innovative approach to emerging tech intelligence.
                  </p>
                  <div>
                    <p className="font-semibold text-white">Achievement</p>
                    <p className="text-sm text-gray-400">Top Finalist, Multi-Agent Systems Track</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/80 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  <p className="text-gray-300">
                    "The ability to detect emerging signals before they become mainstream is invaluable for strategy teams. SignalWeave delivers on that promise with real intelligence."
                  </p>
                  <div>
                    <p className="font-semibold text-white">Innovation Team</p>
                    <p className="text-sm text-gray-400">Tech Strategy & Research</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Why SignalWeave Wins</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Strategic advantages for teams seeking competitive intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-green-900/40 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Weeks Ahead</h3>
              <p className="text-gray-300">Detect trends before mainstream adoption</p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-blue-900/40 rounded-full flex items-center justify-center mx-auto">
                <Brain className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Temporal Memory</h3>
              <p className="text-gray-300">Qdrant vector memory tracks signal evolution</p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-purple-900/40 rounded-full flex items-center justify-center mx-auto">
                <BarChart3 className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Coherence Score</h3>
              <p className="text-gray-300">Only credible, validated trends surface</p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-orange-900/40 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Continuous Ingestion</h3>
              <p className="text-gray-300">Daily updated signal feeds</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-black">
        <Pricing
          title="Choose Your AI Transformation Plan"
          description="Flexible pricing designed to scale with your business growth\nAll plans include setup, training, and 30-day money-back guarantee"
          plans={[
            {
              name: "Starter",
              price: "997",
              yearlyPrice: "797",
              period: "month",
              features: [
                "AI Chatbot for customer support",
                "Basic workflow automation (3 processes)",
                "Email integration",
                "Standard analytics dashboard",
                "Email support",
                "30-day money-back guarantee",
              ],
              description: "Perfect for small businesses starting their AI journey",
              buttonText: "Start Free Trial",
              href: "#contact",
              isPopular: false,
            },
            {
              name: "Professional",
              price: "2497",
              yearlyPrice: "1997",
              period: "month",
              features: [
                "Advanced AI chatbot with lead qualification",
                "Complete workflow automation (10+ processes)",
                "CRM & e-commerce integrations",
                "Advanced analytics & reporting",
                "Priority phone & email support",
                "Custom AI training",
                "Monthly optimization calls",
                "ROI tracking & reporting",
              ],
              description: "Ideal for growing businesses ready to scale with AI",
              buttonText: "Get Started",
              href: "#contact",
              isPopular: true,
            },
            {
              name: "Enterprise",
              price: "4997",
              yearlyPrice: "3997",
              period: "month",
              features: [
                "Custom AI development & deployment",
                "Unlimited workflow automation",
                "Full system integrations",
                "Dedicated AI strategist",
                "24/7 priority support",
                "Advanced security & compliance",
                "White-label solutions",
                "Quarterly business reviews",
                "Custom training & workshops",
              ],
              description: "Complete AI transformation for large organizations",
              buttonText: "Contact Sales",
              href: "#contact",
              isPopular: false,
            },
          ]}
        />
      </section>

      {/* Process Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">How SignalWeave Works</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Three core components powering weak-signal detection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-6">
              <div className="h-20 w-20 bg-white text-black rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-white">Continuous Ingestion</h3>
              <p className="text-gray-300">
                Daily feeds from RSS, research, and infrastructure sources aggregate global tech signals into raw signal streams
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="h-20 w-20 bg-white text-black rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-white">Vector Memory & Clustering</h3>
              <p className="text-gray-300">
                Qdrant stores signals persistently and discovers emerging trend clusters through temporal pattern analysis
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="h-20 w-20 bg-white text-black rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-white">Agentic Evaluation</h3>
              <p className="text-gray-300">
                Multi-agent system with critic & controller agents validates coherence and surfaces only credible trends
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <AnimatedGradientBackground
          Breathing={true}
          gradientColors={["#0A0A0A", "#2979FF", "#FF80AB", "#FF6D00", "#FFD600", "#00E676", "#3D5AFE"]}
          gradientStops={[35, 50, 60, 70, 80, 90, 100]}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="relative h-32 w-full flex flex-col items-center justify-center">
              <div className="w-full absolute inset-0">
                <SparklesCore
                  id="ctasparticles"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={100}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                  speed={0.8}
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 relative z-20 text-balance">
                Start Exploring Emerging Signals Today
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://signalweave.streamlit.app/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-100">
                  Launch SignalWeave Dashboard →
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative py-20 bg-black border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black/90" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">SignalWeave</h3>
                <p className="text-gray-300 leading-relaxed">
                  Built with Qdrant • Multi-Agent Intelligence • Temporal Trend Discovery
                </p>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/mohamedyaser08/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/tmohamedyaser"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/Yaser-123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Features</h4>
              <ul className="space-y-3">
                {[
                  "Signal Clustering",
                  "Temporal Analytics",
                  "Agentic Evaluation",
                  "Coherence Metrics",
                  "Semantic Search",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Company</h4>
              <ul className="space-y-3">
                {[
                  { name: "About Us", href: "#" },
                  { name: "Case Studies", href: "#testimonials" },
                  { name: "Blog", href: "#" },
                  { name: "Careers", href: "#" },
                  { name: "Contact", href: "#contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Launch App</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                    <Mail className="h-4 w-4" />
                  </div>
                  <a href="mailto:1ammar.yaser@gmail.com" className="hover:text-white transition-colors duration-300">
                    1ammar.yaser@gmail.com
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <a href="https://signalweave.streamlit.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                    Dashboard →
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <span>Detect Tomorrow&apos;s Trends</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 mt-16 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <p className="text-gray-400 text-center lg:text-left">© 2024 SignalWeave. Built with Qdrant • Multi-Agent Intelligence • Temporal Trend Discovery</p>

              <div className="flex flex-wrap justify-center lg:justify-end space-x-8">
                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
