import mensJacketImage from "../../assets/download.jpeg";

const products = [
    {
        id: "p1",
        name: "Classic White Sneakers",
        category: "Footwear",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "p2",
        name: "Minimal Leather Backpack",
        category: "Accessories",
        price: 129.0,
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "p3",
        name: "Denim Jacket",
        category: "Men's",
        price: 89.5,
        image: mensJacketImage,
    },
    {
        id: "p4",
        name: "Everyday Tote Bag",
        category: "Women's",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
    },
];

const fallbackImage = `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
        <rect width="800" height="800" fill="#f3f4f6"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9ca3af" font-family="Arial, sans-serif" font-size="28">
        Image unavailable
      </text>
    </svg>`
)}`;

const formatPrice = (value) => {
    try {
        return new Intl.NumberFormat(undefined, {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 2,
        }).format(value);
    } catch {
        return `$${value}`;
    }
};

const Products = ({ searchQuery = "" }) => {
    const query = searchQuery.trim().toLowerCase();
    const filteredProducts = query
        ? products.filter((product) => {
            const haystack = `${product.name} ${product.category}`.toLowerCase();
            return haystack.includes(query);
        })
        : products;

    return (
        <section id="products" className="scroll-mt-32 py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-6 font-montserrat">Featured Products</h1>
                    <p className="font-montserrat text-gray-400">
                        Handpicked products that combine quality with
                        <br />
                        exceptional value.
                    </p>
                    {searchQuery.trim() && (
                        <p className="mt-4 text-sm text-gray-500 font-montserrat">
                            Showing results for “{searchQuery}” ({filteredProducts.length})
                        </p>
                    )}
                </div>

                {filteredProducts.length === 0 ? (
                    <div className="text-center text-gray-500 font-montserrat">
                        No products found for “{searchQuery}”.
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition bg-white"
                            >
                                <div className="aspect-square overflow-hidden bg-gray-50">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                        decoding="async"
                                        referrerPolicy="no-referrer"
                                        onError={(e) => {
                                            e.currentTarget.src = fallbackImage;
                                        }}
                                    />
                                </div>
                                <div className="p-4">
                                    <p className="text-xs text-gray-500 font-montserrat mb-1">{product.category}</p>
                                    <h3 className="font-semibold text-gray-900 font-montserrat leading-snug">
                                        {product.name}
                                    </h3>
                                    <p className="mt-2 text-gray-900 font-semibold">{formatPrice(product.price)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Products;