import React from 'react'
import { Link } from 'react-router-dom'
import SiteLogo from '../../images/site-logo.svg'
import SearchIcon from '../../images/search.svg'
import UserIcon from '../../images/user.svg'
import HeartIcon from '../../images/heart.svg'
import CartIcon from '../../images/cart.svg'

const HeaderBottom = () => {
    let token = localStorage.getItem("x-auth-token")
    console.log(token);
  return (
    <div className='header-bottom'>
        <div className="header-container">
            <nav className="navbar">
                <Link className='navbar__logo' to="/">
                    <img src={SiteLogo} alt="site logo" />
                </Link>
                <form>
                    <div className='form'>
                        <input name='search' id='search' type="search" placeholder='Search For items...' />
                        <div>
                            <select name="" id="">
                                <option selected disabled value="">All Categories</option>
                                <option value="">S24 5G</option>
                                <option value="">S24 Ultra</option>
                                <option value="">S23FE</option>
                                <option value="">S23 Ultra</option>
                                <option value="">S22 Lite</option>
                                <option value="">S22 Ultra</option>
                                <option value="">S22+</option>
                                <option value="">S22 5G</option>
                            </select>
                        </div>
                    </div>
                    <label htmlFor='search'>
                        <img src={SearchIcon} alt="search icon" />
                    </label>
                </form>
                <ul>
                    <li>
                        <Link to={`${token ? "/admin" : "/register"}`}>
                            <img src={UserIcon} alt="user icon" />
                            {token ? "Admin" : "Account"}
                        </Link>
                    </li>
                    <li>
                        <a href="#">
                            <img src={HeartIcon} alt="heart icon" />
                            Wishlist
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={CartIcon} alt="cart icon" />
                            Cart
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default HeaderBottom