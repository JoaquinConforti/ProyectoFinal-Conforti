import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
  if (!product) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <ItemCount stock={product.stock} />
    </div>
  );
}

export default ItemDetail;
