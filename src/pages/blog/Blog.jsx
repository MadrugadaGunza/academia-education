import './Blog.css'
import Back from "../../components/back/Back"
import BlogCard from "../../components/blog/BlogCard"

const Blog = () => {
    return (
        <>
            <Back title='Posts do Blog' />
            <section className="blog padding">
                <div className="container grid2">
                    <BlogCard />
                </div>
            </section>
        </>
    )
}

export default Blog
