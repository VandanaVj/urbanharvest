import { useSelector } from 'react-redux'
import { useState } from 'react'

import Layout from '../components/Layout'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'

const Products = () => {
  const products = useSelector((state) => state.products.products)

  const [search, setSearch] = useState('')

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Layout>
      <Header />

      <div className='flex flex-col md:flex-row justify-between items-center mt-8 gap-5'>
        <input
          type='text'
          placeholder='Search products...'
          className='border p-4 rounded-xl w-full md:w-96 bg-white'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className='bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl'>
          Add Product
        </button>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  )
}

export default Products