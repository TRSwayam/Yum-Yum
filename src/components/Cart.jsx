import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../Utils/CartSlices";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleOrderType = (orderType) => {
    if (window.confirm(`Are you sure you want to place an order for ${orderType}?`)) {
      navigate("/payment"); // Redirect to payment page
    }
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cartItems.length === 0 ? (
        <h1 className="text-lg text-gray-600">No Items!!!</h1>
      ) : (
        <div className="bg-white shadow-md rounded p-4">
          <div className="w-full md:w-8/12 lg:w-6/12 mx-auto">
            <ItemList items={cartItems} />
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="p-2 mx-2 bg-green-600 text-white rounded hover:bg-green-700"
              onClick={() => handleOrderType("Take Away")}
            >
              Take Away
            </button>
            <button
              className="p-2 mx-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => handleOrderType("Dine In")}
            >
              Dine In
            </button>
          </div>
          <div className="mt-4">
            <button
              className="p-2 bg-red-600 text-white rounded hover:bg-red-700"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
