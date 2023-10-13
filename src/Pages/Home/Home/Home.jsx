import PopularInstractor from "../../PopularInstructor/PopularInstractor";
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
            <PopularInstractor></PopularInstractor>
            <OurStudent/>
        </div>
    );
};

export default Home;