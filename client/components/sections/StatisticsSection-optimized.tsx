import React, { memo } from "react";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  slideInLeft,
  slideInRight,
  floatingAnimation,
} from "../../lib/animations";

const statisticsData = [
  {
    value: "$30B",
    label: "Digital Currency Exchanged",
    delay: 0.2,
  },
  {
    value: "10M+",
    label: "Trusted Wallets Investor",
    delay: 0.4,
  },
  {
    value: "195",
    label: "Countries Supported",
    delay: 0.6,
  },
];

const StatisticsSection = memo(() => {
  return (
    <>
      {/* Statistics Section */}
      <motion.section
        className="py-16 lg:py-24 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
            {statisticsData.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.h3
                  className="font-rubik font-bold text-3xl lg:text-4xl text-white mb-4"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: stat.delay,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {stat.value}
                </motion.h3>
                <motion.p
                  className="font-rubik text-base text-crypto-grey"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: stat.delay + 0.2, duration: 0.5 }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose CRAPPO Section */}
      <motion.section
        className="py-16 lg:py-24 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-6 lg:space-y-8"
              variants={slideInLeft}
            >
              <motion.h2
                className="font-rubik font-bold text-3xl lg:text-5xl text-white leading-tight"
                variants={itemVariants}
              >
                Why you should choose{" "}
                <span className="bg-gradient-to-r from-crypto-blue to-blue-400 bg-clip-text text-transparent">
                  CRAPPO
                </span>
              </motion.h2>

              <motion.p
                className="font-rubik text-base lg:text-lg text-crypto-grey leading-7"
                variants={itemVariants}
              >
                Experience the next level of financial freedom with our
                cutting-edge cryptocurrency platform, designed for both
                beginners and expert traders.
              </motion.p>

              <motion.div className="space-y-6" variants={itemVariants}>
                {/* Feature 1 */}
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-crypto-blue rounded-full flex items-center justify-center mt-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-rubik font-medium text-lg text-white mb-2">
                      Bank-Grade Security
                    </h4>
                  </div>
                </motion.div>

                {/* Feature 2 */}
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-crypto-blue rounded-full flex items-center justify-center mt-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-rubik font-medium text-lg text-white mb-2">
                      Lightning Fast Transactions
                    </h4>
                  </div>
                </motion.div>

                {/* Feature 3 */}
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-crypto-blue rounded-full flex items-center justify-center mt-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-rubik font-medium text-lg text-white mb-2">
                      24/7 Expert Support
                    </h4>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              className="relative flex justify-center lg:justify-end"
              variants={slideInRight}
            >
              <div className="relative w-full max-w-[500px] mx-auto lg:mx-0">
                <motion.img
                  src="https://cdn.builder.io/api/v1/image/assets%2F9da17c4b43ee4d6e817795d2e5a07623%2F06df7c98800c41588ee4f32c576af0ef?format=webp&width=800"
                  alt=""
                  className="w-full h-auto object-contain relative z-10"
                  variants={itemVariants}
                  animate={floatingAnimation}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Background Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-crypto-blue/20 via-transparent to-blue-400/20 rounded-full blur-3xl"
                  animate={{
                    scale: [0.8, 1.1, 0.8],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Floating elements */}
                <motion.div
                  className="absolute top-20 right-10 w-4 h-4 bg-crypto-blue rounded-full opacity-60"
                  animate={{
                    y: [-20, 20, -20],
                    x: [-10, 10, -10],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-20 left-10 w-6 h-6 bg-white bg-opacity-20 rounded-full"
                  animate={{
                    y: [20, -20, 20],
                    x: [10, -10, 10],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
});

StatisticsSection.displayName = "StatisticsSection";

export default StatisticsSection;
