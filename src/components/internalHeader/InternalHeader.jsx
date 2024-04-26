import React from 'react'
import { Link } from 'react-router-dom'

const InternalHeader = (props) => {
  return (
    <div className='InHeader-section'>
        <div className="header-container">
            <nav className="InHeader__nav">
                <h4>{props.name}</h4>
                <div>
                    <Link to={"/"}>Home</Link>
                    <p>-</p>
                    <Link to={"/register"}>{props.name}</Link>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default InternalHeader