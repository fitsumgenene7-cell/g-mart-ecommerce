import { useMemo, useState } from "react";
import { ChevronDown, ChevronUp, ShoppingCart, SlidersHorizontal, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCart } from "@/context/CartContext";

const products = [
    {
        id: "p1",
        name: "Luna Gold Earrings",
        category: "Jewelry",
        price: 89,
        originalPrice: 120,
        rating: 4.8,
        reviewCount: 124,
        featured: true,
        badge: { type: "discount", text: "-26%" },
        image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "p2",
        name: "Classic Leather Wallet",
        category: "Accessories",
        price: 149,
        rating: 4.9,
        reviewCount: 89,
        featured: true,
        badge: { type: "new", text: "NEW" },
        image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "p3",
        name: "Silk Ocean Scarf",
        category: "Accessories",
        price: 79,
        rating: 4.7,
        reviewCount: 56,
        featured: false,
        image: "https://images.unsplash.com/photo-1520975958225-6d4b1b0b7a1b?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "p4",
        name: "Heritage Timepiece",
        category: "Watches",
        price: 459,
        originalPrice: 599,
        rating: 4.9,
        reviewCount: 203,
        featured: true,
        badge: { type: "discount", text: "-23%" },
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "p5",
        name: "Everyday Sunglasses",
        category: "Eyewear",
        price: 119,
        rating: 4.6,
        reviewCount: 41,
        featured: false,
        badge: { type: "new", text: "NEW" },
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "p6",
        name: "Minimal Chain Necklace",
        category: "Jewelry",
        price: 129,
        rating: 4.7,
        reviewCount: 72,
        featured: false,
        image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "p7",
        name: "Leather Belt",
        category: "Accessories",
        price: 69,
        rating: 4.5,
        reviewCount: 38,
        featured: false,
        image: "https://images.unsplash.com/photo-1618239495444-55a45e26c7c9?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "p8",
        name: "Rose Gold Bracelet",
        category: "Jewelry",
        price: 199,
        rating: 4.8,
        reviewCount: 64,
        featured: true,
        image: "https://images.unsplash.com/photo-1617038220319-276ab780f47f?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "p9",
        name: "Sport Chronograph",
        category: "Watches",
        price: 329,
        rating: 4.6,
        reviewCount: 95,
        featured: false,
        image: "https://images.unsplash.com/photo-1539874754764-5a96559165b4?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "p10",
        name: "Aviator Shades",
        category: "Eyewear",
        price: 149,
        rating: 4.8,
        reviewCount: 112,
        featured: true,
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "p11",
        name: "Canvas Weekend Bag",
        category: "Accessories",
        price: 189,
        rating: 4.7,
        reviewCount: 58,
        featured: false,
        image: "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "p12",
        name: "Pearl Drop Earrings",
        category: "Jewelry",
        price: 99,
        rating: 4.6,
        reviewCount: 77,
        featured: false,
        badge: { type: "new", text: "NEW" },
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "p13",
        name: "Stainless Steel Watch",
        category: "Watches",
        price: 279,
        rating: 4.7,
        reviewCount: 141,
        featured: false,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "p14",
        name: "Blue Light Glasses",
        category: "Eyewear",
        price: 89,
        rating: 4.5,
        reviewCount: 63,
        featured: false,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "p15",
        name: "Minimalist Ring Set",
        category: "Jewelry",
        price: 59,
        rating: 4.4,
        reviewCount: 46,
        featured: false,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "p16",
        name: "Premium Leather Strap",
        category: "Watches",
        price: 49,
        rating: 4.3,
        reviewCount: 22,
        featured: false,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
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
    const { addToCart } = useCart();

    const categories = useMemo(
        () => ["All Products", ...Array.from(new Set(products.map((p) => p.category)))],
        []
    );

    const [activeCategory, setActiveCategory] = useState("All Products");
    const [sortMode, setSortMode] = useState("featured");

    const query = searchQuery.trim().toLowerCase();

    const filteredSortedProducts = useMemo(() => {
        const base = products
            .filter((product) => {
                if (activeCategory !== "All Products" && product.category !== activeCategory) {
                    return false;
                }
                if (!query) return true;
                const haystack = `${product.name} ${product.category}`.toLowerCase();
                return haystack.includes(query);
            })
            .slice();

        const byPriceAsc = (a, b) => a.price - b.price;
        const byPriceDesc = (a, b) => b.price - a.price;
        const byRatingDesc = (a, b) => (b.rating ?? 0) - (a.rating ?? 0);
        const byFeatured = (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured));

        if (sortMode === "high") base.sort(byPriceDesc);
        else if (sortMode === "low") base.sort(byPriceAsc);
        else if (sortMode === "rating") base.sort(byRatingDesc);
        else base.sort((a, b) => byFeatured(a, b) || byRatingDesc(a, b));

        return base;
    }, [activeCategory, query, sortMode]);

    const viewKey = `${activeCategory}__${sortMode}__${query}`;

    const sortLabel =
        sortMode === "featured"
            ? "Featured"
            : sortMode === "high"
                ? "High price"
                : sortMode === "low"
                    ? "Low price"
                    : "Best rated";

    return (
        <section id="products" className="scroll-mt-32 py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10 lg:mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 font-montserrat">
                        Featured Products
                    </h2>
                    <p className="font-montserrat text-gray-400">
                        Handpicked products that combine quality with
                        <br />
                        exceptional value.
                    </p>
                    {(searchQuery.trim() || activeCategory !== "All Products") && (
                        <p className="mt-4 text-sm text-gray-500 font-montserrat">
                            Showing {filteredSortedProducts.length} result{filteredSortedProducts.length === 1 ? "" : "s"}
                            {searchQuery.trim() ? ` for “${searchQuery}”` : ""}
                            {activeCategory !== "All Products" ? ` in ${activeCategory}` : ""}
                        </p>
                    )}
                </div>

                <div className="mx-auto w-full max-w-6xl flex flex-col gap-4 lg:gap-5">
                    {/* Top controls */}
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            {categories.map((cat) => {
                                const active = cat === activeCategory;
                                return (
                                    <button
                                        key={cat}
                                        type="button"
                                        onClick={() => {
                                            setActiveCategory(cat);
                                        }}
                                        className={
                                            "shrink-0 rounded-lg px-3 py-2 text-sm font-semibold font-montserrat transition " +
                                            (active
                                                ? "bg-blue-600 text-white shadow-sm"
                                                : "bg-gray-100 text-gray-600 hover:bg-gray-200")
                                        }
                                    >
                                        {cat}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="flex items-center gap-2 justify-between md:justify-end">
                            <Button
                                type="button"
                                variant="outline"
                                className="rounded-xl font-montserrat"
                                onClick={() => {
                                    // Reserved for future multi-filter panel.
                                }}
                            >
                                <SlidersHorizontal />
                                Filters
                            </Button>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button type="button" variant="outline" className="rounded-xl font-montserrat">
                                        {sortLabel}
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="min-w-[220px]">
                                    <DropdownMenuLabel>Sort</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuRadioGroup
                                        value={sortMode}
                                        onValueChange={(value) => {
                                            setSortMode(value);
                                        }}
                                    >
                                        <DropdownMenuRadioItem value="featured">Featured (default)</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="high">High price</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="low">Low price</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="rating">Best rated</DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>

                    {/* Grid */}
                    <ProductsGrid
                        key={viewKey}
                        products={filteredSortedProducts}
                        searchQuery={searchQuery}
                        onAddToCart={(product) => addToCart(product)}
                    />
                </div>
            </div>
        </section>
    );
};

const ProductsGrid = ({ products, searchQuery, onAddToCart }) => {
    const [showAll, setShowAll] = useState(false);
    const visibleProducts = showAll ? products : products.slice(0, 8);

    if (products.length === 0) {
        return (
            <div className="text-center text-gray-500 font-montserrat py-10">
                No products found{searchQuery.trim() ? ` for “${searchQuery}”.` : "."}
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
                {visibleProducts.map((product) => (
                    <article
                        key={product.id}
                        className="group rounded-xl border border-gray-200 overflow-hidden bg-white hover:shadow-md transition"
                    >
                        <div className="relative aspect-square overflow-hidden bg-gray-50">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                                decoding="async"
                                referrerPolicy="no-referrer"
                                onError={(e) => {
                                    e.currentTarget.src = fallbackImage;
                                }}
                            />

                            {product.badge && (
                                <span
                                    className={
                                        "absolute left-3 top-3 rounded-md px-2 py-1 text-xs font-semibold " +
                                        (product.badge.type === "discount"
                                            ? "bg-red-500 text-white"
                                            : "bg-black text-white")
                                    }
                                >
                                    {product.badge.text}
                                </span>
                            )}

                            {/* Add to cart overlay (mobile always visible, desktop on hover) */}
                            <div
                                className={
                                    "absolute inset-x-3 bottom-3 transition " +
                                    "opacity-100 translate-y-0 " +
                                    "md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 " +
                                    "md:pointer-events-none md:group-hover:pointer-events-auto"
                                }
                            >
                                <Button
                                    type="button"
                                    className="w-full rounded-xl font-montserrat bg-blue-600 hover:bg-blue-700"
                                    onClick={() =>
                                        onAddToCart({
                                            id: product.id,
                                            name: product.name,
                                            price: product.price,
                                            image: product.image,
                                            category: product.category,
                                        })
                                    }
                                >
                                    <ShoppingCart />
                                    Add to cart
                                </Button>
                            </div>
                        </div>

                        <div className="p-3 lg:p-3.5">
                            <p className="text-[10px] tracking-wide text-gray-500 font-montserrat uppercase">
                                {product.category}
                            </p>
                            <h3 className="mt-1 text-sm font-semibold text-gray-900 font-montserrat leading-snug line-clamp-2">
                                {product.name}
                            </h3>

                            <div className="mt-2 flex items-center gap-2 text-xs">
                                <div className="flex items-center gap-1 text-amber-500">
                                    <Star className="fill-amber-500" />
                                    <span className="text-gray-900 font-semibold">
                                        {Number(product.rating ?? 0).toFixed(1)}
                                    </span>
                                </div>
                                <span className="text-gray-400">({product.reviewCount ?? 0})</span>
                            </div>

                            <div className="mt-2.5 flex items-end gap-2">
                                <span className="text-gray-900 font-semibold">
                                    {formatPrice(product.price)}
                                </span>
                                {typeof product.originalPrice === "number" && product.originalPrice > product.price && (
                                    <span className="text-xs text-gray-400 line-through">
                                        {formatPrice(product.originalPrice)}
                                    </span>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {!showAll && products.length > 8 && (
                <div className="flex justify-center mt-6">
                    <Button
                        type="button"
                        variant="outline"
                        className="rounded-xl font-montserrat"
                        onClick={() => setShowAll(true)}
                    >
                        View all products ({products.length})
                        <ChevronDown />
                    </Button>
                </div>
            )}

            {showAll && products.length > 8 && (
                <div className="flex justify-center mt-6">
                    <Button
                        type="button"
                        variant="outline"
                        className="rounded-xl font-montserrat"
                        onClick={() => setShowAll(false)}
                    >
                        View featured
                        <ChevronUp />
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Products;