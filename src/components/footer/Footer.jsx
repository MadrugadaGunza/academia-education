import './Footer.css'
import { blog } from '../../dummydata';

const Footer = () => {
    return (
        <>
            <section className="newlatter">
                <div className="container flexSB">
                    <div className="left row">
                        <h1>Newlatter - Ficar sintonizar e obter últimas actualizações</h1>
                        <span>muito longe, atrás da palavra montanhas</span>
                    </div>
                    <div className="right row">
                        <input type="email" placeholder="Digite seu email" />
                        <i className="fa fa-paper-plane"></i>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container padding">
                    <div className="box logo">
                        <h1>ACADEMIA</h1>
                        <span>EDUCAÇÃO & APRENDIZAGEM ONLINE</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae debitis enim quo quas soluta cumque fuga.</p>
                        <i className="fab fa-facebook-f icon"></i>
                        <i className="fab fa-instagram icon"></i>
                        <i className="fab fa-twitter icon"></i>
                    </div>
                    <div className="box link">
                        <h3>Explore</h3>
                        <ul>
                            <li>About US</li>
                            <li>About US</li>
                            <li>About US</li>
                            <li>About US</li>
                            <li>About US</li>
                        </ul>
                    </div>
                    <div className="box link">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>About US</li>
                            <li>About US</li>
                            <li>About US</li>
                            <li>About US</li>
                            <li>About US</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h3>Recent Posts</h3>
                        {blog.splice(0, 3).map((val) => (
                            <div className="items flexSB" key={val.id}>
                                <div className="img">
                                    <img src={val.cover} alt={val.title} />
                                </div>
                                <div className="text">
                                    <span>
                                        <i className="fa fa-user"></i>
                                        <label htmlFor="">{val.type}</label>
                                    </span>
                                    <span>
                                        <i className="fa fa-calendar-alt"></i>
                                        <label htmlFor="">{val.date}</label>
                                    </span>
                                    <h4>{val.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="box last">
                        <h3>Have a questions?</h3>
                        <ul>
                            <li>
                                <i className="fa fa-map"></i>
                                203 Fake ST. Mount view, fan francisco USA
                            </li>
                            <li>
                                <i className="fa fa-phone-alt"></i>
                                +244 972 618 734
                            </li>
                            <li>
                                <i className="fa fa-paper-plane"></i>
                                madrugadaoca@gmail.com
                            </li>
                        </ul>
                    </div>

                </div>
            </footer>

            <div className="legal">
                Copyright &copy; 2025 Todos os direitos reservados | Este projecto foi feito com <i className='fa fa-heart'></i> e React by Madrugada de Carvalho.
            </div>
        </>
    )
}

export default Footer
