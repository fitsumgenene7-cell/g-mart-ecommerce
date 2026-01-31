import { ArrowRight } from "lucide-react";

const categories = [
    {
        id: "mens",
        name: "Men's",
        description: "Shop the collection",
        image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&h=800&fit=crop",
    },
    {
        id: "womens",
        name: "Women's",
        description: "Shop the collection",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=800&fit=crop",
    },
    {
        id: "accessories",
        name: "Accessories",
        description: "Shop the collection",
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=800&fit=crop",
    },
    {
        id: "sale",
        name: "Sale",
        description: "Up to 50% off",
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=800&fit=crop",
    },
];

const CategoriesSection = () => {
    return (
    <section id="categories" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 font-montserrat">
            Shop by Category
            </h2>
            <p className="text-gray-400 max-w-md mx-auto font-montserrat">
            Browse our curated collections and find exactly what you're looking for
            </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {categories.map((category, index) => (
            <a
                key={category.id}
                href={`#${category.id}`}
                className="group relative aspect-[3/4] rounded-lg overflow-hidden shadow-md"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
                <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

              {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-6">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">
                    {category.name}
                </h3>
                <div className="flex items-center gap-2 text-gray-200 text-sm font-medium group-hover:text-white transition-colors">
                    <span>{category.description}</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
                </div>
            </a>
            ))}
            </div>
        </div>
    </section>
    );
};

export default CategoriesSection;