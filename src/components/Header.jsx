const Header = () => {
  return (
    <div className='bg-white shadow-md rounded-xl p-5 flex justify-between items-center'>
      <div>
        <h2 className='text-2xl font-bold'>Dashboard</h2>
        <p className='text-gray-500'>Welcome back Admin 👋</p>
      </div>

      <div className='flex items-center gap-3'>
        <img
          src='https://i.pravatar.cc/100'
          alt='profile'
          className='w-12 h-12 rounded-full'
        />

        <div>
          <h4 className='font-semibold'>Vandana</h4>
          <p className='text-sm text-gray-500'>UI/UX Developer</p>
        </div>
      </div>
    </div>
  )
}

export default Header