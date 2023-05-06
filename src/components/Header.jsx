import React from 'react'

const Header = ({setIsShowForm}) => {

  const handleClickShowModal = () => {
    setIsShowForm((isShowForm) => !isShowForm)
  }

  return (
    <header className='p-10'>
        <h1 className='absolute top-3 text-blue-950 text-5xl font-bold'>Usuarios</h1>
        <button onClick={handleClickShowModal} className='bg-purple-p text-white p-2 hover:bg-purple-p/90 transition-colors text-sm absolute top-4 right-4'><i className='bx bx-plus'></i> Crer nuevo usuario</button>
    </header>
  )
}

export default Header