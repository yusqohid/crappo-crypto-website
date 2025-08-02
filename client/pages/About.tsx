import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-crypto-dark text-white">
      {/* Header */}
      <header className="relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-[60px]">
          {/* Top Navigation */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center relative">
                <svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 40 40" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute"
                >
                  <path d="M19.9999 40C31.0456 40 39.9999 31.0457 39.9999 20C39.9999 8.9543 31.0456 0 19.9999 0C8.95424 0 -6.10352e-05 8.9543 -6.10352e-05 20C-6.10352e-05 31.0457 8.95424 40 19.9999 40Z" fill="white" fillOpacity="0.1"/>
                  <path d="M18.8424 28.0463C14.9124 27.4707 11.8964 24.0828 11.8964 19.9891C11.8964 15.8954 14.9124 12.5075 18.8424 11.9322V7.69238C12.5855 8.29084 7.69232 13.5677 7.69232 19.9891C7.69232 26.4104 12.5855 31.687 18.8424 32.2858V28.0463Z" fill="white"/>
                  <path d="M26.9983 12L26.8891 12.3711V23.1393L26.9983 23.2483L31.9968 20.2937L26.9983 12Z" fill="white"/>
                  <path d="M26.9984 12L21.9999 20.2937L26.9984 23.2483V18.0217V12Z" fill="white"/>
                  <path d="M26.9986 24.8742L26.937 24.9492V28.7851L26.9986 28.9648L32 21.9211L26.9986 24.8742Z" fill="white"/>
                  <path d="M26.9984 28.9648V24.8742L21.9999 21.9211L26.9984 28.9648Z" fill="white"/>
                  <path d="M26.9984 23.2482L31.9968 20.2937L26.9984 18.0217V23.2482Z" fill="white"/>
                  <path d="M21.9999 20.2937L26.9983 23.2482V18.0217L21.9999 20.2937Z" fill="white"/>
                </svg>
              </div>
              <span className="font-inter font-semibold text-lg tracking-[0.72px]">CRAPPO</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-[32px]">
              <Link to="/products" className="font-rubik text-base text-white hover:text-crypto-grey transition-colors">Products</Link>
              <Link to="/features" className="font-rubik text-base text-white hover:text-crypto-grey transition-colors">Features</Link>
              <Link to="/about" className="font-rubik text-base text-crypto-blue">About</Link>
              <Link to="/contact" className="font-rubik text-base text-white hover:text-crypto-grey transition-colors">Contact</Link>
            </nav>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center gap-6">
              <Link to="/login" className="font-rubik font-medium text-base text-white hover:text-crypto-grey transition-colors">Login</Link>
              <div className="w-px h-6 bg-white opacity-30"></div>
              <Link 
                to="/register" 
                className="px-8 py-[14px] bg-crypto-blue hover:bg-blue-600 transition-colors rounded-4xl font-rubik font-medium text-base text-white"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-16">
        <div className="text-center">
          <h1 className="font-rubik font-bold text-4xl lg:text-6xl text-white mb-8">About</h1>
          <p className="font-rubik text-lg text-crypto-grey mb-8 max-w-2xl mx-auto">
            This page is a placeholder. Continue prompting to add content for the About page.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-4 bg-crypto-blue hover:bg-blue-600 transition-colors rounded-4xl px-8 py-4"
          >
            <span className="font-rubik font-medium text-lg text-white">Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
