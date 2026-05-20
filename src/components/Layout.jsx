import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col md:flex-row min-h-screen'>
      <Sidebar />

      <div className='flex-1 p-5'>
        {children}
      </div>
    </div>
  )
}

export default Layout