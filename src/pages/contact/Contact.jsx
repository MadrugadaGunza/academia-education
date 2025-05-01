import './Contact.css'
import Back from './../../components/back/Back';

const Contact = () => {
    //"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3941.7636840547857!2d13.192871824585886!3d-8.901548891154762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smorro%20bento!5e0!3m2!1spt-BR!2sao!4v1745953764260!5m2!1spt-BR!2sao"
    const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.7508958992307!2d13.187620584184918!3d-8.902735627574945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f4dec585e4a7%3A0x9b30267c56340bfc!2sCandando%20(Morro%20Bento)!5e0!3m2!1spt-BR!2sao!4v1746048905032!5m2!1spt-BR!2sao'
    // width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade

    return (
        <>
            <Back title='Entre em Contato' />
            <section className='contact padding'>
                <div className="container shadow flexSB">
                    <div className="left row">
                        <iframe src={map} ></iframe>
                    </div>
                    <div className="right row">
                        <h1>Entre em Contacto</h1>
                        {/* <span>Vamos trabalhar juntos?</span> */}
                        <div className="items grid2">
                            <div className="box">
                                <h4>Endereço:</h4>
                                <p>Luanda, Angola</p>
                            </div>
                            <div className="box">
                                <h4>Email:</h4>
                                <p>madrugadaoca@gmal.com</p>
                            </div>
                            <div className="box">
                                <h4>Telefone:</h4>
                                <p>+244 972-618-734</p>
                            </div>
                        </div>

                        <form>
                            <div className="flexSB">
                                <input type="text" placeholder='Nome' />
                                <input type="email" placeholder='Email' />
                            </div>
                            <input type="text" placeholder='Assunto' />
                            <textarea cols={30} rows={10} placeholder='Digiste a sua mensagem...'></textarea>
                            <button className="primary-btn">ENVIAR MENSAGEM</button>
                        </form>

                        <h3>Siga-nos aqui</h3>
                        <span>FACEBOOK TWITTER INSTAGRAM</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
