import './Course.css';
import Back from "../../components/back/Back";
import CourseCard from "../../components/allcourses/CourseCard";
import OnlineCourses from './../../components/allcourses/OnlineCourses';

const Course = () => {
    return (
        <>
            <Back title='Explore Courses' />
            <CourseCard />
            <OnlineCourses />
        </>
    )
}

export default Course
