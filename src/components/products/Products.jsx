import React, {useState, useEffect} from 'react'
import axios from '../../api'
// IMAGES
import Rate from "../../images/rate.svg"
import Cart from "../../images/cart-card.svg"

const Products = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        setLoading(true)
        axios
            .get("/products")
            .then(res => setData(res.data.products))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    const arr = Array(10).fill("")

    let loadingItem = arr.map((el, i) => (
        <div key={i} className="products-section__product">
            <div className="products-section__product__img"></div>
            <p className='products-section__product__type'></p>
            <p className='products-section__product__title'></p>
            <div className='products-section__product__rating'></div>
            <p className="products-section__product__company"></p>
            <div className="products-section__product__price">
                <div></div>
                <button></button>
            </div>
            <p className="products-section__product__brand"></p>
        </div>
    ))

    let cards = data?.slice(0, 10)?.map(el => (
        <div data-aos="flip-left" data-aos-anchor-placement="center-bottom" key={el.id} className="products-section__product">
            <div className="products-section__product__img">
                <img src={el.thumbnail} alt="" />
            </div>
            <p className='products-section__product__type'>{el.category}</p>
            <p className='products-section__product__title'>{el.title}</p>
            <div className='products-section__product__rating'>
                <img src={Rate} alt="rate icon" />
                <h5>({el.rating})</h5>
            </div>
            <p className="products-section__product__company">By <span>{el.brand}</span></p>
            <div className="products-section__product__price">
                <div>
                    <p>${el.price}</p>
                    <span><del>$32.8</del></span>
                </div>
                <button>
                    <img src={Cart} alt="cart icon" />
                    Add
                </button>
            </div>
            <p className="products-section__product__brand">{el.brand}</p>
        </div>
    ))
  return (
    <div className='products-section'>  
        <div className="container">
            <div className="products-section__title">
                <h2>Popular Products</h2>
                <ul>
                    <li>All</li>
                    <li>S and A series</li>
                    <li>Note 20s</li>
                    <li>Battery</li>
                    <li>TV and PS</li>
                    <li>S24 ULTRA</li>
                    <li>A55</li>
                </ul>
            </div>
            <div className="products-section__products">
                {cards}
            </div>
            {loading ? <div className="loading">
                {loadingItem}
            </div> : <></>}
        </div>
    </div>
  )
}

export default Products