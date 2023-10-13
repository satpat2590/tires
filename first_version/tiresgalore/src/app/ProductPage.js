import Product from './Product';

const ProductsPage = () => {
  // Sample data for products
  const products = [
    { id: 1, image: 'firsttire.webp', name: 'Tire 1', price: 100, priceCut: 120 },
    { id: 2, image: 'tiresecond.webp', name: 'Tire 2', price: 150 },
    // ... more products
  ];

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-8">Available Tires</h2>

      {/* Product Showcase */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            priceCut={product.priceCut}
          />
        ))}
      </section>
    </div>
  );
};

export default ProductsPage;