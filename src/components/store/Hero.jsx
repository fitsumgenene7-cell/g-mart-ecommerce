import heroImage from "../../assets/hero.jpeg";
// import "components/common/Button.jsx"
const HeroSection = () => {
  return (
    <section className="w-full m-0 p-0">
      <div
        className="w-full relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '800px', // adjust based on your design
          margin: 0,
          padding: 0
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Main content container */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl text-left text-white">
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-montserrat leading-tight mb-6">
              Discover Our<br />
              <span className="font-bold font-montserrat">Latest Collection</span>
            </h1>
            
            {/* Description text */}
            <p className="text-lg mb-8 opacity-90 leading-relaxed max-w-md font-montserrat">
              Shop premium quality products at
              <br />
              unbeatable prices.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="/shop"
                className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center"
              >
                SHOP NOW
              </a>
              <a
                href="/categories"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center"
              >
                EXPLORE CATEGORIES
              </a>
            </div>
            
          
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;