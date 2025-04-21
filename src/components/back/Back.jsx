import { useLocation } from "react-router-dom"

const Back = ({ title }) => {
    const { pathname } = useLocation();

    return (
        <>
            <section className="back">
                <h2>Home / {pathname.split('/')[1]}</h2>
                <h1>{title}</h1>
            </section>
            <div className="margin"></div>
        </>
    )
}

export default Back
