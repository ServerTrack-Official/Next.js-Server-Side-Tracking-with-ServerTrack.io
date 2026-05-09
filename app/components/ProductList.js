'use client'

import { trackEvent } from '../utils/servertrack'

const products = [
  { id: 'P001', name: 'Wireless Headphones', price: 99.99, originalPrice: 129.99, category: 'Electronics' },
  { id: 'P002', name: 'Smart Watch', price: 249.99, originalPrice: 299.99, category: 'Electronics' },
  { id: 'P003', name: 'Laptop Stand', price: 49.99, originalPrice: 59.99, category: 'Accessories' },
  { id: 'P004', name: 'USB-C Hub', price: 79.99, originalPrice: 99.99, category: 'Accessories' }
]

export default function ProductList({ onProductClick, onAddToCart }) {
  const handleProductClick = (product) => {
    trackEvent('ViewContent', {
      content_ids: [product.id],
      content_type: 'product',
      content_name: product.name,
      value: product.price,
      currency: 'USD'
    })
    onProductClick(product)
  }

  const handleAddToCart = (product) => {
    trackEvent('AddToCart', {
      content_ids: [product.id],
      content_type: 'product',
      value: product.price,
      currency: 'USD'
    })
    onAddToCart(product)
  }

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <div className="product-image" onClick={() => handleProductClick(product)}>
            {product.name}
          </div>
          <h3>{product.name}</h3>
          <div style={{ fontSize: '24px', color: '#2563eb', fontWeight: '700', margin: '15px 0' }}>
            ${product.price}
          </div>
          <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}
