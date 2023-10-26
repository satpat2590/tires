import Product from './Product';

const ProductsPage = () => {
  // Sample data for products
  const products = [
    { id: 1, image: 'firsttire.webp', name: 'Tire 1', price: 100, description: 'Robust for all terrains.' },
    { id: 2, image: 'tiresecond.webp', name: 'Tire 2', price: 150, description: 'Smooth drive guaranteed.' },
    // ... more products
  ];

  return (
    <div>
      <h2 className="text-4xl font-semibold mb-10 mx-7 my-7 text-gray-800 border-b pb-2">Available Tires</h2>
      {/* Product Showcase */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </section>
    </div>
  );
};

export default ProductsPage;
