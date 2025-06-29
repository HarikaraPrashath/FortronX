"use client"
import {
  Award,
  Users,
  Target,
  Zap,
  Shield,
  Clock,
  Heart,
  Star,
  
} from "lucide-react"

const About = () => {
  const whyBestFeatures = [
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Over 10+ years of combined experience delivering exceptional results across various industries.",
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "A passionate team of experts committed to your success with 24/7 support and guidance.",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on measurable outcomes that directly impact your business growth and ROI.",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality, getting you to market faster.",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes ensure flawless execution every time.",
      gradient: "from-red-500 to-rose-600",
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "Round-the-clock support and maintenance to keep your business running smoothly.",
      gradient: "from-indigo-500 to-purple-600",
    },
  ]



  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Team Members" },
    { number: "24/7", label: "Support Available" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-sm font-medium text-blue-700 mb-6">
            <Heart className="w-4 h-4" />
            About Our Company
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            We Turn{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Ideas Into Reality
            </span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-12">
            We&apos;re a passionate team of innovators, designers, and developers dedicated to helping businesses thrive in
            the digital world. Our mission is to transform your vision into powerful solutions that drive growth and
            success.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Are Best Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto -mt-17">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-full text-sm font-medium text-green-700 mb-6">
            <Star className="w-4 h-4" />
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why We Are The{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Best Choice
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We don&apos;t just deliver projects; we build lasting partnerships. Here&apos;s what sets us apart from the
            competition and makes us the preferred choice for businesses worldwide.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {whyBestFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>



    </div>
  )
}

export default About
