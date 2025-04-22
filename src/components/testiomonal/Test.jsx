import './Test.css'
import { testimonal } from "../../dummydata"
import Title from "../title/Title"

const Test = () => {
    return (
        <>
            <section className="testiomonal padding">
                <div className="container">
                    <Title subtitle='testiomonal' title='our successeful students' />
                    <div className="content grid2">
                        {testimonal.map((val) => (
                            <div className="items shadow" key={val.id}>
                                <div className="box flex">
                                    <div className="img">
                                        <img src={val.cover} alt={val.name} />
                                        <i className="fa fa-quote-left icon"></i>
                                    </div>
                                    <div className="name">
                                        <h2>{val.name}</h2>
                                        <p>{val.post}</p>
                                    </div>
                                </div>
                                <p>{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Test
