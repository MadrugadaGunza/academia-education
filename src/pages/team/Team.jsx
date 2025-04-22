import './Team.css'
import Back from "../../components/back/Back"
import TeamCard from "../../components/team/TeamCard"

const Team = () => {
    return (
        <>
            <Back title='Team' />
            <section className="team padding">
                <div className="container grid">
                    <TeamCard />
                </div>
            </section>
        </>
    )
}

export default Team
