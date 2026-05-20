import Layout from '../components/Layout'
import Header from '../components/Header'
import StatCard from '../components/StatCard'
import OrdersTable from '../components/OrdersTable'

import {
  FaShoppingCart,
  FaRupeeSign,
  FaUsers,
  FaTruck,
} from 'react-icons/fa'

const Dashboard = () => {
  return (
    <Layout>
      <Header />

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8'>
        <StatCard
          title='Total Orders'
          value='1,250'
          icon={<FaShoppingCart />}
        />

        <StatCard
          title='Revenue'
          value='₹45,000'
          icon={<FaRupeeSign />}
        />

        <StatCard
          title='Active Users'
          value='890'
          icon={<FaUsers />}
        />

        <StatCard
          title='Pending Deliveries'
          value='56'
          icon={<FaTruck />}
        />
      </div>

      <div className='mt-10'>
        <OrdersTable />
      </div>
    </Layout>
  )
}

export default Dashboard