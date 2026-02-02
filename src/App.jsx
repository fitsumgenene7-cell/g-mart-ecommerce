// import './App.css';
import { useState } from 'react'
import Header from './components/layouts/Header.jsx'
import HeroSection from './components/store/Hero.jsx'
import CategoriesSection from './components/store/Categories.jsx'
import Products from './components/store/Products.jsx'
import CartSideBar from './components/store/CartSideBar.jsx'

import './index.css'

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    
    <>
      <Header searchQuery={searchQuery} onSearch={setSearchQuery} />
      <HeroSection />
      <CategoriesSection searchQuery={searchQuery} />
      <Products searchQuery={searchQuery} />
      <CartSideBar />
    </>

    
  )
}

export default App;