// src/components/ProductList.jsx
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    title: "Fancy Product",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: 40.00,
    action: "Add to cart",
  },
  {
    id: 2,
    title: "Special Item",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: 18.00,
    oldPrice: 20.00,
    sale: true,
    rating: 5,
    action: "Add to cart",
  },
  {
    id: 3,
    title: "Fancy Product",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: 80.00,
    action: "Add to cart",
  },
  {
    id: 4,
    title: "Special Item",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: 18.00,
    oldPrice: "$20.00",
    sale: true,
    rating: 5,
    action: "Add to cart",
  },
  {
    id: 5,
    title: "Fancy Product",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: 40.00,
    action: "Add to cart",
  },
  {
    id: 6,
    title: "Special Item",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: 18.00,
    oldPrice: 20.00,
    sale: true,
    rating: 5,
    action: "Add to cart",
  },
  {
    id: 7,
    title: "Fancy Product",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: 80.00,
    action: "Add to cart",
  },
  {
    id: 8,
    title: "Special Item",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: 18.00,
    oldPrice: "$20.00",
    sale: true,
    rating: 5,
    action: "Add to cart",
  },
];
export default function ProductList() {
  return (
    <section>
      <div className="container px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
