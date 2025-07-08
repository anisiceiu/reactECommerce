// src/pages/Shop.jsx
import ProductCard from '../components/ProductCard';

const products = [
  {
    title: "Fancy Product",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$40.00 - $80.00",
    action: "View options",
  },
  {
    title: "Special Item",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$18.00",
    oldPrice: "$20.00",
    sale: true,
    rating: 5,
    action: "Add to cart",
  },
    {
    title: "Fancy Product",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$40.00 - $80.00",
    action: "View options",
  },
  {
    title: "Special Item",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$18.00",
    oldPrice: "$20.00",
    sale: true,
    rating: 5,
    action: "Add to cart",
  },
    {
    title: "Fancy Product",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$40.00 - $80.00",
    action: "View options",
  },
  {
    title: "Special Item",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$18.00",
    oldPrice: "$20.00",
    sale: true,
    rating: 5,
    action: "Add to cart",
  },
    {
    title: "Fancy Product",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$40.00 - $80.00",
    action: "View options",
  },
  {
    title: "Special Item",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$18.00",
    oldPrice: "$20.00",
    sale: true,
    rating: 5,
    action: "Add to cart",
  },
];
export default function Shop() {
  return (
    <div className="container">
      <section>
            <div className="container px-lg-5 mt-5">
              <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {products.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
            </div>
          </section>
    </div>
  );
}
