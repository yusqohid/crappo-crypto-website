import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image: "👩‍💼",
      bio: "Former Goldman Sachs executive with 15+ years in fintech",
    },
    {
      name: "Alex Rodriguez",
      role: "CTO",
      image: "👨‍💻",
      bio: "Ex-Google engineer, blockchain expert and security specialist",
    },
    {
      name: "Maria Kim",
      role: "Head of Product",
      image: "👩‍🎨",
      bio: "Former Coinbase product lead with deep crypto market insights",
    },
  ];

  const values = [
    {
      icon: "🔒",
      title: "Security First",
      description:
        "Your assets are protected by military-grade security and cold storage.",
    },
    {
      icon: "🌍",
      title: "Global Access",
      description: "Serving millions of users across 150+ countries worldwide.",
    },
    {
      icon: "⚡",
      title: "Innovation",
      description:
        "Cutting-edge technology to deliver the fastest trading experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-crypto-dark text-white">
      {/* Navigation */}
      <Navbar
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      {/* Hero Section */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] pb-[60px]">
        <motion.div
          className="text-center py-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="font-rubik font-bold text-4xl md:text-5xl lg:text-[64px] lg:leading-[76px] text-white mb-6"
            variants={itemVariants}
          >
            About
            <br />
            <span className="bg-gradient-to-r from-crypto-blue to-blue-400 bg-clip-text text-transparent">
              Our Mission
            </span>
          </motion.h1>
          <motion.p
            className="font-rubik text-base lg:text-lg text-crypto-grey leading-7 max-w-[500px] mx-auto mb-12"
            variants={itemVariants}
          >
            We're building the future of cryptocurrency trading with
            cutting-edge technology, unmatched security, and a user-first
            approach.
          </motion.p>
        </motion.div>
      </div>

      {/* Our Story */}
      <motion.section
        className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="font-rubik font-bold text-3xl lg:text-4xl text-white mb-6">
              Our Story
            </h2>
            <p className="font-rubik text-crypto-grey leading-7 mb-6">
              Founded in 2019 by a team of financial experts and blockchain
              pioneers, we set out to democratize access to cryptocurrency
              trading. What started as a vision to make crypto accessible to
              everyone has grown into a trusted platform serving millions of
              users worldwide.
            </p>
            <p className="font-rubik text-crypto-grey leading-7">
              Today, we process over $2 billion in daily trading volume and
              continue to innovate with new features that put our users first.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-gradient-to-br from-crypto-blue/20 to-purple-500/20 rounded-2xl p-8 border border-crypto-blue/30">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="font-rubik font-bold text-3xl text-crypto-blue mb-2">
                    10M+
                  </div>
                  <div className="font-rubik text-sm text-crypto-grey">
                    Users Worldwide
                  </div>
                </div>
                <div>
                  <div className="font-rubik font-bold text-3xl text-crypto-blue mb-2">
                    $2B+
                  </div>
                  <div className="font-rubik text-sm text-crypto-grey">
                    Daily Volume
                  </div>
                </div>
                <div>
                  <div className="font-rubik font-bold text-3xl text-crypto-blue mb-2">
                    150+
                  </div>
                  <div className="font-rubik text-sm text-crypto-grey">
                    Countries
                  </div>
                </div>
                <div>
                  <div className="font-rubik font-bold text-3xl text-crypto-blue mb-2">
                    24/7
                  </div>
                  <div className="font-rubik text-sm text-crypto-grey">
                    Support
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section
        className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="font-rubik font-bold text-3xl lg:text-4xl text-white mb-6">
            Our
            <span className="bg-gradient-to-r from-crypto-blue to-purple-500 bg-clip-text text-transparent">
              {" "}
              Values
            </span>
          </h2>
          <p className="font-rubik text-lg text-crypto-grey max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-crypto-blue/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <span className="text-3xl">{value.icon}</span>
              </motion.div>
              <h3 className="font-rubik font-bold text-xl text-white mb-4">
                {value.title}
              </h3>
              <p className="font-rubik text-crypto-grey leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Leadership Team */}
      <motion.section
        className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="font-rubik font-bold text-3xl lg:text-4xl text-white mb-6">
            Leadership Team
          </h2>
          <p className="font-rubik text-lg text-crypto-grey max-w-2xl mx-auto">
            Meet the experts leading our mission to revolutionize crypto trading
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-crypto-card border border-crypto-border rounded-2xl p-6 text-center group hover:border-crypto-blue transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: [0, -5, 5, 0] }}
              >
                {member.image}
              </motion.div>
              <h3 className="font-rubik font-bold text-xl text-white mb-2">
                {member.name}
              </h3>
              <p className="font-rubik text-crypto-blue mb-4">{member.role}</p>
              <p className="font-rubik text-sm text-crypto-grey leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Join Our Community?"
        description="Start your crypto journey with a platform trusted by millions of users worldwide."
        primaryButton={{
          text: "Get Started Today",
          onClick: () => console.log("Get Started clicked"),
        }}
        secondaryButton={{
          text: "Contact Us",
          href: "/contact",
        }}
        theme="gradient"
        containerVariants={containerVariants}
        itemVariants={itemVariants}
        className="max-w-[1440px] mx-auto px-6 lg:px-[120px]"
      />

      {/* Footer */}
      <Footer
        containerVariants={containerVariants}
        itemVariants={itemVariants}
        pulseAnimation={pulseAnimation}
      />
    </div>
  );
}
