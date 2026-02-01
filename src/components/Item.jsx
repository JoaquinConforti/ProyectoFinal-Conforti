import { Link } from "react-router-dom";

function Item({ id, title, price, image }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={image} className="card-img-top" />
        <div className="card-body">
          <h5>{title}</h5>
          <p>${price}</p>
          <Link to={`/item/${id}`} className="btn btn-primary">
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
