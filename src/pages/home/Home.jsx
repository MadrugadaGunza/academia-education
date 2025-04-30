import AboutCard from "../../components/about/AboutCard"
import HAbout from "../../components/about/HAbout"
import HBlog from "../../components/blog/HBlog"
import Hero from "../../components/hero/Hero"
import HPrice from "../../components/price/HPrice"
import Test from "../../components/testiomonal/Test"

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutCard />
            <HAbout />
            <Test />
            <HBlog />
            <HPrice />
        </div>
    )
}

export default Home
