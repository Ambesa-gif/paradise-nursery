import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import Navbar from "./Navbar";

const plants = [
  { id: 1, name: "Snake Plant", price: 100, category: "Indoor", image: "..." },
  { id: 2, name: "Aloe Vera", price: 80, category: "Medicinal", image: "..." },
  { id: 3, name: "Peace Lily", price: 120, category: "Indoor", image: "..." },
  { id: 4, name: "Lavender", price: 110, category: "Outdoor", image: "..." },
  { id: 5, name: "Spider Plant", price: 90, category: "Indoor", image: "..." },
  { id: 6, name: "Bamboo Palm", price: 150, category: "Outdoor", image: "..." }
];

function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const categories = [...new Set(plants.map((p) => p.category))];

  return (
    <>
      <Navbar />
      <h2>Our Plants 🌿</h2>
      {categories.map((cat) => (
        <div key={cat}>
          <h3>{cat}</h3>
          {plants
            .filter((p) => p.category === cat)
            .map((plant) => (
              <div key={plant.id}>
                <img src={plant.image} width="120" />
                <h4>{plant.name}</h4>
                <p>R{plant.price}</p>
                <button
                  onClick={() => dispatch(addItem(plant))}
                  disabled={cart[plant.id]}
                >
                  {cart[plant.id] ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
        </div>
      ))}
    </>
  );
}

export default ProductList;
