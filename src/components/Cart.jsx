import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Cart = () => {
  const { cart } = useContext(CartContext)

  if (cart.length === 0) return <h2>Carrito vacío</h2>

  return (
    <div>
      {cart.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  )
}

export default Cart
