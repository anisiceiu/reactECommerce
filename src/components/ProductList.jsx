// src/components/ProductList.jsx
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    title: "Fancy Product",
    image: "/images/shoes/shoe 1.jpg",
    price: 40.00,
    action: "Add to cart",
  },
  {
    id: 2,
    title: "Special Item",
    image: "/images/shoes/shoe 2.jpg",
    price: 18.00,
    oldPrice: 20.00,
    sale: true,
    rating: 5,
    action: "Add to cart",
  },
  {
    id: 3,
    title: "Fancy Product",
    image: "/images/shoes/shoe 3.jpg",
    price: 80.00,
    action: "Add to cart",
  },
  {
    id: 4,
    title: "Special Item",
    image: "/images/shoes/shoe 4.jpg",
    price: 18.00,
    oldPrice: "$20.00",
    sale: true,
    rating: 5,
    action: "Add to cart",
  },
  {
    id: 5,
    title: "Fancy Product",
    image: "/images/shoes/shoe 5.jpg",
    price: 40.00,
    action: "Add to cart",
  },
  {
    id: 6,
    title: "Special Item",
    image: "/images/shoes/shoe 6.jpg",
    price: 18.00,
    oldPrice: 20.00,
    sale: true,
    rating: 5,
    action: "Add to cart",
  },
  {
    id: 7,
    title: "Fancy Product",
    image: "/images/shoes/shoe 7.jpg",
    price: 80.00,
    action: "Add to cart",
  },
  {
    id: 8,
    title: "Special Item",
    image: "/images/shoes/shoe 8.jpg",
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
