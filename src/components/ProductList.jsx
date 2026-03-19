import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import Navbar from "./Navbar";

const plants = [
  { id: 1, name: "Snake Plant", price: 100, category: "Indoor", image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85" },
  { id: 2, name: "Aloe Vera", price: 80, category: "Medicinal", image: "https://images.unsplash.com/photo-1587502536263-3fcb7a44f5a6" },
  { id: 3, name: "Peace Lily", price: 120, category: "Indoor", image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5" },
  { id: 4, name: "Lavender", price: 110, category: "Outdoor", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
  { id: 5, name: "Spider Plant", price: 90, category: "Indoor", image: "https://images.unsplash.com/photo-1616628182506-28d0b9230e5b" },
  { id: 6, name: "Bamboo Palm", price: 150, category: "Outdoor", image: "https://images.unsplash.com/photo-1616627457334-cc8a1c3e0b7c" }
];

function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  return (
    <>
      <Navbar />
      <h2>Our Plants 🌿</h2>

      {plants.map((plant) => (
        <div key={plant.id}>
          <img src={plant.image} width="120" />
          <h3>{plant.name}</h3>
          <p>R{plant.price}</p>

          <button
            onClick={() => dispatch(addToCart(plant))}
            disabled={cart[plant.id]}
          >
            {cart[plant.id] ? "Added" : "Add to Cart"}
          </button>
        </div>
      ))}
    </>
  );
}

export default ProductList;