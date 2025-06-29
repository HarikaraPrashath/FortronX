"use client"
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  ArrowRight,
  Heart,
  ExternalLink,
} from "lucide-react"
import type React from "react"

import { useState } from "react"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setIsSubscribed(true)
    setEmail("")
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  const footerLinks = {
    services: [
      { name: "Web Development", href: "#" },
      { name: "Mobile Apps", href: "#" },
      { name: "UI/UX Design", href: "#" },
      { name: "Digital Marketing", href: "#" },
      { name: "Brand Identity", href: "#" },
      { name: "E-commerce", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Blog", href: "#" },
      { name: "News", href: "#" },
    ],
    support: [
      { name: "Contact Us", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Status", href: "#" },
      { name: "Feedback", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
    ],
  }

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-sky-500" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-600" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-700" },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-600" },
  ]

  const contactInfo = [
    {
      icon: Phone,
      text: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: Mail,
      text: "hello@company.com",
      href: "mailto:hello@company.com",
    },
    {
      icon: MapPin,
      text: "123 Business Street, New York, NY 10001",
      href: "#",
    },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-md"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  YourCompany
                </span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Transforming ideas into digital reality. We create innovative solutions that drive business growth and
                deliver exceptional user experiences.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                    >
                      <IconComponent className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
                      <span className="text-sm">{contact.text}</span>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 rounded-xl bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110 text-gray-400 ${social.color}`}
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h5 className="text-sm font-semibold mb-3 text-white">Support</h5>
              <ul className="space-y-2">
                {footerLinks.support.slice(0, 3).map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-gray-300 transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Stay Updated</h4>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Subscribe to our newsletter and get the latest updates on our services, industry insights, and exclusive
              offers.
            </p>

            {isSubscribed ? (
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-2">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <p className="text-green-400 text-sm font-medium">Successfully subscribed!</p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white placeholder-gray-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Subscribe
                </button>
              </form>
            )}

            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">500+</div>
                <div className="text-xs text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">98%</div>
                <div className="text-xs text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© 2024 YourCompany. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>All rights reserved.</span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1"
                >
                  {link.name}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-xs">
              This website uses cookies to enhance user experience and analyze website traffic.{" "}
              <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                Learn more
              </a>
            </p>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
