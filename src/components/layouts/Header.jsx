
const PromoBanner = () => (
  <div className="bg-black text-white text-center text-sm py-2">
    <p className="max-w-7xl mx-auto px-6">An ecommerce website where customers can shop for products and manage their orders.</p>
  </div>
);

const NavBar = () => (
  <nav className="bg-white shadow-sm rounded-sm">
    <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
      <div className="flex items-center gap-6">
        <a href="/" className="text-4xl font-bold text-slate-900">G-mart</a>
      </div>

      <ul className="hidden md:flex items-center gap-12 text-sm text-slate-600">
        <li>
          <a href="/" className="hover:text-blue-500 p-6 transition">Shop</a>
        </li>
        <li>
          <a href="/about" className="hover:text-blue-500 p-6 transition">About</a>
        </li>
        <li>
          <a href="/categories" className="hover:text-blue-500 p-6transition">Categories</a>
        </li>
        <li>
          <a href="/contact" className="hover:text-blue-500 p-6 transition">Contact</a>
        </li>
      </ul>

      <div className="flex items-center gap-6">
        <button aria-label="Search" className="p-2 rounded-md text-slate-600 hover:bg-slate-100 transition">🔍</button>
        <button aria-label="Account" className="p-2 rounded-md text-slate-600 hover:bg-slate-100 transition">👤</button>
        <a href="/cart" className="relative inline-flex items-center p-2 rounded-md text-slate-600 hover:bg-slate-100 transition">
          🛒
          <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">2</span>
        </a>
      </div>
    </div>
  </nav>
);

const Header = () => (
  <header className="w-full">
    <PromoBanner />
    <NavBar />
  </header>
);

export default Header;