'use client'

export default function Success({ onContinue }) {
  return (
    <div style={{ textAlign: 'center', padding: '60px 20px', background: 'white', borderRadius: '8px' }}>
      <div style={{ fontSize: '80px', color: '#10b981' }}>✓</div>
      <h1 style={{ fontSize: '36px', marginBottom: '15px' }}>Purchase Complete!</h1>
      <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>
        Thank you for your order.
      </p>
      <button className="btn btn-primary" onClick={onContinue} style={{ maxWidth: '300px', margin: '0 auto' }}>
        Continue Shopping
      </button>
    </div>
  )
}
