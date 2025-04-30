import Title from "../title/Title"
import PriceCard from './PriceCard';

const HPrice = () => {
    return (
        <>
            <section className="hprice padding">
                <Title subtitle='nossos preços' title='preços & pacotes' />
                <div className="container price grid">
                    <PriceCard />
                </div>
            </section>
        </>
    )
}

export default HPrice
