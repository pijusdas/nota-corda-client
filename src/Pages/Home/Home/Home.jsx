import PopularInstractor from "../../PopularInstructor/PopularInstractor";
import OurStudents from "../PopularClass/OurStudent/OurStudent";
import TotalStudents from "../PopularClass/OurStudent/TotalStudents";
import PopularClass from "../PopularClass/PopularClass";
import PrivateLesson from "../Private lesson/PrivateLesson";
import Banner from "./Banner/Banner";
import OurStudent from "./OurStudent/OurStudent";

 
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PrivateLesson/>
            <PopularClass></PopularClass>
            <OurStudents />
            <TotalStudents/>
            <PopularInstractor></PopularInstractor>
            <OurStudent/>
        </div>
    );
};

export default Home;