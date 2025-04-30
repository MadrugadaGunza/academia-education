// import React from 'react'
import Title from '../title/Title'
import './Hero.css'

const Hero = () => {
    return (
        <>
            <section className='hero'>
                <div className="container">
                    <div className="row">
                        <Title subtitle='BEM-VINDO À ACADEMIA' title='Melhor Educação Online' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam libero doloribus tempore illo architecto quibusdam, dignissimos quod ipsa adipisci distinctio suscipit beatae, ipsam voluptates neque quam recusandae omnis? Placeat, assumenda.</p>
                        <div className="button">
                            <button className="primary-btn">
                                COMECE AGORA <i className="fa fa-long-arrow-alt-right"></i>
                            </button>
                            <button>
                                VER CURSOS <i className="fa fa-long-arrow-alt-right"></i>
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
