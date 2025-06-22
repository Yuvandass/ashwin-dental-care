"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Star,
  CheckCircle,
  Heart,
  Shield,
  Award,
  Users,
  Calendar,
  Stethoscope,
  Smile,
  Facebook,
  Instagram,
  Twitter,
  ArrowRight,
  Play,
  Camera,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DentalWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full glass-header">
        <div className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2 md:space-x-3 animate-liquid-float">
            <div className="flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg animate-liquid-pulse">
              <Smile className="h-4 w-4 md:h-7 md:w-7 text-white" />
            </div>
            <div>
              <h1 className="text-sm md:text-xl font-semibold text-gray-900">Bright Smile Dental</h1>
              <p className="text-xs text-gray-600 hidden md:block">Your Trusted Dental Care</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {["Services", "Gallery", "About", "Reviews", "Contact"].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="hidden xl:flex items-center space-x-2 text-sm glass-card px-3 py-2 rounded-xl">
              <Phone className="h-4 w-4 text-blue-600" />
              <span className="font-medium text-gray-700">(555) 123-SMILE</span>
            </div>
            <button
              className="glass-primary text-white text-xs md:text-sm px-4 md:px-6 py-2 md:py-3 rounded-2xl font-medium"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book Now
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Organic background blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 organic-blob animate-liquid-float"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 organic-blob-2 animate-liquid-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-liquid-wave"></div>
          </div>

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
              <div className="animate-fade-in-up text-center lg:text-left">
                <div className="glass-card inline-flex items-center px-4 py-2 rounded-full mb-6 animate-liquid-shimmer">
                  <Sparkles className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Now Accepting New Patients</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 mb-6 cursor-pointer hover:scale-105 transition-all duration-500">
                  Your Perfect
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-liquid-shimmer">
                    {" "}
                    Smile
                  </span>{" "}
                  Starts Here
                </h1>

                <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                  Experience gentle, comprehensive dental care in a comfortable environment. Our experienced team is
                  dedicated to helping you achieve optimal oral health and a confident smile.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                  <button
                    className="glass-primary text-white text-base md:text-lg px-8 py-4 rounded-2xl font-semibold flex items-center justify-center"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Consultation
                  </button>
                  <button className="glass-button text-gray-700 text-base md:text-lg px-8 py-4 rounded-2xl font-semibold flex items-center justify-center">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Our Story
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
                  <div className="flex items-center glass-card px-3 py-2 rounded-xl">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                    Same-day appointments
                  </div>
                  <div className="flex items-center glass-card px-3 py-2 rounded-xl">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                    Insurance accepted
                  </div>
                </div>
              </div>

              <div className="relative animate-fade-in-right">
                <div className="relative">
                  <div className="glass-surface p-8 rounded-3xl">
                    <Image
                      src="/placeholder.svg?height=600&width=500"
                      alt="Modern dental office"
                      width={500}
                      height={600}
                      className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
                    />
                  </div>

                  {/* Floating glass card */}
                  <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl animate-liquid-float">
                    <div className="flex items-center space-x-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-gray-900">4.9/5 Rating</p>
                        <p className="text-xs text-gray-600">500+ Happy Patients</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional hero images */}
          <div className="container px-4 md:px-6 mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up delay-1000">
              <div className="relative group">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Dental equipment"
                  width={200}
                  height={200}
                  className="rounded-xl shadow-lg group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
              <div className="relative group">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Comfortable waiting area"
                  width={200}
                  height={200}
                  className="rounded-xl shadow-lg group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
              <div className="relative group">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Treatment room"
                  width={200}
                  height={200}
                  className="rounded-xl shadow-lg group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
              <div className="relative group">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Sterilization area"
                  width={200}
                  height={200}
                  className="rounded-xl shadow-lg group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDYzNjUiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="mx-auto max-w-2xl text-center mb-16 animate-fade-in-up">
              <h2
                className="text-3xl font-bold tracking-tight sm:text-4xl text-blue-600 mb-4 cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
              >
                Comprehensive Dental Services
              </h2>
              <p className="text-lg text-gray-600">
                From routine cleanings to advanced procedures, we provide complete dental care for the whole family
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Smile,
                  title: "General Dentistry",
                  description: "Routine cleanings, fillings, crowns, and preventive care to maintain your oral health.",
                  features: ["Regular cleanings & exams", "Fillings & restorations", "Root canal therapy"],
                  color: "bg-blue-600/10 text-blue-600",
                },
                {
                  icon: Star,
                  title: "Cosmetic Dentistry",
                  description: "Transform your smile with our advanced cosmetic dental treatments and procedures.",
                  features: ["Teeth whitening", "Porcelain veneers", "Smile makeovers"],
                  color: "bg-purple-100 text-purple-600",
                },
                {
                  icon: Shield,
                  title: "Orthodontics",
                  description: "Straighten your teeth with traditional braces or modern clear aligner treatments.",
                  features: ["Traditional braces", "Clear aligners", "Retainers"],
                  color: "bg-green-100 text-green-600",
                },
                {
                  icon: Heart,
                  title: "Pediatric Dentistry",
                  description: "Gentle, specialized dental care designed specifically for children and teenagers.",
                  features: ["Child-friendly environment", "Preventive treatments", "Dental education"],
                  color: "bg-red-100 text-red-600",
                },
                {
                  icon: Stethoscope,
                  title: "Oral Surgery",
                  description: "Advanced surgical procedures including extractions and dental implant placement.",
                  features: ["Tooth extractions", "Dental implants", "Wisdom teeth removal"],
                  color: "bg-orange-100 text-orange-600",
                },
                {
                  icon: Award,
                  title: "Emergency Care",
                  description: "Prompt treatment for dental emergencies and urgent oral health issues.",
                  features: ["Same-day appointments", "Pain management", "24/7 emergency line"],
                  color: "bg-teal-100 text-teal-600",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 glass-card animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-lg ${service.color} mb-4 group-hover:scale-110 transition-all duration-300`}
                    >
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                    <ul className="space-y-2 text-sm">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 relative">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center mb-16 animate-fade-in-up">
              <div className="flex items-center justify-center mb-4">
                <Camera className="h-8 w-8 text-blue-600 mr-3" />
                <h2
                  className="text-3xl font-bold tracking-tight sm:text-4xl text-blue-600 cursor-pointer hover:scale-105 transition-all duration-300"
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Our Work Gallery
                </h2>
              </div>
              <p className="text-lg text-gray-600">See the amazing transformations we've achieved for our patients</p>
            </div>

            <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Smile Makeover",
                  description: "Complete smile transformation with porcelain veneers",
                  category: "Cosmetic",
                  beforeImage: "/placeholder.svg?height=300&width=400",
                  afterImage: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Teeth Whitening",
                  description: "Professional whitening treatment for brighter smile",
                  category: "Cosmetic",
                  beforeImage: "/placeholder.svg?height=300&width=400",
                  afterImage: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Dental Implants",
                  description: "Single tooth replacement with natural-looking results",
                  category: "Restorative",
                  beforeImage: "/placeholder.svg?height=300&width=400",
                  afterImage: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Orthodontic Treatment",
                  description: "Straightening treatment with clear aligners",
                  category: "Orthodontics",
                  beforeImage: "/placeholder.svg?height=300&width=400",
                  afterImage: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Crown Restoration",
                  description: "Damaged tooth restored with ceramic crown",
                  category: "Restorative",
                  beforeImage: "/placeholder.svg?height=300&width=400",
                  afterImage: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Gum Treatment",
                  description: "Periodontal therapy for healthier gums",
                  category: "Periodontics",
                  beforeImage: "/placeholder.svg?height=300&width=400",
                  afterImage: "/placeholder.svg?height=300&width=400",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden glass-card hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="relative">
                        <Image
                          src={item.beforeImage || "/placeholder.svg"}
                          alt={`${item.title} - Before`}
                          width={200}
                          height={150}
                          className="w-full h-32 object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-red-500/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                          Before
                        </div>
                      </div>
                      <div className="relative">
                        <Image
                          src={item.afterImage || "/placeholder.svg"}
                          alt={`${item.title} - After`}
                          width={200}
                          height={150}
                          className="w-full h-32 object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-blue-600/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                          After
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-blue-600/10 text-blue-600 text-xs">
                        {item.category}
                      </Badge>
                      <Sparkles className="h-4 w-4 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 animate-fade-in-up delay-1000">
              <Button className="glass-primary text-white hover:from-blue-700 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                View Full Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-600/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="animate-fade-in-left">
                <h2
                  className="text-3xl font-bold tracking-tight sm:text-4xl text-blue-600 mb-6 cursor-pointer hover:scale-105 transition-all duration-300"
                  onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Meet Dr. Sarah Johnson
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  With over 15 years of experience in dentistry, Dr. Johnson is committed to providing exceptional
                  dental care in a comfortable, welcoming environment. She graduated from Harvard School of Dental
                  Medicine and continues to stay current with the latest advances in dental technology and techniques.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 mb-8">
                  <div className="flex items-center space-x-3 p-4 glass-card hover:shadow-lg transition-all duration-300">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10">
                      <Award className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-blue-600">15+ Years</p>
                      <p className="text-sm text-gray-600">Experience</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 glass-card hover:shadow-lg transition-all duration-300">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-blue-600">5000+</p>
                      <p className="text-sm text-gray-600">Happy Patients</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    "Harvard School of Dental Medicine Graduate",
                    "Member of American Dental Association",
                    "Certified in Advanced Cosmetic Dentistry",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center animate-fade-in-up"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative animate-fade-in-right">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=500&width=400"
                    alt="Dr. Sarah Johnson"
                    width={400}
                    height={500}
                    className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
                  />
                  {/* Glassmorphism card overlay */}
                  <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl animate-float">
                    <div className="text-center">
                      <p className="font-bold text-2xl text-blue-600">4.9★</p>
                      <p className="text-xs text-gray-600">Patient Rating</p>
                    </div>
                  </div>
                </div>

                {/* Additional doctor/staff photos */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <Image
                    src="/placeholder.svg?height=150&width=200"
                    alt="Dental team"
                    width={200}
                    height={150}
                    className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                  />
                  <Image
                    src="/placeholder.svg?height=150&width=200"
                    alt="Office consultation"
                    width={200}
                    height={150}
                    className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 relative">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center mb-16 animate-fade-in-up">
              <h2
                className="text-3xl font-bold tracking-tight sm:text-4xl text-blue-600 cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                What Our Patients Say
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Don't just take our word for it - hear from our satisfied patients
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
              {[
                {
                  name: "Emily Chen",
                  role: "Patient since 2020",
                  image: "/placeholder.svg?height=60&width=60",
                  rating: 5,
                  text: "Dr. Johnson and her team made my dental anxiety disappear. The office is so comfortable and modern. I actually look forward to my appointments now!",
                  bgColor: "bg-blue-50/80",
                },
                {
                  name: "Michael Rodriguez",
                  role: "Patient since 2019",
                  image: "/placeholder.svg?height=60&width=60",
                  rating: 5,
                  text: "The best dental experience I've ever had! The staff is incredibly friendly and professional. My smile makeover exceeded all my expectations.",
                  bgColor: "bg-green-50/80",
                },
                {
                  name: "Lisa Thompson",
                  role: "Patient since 2018",
                  image: "/placeholder.svg?height=60&width=60",
                  rating: 5,
                  text: "My kids love coming here! Dr. Johnson is amazing with children, and the office has such a welcoming atmosphere. Highly recommend to all families.",
                  bgColor: "bg-purple-50/80",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className={`${testimonial.bgColor} glass-card hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-lg mb-6 text-gray-700">"{testimonial.text}"</blockquote>
                    <div className="flex items-center">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full mr-4 border-2 border-blue-600/20"
                      />
                      <div>
                        <div className="font-semibold text-blue-600">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
              <div className="animate-fade-in-left">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to Schedule Your Visit?</h2>
                <p className="text-lg text-blue-600/20 mb-8">
                  Contact us today to book your appointment or learn more about our services. We're here to help you
                  achieve your best smile!
                </p>

                <div className="space-y-6">
                  {[
                    { icon: Phone, title: "Phone", content: "(555) 123-SMILE" },
                    { icon: Mail, title: "Email", content: "info@brightsmile.com" },
                    { icon: MapPin, title: "Address", content: "123 Dental Way, Suite 100\nSmile City, SC 12345" },
                    {
                      icon: Clock,
                      title: "Office Hours",
                      content: "Mon - Thu: 8:00 AM - 6:00 PM\nFri: 8:00 AM - 4:00 PM\nSat: 9:00 AM - 2:00 PM",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 animate-fade-in-up"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg glass-card">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-blue-600/20 whitespace-pre-line">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8 animate-fade-in-right">
                <h3 className="text-2xl font-bold mb-6">Schedule Your Appointment</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="glass-input"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="glass-input"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input type="email" id="email" className="glass-input" placeholder="Enter your email" required />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="glass-input"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Needed
                    </label>
                    <select id="service" className="glass-input">
                      <option value="" className="text-gray-900">
                        Select a service
                      </option>
                      <option value="cleaning" className="text-gray-900">
                        General Cleaning
                      </option>
                      <option value="cosmetic" className="text-gray-900">
                        Cosmetic Consultation
                      </option>
                      <option value="emergency" className="text-gray-900">
                        Emergency Care
                      </option>
                      <option value="orthodontic" className="text-gray-900">
                        Orthodontic Consultation
                      </option>
                      <option value="other" className="text-gray-900">
                        Other
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="glass-input"
                      placeholder="Tell us about your needs..."
                    ></textarea>
                  </div>

                  <Button className="glass-primary w-full text-blue-600 hover:bg-gray-100 text-lg py-4 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    Schedule Appointment
                    <Calendar className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-500">
                  <Smile className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Bright Smile Dental</h3>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Providing exceptional dental care with a gentle touch. Your smile is our priority.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Twitter].map((Icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {[
              {
                title: "Services",
                links: ["General Dentistry", "Cosmetic Dentistry", "Orthodontics", "Emergency Care"],
              },
              {
                title: "Quick Links",
                links: ["About Us", "Patient Forms", "Insurance", "Payment Options"],
              },
              {
                title: "Contact Info",
                links: ["(555) 123-SMILE", "info@brightsmile.com", "123 Dental Way, Suite 100", "Smile City, SC 12345"],
              },
            ].map((section, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 200}ms` }}>
                <h3 className="font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2 text-gray-400">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href="#" className="hover:text-blue-600 transition-colors duration-300">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Bright Smile Dental. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Service", "HIPAA Notice"].map((link, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-blue-600 text-sm transition-colors duration-300"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
