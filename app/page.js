'use client'

import { useState } from 'react'
import ProductList from './components/ProductList'
import ProductView from './components/ProductView'
import Checkout from './components/Checkout'
import Success from './components/Success'

export default function Home() {
  const [page, setPage] = useState('home')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cart, setCart] = useState([])

  return (
    <div className="container">
      <div className="header">
        <h1>Next.js ServerTrack Demo</h1>
        <p>E-commerce tracking with ServerTrack.io</p>
      </div>

      {page === 'home' && (
        <ProductList 
          onProductClick={(product) => {
            setSelectedProduct(product)
            setPage('product')
          }}
          onAddToCart={(product) => setCart([...cart, product])}
        />
      )}

      {page === 'product' && (
        <ProductView 
          product={selectedProduct}
          onAddToCart={(product) => setCart([...cart, product])}
          onBack={() => setPage('home')}
        />
      )}

      {page === 'checkout' && (
        <Checkout 
          cart={cart}
          onPurchase={() => setPage('success')}
          onBack={() => setPage('home')}
        />
      )}

      {page === 'success' && (
        <Success onContinue={() => {
          setCart([])
          setPage('home')
        }} />
      )}

      {cart.length > 0 && page !== 'checkout' && page !== 'success' && (
        <div style={{ position: 'fixed', bottom: 20, right: 20 }}>
          <button className="btn btn-success" onClick={() => setPage('checkout')}>
            Checkout ({cart.length} items)
          </button>
        </div>
      )}
    </div>
  )
}
