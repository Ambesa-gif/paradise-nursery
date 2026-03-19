import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, remove } from "../redux/CartSlice";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function CartItem() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const items = Object.values(cart);

  const totalCost = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <h2>Shopping Cart</h2>

      {items.length === 0 && <p>Your cart is empty</p>}

      {items.map((item) => (
        <div key={item.id}>
          <img src={item.image} width="100" />
          <h3>{item.name}</h3>
          <p>Unit Price: R{item.price}</p>
          <p>Total: R{item.price * item.quantity}</p>

          <button onClick={() => dispatch(increase(item.id))}>+</button>
          <button onClick={() => dispatch(decrease(item.id))}>-</button>
          <button onClick={() => dispatch(remove(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <h3>Total Cost: R{totalCost}</h3>

      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>

      <button onClick={() => alert("Coming Soon!")}>
        Checkout
      </button>
    </>
  );
}

export default CartItem;
