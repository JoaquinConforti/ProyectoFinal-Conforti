import { useCart } from "../context/CartContext"

const CartItem = ({ id, name, price, quantity }) => {
  const { removeItem } = useCart()

  return (
    <div>
      <h4>{name}</h4>
      <p>{quantity} x ${price}</p>
      <button onClick={() => removeItem(id)}>Eliminar</button>
    </div>
  )
}

export default CartItem
