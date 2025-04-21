// import React from 'react'
import Title from '../title/Title'
import './Hero.css'

const Hero = () => {
    return (
        <>
            <section className='hero'>
                <div className="container">
                    <div className="row">
                        <Title subtitle='WELCOME TO ACADEMIA' title='Best Online Education' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam libero doloribus tempore illo architecto quibusdam, dignissimos quod ipsa adipisci distinctio suscipit beatae, ipsam voluptates neque quam recusandae omnis? Placeat, assumenda.</p>
                        <div className="button">
                            <button className="primary-btn">
                                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
                            </button>
                            <button>
                                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="margin"></div>
        </>
    )
}

export default Hero
