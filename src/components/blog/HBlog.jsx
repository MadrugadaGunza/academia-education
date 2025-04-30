import { blog } from '../../dummydata';
import Title from './../title/Title';

const HBlog = () => {
    return (
        <>
            <section className="blog">
                <div className="container">
                    <Title subtitle='nosso blog' title='recente do blog' />
                    <div className="grid2">
                        {blog.splice(0, 3).map((val) => (
                            <div key={val.id} className="items shadow">
                                <div className="img">
                                    <img src={val.cover} alt={val.title} />
                                </div>
                                <div className="text">
                                    <div className="admin flexSB">
                                        <span>
                                            <i className="fa fa-user"></i>
                                            <label htmlFor="">{val.type}</label>
                                        </span>
                                        <span>
                                            <i className="fa fa-calendar-alt"></i>
                                            <label htmlFor="">{val.date}</label>
                                        </span>
                                        <span>
                                            <i className="fa fa-comments"></i>
                                            <label htmlFor="">{val.com}</label>
                                        </span>
                                    </div>
                                    <h1>{val.title}</h1>
                                    <p>{val.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HBlog
