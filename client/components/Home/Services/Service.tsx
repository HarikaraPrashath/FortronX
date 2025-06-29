"use client"
import {
  Code2,
  Briefcase,
  CreditCard,
  Palette,
  Smartphone,
  Globe,
  Cloud,
  GitPullRequest,
  TrendingUp,
  BarChart3,
  Users,
  Search,
  ShoppingCart,
  Layers,
} from "lucide-react"

const Service = () => {
  const services = [
    {
      title: "Technology",
      description: "Building robust, scalable solutions with cutting-edge technologies that power your growth.",
      icon: Code2,
      gradient: "from-blue-500 to-cyan-600",
      features: [
        { icon: Globe, text: "Web Development", color: "text-blue-600" },
        { icon: BarChart3, text: "Data Analytics", color: "text-green-600" },
        { icon: Cloud, text: "Cloud Infrastructure", color: "text-cyan-600" },
        { icon: GitPullRequest, text: "API Development", color: "text-indigo-600" },
      ],
    },
    {
      title: "Digital Marketing",
      description: "Grow your brand and customer base through strategic online marketing and analytics.",
      icon: TrendingUp,
      gradient: "from-pink-500 to-rose-600",
      features: [
        { icon: Users, text: "Social Media Marketing", color: "text-purple-600" },
        { icon: Search, text: "SEO & Content", color: "text-orange-500" },
        { icon: CreditCard, text: "Paid Advertising", color: "text-red-500" },
        { icon: BarChart3, text: "Analytics & Insights", color: "text-blue-700" },
      ],
    },
    {
      title: "Design",
      description: "Crafting memorable experiences with beautiful interfaces and consistent branding.",
      icon: Palette,
      gradient: "from-emerald-500 to-teal-600",
      features: [
        { icon: Smartphone, text: "UI & UX Design", color: "text-pink-600" },
        { icon: Palette, text: "Brand Identity", color: "text-teal-600" },
        { icon: ShoppingCart, text: "Product Design", color: "text-yellow-600" },
        { icon: Layers, text: "Design Systems", color: "text-lime-600" },
      ],
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full text-sm font-medium text-purple-700 mb-4">
          <Briefcase className="w-4 h-4" />
          Our Services
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Services That{" "}
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Drive Success
          </span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          We combine cutting-edge technology, strategic marketing, and exceptional design to transform your vision into
          reality and accelerate your business growth.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const IconComponent = service.icon
          return (
            <article
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-2"
            >
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => {
                    const FeatureIcon = feature.icon
                    return (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3 text-gray-700 group-hover:text-gray-800 transition-colors"
                      >
                        <div className="flex-shrink-0">
                          <FeatureIcon className={`w-5 h-5 ${feature.color}`} />
                        </div>
                        <span className="font-medium">{feature.text}</span>
                      </li>
                    )
                  })}
                </ul>

                {/* Hover Effect Border */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                />
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Service
