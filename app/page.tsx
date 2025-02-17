"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, useAnimation, useScroll, useTransform } from "framer-motion"
import { Menu, X, ArrowRight, Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-2xl font-bold">
              Gerold
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-gray-400 transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-gray-400 transition-colors">
                About
              </a>
              <a href="#services" className="hover:text-gray-400 transition-colors">
                Services
              </a>
              <a href="#portfolio" className="hover:text-gray-400 transition-colors">
                Portfolio
              </a>
              <a href="#testimonials" className="hover:text-gray-400 transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="hover:text-gray-400 transition-colors">
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
            className="md:hidden bg-black/95 border-t border-neutral-800"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="hover:text-gray-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Home
                </a>
                <a href="#about" className="hover:text-gray-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                  About
                </a>
                <a
                  href="#services"
                  className="hover:text-gray-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#portfolio"
                  className="hover:text-gray-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </a>
                <a
                  href="#testimonials"
                  className="hover:text-gray-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="hover:text-gray-400 transition-colors"
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
      <section id="home" className="relative h-screen flex items-center justify-center">
        <Image
          src="https://sjc.microlink.io/jtcYdcLJWpugy1et_ecGUaCK8G9X186I5DsPORNG7pqke7OuEzZ8pF0F7g_jGyMl2STJDUw_2nmty3_5RDwVEg.jpeg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="relative text-center max-w-4xl mx-auto px-4"
        >
          <Badge className="mb-6">Available for Freelance</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Creative Developer & Designer</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Crafting digital experiences that leave lasting impressions
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-white text-black hover:bg-gray-200">View Portfolio</Button>
            <Button variant="outline">Contact Me</Button>
          </div>
        </motion.div>
        <motion.div style={{ opacity }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ArrowRight className="h-6 w-6 rotate-90" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <Badge className="mb-6">About Me</Badge>
              <h2 className="text-3xl font-bold mb-6">A passionate developer with a creative mind</h2>
              <p className="text-gray-400 mb-6">
                With over 8 years of experience in web development and design, I help businesses and individuals bring
                their digital visions to life. My approach combines technical expertise with creative problem-solving to
                deliver exceptional results.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-4xl font-bold mb-2">8+</h3>
                  <p className="text-gray-400">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold mb-2">200+</h3>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold mb-2">50+</h3>
                  <p className="text-gray-400">Happy Clients</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold mb-2">12</h3>
                  <p className="text-gray-400">Awards Won</p>
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
                    <span>{skill.name}</span>
                    <span>{skill.progress}%</span>
                  </div>
                  <Progress value={skill.progress} className="h-2" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-6">Services</Badge>
            <h2 className="text-3xl font-bold mb-4">What I Do</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
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
                <Card className="bg-neutral-900 border-neutral-800">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-6">Portfolio</Badge>
            <h2 className="text-3xl font-bold mb-4">Latest Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Explore my recent projects and creative works</p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="justify-center mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="app">App</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    className="relative group overflow-hidden rounded-lg"
                  >
                    <Image
                      src="/placeholder.svg"
                      alt={`Portfolio item ${item}`}
                      width={400}
                      height={300}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-center p-4">
                        <h3 className="text-xl font-bold mb-2">Project Title</h3>
                        <p className="text-gray-400 mb-4">Web Development</p>
                        <Button variant="outline" className="border-white text-white">
                          View Project
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-6">Testimonials</Badge>
            <h2 className="text-3xl font-bold mb-4">What Clients Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Feedback from some of my amazing clients</p>
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
                <Card className="bg-neutral-900 border-neutral-800">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="mr-4">
                        <Image src="/placeholder.svg" alt="Client" width={50} height={50} className="rounded-full" />
                      </div>
                      <div>
                        <h4 className="font-bold">Client Name</h4>
                        <p className="text-gray-400">CEO, Company</p>
                      </div>
                    </div>
                    <p className="text-gray-400">
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
      <section id="contact" className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-6">Contact</Badge>
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Let's discuss your project and see how I can help</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon" className="shrink-0">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-400">hello@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon" className="shrink-0">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-gray-400">+1 (555) 000-0000</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon" className="shrink-0">
                    <MapPin className="h-4 w-4" />
                  </Button>
                  <div>
                    <h3 className="font-bold">Location</h3>
                    <p className="text-gray-400">New York, NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input placeholder="Name" className="bg-neutral-800 border-neutral-700" />
                  <Input type="email" placeholder="Email" className="bg-neutral-800 border-neutral-700" />
                </div>
                <Input placeholder="Subject" className="bg-neutral-800 border-neutral-700" />
                <Textarea placeholder="Message" className="bg-neutral-800 border-neutral-700 min-h-[150px]" />
                <Button className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-neutral-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Gerold</h3>
              <p className="text-gray-400 mb-4">Crafting digital experiences that make a difference.</p>
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
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Mobile Development</li>
                <li>Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to receive updates and news.</p>
              <div className="flex gap-2">
                <Input placeholder="Enter your email" className="bg-neutral-800 border-neutral-700" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Gerold. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

