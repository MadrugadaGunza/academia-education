import { online } from '../../dummydata';
import Title from './../title/Title';

const OnlineCourses = () => {
    return (
        <>
            <section className="online">
                <div className="container">
                    <Title subtitle='CURSOS' title='Navegue pelos Nossos Cursos Online' />
                    <div className="content grid3">
                        {online.map((val) => (
                            <div className="box" key={val.courseName}>
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                    <img src={val.hoverCover} alt="" className='show' />
                                </div>
                                <h1>{val.courseName}</h1>
                                <span>{val.course}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default OnlineCourses
