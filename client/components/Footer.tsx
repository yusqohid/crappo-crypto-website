import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface FooterProps {
  containerVariants?: any;
  itemVariants?: any;
  pulseAnimation?: any;
}

export default function Footer({
  containerVariants,
  itemVariants,
  pulseAnimation,
}: FooterProps) {
  const defaultContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const defaultItemVariants = {
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

  const defaultPulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const finalContainerVariants = containerVariants || defaultContainerVariants;
  const finalItemVariants = itemVariants || defaultItemVariants;
  const finalPulseAnimation = pulseAnimation || defaultPulseAnimation;

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Features", path: "/features" },
    { name: "About", path: "/about" },
  ];

  const resources = [
    { name: "Download Whitepaper", path: "#" },
    { name: "Smart Token", path: "#" },
    { name: "Blockchain Explorer", path: "#" },
    { name: "Crypto API", path: "#" },
  ];

  const paymentSystems = [
    {
      name: "Visa",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <g clipPath="url(#clip0_1_493)">
            <path
              d="M7.26953 7.22754H40.7305V40.7725H7.26953V7.22754Z"
              fill="#1434CB"
            />
            <path
              d="M18.5449 30.9539L20.5449 17.0461H24.4551L22.4551 30.9539H18.5449Z"
              fill="white"
            />
            <path
              d="M35.7109 17.4863C35.0859 17.2383 34.0859 16.9902 32.7109 16.9902C28.9609 16.9902 26.3359 18.9824 26.3359 21.8652C26.3359 24.0039 28.3359 25.1777 29.8359 25.877C31.3359 26.5762 31.8359 27.0254 31.8359 27.6504C31.8359 28.5996 30.6859 29.0488 29.6109 29.0488C28.1109 29.0488 27.3359 28.8008 26.0859 28.2012L25.5859 27.9531L25.0859 30.9785C25.8609 31.3516 27.2109 31.6777 28.6109 31.6992C32.6109 31.6992 35.1859 29.7559 35.2109 26.6504C35.2109 24.9824 34.0859 23.7324 31.5859 22.6348C30.2109 21.9355 29.4359 21.5371 29.4359 20.8379C29.4359 20.2129 30.1859 19.5879 31.7859 19.5879C33.0859 19.5879 34.0109 19.8613 34.7109 20.1602L35.0859 20.3359L35.5859 17.4863H35.7109Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_493">
              <rect width="48" height="48" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: "Mastercard",
      icon: (
        <svg width="48" height="38" viewBox="0 0 48 38" fill="none">
          <path
            d="M17.4935 7.22754H30.4592V30.9539H17.4935V7.22754Z"
            fill="#BDBDBD"
          />
          <path
            d="M18.3574 19.0907C18.3574 13.1816 21.3574 7.91064 25.8574 4.86328C23.1074 2.76562 19.7324 1.53516 16.0574 1.53516C7.23242 1.53516 0.0824219 8.68516 0.0824219 17.5102C0.0824219 26.3352 7.23242 33.4852 16.0574 33.4852C19.7324 33.4852 23.1074 32.2547 25.8574 30.1571C21.3574 27.1098 18.3574 21.8389 18.3574 19.0907Z"
            fill="#F79F1A"
          />
          <path
            d="M47.8822 19.0907C47.8822 27.9157 40.7322 35.0657 31.9072 35.0657C28.2322 35.0657 24.8572 33.8352 22.1072 31.7376C26.6072 28.6903 29.6072 23.4194 29.6072 19.0907C29.6072 14.762 26.6072 9.49109 22.1072 6.44373C24.8572 4.34607 28.2322 3.11562 31.9072 3.11562C40.7322 3.11562 47.8822 10.2656 47.8822 19.0907Z"
            fill="#EA001B"
          />
        </svg>
      ),
    },
    {
      name: "Bitcoin",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="24" fill="#F7931A" />
          <path
            d="M32.32 19.84C32.64 17.36 30.88 16 28.32 15.2L29.12 12L27.2 11.52L26.4 14.64C25.92 14.52 25.44 14.4 24.96 14.28L25.76 11.12L23.84 10.64L23.04 13.84C22.64 13.76 22.24 13.68 21.84 13.6V13.52L18.88 12.8L18.32 14.88C18.32 14.88 19.68 15.2 19.68 15.2C20.4 15.36 20.56 15.84 20.52 16.2L19.68 20.16C19.76 20.16 19.84 20.2 19.92 20.24C19.84 20.24 19.76 20.2 19.68 20.16L18.4 26.08C18.32 26.32 18.08 26.64 17.68 26.56C17.68 26.56 16.32 26.24 16.32 26.24L15.2 28.48L18 29.12C18.44 29.24 18.88 29.36 19.32 29.48L18.52 32.72L20.44 33.2L21.24 30C21.76 30.12 22.28 30.24 22.8 30.36L22 33.6L23.92 34.08L24.72 30.84C28.32 31.52 31.04 31.2 32.16 28C33.04 25.36 32.08 23.84 30.24 22.84C31.52 22.52 32.4 21.6 32.32 19.84ZM29.6 26.8C28.96 29.2 25.6 28 24.32 27.68L25.04 24.8C26.32 25.12 30.28 24.24 29.6 26.8ZM30.24 19.76C29.68 21.92 27.04 21.04 25.92 20.76L26.56 18.16C27.68 18.44 30.84 17.44 30.24 19.76Z"
            fill="white"
          />
        </svg>
      ),
    },
  ];

  return (
    <motion.footer
      className="bg-crypto-dark py-16 lg:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={finalContainerVariants}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {/* Logo Section */}
          <motion.div
            className="space-y-6 lg:col-span-1"
            variants={finalItemVariants}
          >
            <div className="flex items-center gap-4">
              <motion.div
                className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center relative"
                animate={finalPulseAnimation}
              >
                <motion.svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <path
                    d="M19.9999 40C31.0456 40 39.9999 31.0457 39.9999 20C39.9999 8.9543 31.0456 0 19.9999 0C8.95424 0 -6.10352e-05 8.9543 -6.10352e-05 20C-6.10352e-05 31.0457 8.95424 40 19.9999 40Z"
                    fill="white"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M18.8424 28.0463C14.9124 27.4707 11.8964 24.0828 11.8964 19.9891C11.8964 15.8954 14.9124 12.5075 18.8424 11.9322V7.69238C12.5855 8.29084 7.69232 13.5677 7.69232 19.9891C7.69232 26.4104 12.5855 31.687 18.8424 32.2858V28.0463Z"
                    fill="white"
                  />
                  <path
                    d="M26.9983 12L26.8891 12.3711V23.1393L26.9983 23.2483L31.9968 20.2937L26.9983 12Z"
                    fill="white"
                  />
                  <path
                    d="M26.9984 12L21.9999 20.2937L26.9984 23.2483V18.0217V12Z"
                    fill="white"
                  />
                  <path
                    d="M26.9986 24.8742L26.937 24.9492V28.7851L26.9986 28.9648L32 21.9211L26.9986 24.8742Z"
                    fill="white"
                  />
                  <path
                    d="M26.9984 28.9648V24.8742L21.9999 21.9211L26.9984 28.9648Z"
                    fill="white"
                  />
                  <path
                    d="M26.9984 23.2482L31.9968 20.2937L26.9984 18.0217V23.2482Z"
                    fill="white"
                  />
                  <path
                    d="M21.9999 20.2937L26.9983 23.2482V18.0217L21.9999 20.2937Z"
                    fill="white"
                  />
                </motion.svg>
              </motion.div>
              <span className="font-inter font-semibold text-lg tracking-[0.72px] text-white">
                CRAPPO
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-6" variants={finalItemVariants}>
            <h3 className="font-rubik font-medium text-xl text-white">
              Quick Link
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.path}
                    className="font-rubik text-base text-crypto-grey hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div className="space-y-6" variants={finalItemVariants}>
            <h3 className="font-rubik font-medium text-xl text-white">
              Resources
            </h3>
            <ul className="space-y-4">
              {resources.map((resource, index) => (
                <motion.li
                  key={resource.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={resource.path}
                    className="font-rubik text-base text-crypto-grey hover:text-white transition-colors"
                  >
                    {resource.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Payment Systems */}
          <motion.div className="space-y-6" variants={finalItemVariants}>
            <h3 className="font-rubik font-medium text-xl lg:text-2xl text-white leading-tight">
              We accept following payment systems
            </h3>

            {/* Payment Icons */}
            <div className="grid grid-cols-3 gap-4">
              {paymentSystems.map((payment) => (
                <motion.div
                  key={payment.name}
                  className="w-24 h-16 bg-gray-200 bg-opacity-5 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {payment.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-white border-opacity-10"
          variants={finalItemVariants}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="font-rubik text-base text-crypto-grey">
              ©2024 CRAPPO. All rights reserved
            </p>
            <div className="flex items-center gap-6">
              <motion.a
                href="#"
                className="font-rubik text-base text-crypto-grey hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="font-rubik text-base text-crypto-grey hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
