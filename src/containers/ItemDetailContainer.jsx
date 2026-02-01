import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ItemCount from "../components/ItemCount";

function ItemDetailContainer() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p>${product.price}</p>
          <ItemCount stock={product.stock} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
