import { useState } from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

export default function CartDrawer() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Fancy Product", price: 40.0, quantity: 2 },
    { id: 2, name: "Special Item", price: 18.0, quantity: 1 },
  ]);

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div
    >
      
      <div className="offcanvas-body">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="list-group mb-3">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-start"
                >
                  <div className="flex-grow-1">
                    <strong>{item.name}</strong>
                    <div className="small text-muted">
                      Price: ${item.price.toFixed(2)}
                    </div>
                    <div className="input-group input-group-sm mt-2">
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => decreaseQty(item.id)}
                      >
                        <FaMinus size={12} />
                      </button>
                      <span className="form-control text-center">
                        {item.quantity}
                      </span>
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => increaseQty(item.id)}
                      >
                        <FaPlus size={12} />
                      </button>
                    </div>
                    <div className="small mt-1">
                      Subtotal: ${(
                        item.price * item.quantity
                      ).toFixed(2)}
                    </div>
                  </div>
                  <button
                    className="btn btn-sm btn-danger ms-2"
                    onClick={() => removeItem(item.id)}
                  >
                    <FaTrash />
                  </button>
                </li>
              ))}
            </ul>
            <div className="border-top pt-3">
              <h6>Total: ${calculateTotal().toFixed(2)}</h6>
              <button className="btn btn-primary w-100 mt-2">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
