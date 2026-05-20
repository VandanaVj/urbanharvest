import orders from '../data/orders'

const OrdersTable = () => {
  return (
    <div className='bg-white rounded-2xl shadow-md p-5 overflow-x-auto'>
      <h2 className='text-xl font-bold mb-5'>Recent Orders</h2>

      <table className='w-full'>
        <thead>
          <tr className='text-left border-b'>
            <th className='py-3'>Order ID</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className='border-b hover:bg-gray-50'>
              <td className='py-4'>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.amount}</td>
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    order.status === 'Delivered'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrdersTable