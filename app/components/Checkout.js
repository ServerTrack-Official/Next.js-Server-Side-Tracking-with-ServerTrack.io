'use client'

import { useState, useEffect } from 'react'
import { trackEvent } from '../utils/servertrack'

export default function Checkout({ cart, onPurchase, onBack }) {
  const [formData, setFormData] = useState({
    email: '', phone: '', firstName: '', lastName: ''
  })

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  // Fire InitiateCheckout when the checkout page loads
  useEffect(() => {
    trackEvent('InitiateCheckout', {
      value: total,
      currency: 'USD',
      content_type: 'product',
      num_items: cart.length,
      content_ids: cart.map(item => item.id),
      contents: cart.map(item => ({
        id: item.id,
        quantity: 1,
        item_price: item.price
      }))
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const userData = {
      em: formData.email,
      ph: formData.phone,
      fn: formData.firstName,
      ln: formData.lastName
    }

    trackEvent('Purchase', {
      transaction_id: 'ORD-' + Date.now(),
      value: total,
      currency: 'USD',
      content_type: 'product',
      num_items: cart.length,
      content_ids: cart.map(item => item.id),
      contents: cart.map(item => ({
        id: item.id,
        quantity: 1,
        item_price: item.price
      })),
      items: cart.map(item => ({
        item_id: item.id,
        item_name: item.name,
        price: item.price,
        quantity: 1,
        item_category: item.category || ''
      }))
    }, userData)

    onPurchase()
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={onBack} style={{ marginBottom: '20px', width: 'auto', padding: '12px 24px' }}>
        ← Back
      </button>
      <div style={{ background: 'white', padding: '40px', borderRadius: '8px' }}>
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required style={{ width: '100%', padding: '12px', margin: '10px 0', border: '1px solid #ddd', borderRadius: '6px' }}
            onChange={(e) => setFormData({...formData, email: e.target.value})} />
          <input type="text" placeholder="First Name" required style={{ width: '100%', padding: '12px', margin: '10px 0', border: '1px solid #ddd', borderRadius: '6px' }}
            onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
          <input type="text" placeholder="Last Name" style={{ width: '100%', padding: '12px', margin: '10px 0', border: '1px solid #ddd', borderRadius: '6px' }}
            onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
          <input type="tel" placeholder="Phone" style={{ width: '100%', padding: '12px', margin: '10px 0', border: '1px solid #ddd', borderRadius: '6px' }}
            onChange={(e) => setFormData({...formData, phone: e.target.value})} />
          <div style={{ margin: '20px 0', fontSize: '24px', fontWeight: '700' }}>Total: ${total.toFixed(2)}</div>
          <button type="submit" className="btn btn-success">Complete Purchase</button>
        </form>
      </div>
    </div>
  )
}
