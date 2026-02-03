import heroImage from "../../assets/hero.jpeg";
// import "components/common/Button.jsx"
const HeroSection = () => {
  const handleShopNow = (e) => {
    e.preventDefault();
    const section = document.getElementById("products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleExploreCategories = (e) => {
    e.preventDefault();
    const section = document.getElementById("categories");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="w-full m-0 p-0">
      <div
        className="w-full relative flex items-center bg-cover bg-center min-h-[clamp(520px,80vh,820px)]"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: "center",
        }}
      >
        {/* Gradient overlay: darker on the left, brighter to the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

        {/* Main content container */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="max-w-xl text-left text-white">
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-montserrat leading-tight mb-6">
              Discover Our<br />
              <span className="font-bold font-montserrat">Latest Collection</span>
            </h1>
            
            {/* Description text */}
            <p className="text-base sm:text-lg mb-8 opacity-90 leading-relaxed max-w-md font-montserrat">
              Shop premium quality products at
              <br />
              unbeatable prices.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#products"
                onClick={handleShopNow}
                className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 hover:scale-105 w-[min(92vw,420px)] mx-auto sm:w-auto sm:mx-0 text-center"
              >
                SHOP NOW
              </a>
              <a
                href="#categories"
                onClick={handleExploreCategories}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 w-[min(92vw,420px)] mx-auto sm:w-auto sm:mx-0 text-center"
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