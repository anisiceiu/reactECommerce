// src/components/ProductCard.jsx
import { useCart } from "../context/CartContext";

export default function ProductCard({ id,title, image, price, sale, oldPrice, rating, action }) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: id,
      name: title,
      price: Number(price),
      quantity: 1,
    });
  };

  return (
    <div className="col mb-5">
      <div className="card h-100">
        {sale && (
          <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>
            Sale
          </div>
        )}
        <img className="card-img-top" src={image} alt={title} />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{title}</h5>
            {rating && (
              <div className="d-flex justify-content-center small text-warning mb-2">
                {Array.from({ length: rating }).map((_, i) => (
                  <div className="bi-star-fill" key={i}></div>
                ))}
              </div>
            )}
            {oldPrice && <span className="text-muted text-decoration-line-through">{oldPrice}</span>}
            {" "}
            {price}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a onClick={handleAddToCart} className="btn btn-outline-dark mt-auto" href="#">{action}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
