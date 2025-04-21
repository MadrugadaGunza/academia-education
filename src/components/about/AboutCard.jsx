import imgAbout from '../../assets/images/about.webp';
import { homeAbout } from '../../dummydata';
import Title from './../title/Title';
import AWrapper from './AWrapper';

const AboutCard = () => {
    return (
        <>
            <section className="aboutHome">
                <div className="container flexSB">
                    <div className="left row">
                        <img src={imgAbout} alt="about image" />
                    </div>
                    <div className="right row">
                        <Title subtitle='LEARN ANYTHING' title='Benefits About Online Learing Expertise' />
                        <div className="items">
                            {homeAbout.map((val) => (
                                <div className="item flexSB" key={val.id}>
                                    <div className="img">
                                        <img src={val.cover} alt={val.title} />
                                    </div>
                                    <div className="text">
                                        <h2>{val.title}</h2>
                                        <p>{val.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <AWrapper />
        </>
    )
}

export default AboutCard
