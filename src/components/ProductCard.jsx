const ProductCard = ({ product }) => {
  return (
    <div className='bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition'>
      <img
        src={product.image}
        alt={product.name}
        className='w-full h-52 object-cover'
      />

      <div className='p-5'>
        <h2 className='text-xl font-bold'>{product.name}</h2>

        <p className='text-gray-500 mt-2'>₹{product.price}</p>

        <span
          className={`inline-block mt-4 px-3 py-1 rounded-full text-sm ${
            product.status === 'Available'
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {product.status}
        </span>
      </div>
    </div>
  )
}

export default ProductCard