import { Link } from 'react-router-dom'
import {
  FaHome,
  FaBoxOpen,
  FaChartBar,
  FaSignOutAlt,
} from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className='bg-green-600 text-white w-full md:w-64 min-h-screen p-5'>
      <h1 className='text-2xl font-bold mb-10'>Urban Harvest</h1>

      <div className='flex flex-col gap-5'>
        <Link
          to='/dashboard'
          className='flex items-center gap-3 hover:bg-green-700 p-3 rounded-lg'
        >
          <FaHome /> Dashboard
        </Link>

        <Link
          to='/products'
          className='flex items-center gap-3 hover:bg-green-700 p-3 rounded-lg'
        >
          <FaBoxOpen /> Products
        </Link>

        <button className='flex items-center gap-3 hover:bg-green-700 p-3 rounded-lg text-left'>
          <FaChartBar /> Analytics
        </button>

        <button className='flex items-center gap-3 hover:bg-green-700 p-3 rounded-lg text-left'>
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  )
}

export default Sidebar