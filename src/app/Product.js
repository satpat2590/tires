const Product = ({ id, image, name, price, description }) => {
  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <img src={image} alt={name} className="w-full object-cover mb-4 rounded" />

      {/* Product Name */}
      <h3 className="text-xl font-semibold mb-2">{name}</h3>

      {/* Product Description */}
      <p className="text-gray-600 mb-4">{description}</p>

      {/* Pricing */}
      <div className="flex items-center justify-between mt-2">
        <span className="text-lg font-bold">${price}</span>
        <button className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">Details</button>
      </div>
    </div>
  );
};

export default Product;
