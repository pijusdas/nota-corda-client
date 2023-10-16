import PopularInstractor from "../../PopularInstructor/PopularInstractor";
import JoinUs from "../JoinUs/JoinUs";
import OurStudents from "../PopularClass/OurStudent/OurStudent";
import TotalStudents from "../PopularClass/OurStudent/TotalStudents";
import PopularClass from "../PopularClass/PopularClass";
import PrivateLesson from "../Private lesson/PrivateLesson";
import Banner from "./Banner/Banner";
import OurMedia from "./OurMedia/OurMedia";
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
            <OurMedia/>
            <OurStudent/>
            <JoinUs/>
        </div>
    );
};

export default Home;