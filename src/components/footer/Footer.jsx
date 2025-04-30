import './Footer.css'

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
        </>
    )
}

export default Footer
