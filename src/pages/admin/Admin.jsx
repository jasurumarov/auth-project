import React from 'react'
import InternalHeader from '../../components/internalHeader/InternalHeader'
import AdminHero from '../../components/adminHero/AdminHero'
import Services from '../../components/services/Services'

const Admin = () => {
  return (
    <div className='admin-page'>
      <InternalHeader name={"Admin"}/>
      <AdminHero/>
      <Services/>
    </div>
  )
}

export default Admin