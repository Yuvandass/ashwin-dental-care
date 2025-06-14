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
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DentalWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
              <Smile className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900">Bright Smile Dental</h1>
              <p className="text-xs text-gray-600">Your Trusted Dental Care</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Reviews
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-blue-600" />
              <span className="font-medium">(555) 123-SMILE</span>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">Book Appointment</Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-800">
                  ✨ Now Accepting New Patients
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-blue-900">
                  Your Perfect
                  <span className="text-blue-600"> Smile</span> Starts Here
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-xl">
                  Experience gentle, comprehensive dental care in a comfortable environment. Our experienced team is
                  dedicated to helping you achieve optimal oral health and a confident smile.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-6 border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </div>
                <div className="mt-6 flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Same-day appointments
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Insurance accepted
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Modern dental office"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                  <div className="flex items-center space-x-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">4.9/5 Rating</p>
                      <p className="text-xs text-gray-600">500+ Happy Patients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-blue-900">
                Comprehensive Dental Services
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                From routine cleanings to advanced procedures, we provide complete dental care for the whole family
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mb-4">
                    <Smile className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-900">General Dentistry</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Routine cleanings, fillings, crowns, and preventive care to maintain your oral health.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Regular cleanings & exams
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Fillings & restorations
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Root canal therapy
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 mb-4">
                    <Star className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-blue-900">Cosmetic Dentistry</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Transform your smile with our advanced cosmetic dental treatments and procedures.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Teeth whitening
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Porcelain veneers
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Smile makeovers
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 mb-4">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-blue-900">Orthodontics</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Straighten your teeth with traditional braces or modern clear aligner treatments.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Traditional braces
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Clear aligners
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Retainers
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 mb-4">
                    <Heart className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-blue-900">Pediatric Dentistry</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Gentle, specialized dental care designed specifically for children and teenagers.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Child-friendly environment
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Preventive treatments
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Dental education
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 mb-4">
                    <Stethoscope className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-blue-900">Oral Surgery</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Advanced surgical procedures including extractions and dental implant placement.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Tooth extractions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Dental implants
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Wisdom teeth removal
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 mb-4">
                    <Award className="h-6 w-6 text-teal-600" />
                  </div>
                  <CardTitle className="text-blue-900">Emergency Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Prompt treatment for dental emergencies and urgent oral health issues.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Same-day appointments
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Pain management
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      24/7 emergency line
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-blue-900 mb-6">
                  Meet Dr. Sarah Johnson
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  With over 15 years of experience in dentistry, Dr. Johnson is committed to providing exceptional
                  dental care in a comfortable, welcoming environment. She graduated from Harvard School of Dental
                  Medicine and continues to stay current with the latest advances in dental technology and techniques.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                      <Award className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-blue-900">15+ Years</p>
                      <p className="text-sm text-gray-600">Experience</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                      <Users className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-blue-900">5000+</p>
                      <p className="text-sm text-gray-600">Happy Patients</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Harvard School of Dental Medicine Graduate</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Member of American Dental Association</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Certified in Advanced Cosmetic Dentistry</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Dr. Sarah Johnson"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-blue-900">What Our Patients Say</h2>
              <p className="mt-4 text-lg text-gray-600">
                Don't just take our word for it - hear from our satisfied patients
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-4 text-gray-700">
                    "Dr. Johnson and her team made my dental anxiety disappear. The office is so comfortable and modern.
                    I actually look forward to my appointments now!"
                  </blockquote>
                  <div className="flex items-center">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Emily Chen"
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold text-blue-900">Emily Chen</div>
                      <div className="text-sm text-gray-600">Patient since 2020</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-4 text-gray-700">
                    "The best dental experience I've ever had! The staff is incredibly friendly and professional. My
                    smile makeover exceeded all my expectations."
                  </blockquote>
                  <div className="flex items-center">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Michael Rodriguez"
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold text-blue-900">Michael Rodriguez</div>
                      <div className="text-sm text-gray-600">Patient since 2019</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-4 text-gray-700">
                    "My kids love coming here! Dr. Johnson is amazing with children, and the office has such a welcoming
                    atmosphere. Highly recommend to all families."
                  </blockquote>
                  <div className="flex items-center">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Lisa Thompson"
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold text-blue-900">Lisa Thompson</div>
                      <div className="text-sm text-gray-600">Patient since 2018</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-blue-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to Schedule Your Visit?</h2>
                <p className="text-lg text-blue-100 mb-8">
                  Contact us today to book your appointment or learn more about our services. We're here to help you
                  achieve your best smile!
                </p>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-800">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-blue-100">(555) 123-SMILE</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-800">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-blue-100">info@brightsmile.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-800">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-blue-100">
                        123 Dental Way, Suite 100
                        <br />
                        Smile City, SC 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-800">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Office Hours</p>
                      <div className="text-blue-100 text-sm">
                        <p>Mon - Thu: 8:00 AM - 6:00 PM</p>
                        <p>Fri: 8:00 AM - 4:00 PM</p>
                        <p>Sat: 9:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 text-gray-900">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Schedule Your Appointment</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option>General Cleaning</option>
                      <option>Cosmetic Consultation</option>
                      <option>Emergency Care</option>
                      <option>Orthodontic Consultation</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    ></textarea>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">Schedule Appointment</Button>
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
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
                  <Smile className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Bright Smile Dental</h3>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Providing exceptional dental care with a gentle touch. Your smile is our priority.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    General Dentistry
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cosmetic Dentistry
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Orthodontics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Emergency Care
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Patient Forms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Insurance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Payment Options
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (555) 123-SMILE
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  info@brightsmile.com
                </li>
                <li className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                  <span>
                    123 Dental Way, Suite 100
                    <br />
                    Smile City, SC 12345
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Bright Smile Dental. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                HIPAA Notice
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
