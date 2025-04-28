import './Price.css';
import Back from "../../components/back/Back";
import PriceCard from "../../components/price/PriceCard";
import Faq from '../../components/price/Faq';

const Price = () => {
    return (
        <>
            <Back title='Choose the right Plan' />
            <section className="price padding">
                <div className="container grid">
                    <PriceCard />
                </div>
            </section>
            <Faq />
        </>
    )
}

export default Price
