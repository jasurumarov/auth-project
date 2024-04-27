import React from 'react'
import { useNavigate } from 'react-router-dom'
// IMAGES
import BenefitsIcon1 from '../../images/benefitsicon1.svg'
import BenefitsIcon3 from '../../images/benefitsicon3.svg'
import BenefitsIcon4 from '../../images/benefitsicon4.svg'
import BenefitsIcon5 from '../../images/benefitsicon5.svg'

const Services = () => {

    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem("x-auth-token");
        navigate("/")
    } 
  return (
    <div className='services-section'>
        <div className="header-container">
            <div className="services-section__content">
                <div className="services__card">
                    <img src={BenefitsIcon1} alt="service icon" />
                    <h3>Product Packing</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
                <div className="services__card">
                    <img src={BenefitsIcon4} alt="service icon" />
                    <h3>24X7 Support</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
                <div className="services__card">
                    <img src={BenefitsIcon5} alt="service icon" />
                    <h3>Delivery in 5 Days</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
                <div className="services__card">
                    <img src={BenefitsIcon3} alt="service icon" />
                    <h3>Payment Secure</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
            </div>
            <button onClick={handleLogOut} className='logout-btn'>Log out</button>
        </div>
    </div>
  )
}

export default Services