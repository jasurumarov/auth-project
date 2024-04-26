import React from 'react'
import { Link } from 'react-router-dom'
// IMAGES
import SiteLogo from '../../images/footer-site-logo.svg'
import GeoIcon from '../../images/geo.svg'
import MailIcon from '../../images/mail.svg'
import CallIcon from '../../images/call-red.svg'
import SocialIcon1 from '../../images/social1.svg'
import SocialIcon2 from '../../images/social2.svg'
import SocialIcon3 from '../../images/social3.svg'
import SocialIcon4 from '../../images/social4.svg'
import TypeIcon from '../../images/type.svg'
import ProductImg1 from '../../images/product-img1.png'
import ProductImg2 from '../../images/product-img2.png'
import ProductImg3 from '../../images/product-img3.png'
import ProductImg4 from '../../images/product-img4.png'
import ProductImg5 from '../../images/product-img5.png'

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
            <div className="footer-navbar">
                <div className="footer-navbar__title">
                    <img className='footer-navbar__title--img' src={SiteLogo} alt="site logo" />
                    <p>FoodTrove is the biggest market of grocery products. Get your daily needs from our store.</p>
                    <ul>
                        <li>
                            <img src={GeoIcon} alt="location icon" />
                            51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.
                        </li>
                        <li>
                            <img src={MailIcon} alt="mail icon" />
                            example@email.com
                        </li>
                        <li>
                            <img src={CallIcon} alt="call icon" />
                            +91 123 4567890
                        </li>
                    </ul>
                </div>
                <div className="footer-navbar__listGroup">
                    <ul className='footer-navbar__list'>
                        <h3>Company</h3>
                        <li>
                            <Link to={"/"}>About Us</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Delivery Information</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link to={"/"}>contact Us</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Support Center</Link>
                        </li>
                    </ul>
                    <ul className='footer-navbar__list'>
                        <h3>Category</h3>
                        <li>
                            <Link to={"/"}>Dairy & Bakery</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Fruits & Vegetable</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Snack & Spice</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Juice & Drinks</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Chicken & Meat</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Fast Food</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-navbar__form">
                    <h3>Subscribe Our Newsletter</h3>
                    <label>
                        <input type="search" placeholder='Search here...'/>
                        <img src={TypeIcon} alt="type icon" />
                    </label>
                    <div className='footer-navbar__form--social'>
                        <a href="https://www.facebook.com/" target='_blank'>
                            <img src={SocialIcon1} alt="social media" />
                        </a>
                        <a href="https://www.twitter.com/" target='_blank'>
                            <img src={SocialIcon2} alt="social media" />
                        </a>
                        <a href="https://www.facebook.com/" target='_blank'>
                            <img src={SocialIcon3} alt="social media" />
                        </a>
                        <a href="https://www.instagram.com/" target='_blank'>
                            <img src={SocialIcon4} alt="social media" />
                        </a>
                    </div>
                    <div className="footer-navbar__form--imgs">
                        <img src={ProductImg1} alt="img" />
                        <img src={ProductImg2} alt="img" />
                        <img src={ProductImg3} alt="img" />
                        <img src={ProductImg4} alt="img" />
                        <img src={ProductImg5} alt="img" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 <span>FoodTrove</span>, All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer