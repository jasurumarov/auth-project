import React from 'react'
import InternalHeader from '../../components/internalHeader/InternalHeader'
import AdminHero from '../../components/adminHero/AdminHero'

const Admin = () => {
  return (
    <div className='admin-page'>
      <InternalHeader name={"Admin"}/>
      <AdminHero/>
    </div>
  )
}

export default Admin