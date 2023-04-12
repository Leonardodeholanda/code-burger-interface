import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Container } from './styles'

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)

  const { cartProducts } = useCart()

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice(sumAllItems)
  }, [cartProducts, deliveryTax])

  const submitOrder = async () => {
    const order = cartProducts.map(product => {
      return { id: product.id, quantity: product.quantity }
    })

    await toast.promise(api.post('orders', { products: order }), {
      pending: 'Processing your order',
      success: 'Order processed successfully',
      error: 'New order fail, try again'
    })
  }

  return (
    <div>
      <Container>
        <div className="containerTop">
          <h2 className="title">Order Review</h2>
          <p className="items">Items</p>
          <p className="itemsPrice">{formatCurrency(finalPrice)}</p>
          <p className="deliveryTax">Delivery Fee</p>
          <p className="deliveryPrice">{formatCurrency(deliveryTax)}</p>
        </div>
        <div className="containerBottom">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button style={{ width: '100%', marginTop: 30 }} onClick={submitOrder}>
        Finish Order
      </Button>
    </div>
  )
}
