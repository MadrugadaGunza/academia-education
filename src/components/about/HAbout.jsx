import { coursesCard } from "../../dummydata"
import OnlineCourses from "../allcourses/OnlineCourses"
import Title from "../title/Title"

const HAbout = () => {
    return (
        <>
            <section className="homeAbout">
                <div className="container">
                    <Title subtitle='our courses' title='explore our popular online courses' />
                    <div className="courseCard">
                        <div className="grid2">
                            {coursesCard.splice(0, 3).map((val) => (
                                <div className="items" key={val.id}>
                                    <div className="content flex">
                                        <div className="left">
                                            <div className="img">
                                                <img src={val.cover} alt={val.coursesName} />
                                            </div>
                                        </div>
                                        <div className="text">
                                            <h1>{val.coursesName}</h1>
                                            <div className="rate">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <label htmlFor="">(5.0)</label>
                                            </div>
                                            <div className="details">
                                                {val.courTeacher.map((details) => (
                                                    <>
                                                        <div className="box" key={details.name}>
                                                            <div className="dimg">
                                                                <img src={details.dcover} alt={details.name} />
                                                            </div>
                                                            <div className="para">
                                                                <h4>{details.name}</h4>
                                                            </div>
                                                        </div>
                                                        <span>{details.totalTime}</span>
                                                    </>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <h3>{val.priceAll} / {val.pricePer}</h3>
                                    </div>
                                    <button className="outline-btn">ENROLL NOW !</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <OnlineCourses />
        </>
    )
}

export default HAbout
