import { useState } from "react"

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1)

  return (
    <div>
      <button disabled={count <= 1} onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button disabled={count >= stock} onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default ItemCount
