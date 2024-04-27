import React from 'react'
import HeroImg from '../../images/admin-heroImg.png'

const AdminHero = () => {
    return (
        <div className='adminHero-section'>
            <div className="header-container">
                <div className="adminHero-section__content">
                    <div className="adminHero__title">
                        <h2>Admin panel</h2>
                        <p className='adminHero__title-desc1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
                            necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
                            rerum quod. Tempora magni autem a voluptatibus neque.
                        </p>
                        <p className='adminHero__title-desc2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae rerum cum
                            accusamus magni consequuntur architecto, ipsum deleniti expedita doloribus
                            suscipit voluptatum eius perferendis amet!.
                        </p>
                        <p className='adminHero__title-desc3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, maxime amet
                            architecto est exercitationem optio ea maiores corporis beatae, dolores doloribus
                            libero nesciunt qui illum? Voluptates deserunt adipisci voluptatem magni sunt sed
                            blanditiis quod aspernatur! Iusto?
                        </p>
                        <div className="adminHero__title-results">
                            <div className="adminHero__title-result">
                                <h3>0.1 <span>k</span></h3>
                                <h4>Vendors</h4>
                            </div>
                            <div className="adminHero__title-result">
                                <h3>23 <span>k</span></h3>
                                <h4>Customers</h4>
                            </div>
                            <div className="adminHero__title-result">
                                <h3>2 <span>k</span></h3>
                                <h4>Products</h4>
                            </div>
                        </div>
                    </div>
                    <img src={HeroImg} alt="hero img" />
                </div>
            </div>
        </div>
    )
}

export default AdminHero