import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ItemList from "../components/ItemList";

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          categoryId
            ? products.filter(p => p.category === categoryId)
            : products
        );
      }, 800);
    });

    promise.then(res => setItems(res));
  }, [categoryId]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">{greeting}</h2>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
