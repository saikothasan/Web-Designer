"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, useAnimation, useScroll, useTransform } from "framer-motion"
import { Menu, X, ArrowRight, Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { GitHubProjects } from "@/components/github-projects"

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const controls = useAnimation()
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    })
  }, [controls])

  const skills = [
    { name: "Web Design", progress: 90 },
    { name: "UI/UX Design", progress: 85 },
    { name: "React Development", progress: 95 },
    { name: "Mobile Development", progress: 80 },
  ]

  const services = [
    {
      title: "Web Development",
      description: "Creating modern and responsive websites using the latest technologies.",
      icon: "🌐",
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user interfaces and experiences.",
      icon: "🎨",
    },
    {
      title: "Mobile Apps",
      description: "Developing cross-platform mobile applications for iOS and Android.",
      icon: "📱",
    },
    {
      title: "Consulting",
      description: "Technical consulting and digital transformation strategies.",
      icon: "💡",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-2xl font-bold text-primary">
              Gerold
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
              <a href="#services" className="hover:text-primary transition-colors">
                Services
              </a>
              <a href="#portfolio" className="hover:text-primary transition-colors">
                Portfolio
              </a>
              <a href="#testimonials" className="hover:text-primary transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Home
                </a>
                <a href="#about" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  About
                </a>
                <a
                  href="#services"
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#portfolio"
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </a>
                <a
                  href="#testimonials"
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900"
      >
        <div className="absolute inset-0 bg-white/40 dark:bg-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="relative text-center max-w-4xl mx-auto px-4"
        >
          <Badge className="mb-6 bg-primary text-primary-foreground">Available for Freelance</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
            Creative Developer & Designer
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            Crafting digital experiences that leave lasting impressions
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">View Portfolio</Button>
            <Button variant="outline">Contact Me</Button>
          </div>
        </motion.div>
        <motion.div style={{ opacity }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ArrowRight className="h-6 w-6 rotate-90 text-primary" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <Badge className="mb-6 bg-primary text-primary-foreground">About Me</Badge>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                A passionate developer with a creative mind
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                With over 8 years of experience in web development and design, I help businesses and individuals bring
                their digital visions to life. My approach combines technical expertise with creative problem-solving to
                deliver exceptional results.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-4xl font-bold mb-2 text-primary">8+</h3>
                  <p className="text-gray-700 dark:text-gray-300">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold mb-2 text-primary">200+</h3>
                  <p className="text-gray-700 dark:text-gray-300">Projects Completed</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold mb-2 text-primary">50+</h3>
                  <p className="text-gray-700 dark:text-gray-300">Happy Clients</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold mb-2 text-primary">12</h3>
                  <p className="text-gray-700 dark:text-gray-300">Awards Won</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Instagram className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-700 dark:text-gray-300">{skill.progress}%</span>
                  </div>
                  <Progress value={skill.progress} className="h-2" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-primary text-primary-foreground">Services</Badge>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">What I Do</h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              I offer a comprehensive range of services to help businesses thrive in the digital world
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-primary text-primary-foreground">Portfolio</Badge>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Latest Works</h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Explore my recent projects and creative works
            </p>
          </div>

          <GitHubProjects />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-primary text-primary-foreground">Testimonials</Badge>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">What Clients Say</h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Feedback from some of my amazing clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="mr-4">
                        <Image src="/placeholder.svg" alt="Client" width={50} height={50} className="rounded-full" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">Client Name</h4>
                        <p className="text-gray-600 dark:text-gray-400">CEO, Company</p>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      "Working with Gerold was an absolute pleasure. Their attention to detail and creative solutions
                      helped take our project to the next level."
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-primary text-primary-foreground">Contact</Badge>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Get In Touch</h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Let's discuss your project and see how I can help
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon" className="shrink-0">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Email</h3>
                    <p className="text-gray-700 dark:text-gray-300">hello@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon" className="shrink-0">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Phone</h3>
                    <p className="text-gray-700 dark:text-gray-300">+1 (555) 000-0000</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon" className="shrink-0">
                    <MapPin className="h-4 w-4" />
                  </Button>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Location</h3>
                    <p className="text-gray-700 dark:text-gray-300">New York, NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Gerold</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Crafting digital experiences that make a difference.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Instagram className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Services</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Mobile Development</li>
                <li>Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <a href="#about" className="hover:text-primary">
                    About
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-primary">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-primary">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Newsletter</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Subscribe to receive updates and news.</p>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Gerold. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

