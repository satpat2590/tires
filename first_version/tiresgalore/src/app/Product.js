const Product = ({ id, image, name, price, priceCut }) => {
    return (
      <div className="bg-white text-black p-6 rounded-lg shadow-lg">
        {/* Product Image */}
        <img src={image} alt={name} className="w-full object-cover mb-4 rounded" />
  
        {/* Product Name */}
        <h3 className="text-xl font-semibold">{name}</h3>
  
        {/* Pricing */}
        <div className="flex items-center justify-between mt-2">
          {priceCut && (
            <span className="text-sm text-gray-500 line-through">${priceCut}</span>
          )}
          <span className="text-lg font-bold">${price}</span>
        </div>
      </div>
    );
};
  
export default Product;