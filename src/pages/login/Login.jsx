import React from 'react'
import InternalHeader from '../../components/internalHeader/InternalHeader'
import LoginForm from '../../components/loginForm/LoginForm'

const Login = () => {
  return (
    <div className='login-page'>
        <InternalHeader name={"Login"}/>
        <LoginForm/>
    </div>
  )
}

export default Login