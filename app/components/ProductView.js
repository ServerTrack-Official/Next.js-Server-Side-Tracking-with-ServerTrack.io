'use client'

export default function ProductView({ product, onAddToCart, onBack }) {
  return (
    <div>
      <button className="btn btn-primary" onClick={onBack} style={{ marginBottom: '20px', width: 'auto', padding: '12px 24px' }}>
        ← Back
      </button>
      <div style={{ background: 'white', padding: '40px', borderRadius: '8px' }}>
        <div className="product-image" style={{ height: '300px' }}>{product.name}</div>
        <h2 style={{ fontSize: '32px', margin: '20px 0' }}>{product.name}</h2>
        <div style={{ fontSize: '36px', color: '#2563eb', fontWeight: '700', marginBottom: '20px' }}>
          ${product.price}
        </div>
        <button className="btn btn-primary" onClick={() => onAddToCart(product)} style={{ maxWidth: '300px' }}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}
