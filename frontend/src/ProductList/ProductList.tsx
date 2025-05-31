import { FC, useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.scss";
import ListItem from "../ListItem/ListItem";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const ProductList: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get<Product[]>("http://localhost:5000/api/products")
      .then((response) => {
        console.log("Products fetched:", response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <ListItem {...product} />
        ))}
      </ul>
    </div>
  );
}
export default ProductList;